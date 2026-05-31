"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-primary)]">
      {/* Background Image / Mask */}
      <motion.div style={{ y: y1, scale }} className="absolute inset-0 z-0">
        <Image src="/ingredients.png" alt="floating spices" fill className="object-cover opacity-30 mix-blend-screen" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/80 via-transparent to-transparent" />
      </motion.div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-24 md:pb-32">
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: textY }}
            className="flex-1"
          >
            <h1 className="font-serif text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] text-[var(--color-text)] tracking-tighter mix-blend-difference">
              THE ART <br />
              <span className="font-display italic font-light text-[var(--color-accent)] text-stroke text-5xl md:text-[7rem] lg:text-[9rem]">OF PRESERVATION</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/3 flex flex-col items-start lg:items-end text-left lg:text-right"
          >
            <div className="w-48 h-64 md:w-64 md:h-80 relative mb-8 rounded-t-full overflow-hidden border border-[var(--color-accent)]/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
               <Image src="/product.png" alt="Pickle Jar" fill className="object-cover" priority />
            </div>
            <p className="text-lg md:text-xl text-[var(--color-muted)] font-sans max-w-sm mb-8 font-light">
              We preserve the soul of South India in every jar. Handcrafted, sun-dried, and perfectly spiced.
            </p>
            <a href="/#shop" className="group flex items-center gap-4 text-[var(--color-text)] uppercase tracking-widest text-sm font-bold">
              <span className="border-b border-[var(--color-accent)] pb-1 group-hover:text-[var(--color-accent)] transition-colors">Discover Collection</span>
              <div className="w-10 h-10 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[#020502] transition-all duration-300">
                <ArrowDownRight className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
