import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-[var(--color-surface)] min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="bg-[var(--color-secondary)] rounded-3xl p-12 relative flex items-center justify-center aspect-square border border-[var(--color-border)]">
              <div className="relative w-full h-full drop-shadow-2xl">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="mb-2">
              <span className="text-[var(--color-accent-red)] font-bold tracking-widest uppercase text-xs border border-[var(--color-accent-red)] px-3 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-text)] mt-4 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-[var(--color-accent-yellow)] text-sm">
                ★ ★ ★ ★ ★
              </div>
              <span className="text-sm text-[var(--color-muted)] font-medium">(42 Customer Reviews)</span>
            </div>
            
            <p className="text-3xl font-extrabold text-[var(--color-accent-red)] mb-6">
              ₹{product.price.toFixed(2)}
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>
            
            <div className="mb-10">
              <h3 className="font-sans font-bold text-lg text-[var(--color-text)] mb-3 border-b pb-2">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, idx) => (
                  <span key={idx} className="bg-white border border-gray-200 px-3 py-1 rounded-md text-sm text-gray-700 shadow-sm">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-10">
               <h3 className="font-sans font-bold text-lg text-[var(--color-text)] mb-3">Quantity Available</h3>
               <p className="text-gray-600 font-medium bg-gray-100 inline-block px-4 py-2 rounded-lg">{product.weight}</p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <AddToCartButton product={product} />
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                In Stock & Ready to Ship
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-yellow)]"></span>
                100% Natural
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
