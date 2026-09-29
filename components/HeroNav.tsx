import Link from "next/link"
import HeroBtn from "@/components/HeroBtn";
import Logo from "@/components/SvgLogo";


export default function HeroNav (){
    return(
        <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-center gap-8 py-3 bg-transparent text-white">
            <Logo />
            <Link href="/" className="text-white">Home</Link>
            <Link href="/react-vs-nextjs-fa" className="text-white">Project</Link>
            <Link href="/react-vs-nextjs-en" className="text-white">About</Link>
            <Link href="/shoping" className="text-white">Product</Link>
            <HeroBtn />
        </nav>
    )
}