import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

export const metadata = {
  title: "Shipping Policy | Deedis",
  description: "How and when your handcrafted Deedis pickles reach you, in India and worldwide.",
};

const sections = [
  {
    title: "1. Processing Time",
    body: "All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation. You'll receive another notification once your order has shipped.",
  },
  {
    title: "2. Domestic Shipping Rates & Estimates",
    body: "Shipping charges are calculated and displayed at checkout. Standard delivery within India usually takes 3 to 7 business days depending on your location.",
  },
  {
    title: "3. International Shipping",
    body: "We ship to select countries worldwide. International rates and delivery estimates vary by destination and are calculated at checkout or shared via WhatsApp before confirmation. Orders may be subject to import duties and taxes once they reach the destination country.",
  },
  {
    title: "4. Tracking Your Order",
    body: "Once shipped, you'll receive an email or WhatsApp message with a tracking number. You can also use the \"Track Order\" link in our website footer (powered by Shiprocket).",
  },
];

export default function ShippingPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-primary)]">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent-red)] text-white shadow-glow-red">
            <Truck className="h-7 w-7" />
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-6xl">
            Shipping <span className="text-gradient-spice">Policy</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
            We partner with reliable providers like Shiprocket so your pickles arrive fresh and safe.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-3xl px-4 py-14 md:px-8">
        <div className="space-y-5">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 md:p-8">
              <h2 className="font-serif text-xl font-bold text-[var(--color-text)] md:text-2xl">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-[var(--color-muted)]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
