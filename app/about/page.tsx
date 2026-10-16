
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
        Its me Ali Reza. I am a web developer
      </h1>

      <p className="mb-10 text-center text-gray-400">
        I am a web developer with a passion for creating beautiful and
        functional websites. I am a quick learner and I am always looking to
        improve my skills.
      </p>

      <p className="mb-10 text-center text-gray-400">
        I am a quick learner and I am always looking to improve my skills.
      </p>

      <p className="mb-10 text-center text-gray-400">
        I am a quick learner and I am always looking to improve my skills.
      </p>
    </div>
  );
}
