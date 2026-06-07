"use client";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MessageCircle, ShieldCheck, Check, ArrowRight, ArrowLeft, Copy, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { getDeliveryCharge, getZoneForPincode, weightSlab, parseWeightToGrams, ZONE_LABEL } from "@/data/shipping";

// ─── Payment config — change these to your real values ───────────────
const UPI_VPA = "6381231706@superyes"; // where the money goes
const UPI_NAME = "Kaushik S";          // payee name shown in UPI apps
const WHATSAPP_NUMBER = "916383609055";
// Delivery rates live in src/data/shipping.ts (by pincode zone + weight).
// ─────────────────────────────────────────────────────────────────────

const fmtWeight = (g: number) => (g >= 1000 ? `${g / 1000}kg` : `${g}g`);

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [txnId, setTxnId] = useState("");
  const [copied, setCopied] = useState(false);
  const [placing, setPlacing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    address: "", city: "", state: "", pincode: "", country: "India",
  });

  useEffect(() => { setMounted(true); }, []);

  const cartGrams = cart.reduce((g, i) => g + parseWeightToGrams(i.weight) * i.quantity, 0);
  const pincodeFilled = /^\d{6}$/.test(formData.pincode.trim());
  const zone = getZoneForPincode(formData.pincode);
  // null = pincode not yet a serviced zone (out of coverage / not filled)
  const deliveryFee = cart.length ? getDeliveryCharge(formData.pincode, cartGrams) : null;
  const grandTotal = cartTotal + (deliveryFee ?? 0);
  const upiUri =
    `upi://pay?pa=${encodeURIComponent(UPI_VPA)}&pn=${encodeURIComponent(UPI_NAME)}` +
    `&am=${grandTotal.toFixed(2)}&cu=INR&tn=${encodeURIComponent("Deedis Order")}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const goToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_VPA);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0 || !txnId.trim()) return;

    let message = `*New Order — Deedis*\n\n`;
    message += `*Customer:*\n`;
    message += `Name: ${formData.firstName} ${formData.lastName}\n`;
    message += `Phone: ${formData.phone}\n`;
    message += `Email: ${formData.email || "N/A"}\n`;
    message += `Address: ${formData.address}, ${formData.city}, ${formData.state} - ${formData.pincode}\n`;
    message += `Country: ${formData.country}\n\n`;
    message += `*Order:*\n`;
    cart.forEach((item) => {
      message += `- ${item.quantity}x ${item.name} (${item.weight}) — ₹${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\nSubtotal: ₹${cartTotal.toFixed(2)}\n`;
    if (deliveryFee != null) {
      message += `Delivery (${formData.pincode}, ${(cartGrams / 1000).toFixed(2)}kg): ₹${deliveryFee.toFixed(2)}\n`;
      message += `*Total Paid: ₹${grandTotal.toFixed(2)}*\n\n`;
    } else {
      message += `Delivery: to be confirmed for pincode ${formData.pincode}\n`;
      message += `*Paid now (excl. delivery): ₹${grandTotal.toFixed(2)}*\n\n`;
    }
    message += `*Payment:* Paid via UPI to ${UPI_VPA}\n`;
    message += `*Transaction ID / Ref:* ${txnId.trim()}\n\n`;
    message += `Please confirm my order. Thank you!`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setPlacing(true);
    setTimeout(() => {
      clearCart();
      window.location.href = url; // same-tab avoids pop-up blockers
    }, 2300);
  };

  if (!mounted) return null;

  const empty = cart.length === 0;

  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <AnimatePresence>{placing && <RedirectingOverlay />}</AnimatePresence>
      <Header />

      <div className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Title + step indicator */}
        <div className="mb-10 text-center">
          <span className="eyebrow eyebrow-center justify-center">Almost there</span>
          <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
            Secure <span className="text-gradient-spice">Checkout</span>
          </h1>
          <Stepper step={step} />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* LEFT: step content */}
          <div className="w-full lg:w-2/3">
            {step === 1 ? (
              <div className="rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-warm md:p-9">
                <h2 className="mb-8 border-b border-[var(--color-border)] pb-4 font-serif text-2xl font-bold text-[var(--color-text)] md:text-3xl">
                  Delivery Details
                </h2>
                <form onSubmit={goToPayment} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="First Name *" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="John" required />
                    <Field label="Last Name *" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Doe" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" required />
                    <Field label="Email (Optional)" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                  <Field label="Full Delivery Address *" name="address" value={formData.address} onChange={handleChange} placeholder="House/Flat No., Street, Landmark" required />
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="City *" name="city" value={formData.city} onChange={handleChange} placeholder="Ooty" required />
                    <Field label="State/Province *" name="state" value={formData.state} onChange={handleChange} placeholder="Tamil Nadu" required />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Field label="Pincode *" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="643006" required />
                    <div className="space-y-2">
                      <label htmlFor="country" className="block text-sm font-semibold text-gray-700">Country *</label>
                      <select id="country" name="country" value={formData.country} onChange={handleChange} required
                        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)]">
                        {["India","United States","United Kingdom","Canada","Australia","United Arab Emirates","Singapore","Other"].map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button type="submit" disabled={empty}
                    className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-red)] to-[var(--color-spice-dark)] py-4 text-lg font-bold text-white shadow-glow-red transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0">
                    Continue to Payment <ArrowRight className="h-5 w-5" />
                  </button>
                  {empty && <p className="text-center text-sm text-[var(--color-muted)]">Your cart is empty.</p>}
                </form>
              </div>
            ) : (
              <div className="rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-warm md:p-9">
                <button onClick={() => setStep(1)} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent-red)]">
                  <ArrowLeft className="h-4 w-4" /> Edit delivery details
                </button>

                <h2 className="font-serif text-2xl font-bold text-[var(--color-text)] md:text-3xl">
                  Pay <span className="text-[var(--color-accent-red)]">₹{grandTotal.toFixed(2)}</span> to confirm
                </h2>
                <p className="mt-2 text-[var(--color-muted)]">
                  Scan the QR with any UPI app (GPay, PhonePe, Paytm…), or tap to pay on mobile. Then paste your transaction ID below.
                </p>
                {deliveryFee == null && (
                  <p className="mt-3 rounded-xl border border-[var(--color-accent-yellow)]/30 bg-amber-50 px-4 py-3 text-sm text-[var(--color-text)]">
                    This amount covers your items. Delivery to pincode <b>{formData.pincode || "—"}</b> isn't auto-calculated for your area — we'll confirm the delivery charge with you on WhatsApp.
                  </p>
                )}

                {/* Payment card */}
                <div className="mt-7 grid grid-cols-1 gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-secondary)] p-6 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="mx-auto rounded-2xl bg-white p-4 shadow-sm">
                    <QRCodeSVG value={upiUri} size={170} level="M" bgColor="#ffffff" fgColor="#1c130d" />
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">Pay to</p>
                    <p className="font-serif text-xl font-bold text-[var(--color-text)]">{UPI_NAME}</p>
                    <button onClick={copyUpi} className="mt-2 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-sm font-semibold text-[var(--color-text)] transition-colors hover:border-[var(--color-accent-red)]">
                      {UPI_VPA}
                      {copied ? <Check className="h-4 w-4 text-[var(--color-accent-green)]" /> : <Copy className="h-4 w-4 text-[var(--color-muted)]" />}
                    </button>
                    <a href={upiUri} className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[var(--color-ink)] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5 sm:inline-flex">
                      <Smartphone className="h-4 w-4" /> Pay ₹{grandTotal.toFixed(2)} via UPI app
                    </a>
                  </div>
                </div>

                {/* Transaction ID */}
                <form onSubmit={handlePlaceOrder} className="mt-8">
                  <label htmlFor="txn" className="block text-sm font-semibold text-[var(--color-text)]">
                    Transaction ID / UTR / Payment link *
                  </label>
                  <input
                    id="txn"
                    value={txnId}
                    onChange={(e) => setTxnId(e.target.value)}
                    required
                    placeholder="e.g. 4012 3456 7890 or your payment link"
                    className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)]"
                  />
                  <p className="mt-2 text-xs text-[var(--color-muted)]">
                    After paying, copy the reference number from your UPI app's payment history and paste it here.
                  </p>

                  <button
                    type="submit"
                    disabled={empty || !txnId.trim()}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#1ebe5d] disabled:opacity-50 disabled:hover:translate-y-0"
                  >
                    <MessageCircle className="h-6 w-6" />
                    {placing ? "Opening WhatsApp…" : "Place Order on WhatsApp"}
                  </button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-[var(--color-muted)]">
                    <ShieldCheck className="h-4 w-4" />
                    <span>We'll confirm your paid order on WhatsApp right away.</span>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* RIGHT: order summary */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28 rounded-3xl border border-[var(--color-border)] bg-[var(--color-secondary)] p-7 shadow-warm md:p-8">
              <h2 className="mb-6 font-serif text-2xl font-bold text-[var(--color-text)]">Order Summary</h2>
              {empty ? (
                <p className="py-4 text-center text-[var(--color-muted)]">Your cart is empty.</p>
              ) : (
                <>
                  <div className="mb-6 max-h-[40vh] space-y-4 overflow-y-auto pr-2">
                    {cart.map((item) => (
                      <div key={`${item.id}-${item.weight}`} className="flex gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 rounded-md border border-[var(--color-border)] bg-white">
                          <Image src={item.image} alt={item.name} fill className="object-contain p-1" />
                          <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-700 text-[10px] font-bold text-white">{item.quantity}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="line-clamp-2 text-sm font-bold text-[var(--color-text)]">{item.name}</h4>
                          <p className="mt-1 text-xs text-[var(--color-muted)]">{item.weight}</p>
                        </div>
                        <div className="text-sm font-bold">₹{(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 border-t border-[var(--color-border)] pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[var(--color-muted)]">Subtotal</span>
                      <span className="font-bold">₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-start justify-between text-sm">
                      <span className="text-[var(--color-muted)]">Delivery</span>
                      <span className="text-right font-bold">
                        {!pincodeFilled ? (
                          <span className="font-medium text-[var(--color-muted)]">Enter pincode</span>
                        ) : deliveryFee == null ? (
                          <span className="font-medium text-[var(--color-muted)]">Confirmed on WhatsApp</span>
                        ) : (
                          <>
                            ₹{deliveryFee.toFixed(2)}
                            <span className="block text-[11px] font-normal text-[var(--color-muted)]">
                              {zone ? ZONE_LABEL[zone] : ""} · {fmtWeight(weightSlab(cartGrams))}
                            </span>
                          </>
                        )}
                      </span>
                    </div>
                    <div className="flex items-end justify-between border-t border-[var(--color-border)] pt-3">
                      <span className="text-lg font-bold">Total</span>
                      <span className="font-serif text-2xl font-extrabold text-[var(--color-accent-red)]">₹{grandTotal.toFixed(2)}</span>
                    </div>
                    <p className="pt-1 text-center text-xs text-[var(--color-muted)]">
                      {deliveryFee != null
                        ? "Prepaid via UPI · delivery included"
                        : pincodeFilled
                        ? "Delivery for your area is confirmed on WhatsApp"
                        : "Enter your pincode to calculate delivery"}
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

function Stepper({ step }: { step: 1 | 2 }) {
  const items = [
    { n: 1, label: "Address" },
    { n: 2, label: "Payment" },
  ];
  return (
    <div className="mt-6 flex items-center justify-center gap-3">
      {items.map((it, i) => (
        <div key={it.n} className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold transition-colors ${
              step >= it.n ? "bg-[var(--color-accent-red)] text-white" : "bg-[var(--color-cream)] text-[var(--color-muted)]"
            }`}>
              {step > it.n ? <Check className="h-4 w-4" /> : it.n}
            </span>
            <span className={`text-sm font-semibold ${step >= it.n ? "text-[var(--color-text)]" : "text-[var(--color-muted)]"}`}>{it.label}</span>
          </div>
          {i === 0 && <span className={`h-px w-8 ${step === 2 ? "bg-[var(--color-accent-red)]" : "bg-[var(--color-border)]"}`} />}
        </div>
      ))}
    </div>
  );
}

function Field({
  label, name, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">{label}</label>
      <input
        id={name} name={name} type={type} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)]"
      />
    </div>
  );
}

function RedirectingOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-surface)] px-6 text-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
    >
      {/* WhatsApp badge with a pulsing ring */}
      <motion.div
        initial={{ scale: 0 }} animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.05 }}
        className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#0e8a4f] shadow-warm-lg"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/30 blur-2xl" />
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{ scale: [1, 1.45], opacity: [0.6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
        />
        <FaWhatsapp className="h-14 w-14 text-white" />
      </motion.div>

      <motion.h2 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}
        className="relative z-10 mt-8 font-serif text-4xl font-black text-[var(--color-text)] md:text-5xl">
        Almost there!
      </motion.h2>
      <motion.p initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.38 }}
        className="relative z-10 mt-3 max-w-sm leading-relaxed text-[var(--color-muted)]">
        We're opening WhatsApp with your order &amp; payment details. Just tap{" "}
        <span className="font-bold text-[var(--color-accent-green)]">Send</span> there to confirm your order — we'll reply right away.
      </motion.p>

      <div className="relative z-10 mt-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-muted)]">
        Opening WhatsApp
        <span className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.span key={i} className="h-1.5 w-1.5 rounded-full bg-[#25D366]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }} />
          ))}
        </span>
      </div>
    </motion.div>
  );
}
