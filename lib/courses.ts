import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const coursesDirectory = join(process.cwd(), "content", "courses");
const promptsDirectory = join(process.cwd(), "content", "courses", "prompts");

function expandPromptRefs(content: string): string {
  const srcRegex = /<div data-component="prompt-box"([^>]*)data-src="([^"]+)"([^>]*)>\s*<\/div>/g;
  return content.replace(srcRegex, (_, before, src, after) => {
    const promptPath = join(promptsDirectory, src);
    if (!fs.existsSync(promptPath)) return `<!-- prompt file not found: ${src} -->`;
    const promptText = fs.readFileSync(promptPath, "utf8").trim();
    const escaped = promptText
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return `<div data-component="prompt-box"${before}${after}><pre><code>${escaped}</code></pre></div>`;
  });
}

export interface Course {
  slug: string;
  title: string;
  description: string;
  difficulty?: string;
  content: string;
}

export function getCourseSlugs(): string[] {
  if (!fs.existsSync(coursesDirectory)) return [];
  return fs
    .readdirSync(coursesDirectory)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getCourseBySlug(slug: string): Course | null {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(coursesDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const expandedContent = expandPromptRefs(content);

  return {
    slug: realSlug,
    title: data.title ?? "",
    description: data.description ?? "",
    difficulty: data.difficulty,
    content: expandedContent,
  } as Course;
}

export function getAllCourses(): Course[] {
  const slugs = getCourseSlugs();
  return slugs
    .map((slug) => getCourseBySlug(slug))
    .filter((c): c is Course => c !== null)
    .sort((a, b) => a.title.localeCompare(b.title));
}
