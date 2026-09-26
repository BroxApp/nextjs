"use client";

export default function HeroBtn() {
  return (
    <button
      className="border-2 border-amber-500 bg-amber-400 
      text-black font-medium px-4 py-0.5 rounded-lg transition-all 
      duration-150 active:scale-95 active:shadow-[inset_2px_2px_3px_rgba(0,0,0,0.5)]"
      onClick={() => alert("Hi Hero !!!")}
    >
      Contact Us
    </button>
  );
}