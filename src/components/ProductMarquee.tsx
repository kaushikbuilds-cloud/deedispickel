"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export default function ProductMarquee() {
  // Duplicate the list so the strip loops seamlessly (track translates -50%).
  const loop = [...products, ...products];

  return (
    <section className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-secondary)] py-10 md:py-14">
      <div className="mb-7 text-center">
        <span className="eyebrow eyebrow-center justify-center">Handcrafted range · 14 recipes</span>
      </div>

      <div className="group relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--color-secondary)] to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--color-secondary)] to-transparent md:w-28" />

        <div className="flex w-max animate-marquee-x group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <Link
              key={i}
              href={`/product/${p.id}`}
              aria-label={p.name}
              aria-hidden={i >= products.length}
              tabIndex={i >= products.length ? -1 : 0}
              className="group/card mx-3 flex w-40 shrink-0 items-center justify-center md:w-52"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:shadow-warm md:h-60 md:p-7">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="240px"
                  className="object-contain transition-transform duration-500 ease-out group-hover/card:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
