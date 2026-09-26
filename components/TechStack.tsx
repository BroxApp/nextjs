"use client";

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

export default function TechStack() {
  return (
    <div className="flex flex-col items-center gap-3 mt-11">
      <motion.p
        className="text-xl uppercase tracking-widest text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Building with
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

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <p className="mt-12">
          You dream it, we build it. Turning your vision into digital reality.
        </p>
        <p className="mt-1 text-white/70">
          Full-stack development & digital solutions
        </p>
      </motion.div>
    </div>
  );
}