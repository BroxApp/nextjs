import Technologies from "@/components/Technologies";
import HeroSection from "../components/HeroSection";
import Faq from "@/components/Faq";
import Projects from "@/components/projects";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser();

  return (
    <div>
      <HeroSection />
      {user && (
        <>
          <Technologies />
          <Projects />
          <Faq />
        </>
      )}
    </div>
  );
}