"use client";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MessageCircle, ShieldCheck, Truck, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [placing, setPlacing] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    let message = `*New Order Request from Deedis*\n\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${formData.firstName} ${formData.lastName}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Email: ${formData.email || "N/A"}\n`;
    message += `Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}\n`;
    message += `Country: ${formData.country}\n\n`;

    message += `*Order Summary:*\n`;
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (₹${item.price.toFixed(2)} each)\n`;
    });
    
    message += `\n*Total Order Value: ₹${cartTotal.toFixed(2)}*\n\n`;
    message += `Please confirm my order and share the payment details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "916383609055";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Play the success animation, then hand off to WhatsApp.
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      // Same-tab navigation avoids pop-up blockers after the delay.
      window.location.href = whatsappUrl;
    }, 2300);
  };

  if (!mounted) return null;

  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <AnimatePresence>{placing && <OrderPlacedOverlay />}</AnimatePresence>
      <Header />
      
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <div className="mb-10 text-center">
          <span className="eyebrow eyebrow-center justify-center">Almost there</span>
          <h1 className="mt-3 font-serif text-4xl md:text-5xl font-bold tracking-tight text-[var(--color-text)]">
            Secure <span className="text-gradient-spice">Checkout</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-7 md:p-9 rounded-3xl shadow-warm border border-[var(--color-border)]">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8 border-b border-[var(--color-border)] pb-4">Delivery Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                    <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                    <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address (Optional)</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Delivery Address *</label>
                  <input required type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="House/Flat No., Street Name, Landmark" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                    <input required type="text" name="city" value={formData.city} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="Hyderabad" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">State/Province *</label>
                    <input required type="text" name="state" value={formData.state} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="Telangana" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Pincode/Zipcode *</label>
                    <input required type="text" name="pincode" value={formData.pincode} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all" placeholder="500001" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                    <select aria-label="Country" required name="country" value={formData.country} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all bg-white">
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other (Specify in Address)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={cart.length === 0 || placing}
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-6 h-6" />
                  {placing ? "Placing your order…" : "Place Order via WhatsApp"}
                </button>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Your details are secure. No payment required right now.</span>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-[var(--color-secondary)] p-7 md:p-8 rounded-3xl shadow-warm border border-[var(--color-border)] sticky top-28">
              <h2 className="font-serif text-2xl font-bold text-[var(--color-text)] mb-6">Order Summary</h2>
              
              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
              ) : (
                <>
                  <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 mb-6">
                    {cart.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="relative w-16 h-16 bg-white rounded-md border flex-shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                          <span className="absolute -top-2 -right-2 bg-gray-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{item.quantity}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-sm text-[var(--color-text)] line-clamp-2">{item.name}</h4>
                          <p className="text-xs text-gray-500 mt-1">{item.weight}</p>
                        </div>
                        <div className="font-bold text-sm">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-bold">₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Delivery</span>
                      <span className="font-semibold text-[var(--color-text)]">Added after confirmation</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-end">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-extrabold text-2xl text-[var(--color-accent-red)]">₹{cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Delivery charge note */}
                  <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[var(--color-accent-yellow)]/30 bg-amber-50 p-4">
                    <Truck className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent-yellow)]" />
                    <p className="text-sm leading-relaxed text-[var(--color-text)]">
                      <span className="font-bold">Delivery charges are not included.</span> They depend on your
                      location and will be added after you confirm your order on WhatsApp.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}

const confettiColors = ["#d32f2f", "#e0962a", "#2e7d32", "#b4231a", "#f59e0b", "#7d160f"];

function OrderPlacedOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-surface)] px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Confetti */}
      {Array.from({ length: 18 }).map((_, i) => {
        const left = 50 + (Math.random() * 64 - 32);
        const size = 7 + Math.random() * 9;
        return (
          <motion.span
            key={i}
            className="absolute rounded-[2px]"
            style={{ left: `${left}%`, top: "44%", width: size, height: size * 1.5, background: confettiColors[i % confettiColors.length] }}
            initial={{ y: 0, opacity: 0, rotate: 0 }}
            animate={{ y: [0, -120 - Math.random() * 90, 280], opacity: [0, 1, 0], rotate: Math.random() * 420 - 210 }}
            transition={{ duration: 1.7, delay: Math.random() * 0.25, ease: "easeOut" }}
          />
        );
      })}

      {/* Check badge */}
      <motion.div
        initial={{ scale: 0, rotate: -25 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 15, delay: 0.1 }}
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent-green)] to-emerald-700 shadow-warm-lg"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent-green)]/30 blur-2xl" />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.35, type: "spring", stiffness: 300, damping: 13 }}
        >
          <Check className="h-14 w-14 text-white" strokeWidth={3} />
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 mt-8 font-serif text-4xl font-black text-[var(--color-text)] md:text-5xl"
      >
        Order Placed!
      </motion.h2>
      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.42 }}
        className="relative z-10 mt-3 max-w-sm text-[var(--color-muted)]"
      >
        Taking you to WhatsApp to confirm your order and delivery charge…
      </motion.p>

      <div className="relative z-10 mt-7 flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent-red)]"
            animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  );
}
