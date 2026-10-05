"use client"
import { motion } from "framer-motion";

export default function LuxuryLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-slate-950">
      {/* حلقه‌ی طلایی */}
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "#d4af37",
            borderRightColor: "#d4af37",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-transparent"
          style={{ borderBottomColor: "#f5e6c8" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        {/* نقطه‌ی مرکزی */}
        <motion.div
          className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-[#d4af37]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* متن برند */}
      <motion.p
        className="tracking-[0.3em] text-sm uppercase text-[#d4af37]"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Boundless
      </motion.p>
    </div>
  );
}