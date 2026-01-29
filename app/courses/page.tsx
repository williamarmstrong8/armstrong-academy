import Link from "next/link";
import { getAllCourses } from "@/lib/courses";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"; // Assuming you have shadcn card
import { Button } from "@/components/ui/button"; 

export const metadata = {
  title: "Courses | Armstrong Academy",
  description: "Prompt-driven learning modules.",
};

export default function CoursesPage() {
  const courses = getAllCourses();

  return (
    <div className="container mx-auto py-12 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Courses</h1>
        <p className="text-muted-foreground">
          Master web fundamentals by building real projects.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Card key={course.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent className="mt-auto pt-6">
              <Button asChild className="w-full">
                <Link href={`/courses/${course.slug}`}>Start Building</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
        
        {courses.length === 0 && (
            <p className="col-span-full text-center text-muted-foreground py-10">
                No courses found. Add content to /content/courses.
            </p>
        )}
      </div>
    </div>
  );
}