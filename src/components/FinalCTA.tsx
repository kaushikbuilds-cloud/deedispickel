"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative py-48 bg-[#020502] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image src="/hero_jar.png" alt="Pickle Jar Background" fill className="object-cover opacity-[0.03] scale-110 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-6xl md:text-[8rem] lg:text-[10rem] leading-[0.85] text-[var(--color-text)] tracking-tighter mb-8">
            TASTE <br/>
            <span className="font-display italic font-light text-[var(--color-accent)] text-stroke">THE TRADITION.</span>
          </h2>
          
          <a
            href="https://wa.me/917550247641"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden mt-8 px-12 py-5 bg-[var(--color-accent)] text-[#020502] font-bold tracking-widest text-sm uppercase rounded-full hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(212,175,55,0.4)] inline-flex items-center gap-3"
          >
            <span className="relative z-10">Order On WhatsApp</span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
