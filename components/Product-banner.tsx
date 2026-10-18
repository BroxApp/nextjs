"use client"
import Image from "next/image"

export default function ProductBanner (){
     return(
        <header className="relative w-full h-64 md:h-80">
            <Image
            alt="product banner" 
            src="/images/product-banner.jfif"
            fill
            priority
            className="object-cover"
            />
            <div className="absolute z-10 pl-3 pt-4 md:pl-16 md:pt-16">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-gray-900 md:text-gray-900" style={{ textShadow: "0 0 6px rgba(156, 163, 175, 1)" }}>Beauty & Home Collection</h1>
                <p className="text-sm md:text-xl text-black/90 opacity-100 " style={{ textShadow: "0 0 6px rgba(156, 163, 175, 1)" }}>Curated essentials for your look and living space.</p>
            </div>
        </header>
     )
}