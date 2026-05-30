"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ingredients = [
  { name: "Raw Mangoes", desc: "Handpicked from local farms", col: "col-span-1 md:col-span-2", img: "/ingredients.png" },
  { name: "Fresh Lemons", desc: "Sun-kissed and juicy", col: "col-span-1", img: "/ingredients.png" },
  { name: "Farm Garlic", desc: "Peeled to perfection", col: "col-span-1", img: "/ingredients.png" },
  { name: "Gingelly Oil", desc: "Cold-pressed purity", col: "col-span-1 md:col-span-2", img: "/ingredients.png" },
];

export default function IngredientsSection() {
  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-surface)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 md:mb-32">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] leading-none max-w-2xl">
            ONLY THE <br/> <span className="font-display text-[var(--color-accent)] italic">FINEST.</span>
          </h2>
          <p className="font-sans text-[var(--color-muted)] max-w-sm text-lg font-light pb-4">
            We believe that a great pickle starts with uncompromisingly pure ingredients. No shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {ingredients.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative group rounded-[2rem] overflow-hidden glass-card ${item.col}`}
            >
              <Image src={item.img} alt={item.name} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 mix-blend-luminosity group-hover:mix-blend-normal" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-10 z-10 flex flex-col">
                <span className="font-display font-bold text-[var(--color-accent)] mb-2 tracking-widest text-sm uppercase">Ingredient 0{i+1}</span>
                <h4 className="font-serif text-3xl md:text-4xl text-[var(--color-text)] mb-2">{item.name}</h4>
                <p className="font-sans text-[var(--color-muted)] text-lg">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
