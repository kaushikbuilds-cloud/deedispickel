"use client";

import Image from "next/image";
import { ShoppingCart, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { products, Product } from "@/data/products";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { y: 30 },
  show: { y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
};

function SizePickerModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  const { addToCart } = useCart();

  const handleSelect = (variantIndex: number) => {
    const v = product.variants[variantIndex];
    addToCart({ ...product, price: v.price, weight: v.weight });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          className="relative bg-white w-full sm:w-[380px] rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 z-10"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close size picker"
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>

          {/* Product info */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 relative rounded-xl overflow-hidden bg-[var(--color-secondary)] flex-shrink-0">
              <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-0.5">Select Size</p>
              <h3 className="font-serif font-bold text-lg text-[var(--color-text)] leading-tight">{product.name}</h3>
            </div>
          </div>

          {/* Size options */}
          <div className="flex flex-col gap-3">
            {product.variants.map((v, i) => (
              <button
                key={v.weight}
                onClick={() => handleSelect(i)}
                className="flex items-center justify-between w-full px-5 py-4 rounded-2xl border-2 border-gray-100 hover:border-[var(--color-accent-red)] hover:bg-red-50 transition-all duration-200 group"
              >
                <div className="text-left">
                  <p className="font-bold text-[var(--color-text)] group-hover:text-[var(--color-accent-red)] transition-colors">{v.weight}</p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {i === 0 ? "Perfect for trying out" : "Best value for families"}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-extrabold text-xl text-[var(--color-accent-red)]">₹{v.price}</p>
                  <div className="w-9 h-9 bg-[var(--color-accent-red)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ShoppingCart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ProductGrid() {
  const [pickerProduct, setPickerProduct] = useState<Product | null>(null);

  return (
    <>
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
                <Link href={`/product/${product.id}`} className="relative h-72 w-full p-6 flex items-center justify-center bg-[var(--color-secondary)] group-hover:bg-[#fff9f0] transition-colors block cursor-pointer">
                  {i < 3 && (
                    <span className="absolute top-4 left-4 bg-gradient-to-r from-[var(--color-accent-yellow)] to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-md">
                      Bestseller
                    </span>
                  )}
                  <div className="relative w-full h-full drop-shadow-xl">
                    <Image src={product.image} alt={product.name} fill className="object-contain group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </div>
                </Link>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-sm font-semibold tracking-widest text-[var(--color-muted)] uppercase mb-2">
                    200g · 500g
                  </p>
                  <Link href={`/product/${product.id}`} className="block">
                    <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mb-3 line-clamp-2 min-h-[3.5rem] group-hover:text-[var(--color-accent-red)] transition-colors cursor-pointer">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-extrabold text-[var(--color-accent-red)]">
                        ₹{product.variants[0].price}
                      </p>
                      <p className="text-xs text-[var(--color-muted)]">Starting price</p>
                    </div>
                    <button
                      onClick={() => setPickerProduct(product)}
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

      {/* Size picker modal */}
      {pickerProduct && (
        <SizePickerModal product={pickerProduct} onClose={() => setPickerProduct(null)} />
      )}
    </>
  );
}
