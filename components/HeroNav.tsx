"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import HeroBtn from "@/components/HeroBtn";
import Logo from "@/components/SvgLogo";

export default function HeroNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className={`z-50 flex items-center justify-center gap-8 py-3 text-white ${
        isHome
          ? "fixed inset-x-0 top-0 bg-transparent"
          : "sticky top-0 bg-slate-900"
      }`}
    >
      <Logo />
      <Link href="/#hero">Home</Link>
      <Link href="/react-vs-nextjs-fa">Project</Link>
      <Link href="/#Technologies" scroll={true}>Tech Stack</Link>
      <Link href="/shoping">Product</Link>
      <Link href="/react-vs-nextjs-en">About</Link>
      <HeroBtn />
    </nav>
  );
}