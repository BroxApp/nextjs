
import { redirect } from "next/navigation";
import Projects from "@/components/projects";
import { getCurrentUser } from "@/lib/session";

export default async function ProjectsPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return <Projects />;
}

