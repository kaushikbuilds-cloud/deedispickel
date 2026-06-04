"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf, ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Years of tradition" },
  { value: "5,000+", label: "Happy families" },
  { value: "14", label: "Heritage recipes" },
  { value: "100%", label: "Natural & pure" },
];

export default function StoryBanner() {
  return (
    <section className="bg-[var(--color-secondary)] py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/60 shadow-warm-lg sm:aspect-[5/5]">
              <Image src="/grandma.png" alt="Traditional pickle making" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* badge */}
            <div className="absolute -right-4 -top-4 rotate-3 rounded-2xl bg-[var(--color-ink)] px-5 py-4 text-center shadow-warm md:-right-6">
              <p className="font-serif text-3xl font-black text-[var(--color-accent-yellow)]">1974</p>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70">Est. in Ooty</p>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">
              <Leaf className="h-4 w-4" /> Our Heritage
            </span>
            <h2 className="mt-5 font-serif text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-5xl">
              Over five decades of tradition, in every jar
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[var(--color-text)]">
              It began in a small village kitchen in the Nilgiris, where our grandmother's
              secret recipes were the talk of the town. Those recipes — and the patience they
              demand — are still the soul of everything we make.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
              Hand-picked produce, freshly ground spices and cold-pressed gingelly oil. No
              artificial colours, no preservatives — just pure, authentic taste that reminds
              you of home.
            </p>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[var(--color-saffron)] pl-3">
                  <p className="font-serif text-3xl font-extrabold text-[var(--color-accent-red)]">{s.value}</p>
                  <p className="mt-1 text-xs font-medium text-[var(--color-muted)]">{s.label}</p>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary mt-10">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
