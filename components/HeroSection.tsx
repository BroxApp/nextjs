import HeroNav from "@/components/HeroNav";
import Image from "next/image";
import SocialLinks from "./SocialLinks";
import HeroTyping from "./HeroTyping";
import TechStack from "./TechStack";

export default function HeroSection(){
    return(
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white">
            <Image
                src="/images/Hero-Background.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover -z-10 brightness-50"
            />
        <div className="absolute top-8 left-0 right-0 z-20">
            <HeroNav />
        </div>
        <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-5xl px-4">
            <HeroTyping />
            <TechStack />
        </div>
            <SocialLinks/>
        </section>
    )
}