"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MapPin, Phone, Mail, Send, Leaf, ShieldCheck, Truck, Globe2 } from "lucide-react";

const trust = [
  { icon: Leaf, label: "100% Natural" },
  { icon: ShieldCheck, label: "No Preservatives" },
  { icon: Truck, label: "Free Shipping ₹500+" },
  { icon: Globe2, label: "Ships Worldwide" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-ink)] text-white">
      {/* top gradient hairline */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--color-spice-dark)] via-[var(--color-accent-yellow)] to-[var(--color-spice)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Trust strip */}
        <div className="grid grid-cols-2 gap-4 border-b border-white/10 py-8 md:grid-cols-4">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 text-[var(--color-accent-yellow)]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-white/80">{label}</span>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-14 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" aria-label="Deedis - Go to homepage" className="mb-6 inline-block">
              <Image
                src="/pickellogo.png"
                alt="Deedis"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mb-6 max-w-sm leading-relaxed text-white/60">
              Premium handcrafted South Indian pickles from the hills of Ooty. Slow-cured, sun-dried, and sealed with five decades of tradition.
            </p>
            <div className="space-y-2.5 text-sm text-white/60">
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[var(--color-accent-yellow)]" /> 284, Segur Road, Ooty, Nilgiris — 643006</p>
              <a href="tel:+916383609055" className="flex items-center gap-3 transition-colors hover:text-white"><Phone className="h-4 w-4 text-[var(--color-accent-yellow)]" /> +91 63836 09055</a>
              <a href="mailto:Deedishomefoods@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white"><Mail className="h-4 w-4 text-[var(--color-accent-yellow)]" /> Deedishomefoods@gmail.com</a>
            </div>
          </div>

          {/* Shop */}
          <div className="md:col-span-2">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Shop</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/#shop" className="transition-colors hover:text-[var(--color-accent-yellow)]">All Pickles</Link></li>
              <li><Link href="/#shop" className="transition-colors hover:text-[var(--color-accent-yellow)]">Mango Pickles</Link></li>
              <li><Link href="/#shop" className="transition-colors hover:text-[var(--color-accent-yellow)]">Vegetable Pickles</Link></li>
              <li><Link href="/#shop" className="transition-colors hover:text-[var(--color-accent-yellow)]">Rice Pastes</Link></li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><Link href="/about" className="transition-colors hover:text-[var(--color-accent-yellow)]">About Us</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-[var(--color-accent-yellow)]">Contact Us</Link></li>
              <li>
                <a href="https://www.shiprocket.in/shipment-tracking/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[var(--color-accent-yellow)]">
                  Track Order <span className="rounded border border-white/20 px-1 text-xs">Shiprocket</span>
                </a>
              </li>
              <li><Link href="/shipping-policy" className="transition-colors hover:text-[var(--color-accent-yellow)]">Shipping Policy</Link></li>
              <li><Link href="/refund-policy" className="transition-colors hover:text-[var(--color-accent-yellow)]">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Stay in the loop</h4>
            <p className="mb-4 text-sm text-white/60">Recipes, new launches and members-only deals — straight to your inbox.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to our newsletter! (This is a working demo)");
                (e.target as HTMLFormElement).reset();
              }}
              className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 p-1 focus-within:border-[var(--color-accent-yellow)]"
            >
              <input
                required
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-white/40"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex shrink-0 items-center gap-1.5 rounded-full bg-[var(--color-accent-red)] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-red-600"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <a
              href="https://www.instagram.com/deedishomefoods?igsh=MWlkdHphdjQ2NHVqOQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/80 transition-colors hover:border-[var(--color-accent-yellow)] hover:text-white"
            >
              <FaInstagram className="h-4 w-4" /> @deedishomefoods
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Deedis Home Foods. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Handcrafted with <span className="text-[var(--color-accent-red)]">♥</span> in Ooty, Tamil Nadu
          </p>
        </div>
      </div>
    </footer>
  );
}
