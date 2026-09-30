"use client";

import { motion } from "framer-motion";

export default function HeroTagline() {
  return (
    <div className="flex flex-col items-center gap-3 mt-4">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 3 }}
      >
        <p className="mt-6 text-3xl">
          You dream it, we build it. Turning your vision into digital reality.
        </p>
        <p className="mt-1 text-white/70 text-2xl">
          Full-stack development & digital solutions
        </p>
      </motion.div>
    </div>
  );
}