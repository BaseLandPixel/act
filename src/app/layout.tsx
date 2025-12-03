import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// NOTE: Using Playfair Display as a fallback for Raleigh until local font files are provided.
// To use local Raleigh font:
// 1. Place Raleigh-Regular.woff2 and Raleigh-Bold.woff2 in public/fonts/
// 2. Uncomment the localFont configuration below and remove this Playfair_Display config.
/*
import localFont from "next/font/local";
const raleigh = localFont({
  src: [
    { path: "../../public/fonts/Raleigh-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Raleigh-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-raleigh",
  display: "swap",
});
*/
const raleigh = Playfair_Display({
  variable: "--font-raleigh",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Künyeci Süleyman — Kişiye Özel Mücevher | Randevu",
  description: "Künyeci Süleyman: Kuşaktan kuşağa aktarılan ustalıkla kişiye özel takı tasarımları. İstanbul’da özel randevular — Hikâyeni üstünde taşı.",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${raleigh.variable} antialiased bg-bg-primary text-text`}
      >
        <Providers>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            {children}
            <Footer />
          </CartProvider>
        </Providers>
      </body>
    </html>
  );
}
