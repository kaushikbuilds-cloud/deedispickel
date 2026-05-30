"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";

export default function InstagramFeed() {
  const posts = [
    { src: "/ingredients.png", span: "md:col-span-2 md:row-span-2" },
    { src: "/product.png", span: "md:col-span-1 md:row-span-1" },
    { src: "/hero_jar.png", span: "md:col-span-1 md:row-span-1" },
    { src: "/grandma.png", span: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-secondary)]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--color-text)] mb-4 leading-none">
              THE <span className="font-display text-stroke italic text-[var(--color-accent)]">COMMUNITY.</span>
            </h2>
            <p className="text-[var(--color-muted)] font-sans text-lg font-light">
              Follow us on Instagram for recipes, behind-the-scenes, and more.
            </p>
          </div>
          <button className="px-8 py-4 glass-card text-white font-bold tracking-widest text-sm uppercase rounded-full border border-[var(--color-accent)]/30 hover:bg-[var(--color-accent)] hover:text-[#020502] transition-colors flex items-center gap-3 shrink-0">
            <FaInstagram className="w-5 h-5" /> @deedis
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[700px]">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer border border-white/5 ${post.span}`}
            >
              <Image src={post.src} alt={`Instagram post ${i}`} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-[#020502]/60 group-hover:bg-[#020502]/20 transition-colors duration-500 flex items-center justify-center">
                <FaInstagram className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-50 group-hover:scale-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
