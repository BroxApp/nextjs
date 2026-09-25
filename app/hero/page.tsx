import HeroNav from "@/components/HeroNav";
import HeroBtn from "@/components/HeroBtn";
import Image from "next/image";


export default function HeroSection(){
    return(
        <section>
            <div>
                <HeroNav/>

                <HeroBtn/>
            </div>
            <div className="relative w-full max-w-3xl h-100 mt-12">
            <Image
                src="/images/hero.png"
                alt=""
                fill
                priority
                style={{ objectFit: "contain" }}
            />
            </div>
        </section>
    )
}