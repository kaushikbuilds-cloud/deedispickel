"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldBan, ChefHat, PackageCheck, Globe2, BookOpen } from "lucide-react";

const features = [
  { icon: Leaf, title: "100% Natural", desc: "No artificial colors or flavors. Just pure nature." },
  { icon: ShieldBan, title: "No Preservatives", desc: "Naturally preserved using traditional sun-drying methods." },
  { icon: ChefHat, title: "Made Fresh To Order", desc: "Prepared in small batches to ensure maximum freshness." },
  { icon: PackageCheck, title: "Vacuum Sealed", desc: "Premium glass jars sealed to lock in the aroma and taste." },
  { icon: Globe2, title: "Worldwide Delivery", desc: "Bringing the taste of home to every corner of the world." },
  { icon: BookOpen, title: "Traditional Recipe", desc: "A century-old family secret passed down with love." },
];

export default function WhyDeedis() {
  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-primary)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 md:mb-32">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] mb-6 leading-none">
            WHY <span className="font-display italic text-stroke text-[var(--color-accent)]">CHOOSE US.</span>
          </h2>
        </div>

        <div className="flex flex-col border-t border-[var(--color-text)]/10">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="group flex flex-col md:flex-row items-start md:items-center py-10 md:py-16 border-b border-[var(--color-text)]/10 hover:bg-[var(--color-surface)] transition-colors duration-500 cursor-default"
              >
                <div className="w-full md:w-1/4 mb-6 md:mb-0 px-6">
                  <span className="font-display text-2xl text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">0{i + 1}</span>
                </div>
                
                <div className="w-full md:w-2/4 px-6 flex items-center gap-6 mb-4 md:mb-0">
                  <div className="w-12 h-12 rounded-full border border-[var(--color-accent)]/30 flex items-center justify-center group-hover:bg-[var(--color-accent)] group-hover:text-[#020502] transition-colors duration-500">
                    <Icon className="w-5 h-5 text-[var(--color-accent)] group-hover:text-[#020502] transition-colors" />
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl text-[var(--color-text)] tracking-tight">{item.title}</h3>
                </div>

                <div className="w-full md:w-1/4 px-6">
                  <p className="text-[var(--color-muted)] font-sans text-lg font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
