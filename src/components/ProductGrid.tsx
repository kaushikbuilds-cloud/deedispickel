"use client";

import Image from "next/image";
import { ShoppingCart, X, Star, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { products, Product } from "@/data/products";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useMemo, useState } from "react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 16 } },
};

function SizePickerModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const { addToCart } = useCart();

  const handleSelect = (variantIndex: number) => {
    const v = product.variants[variantIndex];
    addToCart({ ...product, price: v.price, weight: v.weight });
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
        <motion.div
          className="relative z-10 w-full rounded-t-3xl bg-[var(--color-primary)] p-6 shadow-2xl sm:w-[380px] sm:rounded-3xl"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button
            onClick={onClose}
            aria-label="Close size picker"
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-secondary)] transition-colors hover:bg-[var(--color-cream)]"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>

          <div className="mb-6 flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-[var(--color-secondary)]">
              <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
            </div>
            <div>
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">Select Size</p>
              <h3 className="font-serif text-lg font-bold leading-tight text-[var(--color-text)]">{product.name}</h3>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {product.variants.map((v, i) => (
              <button
                key={v.weight}
                onClick={() => handleSelect(i)}
                className="group flex w-full items-center justify-between rounded-2xl border-2 border-[var(--color-border)] px-5 py-4 transition-all duration-200 hover:border-[var(--color-accent-red)] hover:bg-red-50"
              >
                <div className="text-left">
                  <p className="font-bold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-red)]">{v.weight}</p>
                  <p className="text-xs text-[var(--color-muted)]">{i === 0 ? "Perfect for trying out" : "Best value for families"}</p>
                </div>
                <div className="flex items-center gap-3">
                  <p className="font-serif text-xl font-extrabold text-[var(--color-accent-red)]">₹{v.price}</p>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent-red)] opacity-0 transition-opacity group-hover:opacity-100">
                    <ShoppingCart className="h-4 w-4 text-white" />
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
  const [activeCat, setActiveCat] = useState("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    []
  );

  const filtered = useMemo(
    () => (activeCat === "All" ? products : products.filter((p) => p.category === activeCat)),
    [activeCat]
  );

  return (
    <>
      <section id="shop" className="scroll-mt-24 overflow-hidden bg-[var(--color-surface)] py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-center"
          >
            <span className="eyebrow eyebrow-center justify-center">Our Collection</span>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-6xl">
              Best <span className="text-gradient-spice">Sellers</span>
            </h2>
            <p className="mt-4 text-[var(--color-muted)]">
              Fourteen heritage recipes, slow-cured in small batches. Pick your jar of nostalgia.
            </p>
          </motion.div>

          {/* Category tabs */}
          <div className="mb-12 flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                  activeCat === cat
                    ? "bg-gradient-to-r from-[var(--color-accent-red)] to-[var(--color-spice-dark)] text-white shadow-glow-red"
                    : "border border-[var(--color-border)] bg-white text-[var(--color-muted)] hover:border-[var(--color-accent-red)] hover:text-[var(--color-accent-red)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            key={activeCat}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((product, i) => {
                const isBestseller = products.indexOf(product) < 3;
                return (
                  <motion.div
                    layout
                    variants={itemVariants}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={product.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-2 hover:shadow-warm"
                  >
                    <Link
                      href={`/product/${product.id}`}
                      className="relative flex h-64 w-full items-center justify-center bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-cream)]/40 p-6"
                    >
                      {isBestseller && (
                        <span className="absolute left-4 top-4 z-10 rounded-full bg-gradient-to-r from-[var(--color-accent-yellow)] to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                          Bestseller
                        </span>
                      )}
                      <span className="absolute right-4 top-4 z-10 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[11px] font-bold text-[var(--color-text)] shadow-sm backdrop-blur">
                        <Star className="h-3 w-3 fill-[var(--color-accent-yellow)] text-[var(--color-accent-yellow)]" />
                        4.9
                      </span>
                      <div className="relative h-full w-full drop-shadow-xl">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                    </Link>

                    <div className="flex flex-1 flex-col p-5">
                      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[var(--color-saffron)]">
                        {product.category}
                      </p>
                      <Link href={`/product/${product.id}`}>
                        <h3 className="mb-3 min-h-[3.25rem] font-serif text-lg font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-red)]">
                          {product.name}
                        </h3>
                      </Link>

                      <div className="mb-4 flex gap-1.5">
                        {product.variants.map((v) => (
                          <span key={v.weight} className="rounded-md border border-[var(--color-border)] bg-[var(--color-secondary)] px-2 py-0.5 text-[11px] font-semibold text-[var(--color-muted)]">
                            {v.weight}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex items-center justify-between">
                        <div>
                          <p className="font-serif text-2xl font-extrabold text-[var(--color-accent-red)]">
                            ₹{product.variants[0].price}
                          </p>
                          <p className="text-[11px] text-[var(--color-muted)]">Starting price</p>
                        </div>
                        <button
                          onClick={() => setPickerProduct(product)}
                          aria-label={`Add ${product.name} to cart`}
                          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-border)] bg-white text-[var(--color-text)] transition-all duration-300 hover:border-transparent hover:bg-gradient-to-r hover:from-[var(--color-accent-red)] hover:to-[var(--color-spice-dark)] hover:text-white hover:shadow-lg"
                        >
                          <Plus className="h-5 w-5 transition-transform group-hover:scale-110" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {pickerProduct && <SizePickerModal product={pickerProduct} onClose={() => setPickerProduct(null)} />}
    </>
  );
}
