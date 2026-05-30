"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Priya S.", country: "USA 🇺🇸", review: "The closest thing to my grandmother's pickle. Absolutely phenomenal quality and packaging." },
  { name: "Rahul M.", country: "UK 🇬🇧", review: "Worth every penny. The gongura pickle is incredibly authentic. Shipping was surprisingly fast." },
  { name: "Anita K.", country: "Australia 🇦🇺", review: "Premium experience from unboxing to tasting. The garlic pickle is out of this world!" },
  { name: "Vikram R.", country: "Canada 🇨🇦", review: "You can taste the purity of the gingelly oil. It's a luxury product that delivers on its promise." },
];

export default function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-surface)] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-5/12">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] mb-6 leading-none">
              LOVED <span className="font-display italic text-stroke text-[var(--color-accent)]">GLOBALLY.</span>
            </h2>
            <div className="flex items-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-[var(--color-accent)] fill-[var(--color-accent)]" />
              ))}
            </div>
            <p className="text-[var(--color-text)] font-sans text-3xl font-bold mb-4">5,000+ Happy Customers</p>
            <p className="text-[var(--color-muted)] font-sans text-lg font-light">Delivering authentic South Indian flavors to doorsteps worldwide.</p>
          </div>

          <div className="w-full md:w-7/12 relative h-[350px]">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: i === currentIndex ? 1 : 0, 
                  x: i === currentIndex ? 0 : (i < currentIndex ? -100 : 100),
                  zIndex: i === currentIndex ? 10 : 0,
                  pointerEvents: i === currentIndex ? "auto" : "none"
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="glass-card p-10 md:p-14 rounded-[2.5rem] h-full flex flex-col justify-center border border-[var(--color-accent)]/10 bg-[#020502]/40">
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={i === currentIndex ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                      >
                        <Star className="w-5 h-5 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-serif text-2xl md:text-4xl text-[var(--color-text)] mb-8 leading-tight italic">
                    "{review.review}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)] font-display text-xl font-bold border border-[var(--color-accent)]/30">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-[var(--color-text)] tracking-wider uppercase text-sm">{review.name}</h4>
                      <p className="font-sans text-[var(--color-muted)] text-sm">{review.country}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
