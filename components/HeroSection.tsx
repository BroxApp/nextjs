import HeroNav from "@/components/HeroNav";
import Image from "next/image";


export default function HeroSection(){
    return(
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-white">
            <Image
                src="/images/BroxApp.png"
                alt="Hero Background"
                fill
                priority
                className="object-cover -z-10 brightness-50"
            />
            <div className="relative z-10 text-center space-y-4 max-w-2xl px-4">
                <HeroNav/>
                <h1 className="text-4xl md:text-6xl font-bold">Hello Next.js World</h1>
                <p className="text-lg md:text-xl font-light text-amber-300/90 tracking-[0.25em] uppercase">
                  Where Dreams Come Alive
                </p>           
            </div>
            <div className="relative w-full  h-100 ">
            
            </div>
        </section>
    )
}