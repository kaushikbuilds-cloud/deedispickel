"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useState } from "react";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);

  const variant = product.variants[selectedVariant];
  const productToAdd = { ...product, price: variant.price, weight: variant.weight };

  return (
    <div className="flex flex-col gap-4">
      {/* Variant selector */}
      <div className="flex gap-3">
        {product.variants.map((v, i) => (
          <button
            key={v.weight}
            onClick={() => setSelectedVariant(i)}
            className={`px-5 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 ${
              selectedVariant === i
                ? "border-[var(--color-accent-red)] bg-red-50 text-[var(--color-accent-red)]"
                : "border-gray-200 text-gray-500 hover:border-gray-400"
            }`}
          >
            {v.weight} — ₹{v.price}
          </button>
        ))}
      </div>

      {/* Add to cart */}
      <button
        onClick={() => addToCart(productToAdd)}
        className="w-full md:w-auto bg-[var(--color-accent-red)] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-red-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <ShoppingCart className="w-5 h-5" />
        Add to Cart — ₹{variant.price}
      </button>
    </div>
  );
}
