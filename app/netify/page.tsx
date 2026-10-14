import React from "react";

export default function HeroSection() {
  return (
    <div className="relative bg-gray-900 text-white min-h-[85vh] flex flex-col justify-between">
      {/* ۱. منوی بالا (Navbar) */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-16 py-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-wider text-white">
            Netify
          </span>
        </div>

        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>
          <a href="#" className="hover:text-white transition">
            About
          </a>
          <a href="#" className="hover:text-white transition">
            Courses
          </a>
        </nav>

        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-5 py-2 rounded-lg transition shadow-md">
            Sign In
          </button>
        </div>
      </header>

      {/* ۲. محتوای اصلی هیرو (متن‌ها و پس‌زمینه) */}
      <div className="relative flex-1 flex items-center justify-center text-center px-4 pt-28 pb-16">
        {/* پس‌زمینه تصویر اتاق کامپیوتر همراه با لایه تاریک (Overlay) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          {/* عکس پس‌زمینه را در پوشه public قرار دهید */}
          <div className="w-full h-full bg-[url('/computer-room.jpg')] bg-cover bg-center" />
        </div>

        {/* متن‌ها و عنوان */}
        <div className="relative z-20 max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Netify Academy
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Empowering learners with a modern computer lab designed for hands-on
            learning, innovation, and creative coding.
          </p>
        </div>
      </div>

      {/* ۳. بخش آمار و ارقام (Stats Box) */}
      <div className="relative z-20 bg-white text-gray-900 shadow-xl mx-6 md:mx-24 -mb-12 rounded-2xl p-6 grid grid-cols-3 gap-4 text-center border border-gray-100">
        <div>
          <p className="text-2xl md:text-3xl font-extrabold text-purple-600">
            2000+
          </p>
          <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
            Students
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-extrabold text-purple-600">
            30
          </p>
          <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
            Instructors
          </p>
        </div>
        <div>
          <p className="text-2xl md:text-3xl font-extrabold text-purple-600">
            17
          </p>
          <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
            Online courses
          </p>
        </div>
      </div>
    </div>
  );
}
