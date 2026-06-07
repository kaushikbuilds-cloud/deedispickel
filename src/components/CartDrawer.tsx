"use client";

import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();
  const router = useRouter();

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; }
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[100vw] sm:w-[400px] bg-white z-[9999] shadow-2xl flex flex-col"
          >
            
            {/* Header */}
            <div className="px-6 py-4 border-b border-[var(--color-border)] flex items-center justify-between bg-gray-50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[var(--color-accent-red)]" />
                <h2 className="font-serif text-xl font-bold text-[var(--color-text)]">Your Cart</h2>
                <span className="bg-gray-200 text-gray-700 text-xs font-bold px-2 py-0.5 rounded-full ml-2">
                  {cart.reduce((acc, item) => acc + item.quantity, 0)}
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
              <ShoppingBag className="w-16 h-16 mb-4 text-gray-300" />
              <p className="text-lg font-medium mb-2">Your cart is empty</p>
              <p className="text-sm">Looks like you haven't added any pickles yet.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-6 bg-[var(--color-accent-red)] text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={`${item.id}-${item.weight}`} className="flex gap-4 border-b border-[var(--color-border)] pb-6 last:border-0 last:pb-0">
                  <div className="relative w-20 h-24 bg-gray-50 rounded-lg overflow-hidden border border-gray-100 flex-shrink-0">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-[var(--color-text)] text-sm leading-tight pr-4">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id, item.weight)}
                          aria-label="Remove item"
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        <span className="font-semibold text-[var(--color-text)]">{item.weight}</span> · ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded-full bg-white">
                        <button 
                          onClick={() => updateQuantity(item.id, item.weight, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[var(--color-accent-red)] transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.weight, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[var(--color-accent-red)] transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="font-bold text-[var(--color-text)]">₹{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-[var(--color-border)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-500 font-medium">Subtotal</span>
              <span className="font-bold text-[var(--color-text)]">₹{cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center mb-1 text-sm">
              <span className="text-gray-500">Delivery</span>
              <span className="text-gray-500 text-right">Added after confirmation</span>
            </div>
            <p className="mb-5 text-xs text-gray-400">
              Add your delivery details on the next step to place your order.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                router.push("/checkout");
              }}
              className="group w-full bg-gradient-to-r from-[var(--color-accent-red)] to-[var(--color-spice-dark)] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-glow-red hover:-translate-y-0.5 transition-all duration-300"
            >
              Proceed to Checkout
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
        </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
