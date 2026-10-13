import Technologies from "@/components/Technologies";
import HeroSection from "../components/HeroSection";
import Faq from "@/components/Faq";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <>
        <HeroSection/>
        <Technologies/>
        <Projects/>
        <Faq/>
      </>
    </div>

  );
}
