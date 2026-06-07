"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { products } from "@/data/products";

// Fluid sizing — scales smoothly from phone to desktop, correct on first paint.
const stageVars = {
  "--cf-w": "clamp(150px, 18vw, 230px)",   // item width
  "--cf-h": "clamp(200px, 23vw, 300px)",   // item height
  "--cf-gap": "clamp(96px, 14vw, 175px)",  // spacing between items
} as React.CSSProperties;

export default function ProductCoverflow() {
  const n = products.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % n), 2000);
    return () => clearInterval(id);
  }, [paused, n]);

  // signed shortest distance from the active item (wraps around)
  const offset = (i: number) => {
    let d = i - active;
    if (d > n / 2) d -= n;
    if (d < -n / 2) d += n;
    return d;
  };

  const go = (dir: number) => setActive((a) => (a + dir + n) % n);
  const activeProduct = products[active];

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-border)] bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-surface)] py-14 md:py-24">
      {/* warm glow behind the centre jar */}
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-saffron)]/20 blur-[100px] md:h-72 md:w-72" />

      <div className="relative z-10 mx-auto mb-8 max-w-2xl px-4 text-center md:mb-10">
        <span className="eyebrow eyebrow-center justify-center">Handcrafted Range</span>
        <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
          Explore the <span className="text-gradient-spice">collection</span>
        </h2>
      </div>

      {/* Coverflow stage */}
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ ...stageVars, height: "calc(var(--cf-h) + 1.5rem)", perspective: "1200px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {products.map((p, i) => {
          const d = offset(i);
          const abs = Math.abs(d);
          const visible = abs <= 2;
          const isCenter = d === 0;
          const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.64;
          const rotateY = isCenter ? 0 : d > 0 ? -42 : 42;
          return (
            <div
              key={p.id}
              className="absolute left-1/2 top-1/2"
              style={{
                width: "var(--cf-w)",
                height: "var(--cf-h)",
                marginLeft: "calc(var(--cf-w) / -2)",
                marginTop: "calc(var(--cf-h) / -2)",
                transform: `translateX(calc(var(--cf-gap) * ${d})) scale(${scale}) rotateY(${rotateY}deg)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), opacity 0.45s ease",
                opacity: visible ? (isCenter ? 1 : 0.55) : 0,
                zIndex: 20 - abs,
                pointerEvents: visible ? "auto" : "none",
                cursor: "pointer",
              }}
              onClick={() => (isCenter ? router.push(`/product/${p.id}`) : setActive(i))}
              aria-label={p.name}
            >
              <div
                className={`relative h-full w-full overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-white p-5 md:rounded-[1.75rem] md:p-7 ${
                  isCenter ? "shadow-warm-lg" : "shadow-sm"
                }`}
              >
                <Image src={p.image} alt={p.name} fill sizes="(max-width: 768px) 45vw, 260px" className="object-contain" />
                {!isCenter && <div className="absolute inset-0 bg-[var(--color-secondary)]/30" />}
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="relative z-10 mt-8 flex items-center justify-center gap-4 px-4 md:mt-10 md:gap-5">
        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] shadow-sm transition-colors hover:border-[var(--color-accent-red)] hover:text-[var(--color-accent-red)]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <Link href={`/product/${activeProduct.id}`} className="btn-primary !px-6 !py-3.5 text-xs sm:!px-8 sm:text-sm">
          View Product
          <ArrowRight className="h-4 w-4" />
        </Link>

        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] shadow-sm transition-colors hover:border-[var(--color-accent-red)] hover:text-[var(--color-accent-red)]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-1.5 px-6 md:mt-7 md:gap-2">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show product ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === active ? "w-6 bg-[var(--color-accent-red)] md:w-7" : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-muted)]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
