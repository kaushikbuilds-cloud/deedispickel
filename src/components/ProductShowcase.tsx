"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Plus } from "lucide-react";

const products = [
  { name: "Raw Mango", price: "$12", image: "/product.png", color: "from-[#d4af37]/20" },
  { name: "Lemon", price: "$10", image: "/product.png", color: "from-[#25D366]/20" },
  { name: "Garlic", price: "$14", image: "/product.png", color: "from-[#8b998a]/20" },
];

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-[var(--color-secondary)] py-24 md:py-48">
      <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-40 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] leading-none">
          THE <br/> <span className="font-display text-stroke italic text-[var(--color-accent)]">COLLECTION</span>
        </h2>
        <p className="font-sans text-[var(--color-muted)] max-w-sm text-lg md:text-xl font-light">
          A curated selection of our finest traditional recipes, meticulously crafted for the modern palate.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-32">
        {products.map((product, i) => (
          <ProductCard key={i} product={product} index={i} total={products.length} />
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, index, total }: { product: any; index: number; total: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity: 1 }}
      className="sticky top-32 w-full h-[70vh] md:h-[80vh] rounded-[3rem] overflow-hidden glass-card flex flex-col md:flex-row shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-[var(--color-accent)]/10"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${product.color} to-transparent opacity-20`} />
      
      <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-between relative z-10">
        <div>
          <span className="font-display text-5xl md:text-8xl font-bold text-[var(--color-accent)]/20 mb-4 block">0{index + 1}</span>
          <h3 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] mb-4 leading-none">{product.name}</h3>
          <p className="font-display text-2xl md:text-4xl text-[var(--color-muted)]">${product.price}</p>
        </div>
        
        <div className="mt-8">
          <button className="group flex items-center justify-between w-full md:w-auto px-8 py-5 bg-[var(--color-text)] text-[#020502] rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-accent)] transition-colors duration-500">
            <span>Add to Cart</span>
            <Plus className="w-5 h-5 ml-4 group-hover:rotate-90 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <motion.div style={{ y }} className="w-full md:w-1/2 h-full relative flex items-center justify-center p-10">
        <div className="relative w-full h-full max-w-md max-h-md">
          <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]" priority />
        </div>
      </motion.div>
    </motion.div>
  );
}
