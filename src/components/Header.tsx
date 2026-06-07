"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-[var(--color-border)] bg-[var(--color-primary)]/85 shadow-[0_8px_30px_rgba(124,22,15,0.07)] backdrop-blur-xl"
            : "border-transparent bg-[var(--color-primary)]/60 backdrop-blur-md"
        }`}
      >
        <div
          className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 md:px-8 ${
            scrolled ? "py-3" : "py-4 md:py-5"
          }`}
        >
          {/* Hamburger - Mobile Left */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-secondary)] md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-[var(--color-text)]" />
          </button>

          {/* Left nav - Desktop */}
          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`group relative text-sm font-semibold tracking-wide transition-colors ${
                  isActive(link.href)
                    ? "text-[var(--color-accent-red)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-accent-red)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[var(--color-accent-red)] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Logo - Center */}
          <div className="flex-1 text-center md:absolute md:left-1/2 md:flex-none md:-translate-x-1/2">
            <Link href="/" aria-label="Deedis - Go to homepage" className="inline-flex items-center justify-center">
              <Image
                src="/pickellogo.png"
                alt="Deedis"
                width={120}
                height={48}
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-9 md:h-10" : "h-10 md:h-12"
                }`}
                priority
              />
            </Link>
          </div>

          {/* Right nav + cart - Desktop */}
          <div className="flex items-center justify-end gap-7">
            <nav className="hidden items-center gap-7 md:flex">
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`group relative text-sm font-semibold tracking-wide transition-colors ${
                    isActive(link.href)
                      ? "text-[var(--color-accent-red)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-accent-red)]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 rounded-full bg-[var(--color-accent-red)] transition-all duration-300 ${
                      isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}

            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsCartOpen(true);
              }}
              className="relative flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 text-[var(--color-text)] shadow-sm transition-all hover:border-red-200 hover:text-[var(--color-accent-red)] hover:shadow-md"
              aria-label="Open cart"
            >
              <ShoppingBag data-cart-target className="h-5 w-5 md:h-[22px] md:w-[22px]" />
              <span className="hidden text-sm font-bold md:inline-block">Cart</span>
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 16 }}
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-yellow)] text-[10px] font-bold text-white shadow-md"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
            </nav>

            {/* Cart - Mobile only (right nav is hidden on mobile) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setIsCartOpen(true);
              }}
              className="relative flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-2 text-[var(--color-text)] shadow-sm transition-all hover:text-[var(--color-accent-red)] md:hidden"
              aria-label="Open cart"
            >
              <ShoppingBag data-cart-target className="h-5 w-5" />
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 16 }}
                  className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-accent-yellow)] text-[10px] font-bold text-white shadow-md"
                >
                  {itemCount}
                </motion.span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative flex h-full w-72 flex-col bg-[var(--color-primary)] shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
              <Link href="/" aria-label="Deedis - Go to homepage" onClick={() => setMenuOpen(false)} className="inline-flex items-center">
                <Image
                  src="/pickellogo.png"
                  alt="Deedis"
                  width={100}
                  height={40}
                  className="h-9 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[var(--color-secondary)]"
                aria-label="Close menu"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-semibold text-[var(--color-text)] transition-colors hover:bg-red-50 hover:text-[var(--color-accent-red)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-8">
              <button
                onClick={() => { setMenuOpen(false); setIsCartOpen(true); }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-accent-red)] py-3 font-bold text-white shadow-lg transition-colors hover:bg-red-700"
              >
                <ShoppingBag className="h-5 w-5" />
                View Cart {itemCount > 0 && `(${itemCount})`}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
