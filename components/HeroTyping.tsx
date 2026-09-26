"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TITLE = "Boundless Team, Web Developers";
const SLOGAN = "WHERE DREAMS COME ALIVE";
const TYPING_SPEED_MS = 100;

export default function HeroTyping() {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let index = 0;

      const interval = setInterval(() => {
        if (index < SLOGAN.length) {
          setDisplayedText(SLOGAN.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, TYPING_SPEED_MS);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-white">
      <motion.h1
        className="text-4xl font-bold text-amber-500 whitespace-nowrap text-center min-h-12 md:min-h-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {TITLE}
      </motion.h1>

      <motion.div
        className="mt-4 text-xl tracking-wide text-center grid place-items-center whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }} // ظهور کانتینر شعار همزمان با شروع تایپ در ثانیه ۱
      >
        <span className="opacity-0 select-none [grid-area:1/1]">{SLOGAN}</span>

        <span className="[grid-area:1/1]">
          {displayedText}
          <span className="animate-pulse text-amber-500">|</span>
        </span>
      </motion.div>
    </div>
  );
}