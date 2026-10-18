"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import HeroBtn from "@/components/HeroBtn";
import Logo from "@/components/SvgLogo";

type HeroNavProps = {
  isLoggedIn: boolean;
};

export default function HeroNav({ isLoggedIn }: HeroNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  function handleSectionClick(
  event: React.MouseEvent<HTMLAnchorElement>
) {
  if (!isLoggedIn) {
    event.preventDefault();
    setIsMenuOpen(false);
    router.push("/login");
    return;
  }

  setIsMenuOpen(false);
}
  // افکت اسکرول فقط در صفحه اصلی
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  // بستن منوی موبایل هنگام تغییر مسیر
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // خروج از حساب با استفاده از API موجود
  async function handleLogout() {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (!response.ok) {
        setIsLoggingOut(false);
        return;
      }

      setIsMenuOpen(false);
      router.push("/login");
      router.refresh();
    } catch {
      setIsLoggingOut(false);
    }
  }

  // دکمه‌های ورود و خروج
  function AuthButtons({ mobile = false }: { mobile?: boolean }) {
    const baseClass = mobile
      ? "w-full rounded-lg px-4 py-1 text-center font-semibold transition active:scale-95"
      : "rounded-lg px-4 py-1 font-semibold transition active:scale-95";

    return isLoggedIn ? (
      <>
        <Link
          href="/profile"
          onClick={() => setIsMenuOpen(false)}
          className={`${baseClass} border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950`}
        >
          Profile
        </Link>

        <button
          type="button"
          onClick={handleLogout}
          disabled={isLoggingOut}
          className={`${baseClass} bg-red-600 text-white hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50`}
        >
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </>
    ) : (
      <>
        <Link
          href="/register-page"
          onClick={() => setIsMenuOpen(false)}
          className={`${baseClass} border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-950`}
        >
          Sign Up
        </Link>

        <Link
          href="/login"
          onClick={() => setIsMenuOpen(false)}
          className={`${baseClass} bg-amber-500 text-slate-950 hover:bg-amber-400`}
        >
          Log In
        </Link>
      </>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav
        className={`z-50 flex min-w-0 items-center px-3 py-3 text-white transition-all duration-500 ease-in-out md:px-6 ${
          isHome
            ? `fixed inset-x-0 top-0 justify-between gap-4 md:justify-center ${
                isScrolled
                  ? "bg-slate-950/90 shadow-lg shadow-black/10 backdrop-blur-md"
                  : "bg-transparent shadow-none backdrop-blur-0"
              }`
            : "sticky top-0 justify-between gap-4 bg-slate-900 shadow-md md:justify-center"
        }`}
      >
        <Logo />

        {/* دکمه منوی موبایل */}
        <button
          type="button"
          className="z-50 text-2xl focus:outline-none md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* لینک‌های دسکتاپ */}
        <Link
          href="/#hero"
          className="hidden transition-transform hover:text-amber-400 active:scale-95 md:block"
        >
          Home
        </Link>

        <Link
          href="/projects"
          className="hidden transition-transform hover:text-amber-400 active:scale-95 md:block"
        >
          Projects
        </Link>

        <Link
          href="/#Technologies"
          scroll={true}
          onClick={handleSectionClick}
          className="hidden transition-transform hover:text-amber-400 active:scale-95 md:block"
        >
          Tech Stack
        </Link>

        <Link
          href="/#faq"
          scroll={true}
          onClick={handleSectionClick}
          className="hidden transition-transform hover:text-amber-400 active:scale-95 md:block"
        >
          F A Q
        </Link>

        <Link
          href="/about"
          className="hidden transition-transform hover:text-amber-400 active:scale-95 md:block"
        >
          About
        </Link>

        {/* دکمه فعلی سایت */}
        <div className="hidden md:block">
          <HeroBtn />
        </div>

        {/* دکمه‌های احراز هویت دسکتاپ */}
        <div className="hidden items-center gap-2 md:flex">
          <AuthButtons />
        </div>
      </nav>

      {/* پس‌زمینه تاریک منوی موبایل */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* منوی موبایل */}
      <div
        dir="ltr"
        id="mobile-navigation"
        className={`fixed bottom-0 left-0 top-0 z-40 flex w-64 flex-col items-center gap-6 overflow-y-auto bg-slate-900 px-6 pt-20 pb-8 text-white shadow-2xl backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <Link
          href="/#hero"
          onClick={() => setIsMenuOpen(false)}
          className="transition-transform hover:text-amber-400 active:scale-95"
        >
          Home
        </Link>

        <Link
          href="/projects"
          onClick={() => setIsMenuOpen(false)}
          className="transition-transform hover:text-amber-400 active:scale-95"
        >
          Projects
        </Link>

        <Link
          href="/#Technologies"
          onClick={handleSectionClick}          
          className="transition-transform hover:text-amber-400 active:scale-95"
        >
          Tech Stack
        </Link>

        <Link
          href="/#faq"
          onClick={handleSectionClick}
          className="transition-transform hover:text-amber-400 active:scale-95"
        >
          FAQ
        </Link>

        <Link
          href="/about"
          onClick={() => setIsMenuOpen(false)}
          className="transition-transform hover:text-amber-400 active:scale-95"
        >
          About
        </Link>

        <div className="w-full border-t border-slate-700 pt-5">
          <div className="flex flex-col gap-3">
            <AuthButtons mobile />
          </div>
        </div>

        <div className="w-full">
          <HeroBtn />
        </div>
      </div>
    </>
  );
}
