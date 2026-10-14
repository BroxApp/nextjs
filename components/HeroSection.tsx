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
                className="absolute inset-0 object-cover brightness-50 w-full h-full z-0">
                <source src="/images/Hero-Bg.mp4" type="video/mp4" />
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        
        <div className="flex flex-col items-center justify-center space-y-3 w-full max-w-5xl px-4 z-20">
            <HeroTyping />
            <HeroTagline />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center z-20">
            <SocialLinks/>
        </div>
            
        </section>
    )
}