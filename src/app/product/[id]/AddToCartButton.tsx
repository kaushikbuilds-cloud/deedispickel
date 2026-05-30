"use client";

import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="w-full md:w-auto bg-[var(--color-accent-red)] text-white px-10 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-red-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <ShoppingCart className="w-5 h-5" />
      Add to Cart
    </button>
  );
}
