"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socialItems = [
  { icon: FaGithub, href: "https://github.com", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com", label: "LinkedIn" },
];

const sidebarVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.18, delayChildren: 1.8 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function SocialLinks() {
  return (
    <motion.div
 
      className="fixed left-2 sm:left-6 top-[60%] md:top-1/2 -translate-y-1/2 z-30 flex flex-col gap-3 md:gap-5 items-center"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="w-[2px] h-8 md:h-12 bg-gradient-to-b from-transparent to-amber-500" />

      {socialItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.a
            key={index}
            href={item.href}
            aria-label={item.label}
            variants={iconVariants}
            whileHover={{ scale: 1.2, x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300 relative group p-1.5 md:p-2"
          >
            <span className="absolute inset-0 rounded-full bg-amber-500/20 blur-sm md:blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <Icon className="relative z-10 text-[16px] md:text-[20px]" />
          </motion.a>
        );
      })}

      <div className="w-[2px] h-8 md:h-12 bg-gradient-to-t from-transparent to-amber-500" />
    </motion.div>
  );
}