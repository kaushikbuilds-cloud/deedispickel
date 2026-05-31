"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart, setIsCartOpen } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-white/80 backdrop-blur-lg border-b border-[var(--color-border)] sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 py-5 flex items-center justify-between">
        
        {/* Empty left section to maintain flex alignment for absolute-centered logo */}
        <div className="hidden md:block w-24"></div>
        <div className="w-10 md:hidden"></div>
        
        {/* Logo - Center */}
        <div className="flex-1 md:flex-1 text-center md:absolute md:left-1/2 md:-translate-x-1/2">
          <a href="/" className="font-serif text-3xl md:text-4xl font-extrabold text-[var(--color-accent-red)] tracking-tight">
            Deedis<span className="text-[var(--color-accent-yellow)] text-5xl leading-[0]">.</span>
          </a>
        </div>

        {/* Icons - Right */}
        <div className="flex items-center justify-end text-[var(--color-text)]">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsCartOpen(true);
            }}
            className="hover:text-[var(--color-accent-red)] transition-colors relative flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100 hover:border-red-100 shadow-sm"
          >
            <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold text-sm hidden md:inline-block">Cart</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--color-accent-yellow)] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-in zoom-in shadow-md">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
