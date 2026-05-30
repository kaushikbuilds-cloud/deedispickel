import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-accent-red)] mb-12 text-center">Refund Policy</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--color-border)] prose prose-lg max-w-none text-gray-700">
          <p>
            Due to the perishable nature of our premium food products, all sales are considered final. However, customer satisfaction is our highest priority at Deedis.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">1. Damaged or Defective Items</h3>
          <p>
            If your order arrives damaged, leaking, or compromised in any way, please contact us within 48 hours of delivery. Email us at <strong>hello@deedis.com</strong> or WhatsApp us with clear photos of the damaged item and packaging. We will gladly send a free replacement or issue a full refund to your original payment method.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">2. Non-returnable Items</h3>
          <p>
            For food safety reasons, we cannot accept returns on any food items once they have been delivered, even if unopened. 
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">3. Cancellations</h3>
          <p>
            You may cancel your order for a full refund at any time before it has shipped. Once the order has been dispatched from our facility, it cannot be cancelled.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">4. Refunds Process</h3>
          <p>
            If your refund request is approved due to damage or defect, the refund will be processed and automatically applied to your original method of payment within 5-7 business days.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
