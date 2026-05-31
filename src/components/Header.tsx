"use client";

import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/#shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const { cart, setIsCartOpen } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/80 backdrop-blur-lg border-b border-[var(--color-border)] sticky top-0 z-50 shadow-[0_4px_30px_rgba(0,0,0,0.05)] transition-all duration-300">
        <div className="container mx-auto px-4 md:px-8 py-5 flex items-center justify-between">

          {/* Hamburger - Mobile Left */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-[var(--color-text)]" />
          </button>

          {/* Empty spacer for desktop */}
          <div className="hidden md:block w-24" />

          {/* Logo - Center */}
          <div className="flex-1 md:flex-1 text-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <a href="/" aria-label="Deedis - Go to homepage" className="inline-flex items-center justify-center">
              <Image
                src="/pickellogo.png"
                alt="Deedis"
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Cart - Right */}
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

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Slide-in panel */}
          <div className="relative w-72 bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-left duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-border)]">
              <a href="/" aria-label="Deedis - Go to homepage" onClick={() => setMenuOpen(false)} className="inline-flex items-center">
                <Image
                  src="/pickellogo.png"
                  alt="Deedis"
                  width={100}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-semibold text-[var(--color-text)] px-4 py-3 rounded-xl hover:bg-red-50 hover:text-[var(--color-accent-red)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Cart CTA */}
            <div className="mt-auto px-6 pb-8">
              <button
                onClick={() => { setMenuOpen(false); setIsCartOpen(true); }}
                className="w-full bg-[var(--color-accent-red)] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg hover:bg-red-700 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                View Cart {itemCount > 0 && `(${itemCount})`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
