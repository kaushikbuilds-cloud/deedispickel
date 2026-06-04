"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Priya S.", country: "USA 🇺🇸", review: "The closest thing to my grandmother's mango pickle. Absolutely phenomenal quality and packaging." },
  { name: "Rahul M.", country: "UK 🇬🇧", review: "Worth every penny. The Vadu mango pickle is incredibly authentic, and shipping was surprisingly fast." },
  { name: "Anita K.", country: "Australia 🇦🇺", review: "A premium experience from unboxing to tasting. The Ooty garlic pickle is out of this world!" },
  { name: "Vikram R.", country: "Canada 🇨🇦", review: "You can taste the purity of the gingelly oil. It's a luxury product that delivers on its promise." },
];

export default function CustomerReviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[var(--color-ink)] py-20 text-white md:py-28">
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-[var(--color-spice)]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[var(--color-saffron)]/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Left summary */}
        <div className="lg:col-span-5">
          <span className="eyebrow !text-[var(--color-accent-yellow)]">Loved Globally</span>
          <h2 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Don't take our
            <br />
            <span className="text-gradient-gold">word for it.</span>
          </h2>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center gap-1 text-[var(--color-accent-yellow)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-2xl font-bold">4.9<span className="text-base font-normal text-white/50">/5</span></p>
          </div>
          <p className="mt-3 text-lg text-white/60">
            Delivering authentic South Indian flavour to <span className="font-semibold text-white">5,000+</span> doorsteps worldwide.
          </p>
        </div>

        {/* Right carousel */}
        <div className="lg:col-span-7">
          <div className="relative min-h-[260px] sm:min-h-[230px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card !border-white/10 !bg-white/[0.04] rounded-[2rem] p-8 md:p-12"
              >
                <Quote className="mb-6 h-10 w-10 text-[var(--color-accent-yellow)]/50" />
                <p className="font-serif text-2xl italic leading-snug text-white md:text-3xl">
                  “{reviews[index].review}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-accent-yellow)]/40 bg-white/5 font-display text-xl font-bold text-[var(--color-accent-yellow)]">
                    {reviews[index].name[0]}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider">{reviews[index].name}</h4>
                    <p className="text-sm text-white/50">{reviews[index].country}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-7 flex gap-2.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[var(--color-accent-yellow)]" : "w-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
