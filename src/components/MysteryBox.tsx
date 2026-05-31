"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PackageOpen, Gift } from "lucide-react";

export default function MysteryBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-[#fffbf2] border-t border-[var(--color-border)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(var(--color-accent-red)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[350px]">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 15 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.4 }
              }}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer flex flex-col items-center group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[var(--color-accent-red)] to-red-900 rounded-3xl shadow-[0_20px_40px_rgba(211,47,47,0.3)] flex items-center justify-center mb-6 border-4 border-white group-hover:shadow-[0_20px_60px_rgba(211,47,47,0.5)] transition-shadow">
                <Gift className="w-16 h-16 md:w-20 md:h-20 text-white" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent-red)] transition-colors">
                Mystery Box
              </h3>
              <p className="text-[var(--color-muted)] font-medium text-lg uppercase tracking-widest text-sm">
                Click to unlock a secret surprise
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-red-100 text-center max-w-lg w-full relative"
            >
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                <span className="text-xl">🌶️</span>
              </div>
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center animate-bounce shadow-lg [animation-delay:200ms]">
                <span className="text-xl">🔥</span>
              </div>

              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <PackageOpen className="w-10 h-10 text-[var(--color-accent-red)]" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-[var(--color-accent-red)] mb-4">
                Non-Veg Pickles!
              </h3>
              <div className="bg-[var(--color-accent-yellow)] text-amber-900 text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full inline-block mb-6 shadow-sm">
                Coming Soon
              </div>
              <p className="text-[var(--color-text)] mb-8 font-medium leading-relaxed">
                Our kitchen is brewing up something special! Authentic, spicy Chicken, Mutton, and Prawn pickles crafted with our heritage recipes are on the way. Get ready for a fiery delight!
              </p>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-gray-400 hover:text-[var(--color-accent-red)] transition-colors uppercase tracking-widest border border-gray-200 px-6 py-2 rounded-full hover:border-[var(--color-accent-red)]"
              >
                Close Box
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
