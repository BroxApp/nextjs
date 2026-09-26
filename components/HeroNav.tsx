import Link from "next/link"
import HeroBtn from "@/components/HeroBtn";
import Logo from "@/components/SvgLogo";


export default function HeroNav (){
    return(
        <nav className="flex justify-center gap-8">
            <Logo/>
            <Link href="/">Home</Link>
            <Link href="./react-vs-nextjs-fa">Project</Link>
            <Link href="./react-vs-nextjs-en">About</Link>
            <Link href="./shoping">Product</Link>
            <HeroBtn/>
        </nav>
    )
}