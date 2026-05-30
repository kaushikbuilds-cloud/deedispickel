import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-5xl">
        <h1 className="font-serif text-5xl font-bold text-[var(--color-accent-red)] mb-4 text-center">Contact Us</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">We'd love to hear from you! Whether you have a question about our products, need help with an order, or just want to share your feedback, our team is ready to assist.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-[var(--color-accent-red)]">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mb-2">Call Us / WhatsApp</h3>
            <p className="text-gray-600">+91 755 024 7641</p>
            <p className="text-sm text-gray-400 mt-2">Mon-Sat, 9AM to 6PM</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-[var(--color-accent-red)]">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mb-2">Email Us</h3>
            <p className="text-gray-600">hello@deedis.com</p>
            <p className="text-sm text-gray-400 mt-2">We reply within 24 hours</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)] text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6 text-[var(--color-accent-red)]">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[var(--color-text)] mb-2">Visit Us</h3>
            <p className="text-gray-600">Deedis Kitchens,<br/>Banjara Hills, Hyderabad,<br/>Telangana 500034</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
