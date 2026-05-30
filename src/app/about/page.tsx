import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="font-serif text-5xl font-bold text-[var(--color-accent-red)] mb-8 text-center">About Deedis</h1>
        
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-[var(--color-border)] prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl mb-6">
            Welcome to Deedis, where tradition meets taste. We are a family-owned business dedicated to bringing the authentic, handcrafted flavors of South India straight to your dining table.
          </p>
          
          <h2 className="font-serif text-2xl font-bold text-[var(--color-text)] mt-10 mb-4">Our Heritage</h2>
          <p className="mb-6">
            Our journey began over five decades ago in a small village kitchen, where our grandmother's secret pickle recipes were the talk of the town. These recipes, passed down through generations, form the very soul of Deedis today. We don't just make pickles; we preserve a rich culinary heritage.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[var(--color-text)] mt-10 mb-4">Our Process</h2>
          <p className="mb-6">
            At Deedis, we believe in the power of slow food. We source the finest, freshest, and locally-grown ingredients. Our mangoes are hand-picked, our spices are freshly ground, and our cold-pressed oils are 100% pure. Every jar is sun-dried and cured naturally, without the use of artificial colors, synthetic flavors, or chemical preservatives.
          </p>

          <h2 className="font-serif text-2xl font-bold text-[var(--color-text)] mt-10 mb-4">Our Promise</h2>
          <p>
            When you open a jar of Deedis, you're opening a jar of pure nostalgia. We promise to consistently deliver the uncompromising quality and mouth-watering flavors that feel just like home. From our classic Avakaya to our fiery Gongura, every bite is a celebration of South Indian tradition.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
