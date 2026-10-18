"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Projects() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="projects" className="py-10">
      <h1 className="mb-10 text-center text-4xl font-bold text-gray-200">
        Projects
      </h1>

      <div className="flex justify-center">
        <div
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          onClick={() => setIsActive((prev) => !prev)}
          className="relative mx-[2px] h-72 w-[calc(100%-4px)] cursor-pointer overflow-hidden rounded-xl shadow-md md:mx-0 md:w-xl"
        >
        
          <Image
            src="/images/project-banner.png"
            alt="Beauty and Home Collection"
            fill
            priority
            sizes="(max-width: 768px) calc(100vw - 4px), 576px"
            className={`object-cover transition-transform duration-700 ${
              isActive ? "scale-110" : "scale-100"
            }`}
          />

          
          <div
            className={`absolute inset-0 z-10 flex items-end p-6 transition-all duration-500 ${
              isActive
                ? "bg-slate-950/75 backdrop-blur-[3px]"
                : "bg-slate-950/0 backdrop-blur-0"
            }`}
          >
            
            <div
              className={`relative z-20 w-full transition-all duration-500 ${
                isActive
                  ? "translate-y-0 opacity-100 border border-amber-400 rounded-lg p-4"
                  : "pointer-events-none translate-y-8 opacity-0"
              }`}
            >
              <span className="mb-3 inline-block rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-semibold tracking-wider text-white">
                FEATURED PROJECT
              </span>

              <h2 className="mb-3 text-2xl font-bold text-white drop-shadow-lg">
                Beauty & Home Collection
              </h2>

              <p className="mb-5 max-w-md text-sm leading-6 text-gray-100">
                Explore our curated collection of beauty essentials and stylish
                home accessories, designed to bring elegance to your everyday life.
              </p>

              <Link
                href="/shopping"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition-colors duration-300 hover:bg-amber-400 hover:text-slate-900"
              >
                Explore Project
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

