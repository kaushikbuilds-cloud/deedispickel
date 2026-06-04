import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { RotateCcw } from "lucide-react";

export const metadata = {
  title: "Refund Policy | Deedis",
  description: "Our refund and replacement policy for damaged or defective Deedis orders.",
};

const sections = [
  {
    title: "1. Damaged or Defective Items",
    body: "If your order arrives damaged, leaking, or compromised in any way, contact us within 48 hours of delivery. Email Deedishomefoods@gmail.com or WhatsApp us with clear photos of the item and packaging — we'll gladly send a free replacement or issue a full refund to your original payment method.",
  },
  {
    title: "2. Non-returnable Items",
    body: "For food-safety reasons, we cannot accept returns on food items once delivered, even if unopened.",
  },
  {
    title: "3. Cancellations",
    body: "You may cancel your order for a full refund any time before it ships. Once dispatched from our facility, an order cannot be cancelled.",
  },
  {
    title: "4. Refund Process",
    body: "Approved refunds (due to damage or defect) are processed and automatically applied to your original payment method within 5–7 business days.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-primary)]">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent-red)] text-white shadow-glow-red">
            <RotateCcw className="h-7 w-7" />
          </span>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-6xl">
            Refund <span className="text-gradient-spice">Policy</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
            Our products are perishable, so all sales are final — but your satisfaction is our priority.
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
