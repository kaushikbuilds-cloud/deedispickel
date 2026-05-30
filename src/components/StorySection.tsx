"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const textY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 w-full bg-[var(--color-primary)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] mb-8 leading-[0.9]">
              HERITAGE <br/>
              <span className="font-display italic font-light text-stroke text-[var(--color-accent)]">REDEFINED</span>
            </h2>
            <div className="space-y-8 text-lg md:text-2xl text-[var(--color-muted)] font-sans font-light leading-relaxed">
              <p>
                We do not use factories. We use kitchens. Our master makers handpick the finest raw mangoes, fresh garlic, and traditional spices.
              </p>
              <p>
                Slowly sun-dried and mixed with cold-pressed gingelly oil, every jar preserves the authentic soul of South India.
              </p>
            </div>
            <div className="mt-12">
              <button className="relative overflow-hidden group px-10 py-4 border border-[var(--color-accent)]/30 rounded-full text-[var(--color-text)] tracking-widest uppercase text-sm font-bold">
                <span className="relative z-10 group-hover:text-[#020502] transition-colors duration-500">Read Our Story</span>
                <div className="absolute inset-0 bg-[var(--color-accent)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative min-h-[60vh] md:min-h-[80vh] rounded-[3rem] overflow-hidden glass-card">
            <motion.div style={{ y: imgY }} className="absolute -inset-20">
              <Image src="/grandma.png" alt="Grandma preparing pickles" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#020502] via-transparent to-transparent opacity-80" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
