import HeroNav from "@/components/HeroNav";
import HeroBtn from "@/components/HeroBtn";
import Image from "next/image";


export default function HeroSection(){
    return(
        <section>
            <div>
                <HeroNav/>
                    <h1>Hello Next js World</h1>
                    <p>This is my Dream.</p>
                <HeroBtn/>
            </div>
            <div className="relative w-full max-w-3xl h-100 mt-12">
            <Image
                src="/images/BroxApp.png"
                alt=""
                fill
                priority
                style={{ objectFit: "contain" }}
            />
            </div>
        </section>
    )
}