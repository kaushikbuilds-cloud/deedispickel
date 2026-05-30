"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSlider() {
  return (
    <section className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image src="/grandma.png" alt="Traditional Indian Pickles" fill className="object-cover" priority />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      
      {/* Content Box */}
      <motion.div 
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 bg-white/95 backdrop-blur-md p-10 md:p-14 text-center max-w-xl mx-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-t-[8px] border-gradient-to-r border-[var(--color-accent-red)]"
      >
        <span className="bg-gradient-to-r from-[var(--color-accent-yellow)] to-amber-600 bg-clip-text text-transparent font-extrabold tracking-widest uppercase text-sm mb-4 block drop-shadow-sm">100% Authentic Recipes</span>
        <h1 className="font-serif text-5xl md:text-7xl font-black text-[var(--color-text)] mb-6 leading-[1.1]">
          Taste the <br /> <span className="text-[var(--color-accent-red)]">Tradition.</span>
        </h1>
        <p className="text-[var(--color-text)] mb-10 font-medium text-lg text-gray-700 leading-relaxed">
          Handcrafted South Indian pickles made with 100% natural ingredients and generations of love.
        </p>
        <button className="group bg-gradient-to-r from-[var(--color-accent-red)] to-red-800 text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-[0_10px_25px_rgba(211,47,47,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-auto">
          Shop Collection
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
}
