"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t-4 border-[var(--color-accent-red)]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div>
            <a href="/" aria-label="Deedis - Go to homepage" className="inline-block mb-6">
              <Image
                src="/pickellogo.png"
                alt="Deedis"
                width={130}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 mb-4 font-medium">
              Bringing the authentic taste of tradition to your kitchen. 100% natural, homemade style pickles.
            </p>
            <div className="text-gray-400 mb-6 space-y-2 text-sm">
              <p>📍 Ooty, Tamil Nadu, India</p>
              <p>📞 +91 63836 09055</p>
              <p>✉️ Deedishomefoods@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/deedishomefoods?igsh=MWlkdHphdjQ2NHVqOQ=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--color-accent-red)] transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/#shop" className="hover:text-[var(--color-accent-yellow)] transition-colors">All Pickles</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about" className="hover:text-[var(--color-accent-yellow)] transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-[var(--color-accent-yellow)] transition-colors">Contact Us</a></li>
              <li><a href="https://www.shiprocket.in/shipment-tracking/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-yellow)] transition-colors flex items-center gap-2">Track Order <span className="text-xs border border-gray-600 px-1 rounded">Shiprocket</span></a></li>
              <li><a href="/shipping-policy" className="hover:text-[var(--color-accent-yellow)] transition-colors">Shipping Policy</a></li>
              <li><a href="/refund-policy" className="hover:text-[var(--color-accent-yellow)] transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to our newsletter! (This is a working demo)");
                (e.target as HTMLFormElement).reset();
              }}
              className="flex"
            >
              <input required type="email" placeholder="Enter your email address" className="bg-white text-gray-900 px-4 py-2 w-full rounded-l outline-none focus:ring-1 focus:ring-[var(--color-accent-red)] border-none" />
              <button type="submit" className="bg-[var(--color-accent-red)] text-white px-4 py-2 rounded-r font-bold hover:bg-red-700 transition-colors">Subscribe</button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Deedis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
