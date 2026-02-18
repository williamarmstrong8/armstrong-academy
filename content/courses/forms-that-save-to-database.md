---
title: "Forms That Save to the Database"
description: "Let users type in a form, click Save, and have their data safely stored and the page updated."
difficulty: "Intermediate"
---

> **What we will build**
>
> So far we've only *read* data (like showing a list of courses). Now we'll let users *write* data: update their profile, add a comment, or create something new.
>
> We'll do it with a form, a set of rules for what they can type, and a function that runs on the server when they click Save. The form will show "Saving..." while it's working and then show their new data without a full page refresh. No separate API or manual fetch code.

# When the User Clicks Save

Last time we pulled data from the database and showed it. That's reading. This time we'll take what the user types and save it. That's writing.

Doing that used to mean building an API, wiring up fetch, and handling loading and errors yourself. In Next.js we use **Server Actions**: you write a function that runs on the server, and you call it straight from a form or button. The browser sends the form data, the server runs your function, and you get the result back.

## The Waiter Analogy (Part 2)

Think of the server as the waiter.

* **Reading (last module):** The waiter brings you the menu.
* **Writing (this module):** You give the waiter your order. They take it to the kitchen, the kitchen checks they have the stuff, and then they confirm your order is in.

## 1. The Rules for the Form

Before we save anything, we need rules. We don't want empty usernames or bios that are way too long. We use **Zod**, a small library that checks the data and gives clear error messages.

```ts
// lib/schemas.ts
import { z } from "zod";

// The "shape" of the data we allow
export const ProfileSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  bio: z.string().max(160, "Bio is too long! Keep it short."),
});
```

## 2. The Function That Runs When They Click Save

This function runs **only on the server**. When the user submits the form, Next.js sends the form data here. We grab the values, run them through our Zod rules, and if everything looks good we save to the database. Then we tell Next.js to refresh the page so they see their new data.

The line `"use server"` at the top tells Next.js: this function is only ever run on the server, never in the browser. That keeps your database and auth logic safe.

```ts
// app/actions/update-profile.ts
"use server";

import { createClient } from "@/lib/supabase/server";
import { ProfileSchema } from "@/lib/schemas";
import { revalidatePath } from "next/cache";

export async function updateProfile(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const rawData = {
    username: formData.get("username"),
    bio: formData.get("bio"),
  };

  const result = ProfileSchema.safeParse(rawData);

  if (!result.success) {
    return { error: "Invalid data!" };
  }

  const { error } = await supabase
    .from("profiles")
    .update(result.data)
    .eq("id", (await supabase.auth.getUser()).data.user?.id);

  if (error) return { error: "Database failed" };

  revalidatePath("/profile");
  return { success: "Profile updated!" };
}
```

## 3. The Form and the Save Button

The form lives in a Client Component (because it has buttons and inputs that the user interacts with). We use a hook called **useActionState** so we don't have to manage "is it saving?" and "did it work?" ourselves. It gives us: the result from the server (success or error), the function to run when they submit, and whether the request is still in progress. We wire the form's `action` to that function and show "Saving..." on the button while `isPending` is true.

```tsx
// components/profile-form.tsx
"use client";

import { useActionState } from "react";
import { updateProfile } from "@/app/actions/update-profile";
import { Button } from "@/components/ui/button";

export function ProfileForm() {
  const [state, action, isPending] = useActionState(updateProfile, null);

  return (
    <form action={action} className="space-y-4">
      <input name="username" placeholder="Username" />
      <textarea name="bio" placeholder="Bio" />

      <Button disabled={isPending}>
        {isPending ? "Saving..." : "Save Profile"}
      </Button>

      {state?.error && <p className="text-red-500">{state.error}</p>}
      {state?.success && <p className="text-green-500">Saved!</p>}
    </form>
  );
}
```

---

## The AI Prompt

If you'd rather have Cursor generate the action and form for you, use the prompt below. Change the description in brackets to match what you're building (e.g. "updating a user profile" or "creating a new post").

<div data-component="prompt-box" data-title="Copy this into Cursor" data-src="forms-that-save.txt"></div>
