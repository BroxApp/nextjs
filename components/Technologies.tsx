"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiVite,
  SiFramer,
  SiMysql,
} from "react-icons/si";

const techIcons = [
  { icon: FaHtml5, title: "HTML", size: 46 },
  { icon: FaCss3Alt, title: "CSS", size: 46 },
  { icon: SiJavascript, title: "JavaScript", size: 44 },
  { icon: FaReact, title: "React", size: 46 },
  { icon: SiNextdotjs, title: "Next.js", size: 44 },
  { icon: SiTypescript, title: "TypeScript", size: 44 },
  { icon: SiTailwindcss, title: "Tailwind CSS", size: 46 },
  { icon: FaPhp, title: "PHP", size: 56 },
  { icon: SiLaravel, title: "Laravel", size: 44 },
  { icon: SiMysql, title: "MySQL", size: 52 },
  { icon: FaGitAlt, title: "Git", size: 46 },
  { icon: SiVite, title: "Vite", size: 44 },
  { icon: SiFramer, title: "Framer Motion", size: 44 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Technologies() {
  return (
    <section
      id="Technologies"
      className="relative min-h-screen overflow-hidden bg-[#050b16] px-6 py-24"
    >
      {/* Background */}
      <Image
        src="/images/Tech-Background.png"
        alt="Technology background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#050b16]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center">

        {/* Heading */}
        <motion.p
          className="mb-3 text-sm uppercase tracking-widest text-amber-300/70"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Stack
        </motion.p>

        <motion.h2
          className="text-center text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Building with{" "}
          <span className="text-amber-300">
            Modern Technologies
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-5 max-w-2xl text-center text-sm leading-7 text-white/50 sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Crafting scalable, modern and high-performance web
          applications with powerful tools and technologies.
        </motion.p>

        {/* Technologies */}
        <motion.div
          className="mt-14 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techIcons.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.title}
                variants={iconVariants}
                whileHover={{ y: -6 }}
                className="
                  flex h-40 flex-col items-center justify-center
                  rounded-2xl border border-white/10
                  bg-white/5 backdrop-blur-sm
                  transition hover:border-amber-300/30
                "
              >
                <div
                  className="
                    flex h-16 w-16 items-center justify-center
                    rounded-xl border border-white/10
                    bg-black/20
                    transition
                    group-hover:border-amber-300/20
                  "
                >
                  <Icon
                    size={tech.size}
                    className="text-slate-200 transition hover:text-amber-300"
                  />
                </div>

                <span className="mt-4 text-sm text-white/70">
                  {tech.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Label */}
        <motion.div
          className="mt-12 flex items-center gap-3 text-xs uppercase tracking-widest text-white/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="h-px w-8 bg-white/10" />
          <span>Tools I Build With</span>
          <span className="h-px w-8 bg-white/10" />
        </motion.div>

      </div>
    </section>
  );
}

