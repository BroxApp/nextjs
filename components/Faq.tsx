'use client'

import Image from "next/image"
import { useState } from "react"

export default function Faq (){
    const  [activeCard, setActiveCard] = useState(0);
  return (
    <div id="faq" className="flex flex-col items-center w-full min-h-screen">
        <h2 className="text-4xl text-gray-200 text-center pt-16">Frequently Asked Questions (FAQ)</h2>
        <div className="flex flex-col md:flex-row w-full h-[600px] px-4 md:px-16 gap-4 mt-10">
            <div onClick={()=>setActiveCard(0)} className={`relative text-gray-200 border border-amber-500 rounded-xl p-6 transition-all duration-500 cursor-bezier ${activeCard === 0 ? 'md:w-[60%] h-full' : 'md:w-[20%] h-20 md:h-full'} overflow-hidden gb-gray-900/50`}>
                <h3>General & Pricing</h3>
                {/* <Image fill className="" src="/images/faq1.jpg" alt="General & Pricing"/> */}
                <div>
                    <p>How much does a custom website cost?</p>
                    <span>The cost depends on the scope, required functionality, and complexity of your project. After our initial discovery call, I will provide a detailed proposal with a transparent quote tailored to your budget and needs.</span>
                </div>
                <div>
                    <p>How long does it take to complete a website?</p>
                    <span>A standard website typically takes 2 to 4 weeks, while complex or custom web applications may take 1 to 3 months. A clear timeline will be established before work begins.</span>
                </div>
                <div>
                    <p>What is your typical workflow for a web development project?</p>
                    <span>The process consists of 4 main phases:<br/>A: Discovery & Planning (defining requirements and goals)<br/>B: UI/UX Design & Wireframing<br/>C: Frontend & Backend Development<br/>D: Testing, Optimization, and Launch</span>
                </div>
            </div>
            <div className="relative text-gray-200">
              <h3>Technical & Functionality</h3>
              {/* <Image fill className="" src="/images/faq1.jpg" alt="General & Pricing"/> */}
                <div>
                    <p>Will my website be mobile-friendly and responsive?</p>
                    <span>Yes, absolutely. Every project is built using modern responsive design practices to ensure a seamless layout across desktops, tablets, and smartphones.</span>
                </div>
                <div>
                    <p>Will I be able to update content on my site easily?</p>
                    <span>Yes. I integrate clean Content Management Systems (CMS) or custom admin panels so you can effortlessly manage text, blog posts, images, and products without any coding knowledge.</span>
                </div>
                <div>
                    <p>Is SEO included in your website development process?</p>
                    <span>Yes. All websites are developed following technical SEO best practices, including fast page load speeds, semantic HTML structure, and mobile optimization.</span>
                </div>
            </div>
            <div className="relative text-gray-200">
              <h3>Support & Ownership</h3>
              {/* <Image fill className="" src="/images/faq1.jpg" alt="General & Pricing"/> */}
                <div>
                    <p>Do you offer post-launch support and maintenance?</p>
                    <span>Yes, all projects include 30 days of free post-launch support to resolve any bugs or issues. Ongoing monthly or annual maintenance packages are also available.</span>
                </div>
                <div>
                    <p>Who owns the website code and assets?</p>
                    <span>You hold 100% full ownership of all source code, domain names, hosting accounts, and media assets upon full project payment.</span>
                </div>
                <div>
                    <p></p>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

