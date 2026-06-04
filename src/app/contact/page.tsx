"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const info = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    desc: "We're available during business hours.",
    value: "+91 63836 09055",
    href: "https://wa.me/916383609055",
    accent: "text-[var(--color-accent-red)]",
    bg: "bg-red-50",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "We reply within 24 hours.",
    value: "Deedishomefoods@gmail.com",
    href: "mailto:Deedishomefoods@gmail.com",
    accent: "text-[var(--color-saffron)]",
    bg: "bg-amber-50",
  },
  {
    icon: MapPin,
    title: "Visit Our Kitchen",
    desc: "Come experience the aroma of our spices.",
    value: "284, Segur Road, Ooty, Nilgiris — 643006",
    href: null,
    accent: "text-[var(--color-text)]",
    bg: "bg-stone-100",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text =
      `*New enquiry from Deedis website*%0A%0A` +
      `Name: ${form.firstName} ${form.lastName}%0A` +
      `Email: ${form.email || "N/A"}%0A` +
      `Subject: ${form.subject || "General"}%0A%0A` +
      `${form.message}`;
    window.open(`https://wa.me/916383609055?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-[var(--color-primary)]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)] py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <div className="pointer-events-none absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[var(--color-saffron)]/15 blur-[120px]" />
        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <span className="eyebrow eyebrow-center justify-center">We'd love to hear from you</span>
          <h1 className="mt-5 font-serif text-5xl font-black leading-tight tracking-tight text-[var(--color-text)] md:text-7xl">
            Let's start a <span className="text-gradient-spice">conversation.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            A question about our recipes, help with an order, or just sharing the love — we're here for you.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Info cards */}
          <div className="space-y-5 lg:col-span-5">
            {info.map(({ icon: Icon, title, desc, value, href, accent, bg }) => (
              <div key={title} className="rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-warm transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-5">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${bg} ${accent}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-text)]">{title}</h3>
                    <p className="mb-2 text-sm text-[var(--color-muted)]">{desc}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`font-bold ${accent} transition-colors hover:underline`}>
                        {value}
                      </a>
                    ) : (
                      <address className="not-italic font-medium text-[var(--color-text)]">{value}</address>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[var(--color-border)] bg-white p-7 shadow-warm-lg md:p-10">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-text)]">Send us a message</h2>
              <p className="mt-1 text-[var(--color-muted)]">Fill this in and we'll continue the chat on WhatsApp.</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Field label="First Name" id="firstName" placeholder="John" value={form.firstName} onChange={(v) => setForm({ ...form, firstName: v })} required />
                  <Field label="Last Name" id="lastName" placeholder="Doe" value={form.lastName} onChange={(v) => setForm({ ...form, lastName: v })} />
                </div>
                <Field label="Email Address" id="email" type="email" placeholder="john@example.com" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-[var(--color-text)]">Subject</label>
                  <select
                    id="subject"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)]"
                  >
                    <option value="">How can we help?</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Product Information">Product Information</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--color-text)]">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us more about your enquiry..."
                    className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)]"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-accent-red)] to-[var(--color-spice-dark)] py-4 text-lg font-bold text-white shadow-glow-red transition-all hover:-translate-y-0.5"
                >
                  Send Message <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function Field({
  label, id, value, onChange, placeholder, type = "text", required = false,
}: {
  label: string; id: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-semibold text-[var(--color-text)]">{label}</label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] transition-all focus:border-transparent focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)]"
      />
    </div>
  );
}
