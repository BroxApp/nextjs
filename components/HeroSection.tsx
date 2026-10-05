import SocialLinks from "./SocialLinks";
import HeroTyping from "./HeroTyping";
import HeroTagline from "./HeroTagline";

export default function HeroSection(){
    return(
        <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center text-white px-4">
            <video
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50">
                <source src="/images/Hero-Bg.mp4" type="video/mp4" />
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
        
        <div className="flex flex-col items-center justify-center space-y-3 w-full max-w-5xl px-4">
            <HeroTyping />
            <HeroTagline />
        </div>
            <SocialLinks/>
        </section>
    )
}