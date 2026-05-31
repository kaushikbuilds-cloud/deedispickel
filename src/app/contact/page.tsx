import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[var(--color-secondary)] py-20 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(var(--color-accent-red)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
              Let's Start a <span className="text-[var(--color-accent-red)] italic">Conversation</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-muted)] mb-8 leading-relaxed">
              Whether you have a question about our heritage recipes, need assistance with your order, or just want to share the joy of our pickles, we're here for you.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl -mt-10 lg:-mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-red-900/5 border border-red-50 hover:shadow-2xl hover:shadow-red-900/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[var(--color-accent-red)] shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-[var(--color-text)] mb-1">Call or WhatsApp</h3>
                  <p className="text-[var(--color-muted)] mb-3 text-sm">We're available to talk during business hours.</p>
                  <a href="https://wa.me/916383609055" className="inline-flex items-center gap-2 font-bold text-lg text-[var(--color-accent-red)] hover:text-red-700 transition-colors">
                    +91 63836 09055
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-amber-900/5 border border-amber-50 hover:shadow-2xl hover:shadow-amber-900/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-[var(--color-accent-yellow)] shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-[var(--color-text)] mb-1">Email Us</h3>
                  <p className="text-[var(--color-muted)] mb-3 text-sm">Send us an email anytime. We reply within 24 hours.</p>
                  <a href="mailto:Deedishomefoods@gmail.com" className="inline-flex items-center gap-2 font-bold text-lg text-[var(--color-accent-yellow)] hover:text-amber-600 transition-colors">
                    Deedishomefoods@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-stone-900/5 border border-stone-100 hover:shadow-2xl hover:shadow-stone-900/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-[var(--color-text)] shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-xl text-[var(--color-text)] mb-1">Visit Our Kitchen</h3>
                  <p className="text-[var(--color-muted)] mb-3 text-sm">Come experience the aroma of our traditional spices.</p>
                  <address className="not-italic text-[var(--color-text)] font-medium">
                    Deedi's Home Foods,<br/>
                    284, Segur Road, Ooty,<br/>
                    Nilgiris - 643006
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-stone-200/50 border border-stone-100 h-full flex flex-col justify-center">
              <h2 className="font-serif text-3xl font-bold text-[var(--color-text)] mb-2">Send us a message</h2>
              <p className="text-[var(--color-muted)] mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all bg-stone-50 focus:bg-white" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all bg-stone-50 focus:bg-white" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all bg-stone-50 focus:bg-white" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <select id="subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all bg-stone-50 focus:bg-white text-gray-700">
                    <option value="">How can we help you?</option>
                    <option value="order">Order Inquiry</option>
                    <option value="product">Product Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-red)] focus:border-transparent transition-all bg-stone-50 focus:bg-white resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-[var(--color-accent-red)] text-white font-medium text-lg py-4 rounded-xl shadow-lg shadow-red-900/20 hover:bg-red-700 hover:shadow-xl hover:shadow-red-900/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                  Send Message <Send className="w-5 h-5" />
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
