"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Leaf } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-surface)]">
      {/* Decorative warm blobs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[var(--color-saffron)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-[var(--color-spice)]/15 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 py-16 md:px-8 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show">
            <span className="eyebrow eyebrow-center justify-center lg:justify-start">
              100% Authentic Nilgiris Recipes
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-5 font-serif text-5xl font-black leading-[1.02] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Taste the
            <br />
            <span className="text-gradient-spice">Tradition.</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-[var(--color-muted)] lg:mx-0"
          >
            Handcrafted South Indian pickles, slow-cured with 100% natural ingredients,
            cold-pressed gingelly oil and generations of love.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start"
          >
            <Link href="/#shop" className="btn-primary w-full sm:w-auto">
              Shop Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/about" className="btn-ghost w-full sm:w-auto">
              Our Story
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6 lg:items-start lg:justify-start"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {["#d32f2f", "#e0962a", "#7d160f", "#2e7d32"].map((c, i) => (
                  <span
                    key={i}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[var(--color-primary)] text-xs font-bold text-white shadow-sm"
                    style={{ background: c }}
                  >
                    {["P", "R", "A", "V"][i]}
                  </span>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5 text-[var(--color-accent-yellow)]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-[var(--color-muted)]">
                  Loved by <span className="text-[var(--color-text)]">5,000+</span> homes
                </p>
              </div>
            </div>
            <span className="hidden h-8 w-px bg-[var(--color-border)] sm:block" />
            <span className="chip">
              <Leaf className="h-3.5 w-3.5 text-[var(--color-accent-green)]" />
              No Preservatives
            </span>
          </motion.div>
        </div>

        {/* Right: imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          {/* Main framed photo */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-white/60 shadow-warm-lg">
            <Image
              src="/grandma.png"
              alt="Traditional South Indian pickle making"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          {/* Rotating seal */}
          <div className="absolute -left-5 top-6 hidden h-24 w-24 items-center justify-center rounded-full bg-[var(--color-ink)] text-white shadow-warm sm:flex">
            <span className="animate-spin-slow absolute inset-0">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path id="seal" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
                </defs>
                <text className="fill-[var(--color-accent-yellow)] text-[10px] font-bold uppercase tracking-[0.18em]">
                  <textPath href="#seal">PURE • NATURAL • HANDMADE • OOTY • </textPath>
                </text>
              </svg>
            </span>
            <Leaf className="h-7 w-7 text-[var(--color-accent-yellow)]" />
          </div>

          {/* Floating product jar */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-6 w-32 drop-shadow-2xl sm:w-40 md:-left-10 md:w-48"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--color-saffron)]/30 blur-2xl" />
            <Image
              src="/hero_jar.png"
              alt="Deedis pickle jar"
              width={240}
              height={240}
              className="h-auto w-full object-contain"
            />
          </motion.div>

          {/* Floating stat badge */}
          <div className="absolute -right-3 bottom-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-primary)]/90 px-5 py-3 shadow-warm backdrop-blur md:-right-6">
            <p className="font-serif text-2xl font-bold text-[var(--color-accent-red)]">50+</p>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-muted)]">
              Years of taste
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
