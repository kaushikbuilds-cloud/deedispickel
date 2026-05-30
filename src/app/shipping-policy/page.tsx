import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShippingPolicyPage() {
  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-accent-red)] mb-12 text-center">Shipping Policy</h1>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[var(--color-border)] prose prose-lg max-w-none text-gray-700">
          <p>
            At Deedis, we partner with reliable shipping providers like <strong>Shiprocket</strong> to ensure your handcrafted pickles reach you fresh and safe.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">1. Processing Time</h3>
          <p>
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">2. Domestic Shipping Rates and Estimates</h3>
          <p>
            Shipping charges for your order will be calculated and displayed at checkout. Standard delivery within India usually takes 3 to 7 business days depending on your location.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">3. International Shipping</h3>
          <p>
            We offer international shipping to select countries. International shipping rates and delivery estimates vary significantly by destination and will be calculated during checkout or communicated via WhatsApp before order confirmation. Please note that your order may be subject to import duties and taxes, which are incurred once a shipment reaches your destination country.
          </p>

          <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mt-8 mb-4">4. How do I check the status of my order?</h3>
          <p>
            When your order has shipped, you will receive an email or WhatsApp message from us which will include a tracking number you can use to check its status. You can also use the <strong>"Track Order"</strong> link in our website footer.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
