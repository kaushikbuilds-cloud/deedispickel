"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, Droplets } from "lucide-react";

export default function IngredientsSection() {
  return (
    <section className="bg-[var(--color-surface)] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">From Farm to Jar</span>
            <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-6xl">
              Only the <span className="text-gradient-spice">finest</span> goes in
            </h2>
          </div>
          <p className="max-w-sm text-[var(--color-muted)] md:text-right">
            A great pickle starts with uncompromising ingredients. We source locally, grind
            fresh, and never cut a corner.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:auto-rows-[250px]">
          {/* Big image tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[340px] overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2 md:min-h-0"
          >
            <Image
              src="/ingredients.png"
              alt="Fresh ingredients"
              fill
              className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/80 via-[var(--color-ink)]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur">
                Ingredient 01
              </span>
              <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">Hand-picked produce</h3>
              <p className="mt-1 max-w-md text-white/80">
                Raw mangoes, garlic and gooseberries gathered fresh from Nilgiri farms.
              </p>
            </div>
          </motion.div>

          {/* Ink text tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[var(--color-ink)] p-8 text-white"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.06] dot-grid" />
            <Leaf className="h-8 w-8 text-[var(--color-accent-yellow)]" />
            <div>
              <p className="font-serif text-4xl font-black leading-none text-[var(--color-accent-yellow)]">6</p>
              <p className="mt-2 text-lg font-semibold">Simple ingredients</p>
              <p className="mt-1 text-sm text-white/60">Nothing you can't pronounce. Ever.</p>
            </div>
          </motion.div>

          {/* Saffron text tile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--color-saffron)] to-[var(--color-accent-red)] p-8 text-white"
          >
            <Droplets className="h-8 w-8 text-white/90" />
            <div>
              <h3 className="font-serif text-2xl font-bold">Cold-pressed gingelly oil</h3>
              <p className="mt-1 text-sm text-white/85">
                The traditional carrier of South Indian flavour — pure and unrefined.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
