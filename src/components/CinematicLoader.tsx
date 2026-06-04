"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CinematicLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const done = setTimeout(() => {
      document.body.style.overflow = "auto";
      onComplete();
    }, 2400);

    return () => {
      clearTimeout(done);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <motion.div
      key="loader"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gradient-to-b from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-surface)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* warm ambience */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--color-saffron)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Grandma illustration in a warm plate */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-[var(--color-saffron)]/25 blur-2xl" />
          <div className="animate-float flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white shadow-warm-lg ring-1 ring-[var(--color-saffron)]/30 sm:h-48 sm:w-48">
            <Image
              src="/loading.png"
              alt="Deedis — handcrafting your pickles"
              width={200}
              height={200}
              priority
              className="h-full w-full object-contain p-2"
            />
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8"
        >
          <Image
            src="/pickellogo.png"
            alt="Deedis"
            width={130}
            height={52}
            priority
            className="h-10 w-auto object-contain"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]"
        >
          Stirring up something special
        </motion.p>

        {/* Progress bar */}
        <div className="mt-7 h-1.5 w-56 overflow-hidden rounded-full bg-[var(--color-cream)]">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.2, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-[var(--color-saffron)] to-[var(--color-spice)]"
          />
        </div>
      </div>
    </motion.div>
  );
}
