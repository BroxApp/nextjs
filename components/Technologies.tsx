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
    <div id="Technologies" className="relative flex flex-col justify-center items-center gap-3 w-full min-h-screen bg-cover bg-center bg-no-repeat bg-transparent">
      <Image
      src="/images/Tech-Background.png"
      alt="Background"
      fill
      className="object-cover -z-10"
      priority
      />
      
      <motion.p
        className="text-xl uppercase tracking-widest text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        Building with
      </motion.p>

      <motion.p
        className="text-xl uppercase tracking-widest text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 2 }}
      >
        Crafting scalable and modern web applications with cutting-edge tools.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-5 opacity-80"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {techIcons.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div key={index} variants={iconVariants}>
              <IconComponent
                size={tech.size}
                title={tech.title}
                className="text-amber-300 hover:text-amber-400 transition-colors duration-200"
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}