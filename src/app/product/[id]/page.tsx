import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import { Star, Truck, Leaf, ShieldCheck, ChevronRight, Globe2 } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

const loveReasons = [
  { icon: Leaf, title: "100% Natural", desc: "No colours or preservatives" },
  { icon: ShieldCheck, title: "Small Batch", desc: "Made fresh to order" },
  { icon: Globe2, title: "Ships Worldwide", desc: "Sealed fresh from Ooty" },
];

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4);
  const relatedToShow = related.length >= 2 ? related : fallbackRelated;
  const minPrice = product.variants[0].price;
  const maxPrice = product.variants[product.variants.length - 1].price;

  return (
    <main className="min-h-screen bg-[var(--color-primary)]">
      <Header />

      <div className="container mx-auto max-w-6xl px-4 py-10 md:px-8 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-[var(--color-muted)]">
          <Link href="/" className="transition-colors hover:text-[var(--color-accent-red)]">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/#shop" className="transition-colors hover:text-[var(--color-accent-red)]">Shop</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="max-w-[200px] truncate font-medium text-[var(--color-text)]">{product.name}</span>
        </nav>

        <div className="flex flex-col gap-10 md:flex-row md:gap-14 lg:gap-20">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-cream)]/50 p-10">
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-spice)] shadow-sm backdrop-blur">
                {product.category}
              </span>
              <span className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-bold text-[var(--color-text)] shadow-sm backdrop-blur">
                <Star className="h-4 w-4 fill-[var(--color-accent-yellow)] text-[var(--color-accent-yellow)]" /> 4.9
              </span>
              <div id="pdp-image" className="relative h-full w-full drop-shadow-2xl">
                <Image src={product.image} alt={product.name} fill className="object-contain" priority />
              </div>
            </div>

            {/* Trust row */}
            <div className="mt-5 grid grid-cols-3 gap-3">
              {loveReasons.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex flex-col items-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-4 text-center">
                  <Icon className="mb-2 h-5 w-5 text-[var(--color-accent-red)]" />
                  <p className="text-xs font-bold text-[var(--color-text)]">{title}</p>
                  <p className="text-[11px] text-[var(--color-muted)]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex w-full flex-col md:w-1/2">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-[var(--color-accent-yellow)]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-[var(--color-muted)]">4.9 · 42 reviews</span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <p className="font-serif text-4xl font-extrabold text-[var(--color-accent-red)]">₹{minPrice}</p>
              <p className="text-lg font-medium text-[var(--color-muted)]">– ₹{maxPrice}</p>
              <span className="rounded-full bg-green-50 px-2.5 py-1 text-xs font-bold text-[var(--color-accent-green)]">In Stock</span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">{product.description}</p>

            <div className="mt-8 border-t border-[var(--color-border)] pt-8">
              <AddToCartButton product={product} />
            </div>

            {/* Shipping note */}
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[var(--color-secondary)] px-5 py-4 text-sm text-[var(--color-text)]">
              <Truck className="h-5 w-5 shrink-0 text-[var(--color-accent-red)]" />
              <span>Shipping calculated at checkout · Dispatched within 1–2 days</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
              <details className="group py-4" open>
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[var(--color-text)]">
                  Ingredients
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-1.5 text-sm text-[var(--color-text)]">
                      {ing}
                    </span>
                  ))}
                </div>
              </details>

              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[var(--color-text)]">
                  How to enjoy &amp; store
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                  Pairs beautifully with hot rice, curd rice, dosa, idli or parathas. Always use a clean,
                  dry spoon. Store in a cool, dry place and refrigerate after opening to enjoy at its best
                  for longer.
                </p>
              </details>

              <details className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[var(--color-text)]">
                  Shipping &amp; returns
                  <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-3 leading-relaxed text-[var(--color-muted)]">
                  We ship pan-India and worldwide via trusted partners. Damaged or leaking jars are replaced
                  free — just reach out within 48 hours of delivery. See our{" "}
                  <Link href="/shipping-policy" className="font-semibold text-[var(--color-accent-red)] underline">shipping</Link> and{" "}
                  <Link href="/refund-policy" className="font-semibold text-[var(--color-accent-red)] underline">refund</Link> policies.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 text-center">
            <span className="eyebrow eyebrow-center justify-center">You may also like</span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
              More from our kitchen
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {relatedToShow.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary)] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm"
              >
                <div className="relative flex h-44 items-center justify-center bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-cream)]/40 p-5 md:h-52">
                  <div className="relative h-full w-full drop-shadow-lg">
                    <Image src={p.image} alt={p.name} fill className="object-contain transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="mb-2 font-serif text-base font-bold leading-snug text-[var(--color-text)] transition-colors group-hover:text-[var(--color-accent-red)]">
                    {p.name}
                  </h3>
                  <p className="mt-auto font-serif text-lg font-extrabold text-[var(--color-accent-red)]">₹{p.variants[0].price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
