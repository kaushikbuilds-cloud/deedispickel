"use client";

import { motion } from "framer-motion";
import { Leaf, Flame, PackageCheck, Globe2 } from "lucide-react";

const items = [
  { icon: Leaf, title: "100% Natural", desc: "No colours or chemicals" },
  { icon: Flame, title: "Small Batch", desc: "Made fresh to order" },
  { icon: PackageCheck, title: "Sealed Fresh", desc: "Premium glass jars" },
  { icon: Globe2, title: "Worldwide", desc: "Shipped from Ooty" },
];

export default function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-primary)]">
      <div className="container mx-auto grid grid-cols-2 gap-px overflow-hidden px-4 md:grid-cols-4 md:px-8">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group flex items-center gap-4 px-2 py-7 md:justify-center md:px-6"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-secondary)] text-[var(--color-spice)] transition-colors duration-300 group-hover:bg-[var(--color-spice)] group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-wide text-[var(--color-text)]">
                {title}
              </p>
              <p className="text-xs text-[var(--color-muted)]">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
