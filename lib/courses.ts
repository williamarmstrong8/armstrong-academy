import fs from "fs";
import path from "path";
import matter from "gray-matter";

const coursesDirectory = path.join(process.cwd(), "content/courses");

export interface Course {
  slug: string;
  title: string;
  description: string;
  content: string;
}

export function getAllCourses(): Course[] {
  // Get folders within content/courses
  if (!fs.existsSync(coursesDirectory)) return [];
  
  const folders = fs.readdirSync(coursesDirectory);

  const courses = folders.map((folder) => {
    // According to your structure: content/courses/slug/slug.mdx
    const fullPath = path.join(coursesDirectory, folder, `${folder}.mdx`);
    
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: folder,
      title: data.title,
      description: data.description,
      content: "", // We don't need raw content for the list view
    };
  });

  // Filter out any nulls (folders without matching mdx)
  return courses.filter((c): c is Course => c !== null);
}

export function getCourseBySlug(slug: string): Course | null {
  const fullPath = path.join(coursesDirectory, slug, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    description: data.description,
    content,
  };
}