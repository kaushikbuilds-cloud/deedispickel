"use client";

import { useCart } from "@/context/CartContext";
import { CheckCircle, ArrowRight, X } from "lucide-react";
import { useEffect } from "react";

export default function ToastNotification() {
  const { showToast, setShowToast, toastMessage, isCartOpen, setIsCartOpen } = useCart();

  useEffect(() => {
    if (isCartOpen && showToast) {
      setShowToast(false);
    }
  }, [isCartOpen, showToast, setShowToast]);

  if (!showToast) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-gray-900 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-[var(--color-accent-green)]" />
        <span className="font-medium text-sm whitespace-nowrap">{toastMessage}</span>
      </div>
      <div className="h-4 w-[1px] bg-gray-700"></div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setIsCartOpen(true);
        }}
        className="text-[var(--color-accent-yellow)] text-sm font-bold flex items-center gap-1 hover:text-white transition-colors"
      >
        View Cart
        <ArrowRight className="w-4 h-4" />
      </button>
      <button 
        onClick={() => setShowToast(false)}
        className="ml-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
