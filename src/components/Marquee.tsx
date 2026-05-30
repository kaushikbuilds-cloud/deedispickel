"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const text = "100% NATURAL • NO PRESERVATIVES • SUN-DRIED • AUTHENTIC RECIPE • ";
  const repeatText = text.repeat(4);

  return (
    <div className="py-6 bg-[var(--color-accent)] overflow-hidden flex whitespace-nowrap">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex"
      >
        <span className="text-[#020502] font-display font-bold text-2xl md:text-4xl tracking-widest uppercase">
          {repeatText}
        </span>
      </motion.div>
    </div>
  );
}
