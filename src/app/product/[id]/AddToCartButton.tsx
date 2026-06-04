"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart, Check } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart, setIsCartOpen, flyToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [added, setAdded] = useState(false);

  const variant = product.variants[selectedVariant];

  const handleAdd = () => {
    const img = document.getElementById("pdp-image");
    if (img) flyToCart(product.image, img.getBoundingClientRect());
    addToCart({ ...product, price: variant.price, weight: variant.weight });
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Variant selector */}
      <div>
        <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
          Choose size
        </p>
        <div className="flex flex-wrap gap-3">
          {product.variants.map((v, i) => (
            <button
              key={v.weight}
              onClick={() => setSelectedVariant(i)}
              className={`flex flex-col items-start rounded-2xl border-2 px-5 py-3 text-left transition-all duration-200 ${
                selectedVariant === i
                  ? "border-[var(--color-accent-red)] bg-red-50"
                  : "border-[var(--color-border)] bg-white hover:border-gray-400"
              }`}
            >
              <span className={`text-sm font-bold ${selectedVariant === i ? "text-[var(--color-accent-red)]" : "text-[var(--color-text)]"}`}>
                {v.weight}
              </span>
              <span className="text-xs text-[var(--color-muted)]">₹{v.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Add to cart */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={handleAdd}
          className={`flex flex-1 items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-bold text-white shadow-glow-red transition-all duration-300 hover:-translate-y-0.5 ${
            added
              ? "bg-[var(--color-accent-green)]"
              : "bg-gradient-to-r from-[var(--color-accent-red)] to-[var(--color-spice-dark)]"
          }`}
        >
          {added ? (
            <>
              <Check className="h-5 w-5" /> Added to cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-5 w-5" /> Add to Cart — ₹{variant.price}
            </>
          )}
        </button>
        <button
          onClick={() => { addToCart({ ...product, price: variant.price, weight: variant.weight }); setIsCartOpen(true); }}
          className="rounded-2xl border-2 border-[var(--color-text)] px-8 py-4 text-base font-bold text-[var(--color-text)] transition-colors hover:bg-[var(--color-text)] hover:text-white"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
