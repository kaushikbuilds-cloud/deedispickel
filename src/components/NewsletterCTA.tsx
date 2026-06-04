"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function NewsletterCTA() {
  return (
    <section className="bg-[var(--color-surface)] px-4 py-16 md:px-8 md:py-24">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--color-spice-dark)] via-[var(--color-accent-red)] to-[var(--color-spice)] px-6 py-16 text-center shadow-warm-lg md:px-12 md:py-24">
          {/* texture + glows */}
          <div className="pointer-events-none absolute inset-0 opacity-10 dot-grid" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[var(--color-accent-yellow)]/20 blur-[90px]" />

          {/* floating jars */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-6 -left-4 hidden w-36 opacity-90 drop-shadow-2xl md:block lg:w-44"
          >
            <Image src="/hero_jar.png" alt="" width={200} height={200} className="h-auto w-full object-contain" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-4 -top-6 hidden w-32 opacity-90 drop-shadow-2xl md:block lg:w-40"
          >
            <Image src="/product.png" alt="" width={180} height={180} className="h-auto w-full object-contain" />
          </motion.div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="eyebrow eyebrow-center justify-center !text-amber-200">Tradition, delivered</span>
            <h2 className="mt-5 font-serif text-4xl font-black leading-tight text-white md:text-6xl">
              Bring home a jar
              <br />
              of nostalgia.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/85">
              Order in minutes — we'll hand-pack your pickles fresh and ship them anywhere in the world.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#shop"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--color-accent-red)] shadow-lg transition-transform hover:-translate-y-1 sm:w-auto"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/916383609055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                <FaWhatsapp className="h-5 w-5" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
