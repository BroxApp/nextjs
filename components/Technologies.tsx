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
      staggerChildren: 0.20, 
      delayChildren: 0.5, 
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function Technologies() {

return (
  <section
    id="Technologies"
    className="
      relative
      flex
      min-h-screen
      w-full
      flex-col
      items-center
      justify-center
      overflow-hidden
      bg-[#050b16]
      px-6
      py-24
    "
  >
    {/* Background */}
    <Image
      src="/images/Tech-Background.png"
      alt="Technology background"
      fill
      className="object-cover object-center"
      priority
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-[#050b16]/75" />

    {/* Subtle center glow */}
    <div
      className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-amber-300/[0.04]
        blur-[120px]
      "
    />

    {/* Content */}
    <div className="relative z-10 flex w-full max-w-6xl flex-col items-center">

      {/* Small heading */}
      <motion.p
        className="
          mb-3
          text-sm
          font-medium
          uppercase
          tracking-[0.35em]
          text-amber-300/70
        "
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        My Stack
      </motion.p>

      {/* Main heading */}
      <motion.h2
        className="
          text-center
          text-3xl
          font-semibold
          tracking-tight
          text-white
          sm:text-4xl
          md:text-5xl
        "
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Building with{" "}
        <span className="text-amber-300">
          Modern Technologies
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="
          mt-5
          max-w-2xl
          text-center
          text-sm
          leading-7
          text-white/45
          sm:text-base
        "
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Crafting scalable, modern and high-performance web
        applications with powerful tools and technologies.
      </motion.p>

      {/* Technologies Grid */}
      <motion.div
        className="
          mt-14
          grid
          w-full
          grid-cols-2
          gap-4
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
        "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techIcons.map((tech, index) => {
          const IconComponent = tech.icon;

          return (
            <motion.div
              key={index}
              variants={iconVariants}
              whileHover={{
                y: -8,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="group relative"
            >
              {/* Glow behind card */}
              <div
                className="
                  absolute
                  -inset-1
                  rounded-3xl
                  bg-amber-300/0
                  opacity-0
                  blur-xl
                  transition-all
                  duration-500
                  group-hover:bg-amber-300/10
                  group-hover:opacity-100
                "
              />

              {/* Glass Card */}
              <div
                className="
                  relative
                  flex
                  h-40
                  w-full
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/[0.10]
                  bg-white/[0.055]
                  shadow-[0_8px_32px_rgba(0,0,0,0.25)]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:border-amber-300/25
                  group-hover:bg-white/[0.09]
                  group-hover:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                "
              >
                {/* Top glass reflection */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-white/30
                    to-transparent
                  "
                />

                {/* Corner glow */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-white/[0.04]
                    blur-2xl
                    transition-all
                    duration-500
                    group-hover:bg-amber-300/[0.08]
                  "
                />

                {/* Icon container */}
                <div
                  className="
                    relative
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/[0.08]
                    bg-black/20
                    shadow-inner
                    transition-all
                    duration-500
                    group-hover:border-amber-300/20
                    group-hover:bg-amber-300/[0.06]
                  "
                >
                  <IconComponent
                    size={tech.size}
                    className="
                      text-slate-200
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:text-amber-300
                      group-hover:drop-shadow-[0_0_12px_rgba(252,211,77,0.35)]
                    "
                  />
                </div>

                {/* Technology name */}
                <span
                  className="
                    mt-4
                    text-sm
                    font-medium
                    tracking-wide
                    text-white/65
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                >
                  {tech.title}
                </span>

                {/* Bottom accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-amber-300
                    shadow-[0_0_12px_rgba(252,211,77,0.5)]
                    transition-all
                    duration-500
                    group-hover:w-10
                  "
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom label */}
      <motion.div
        className="
          mt-12
          flex
          items-center
          gap-3
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/25
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="h-px w-10 bg-white/10" />

        <span>Tools I Build With</span>

        <span className="h-px w-10 bg-white/10" />
      </motion.div>

    </div>
  </section>
);

}