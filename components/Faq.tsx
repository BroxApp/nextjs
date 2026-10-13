"use client";
import Image from "next/image";
import { useState } from "react";

export default function Faq() {
  const [activeCard, setActiveCard] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  return (
    // کانتینر عمومی
    <div id="faq" className="flex flex-col items-center w-full min-h-screen">
      <h2 className="text-xl md:text-4xl text-gray-200 text-center pt-16">
        Frequently Asked Questions (FAQ)
      </h2>
      {/* کانتینر کارت‌های سوالات */}
      <div className="flex flex-col md:flex-row w-full h-[550px] pl-10 pr-4 md:px-16 gap-4 mt-6">
        {/* کارت اول */}
        <div
          onClick={() => setActiveCard(0)}
          onMouseEnter={() => setActiveCard(0)}
          className={`relative text-gray-200 border border-amber-500 rounded-xl p-6 transition-all duration-500 cursor-pointer ${activeCard === 0 ? "md:w-[60%] h-full" : "md:w-[20%] h-20 md:h-full"} overflow-hidden`}
        >
          <Image
            src="/images/faq2.jpg"
            alt="General & Pricing"
            fill
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 w-[100%] h-[100%] bg-black/60 z-10"></div>
          <div className="relative flex flex-col z-20 space-y-4">
            <h3 className="text-center text-amber-100 text-xl md:text-3xl">
              General & Pricing
            </h3>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 0 ? null : 0)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500 "
              >
                How much does a custom website cost?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 0 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                The cost depends on the scope, required functionality, and
                complexity of your project. After our initial discovery call, I
                will provide a detailed proposal with a transparent quote
                tailored to your budget and needs.
              </span>
            </div>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 1 ? null : 1)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                How long does it take to complete a website?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 1 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                A standard website typically takes 2 to 4 weeks, while complex
                or custom web applications may take 1 to 3 months. A clear
                timeline will be established before work begins.
              </span>
            </div>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 2 ? null : 2)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                What is your typical workflow for a web development project?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 2 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                The process consists of 4 main phases:
                <br />
                A: Discovery & Planning (defining requirements and goals)
                <br />
                B: UI/UX Design & Wireframing
                <br />
                C: Frontend & Backend Development
                <br />
                D: Testing, Optimization, and Launch
              </span>
            </div>
          </div>
        </div>

        {/* کارت دوم */}
        <div
          onClick={() => setActiveCard(1)}
          onMouseEnter={() => setActiveCard(1)}
          className={`relative text-gray-200 border border-amber-500 rounded-xl p-6 transition-all duration-500 cursor-pointer ${activeCard === 1 ? "md:w-[60%] h-full" : "md:w-[20%] h-20 md:h-full"} overflow-hidden`}
        >
          <Image
            fill
            className="object-cover object-center z-0"
            src="/images/faq1.jpg"
            alt="General & Pricing"
          />
          <div className="absolute inset-0 w-[100%] h-[100%] bg-black/60 z-10"></div>

          <div className="relative flex flex-col space-y-4 z-20">
            <h3 className="text-center text-amber-100 text-xl md:text-3xl">
              Technical & Functionality
            </h3>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 3 ? null : 3)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                Will my website be mobile-friendly and responsive?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 3 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                Yes, absolutely. Every project is built using modern responsive
                design practices to ensure a seamless layout across desktops,
                tablets, and smartphones.
              </span>
            </div>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 4 ? null : 4)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                Will I be able to update content on my site easily?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 4 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                Yes. I integrate clean Content Management Systems (CMS) or
                custom admin panels so you can effortlessly manage text, blog
                posts, images, and products without any coding knowledge.
              </span>
            </div>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 5 ? null : 5)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                Is SEO included in your website development process?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 5 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                Yes. All websites are developed following technical SEO best
                practices, including fast page load speeds, semantic HTML
                structure, and mobile optimization.
              </span>
            </div>
          </div>
        </div>

        {/* کارت سوم */}
        <div
          onClick={() => setActiveCard(2)}
          onMouseEnter={() => setActiveCard(2)}
          className={`relative text-gray-200 border border-amber-500 rounded-xl p-6 transition-all duration-500 cursor-pointer ${activeCard === 2 ? "md:w-[60%] h-full" : "md:w-[20%] h-20 md:h-full"} overflow-hidden`}
        >
          <Image
            fill
            className="object-cover object-center z-0"
            src="/images/faq3.jpg"
            alt="General & Pricing"
          />
          <div className="absolute inset-0 w-[100%] h-[100%] bg-black/60 z-10"></div>

          <div className="relative flex flex-col space-y-4 z-20">
            <h3 className="text-center text-amber-100 text-xl md:text-3xl">
              Support & Ownership
            </h3>
            <div className="group">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 6 ? null : 6)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                Do you offer post-launch support and maintenance?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 6 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                Yes, all projects include 30 days of free post-launch support to
                resolve any bugs or issues. Ongoing monthly or annual
                maintenance packages are also available.
              </span>
            </div>
            <div className="group ">
              <p
                onClick={() =>
                  setActiveQuestion(activeQuestion === 7 ? null : 7)
                }
                className="group-hover:text-2xl group-hover:text-amber-400 transition-all duration-500"
              >
                Who owns the website code and assets?
              </p>
              <span
                className={`block overflow-hidden transition-all duration-500 ${activeQuestion === 7 ? "max-h-40" : "max-h-0"} group-hover:max-h-40`}
              >
                You hold 100% full ownership of all source code, domain names,
                hosting accounts, and media assets upon full project payment.
              </span>
            </div>
            <div>
              <p></p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
