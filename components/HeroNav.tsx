"use client"
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeroBtn from "@/components/HeroBtn";
import Logo from "@/components/SvgLogo";

export default function HeroNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
    <nav
      className={`z-50 win-w-0 items-center  px-3 md:px-6 py-3 text-white ${
        isHome
          ? "fixed inset-x-0 top-0 bg-transparent flex justify-center gap-4"
          : "sticky top-0 bg-slate-900 gap-4 flex justify-center"
      }`}
    >
      <Logo />
      <button className="md:hidden text-2xl" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
      ☰
      </button>
      <Link className="hidden md:block" href="/#hero">Home</Link>
      <Link className="hidden md:block" href="/react-vs-nextjs-fa">Project</Link>
      <Link className="hidden md:block" href="/#Technologies" scroll={true}>Tech Stack</Link>
      <Link className="hidden md:block" href="/shoping">Product</Link>
      <Link className="hidden md:block" href="/react-vs-nextjs-en">About</Link>
      <div className="hidden md:block">
        <HeroBtn />
      </div>
    </nav>
    {isMenuOpen && (
    <div className="md:hidden flex flex-col items-center gap-4    bg-slate-900   py-4 text-white">
      <Link onClick={()=>setIsMenuOpen(false)} href="/#hero">Home</Link>
      <Link onClick={()=>setIsMenuOpen(false)} href="/react-vs-nextjs-fa">Project</Link>
      <Link onClick={()=>setIsMenuOpen(false)} href="/#Technologies">Tech Stack</Link>
      <Link onClick={()=>setIsMenuOpen(false)} href="/shoping">Product</Link>
      <Link onClick={()=>setIsMenuOpen(false)} href="/react-vs-nextjs-en">About</Link>
      <HeroBtn />
    </div>
  )}
  </>
  );
}