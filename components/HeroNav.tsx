"use client";
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
        className={`z-50 min-w-0 items-center px-3 md:px-6 py-3 text-white ${
          isHome
            ? "fixed inset-x-0 top-0 bg-transparent flex justify-between md:justify-center gap-4"
            : "sticky top-0 bg-slate-900 gap-4 flex justify-between md:justify-center"
        }`}>

        <Logo />

        <button
          className="md:hidden text-2xl z-50 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <Link className="hidden md:block hover:text-amber-400 active:scale-95 transition-transform" href="/#hero">Home</Link>
        <Link className="hidden md:block hover:text-amber-400 active:scale-95 transition-transform" href="/react-vs-nextjs-fa">Project</Link>
        <Link className="hidden md:block hover:text-amber-400 active:scale-95 transition-transform" href="/#Technologies" scroll={true}>Tech Stack</Link>
        <Link className="hidden md:block hover:text-amber-400 active:scale-95 transition-transform" href="/shoping">Product</Link>
        <Link className="hidden md:block hover:text-amber-400 active:scale-95 transition-transform" href="/react-vs-nextjs-en">About</Link>

        <div className="hidden md:block">
          <HeroBtn />
        </div>

      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}/>
      )}

      <div
        dir="ltr"
        className={`fixed top-0 left-0 bottom-0 z-40 w-54 bg-slate-900 backdrop-blur-md text-white shadow-2xl flex flex-col items-center gap-6 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link onClick={() => setIsMenuOpen(false)}
          href="/#hero"
          className="hover:text-amber-400 active:scale-95 transition-transform"
        >Home</Link>

        <Link onClick={() => setIsMenuOpen(false)}
          href="/react-vs-nextjs-fa"
          className="hover:text-amber-400 active:scale-95 transition-transform"
        >Project</Link>

        <Link onClick={() => setIsMenuOpen(false)}
          href="/#Technologies"
          scroll={true}
          className="hover:text-amber-400 active:scale-95 transition-transform"
        >Tech Stack</Link>

        <Link onClick={() => setIsMenuOpen(false)}
          href="/shoping"
          className="hover:text-amber-400 active:scale-95 transition-transform"
        >Product</Link>

        <Link
          onClick={() => setIsMenuOpen(false)}
          href="/react-vs-nextjs-en"
          className="hover:text-amber-400 active:scale-95 transition-transform"
        >About</Link>

        <div className="mt-4">
          <HeroBtn />
        </div>
      </div>
    </>
  );
}