import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Leaf, ChefHat, HandHeart, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | Deedis — Premium Handcrafted South Indian Pickles",
  description: "Five decades of tradition from the hills of Ooty. Discover the heritage, process and promise behind every Deedis jar.",
};

const stats = [
  { value: "1974", label: "Year it began" },
  { value: "50+", label: "Years of tradition" },
  { value: "14", label: "Heritage recipes" },
  { value: "5,000+", label: "Happy families" },
];

const story = [
  {
    icon: Leaf,
    eyebrow: "Our Heritage",
    title: "Born in a village kitchen",
    img: "/grandma.png",
    body: "Our journey began over five decades ago in a small Nilgiri kitchen, where our grandmother's secret pickle recipes were the talk of the town. Those recipes, passed down through generations, are the very soul of Deedis today. We don't just make pickles — we preserve a culinary heritage.",
    flip: false,
  },
  {
    icon: ChefHat,
    eyebrow: "Our Process",
    title: "Slow food, done right",
    img: "/ingredients.png",
    body: "We believe in the power of slow food. We source the finest, locally-grown produce. Our mangoes are hand-picked, our spices freshly ground, and our gingelly oil cold-pressed and pure. Every jar is sun-dried and cured naturally — no artificial colours, no synthetic flavours, no chemical preservatives.",
    flip: true,
  },
  {
    icon: HandHeart,
    eyebrow: "Our Promise",
    title: "A jar of pure nostalgia",
    img: "/hero_jar.png",
    body: "When you open a jar of Deedis, you open a jar of pure nostalgia. We promise to consistently deliver the uncompromising quality and mouth-watering flavour that feels just like home — from our classic mango pickle to our fiery Ooty garlic, every bite is a celebration of South India.",
    flip: false,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-primary)]">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-primary)] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[var(--color-saffron)]/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] dot-grid" />
        <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center md:px-8">
          <span className="eyebrow eyebrow-center justify-center">Our Story</span>
          <h1 className="mt-5 font-serif text-5xl font-black leading-[1.05] tracking-tight text-[var(--color-text)] md:text-7xl">
            Tradition, sealed in <span className="text-gradient-spice">every jar.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            We are a family-owned kitchen from Ooty, bringing the authentic, handcrafted flavours of
            South India straight to your dining table — one small batch at a time.
          </p>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-[var(--color-ink)] py-12 text-white">
        <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-black text-[var(--color-accent-yellow)] md:text-5xl">{s.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story blocks */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl space-y-20 px-4 md:px-8 md:space-y-28">
          {story.map(({ icon: Icon, eyebrow, title, body, img, flip }) => (
            <div key={title} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className={`relative ${flip ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-secondary)] shadow-warm">
                  <Image src={img} alt={title} fill className={img === "/hero_jar.png" ? "object-contain p-8" : "object-cover"} />
                </div>
              </div>
              <div className={flip ? "lg:order-1" : ""}>
                <span className="eyebrow"><Icon className="h-4 w-4" /> {eyebrow}</span>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-tight text-[var(--color-text)] md:text-4xl">
                  {title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-20 md:px-8 md:pb-28">
        <div className="container mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[var(--color-spice-dark)] via-[var(--color-accent-red)] to-[var(--color-spice)] px-6 py-14 text-center shadow-warm-lg md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 opacity-10 dot-grid" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl font-black text-white md:text-5xl">Taste the tradition yourself</h2>
              <p className="mx-auto mt-4 max-w-md text-white/85">
                Fourteen heritage recipes, hand-packed fresh and shipped to your door.
              </p>
              <Link
                href="/#shop"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-[var(--color-accent-red)] shadow-lg transition-transform hover:-translate-y-1"
              >
                Explore the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
