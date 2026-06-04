"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldBan, ChefHat, PackageCheck, Globe2, BookOpen } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No artificial colours or flavours. Just pure, honest nature in every spoonful." },
  { icon: ShieldBan, title: "No Preservatives", desc: "Naturally preserved using traditional sun-drying and cold-pressed oils." },
  { icon: ChefHat, title: "Made Fresh To Order", desc: "Prepared in small batches so every jar reaches you at its flavourful peak." },
  { icon: PackageCheck, title: "Vacuum Sealed", desc: "Premium glass jars sealed to lock in the aroma, colour and crunch." },
  { icon: Globe2, title: "Worldwide Delivery", desc: "From the hills of Ooty to your doorstep — anywhere in the world." },
  { icon: BookOpen, title: "Heritage Recipe", desc: "A five-decade-old family secret, passed down and never compromised." },
];

export default function WhyDeedis() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] py-20 md:py-28">
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[var(--color-saffron)]/10 blur-[120px]" />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow eyebrow-center justify-center">The Deedis Promise</span>
          <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-6xl">
            Why You'll <span className="text-gradient-spice">Love Us</span>
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">
            Six reasons our pickles taste like the ones you grew up with — only better made.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-warm"
              >
                <span className="absolute right-6 top-5 font-serif text-5xl font-black text-[var(--color-cream)] transition-colors group-hover:text-[var(--color-saffron)]/30">
                  0{i + 1}
                </span>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-red)] to-[var(--color-spice-dark)] text-white shadow-glow-red transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2.5 font-serif text-2xl font-bold text-[var(--color-text)]">{item.title}</h3>
                <p className="leading-relaxed text-[var(--color-muted)]">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
