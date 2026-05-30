"use client";

import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart, cartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
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
    const whatsappNumber = "917550247641"; 
    
    // Open WhatsApp in a new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
    
    // Clear the cart and redirect to home page
    clearCart();
    router.push("/");
  };

  if (!mounted) return null;

  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[var(--color-border)]">
              <h1 className="font-serif text-3xl font-bold text-[var(--color-text)] mb-8 border-b pb-4">Delivery Details</h1>
              
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
                  disabled={cart.length === 0}
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#128C7E] hover:shadow-lg transition-all duration-300 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <MessageCircle className="w-6 h-6" />
                  Place Order via WhatsApp
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
            <div className="bg-[var(--color-secondary)] p-8 rounded-2xl shadow-sm border border-[var(--color-border)] sticky top-28">
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
                      <span className="text-gray-600">Shipping</span>
                      <span className="text-gray-500">To be calculated</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-end">
                      <span className="font-bold text-lg">Total</span>
                      <span className="font-extrabold text-2xl text-[var(--color-accent-red)]">₹{cartTotal.toFixed(2)}</span>
                    </div>
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
