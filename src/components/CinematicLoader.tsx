"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  const [showName, setShowName] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setShowName(true), 1100);
    const t2 = setTimeout(() => setExit(true), 4200);
    const t3 = setTimeout(() => {
      document.body.style.overflow = "auto";
      onComplete();
    }, 5000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  const letters = ["D", "e", "e", "d", "i", "s"];

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "radial-gradient(ellipse 80% 70% at 50% 40%, #3b0f02 0%, #1a0800 50%, #0d0400 100%)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Dot grid overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(circle,#f59e0b_1px,transparent_1px)] bg-[size:28px_28px]" />

          {/* Floating ambient orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(211,47,47,0.35) 0%, transparent 70%)", top: "10%", left: "50%", transform: "translateX(-50%)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)", bottom: "15%", right: "15%" }}
          />
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.18, 0.1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)", bottom: "20%", left: "10%" }}
          />

          {/* Bottom vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-[linear-gradient(to_top,#0d0400,transparent)]" />

          {/* Image */}
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 16, delay: 0.1 }}
            className="w-56 h-56 md:w-80 md:h-80 relative z-10"
          >
            <Image
              src="/loading.png"
              alt="Deedis"
              fill
              className="object-contain drop-shadow-[0_20px_40px_rgba(211,47,47,0.4)]"
              priority
            />
          </motion.div>

          {/* Brand name — each letter drops in from above with blur */}
          <div className="flex items-center mt-4 gap-[2px] relative z-10">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: -60, scale: 1.4, filter: "blur(8px)" }}
                animate={showName ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
                transition={{
                  delay: i * 0.13,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif font-extrabold text-6xl md:text-8xl text-[#fffdf8] tracking-tight"
                style={{ textShadow: "0 4px 30px rgba(211,47,47,0.7), 0 0 60px rgba(245,158,11,0.3)" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
