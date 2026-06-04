"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Truck, Leaf, Globe2, Sparkles } from "lucide-react";

const messages = [
  { icon: Truck, text: "Fast dispatch within 1–2 business days" },
  { icon: Leaf, text: "100% natural · No preservatives · No added colour" },
  { icon: Globe2, text: "We ship worldwide from the Nilgiris, Ooty" },
  { icon: Sparkles, text: "Handcrafted in small batches — tradition in every jar" },
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3800);
    return () => clearInterval(id);
  }, []);

  const Active = messages[index].icon;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[var(--color-spice-dark)] via-[var(--color-accent-red)] to-[var(--color-spice)] text-white">
      {/* subtle moving sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-20 dot-grid [background-size:14px_14px]" />
      <div className="container mx-auto flex items-center justify-center px-4 py-2.5">
        <div className="flex h-5 items-center overflow-hidden text-center text-[11px] font-semibold uppercase tracking-[0.14em] md:text-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2.5"
            >
              <Active className="h-3.5 w-3.5 shrink-0 text-amber-200" />
              <span>{messages[index].text}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
