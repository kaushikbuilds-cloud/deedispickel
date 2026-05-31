import Image from "next/image";
import { Leaf } from "lucide-react";

export default function StoryBanner() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch bg-[var(--color-secondary)] rounded-3xl overflow-hidden shadow-xl border border-[var(--color-border)]">
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[500px]">
            <Image src="/grandma.png" alt="Traditional Pickle Making" fill className="object-cover" />
          </div>
          <div className="w-full lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-[#fffbf2]">
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-6 h-6 text-[var(--color-accent-green)]" />
              <h2 className="font-sans text-sm tracking-widest font-bold uppercase text-[var(--color-accent-green)]">Our Heritage</h2>
            </div>
            <h3 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-accent-red)] mb-6 leading-tight">100 Years of Tradition in Every Jar</h3>
            <p className="text-[var(--color-text)] mb-8 leading-relaxed text-lg font-medium">
              Started in a small kitchen, our recipes have been passed down through generations. We use only the finest hand-picked ingredients, traditional spices, and cold-pressed oils.
            </p>
            <p className="text-[var(--color-muted)] mb-10 leading-relaxed">
              No artificial colors or preservatives. Just pure, authentic taste that reminds you of home. Every batch is sun-dried and crafted with love.
            </p>
            <div>
              <a href="/about" className="bg-transparent border-2 border-[var(--color-accent-red)] text-[var(--color-accent-red)] px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[var(--color-accent-red)] hover:text-white transition-colors duration-300 inline-block">
                Read Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
