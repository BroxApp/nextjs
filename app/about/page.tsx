
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";

export default async function About() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div
      id="about"
      className="flex h-screen w-full flex-col items-center justify-center py-10"
    >
      <h1 className="mb-10 text-center text-4xl font-bold text-gray-200">
        Its Boundless Team. A web developer Team.
      </h1>

      <p className="mb-10 text-center text-gray-400">
        we are a web developer team with a passion for creating beautiful and
        functional websites. We are a quick learner and we are always looking to
        improve our skills.
      </p>

      <p className="mb-10 text-center text-gray-400">
        We are a quick learner and we are always looking to improve our skills.
      </p>

      <p className="mb-10 text-center text-gray-400">
        We are a quick learner and we are always looking to improve our skills.
      </p>
    </div>
  );
}
