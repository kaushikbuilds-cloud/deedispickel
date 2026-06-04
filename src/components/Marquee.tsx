"use client";

import { motion } from "framer-motion";

const phrases = [
  "100% Natural",
  "No Preservatives",
  "Sun-Dried",
  "Cold-Pressed Oil",
  "Authentic Recipe",
  "Handcrafted in Ooty",
];

export default function Marquee() {
  const loop = [...phrases, ...phrases, ...phrases];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-[var(--color-ink)] py-5">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
          className="flex shrink-0 items-center"
        >
          {loop.map((p, i) => (
            <span key={i} className="flex items-center">
              <span className="px-7 font-serif text-2xl italic text-[var(--color-secondary)] md:text-3xl">
                {p}
              </span>
              <span className="text-lg text-[var(--color-accent-yellow)]">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--color-ink)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--color-ink)] to-transparent" />
    </div>
  );
}
