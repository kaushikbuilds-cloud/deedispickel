import type { Metadata } from "next";
import { Inter, Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deedis | Premium Handcrafted South Indian Pickles",
  description: "Premium handcrafted South Indian pickles. Made fresh and delivered across India. Tradition sealed in every jar.",
  icons: {
    icon: "/pickellogo.png",
    apple: "/pickellogo.png",
  },
  openGraph: {
    title: "Deedis | Premium Handcrafted South Indian Pickles",
    description: "Premium handcrafted South Indian pickles. Made fresh and delivered across India. Tradition sealed in every jar.",
    images: ["/pickellogo.png"],
  },
};

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import ToastNotification from "@/components/ToastNotification";
import LoaderProvider from "@/components/LoaderProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${montserrat.variable} bg-white text-[#333333] antialiased`}>
      <body className="font-sans min-h-screen selection:bg-[#d32f2f] selection:text-white">
        <CartProvider>
          <LoaderProvider>
            <SmoothScroll>{children}</SmoothScroll>
            <CartDrawer />
            <ToastNotification />
          </LoaderProvider>
        </CartProvider>
      </body>
    </html>
  );
}
