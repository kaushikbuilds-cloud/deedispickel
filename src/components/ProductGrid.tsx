"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { products } from "@/data/products";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30 },
  show: { y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-24 bg-[var(--color-surface)] scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-[var(--color-border)] pb-6 gap-4"
        >
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-text)]">
              Our Best Sellers
            </h2>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {products.map((product, i) => (
            <motion.div 
              variants={itemVariants}
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(211,47,47,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col group"
            >
              <Link href={`/product/${product.id}`} className="relative h-72 w-full p-6 flex items-center justify-center bg-[var(--color-secondary)] group-hover:bg-[#fff9f0] transition-colors relative block cursor-pointer">
                {i < 3 && (
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-[var(--color-accent-yellow)] to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-md">Bestseller</span>
                )}
                <div className="relative w-full h-full drop-shadow-xl">
                  <Image src={product.image} alt={product.name} fill className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out" />
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-2">{product.weight}</p>
                <Link href={`/product/${product.id}`} className="block">
                  <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[var(--color-accent-red)] transition-colors cursor-pointer">{product.name}</h3>
                </Link>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex text-[var(--color-accent-yellow)] text-sm">
                    ★ ★ ★ ★ ★
                  </div>
                  <span className="text-xs text-[var(--color-muted)] font-medium">(42 Reviews)</span>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <p className="text-2xl font-extrabold text-[var(--color-accent-red)] drop-shadow-sm">₹{product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => addToCart(product)}
                    aria-label={`Add ${product.name} to cart`}
                    className="w-12 h-12 bg-white border-2 border-[var(--color-border)] text-[var(--color-text)] rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[var(--color-accent-red)] hover:to-red-700 hover:border-transparent hover:text-white hover:shadow-lg transition-all duration-300 group/btn"
                  >
                    <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


