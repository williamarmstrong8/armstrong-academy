import { Mail } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      
      {/* Quick Info Cards */}
      <div className="grid gap-6">
        <div className="flex gap-4 items-start">
          <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center shrink-0">
            <Mail className="h-5 w-5 text-zinc-600" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900">Email us</h3>
            <p className="text-zinc-500 text-sm mt-1">williamarmstrong8@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-zinc-200" />

      {/* FAQ Section */}
      <div>
        <h3 className="font-bold text-zinc-900 text-lg mb-6">Frequently asked questions</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-zinc-900 text-sm">Can I use these components for client projects?</h4>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
              Yes! All premium purchases include a commercial license for unlimited client projects.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-sm">Do you offer refunds?</h4>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
              Since the products are digital assets, we generally do not offer refunds unless the file is corrupt or unusable.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 text-sm">How do I get access to the code?</h4>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
              After purchase, you'll instantly receive an email with a link to your dashboard where you can copy the code.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}