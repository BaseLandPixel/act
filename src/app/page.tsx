import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-12 overflow-hidden">
        {/* Background Texture */}
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/banner.mov" type="video/quicktime" />
            <source src="/images/banner.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Cinematic Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 z-10"></div>
        </div>

        <div className="z-20 flex flex-col items-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Monogram & Brand */}
          <div className="flex flex-col items-center space-y-4 mb-4">
            <span className="font-serif text-6xl md:text-8xl text-gold tracking-tighter drop-shadow-md">KS</span>
            <h1 className="font-serif text-3xl md:text-4xl text-bg-primary tracking-wide uppercase drop-shadow-sm">
              Künyeci Süleyman
            </h1>
          </div>

          {/* Tagline */}
          <p className="font-sans text-sm md:text-base text-bg-primary/90 tracking-[0.3em] uppercase drop-shadow-sm">
            Hikâyeni üstünde taşı.
          </p>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-6xl text-bg-primary leading-tight max-w-3xl mt-8 drop-shadow-md">
            Künyeci Süleyman — El işçiliğinin üç nesilli mirası
          </h2>

          {/* CTA */}
          <div className="flex flex-col items-center space-y-6 mt-8">
            <Link
              href="/randevu"
              className="group relative px-10 py-4 border border-gold bg-black/20 backdrop-blur-sm hover:bg-brand transition-all duration-300 rounded-none"
            >
              <span className="relative z-10 font-sans text-sm tracking-[0.2em] text-bg-primary group-hover:text-bg-primary transition-colors uppercase">
                Randevu Al
              </span>
            </Link>
            <Link
              href="/katalog"
              className="text-xs font-sans tracking-[0.2em] text-bg-primary/80 hover:text-gold border-b border-transparent hover:border-gold transition-all uppercase drop-shadow-sm"
            >
              E-Katalogu İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Tockify Preview & Manifesto Band */}
      <section className="bg-bg-primary border-t border-gold/30 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-12">

          {/* Tockify Preview (Compact) */}
          <div className="w-full max-w-md bg-white p-6 shadow-none border border-gold/20 text-center">
            <h3 className="font-serif text-lg text-text mb-4">Randevu Takvimi</h3>
            {/* Placeholder for Tockify Month Thumbnail */}
            <div className="aspect-[4/3] bg-bg-primary flex items-center justify-center mb-4 text-gray-400 text-xs font-sans uppercase tracking-widest border border-bg-secondary">
              [Tockify Month Preview]
            </div>
            <Link href="/randevu" className="block w-full py-3 bg-brand text-bg-primary text-xs tracking-widest uppercase hover:bg-brand/90 transition-colors rounded-none">
              Takvimi Aç
            </Link>
          </div>

          {/* Visual Strip */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative aspect-[3/2] overflow-hidden bg-bg-primary border border-gold/10">
                <Image
                  src="/images/bracelet-1.png" // Placeholder
                  alt="Custom Bracelet Detail"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Manifesto */}
          <div className="max-w-2xl text-center">
            <p className="font-serif text-lg md:text-xl text-text leading-relaxed italic">
              “Künyeci Süleyman, kuşaktan kuşağa aktarılan ustalığın güncel yorumu. Her parça kişiye özel tasarım, her randevu bir hikâye başlangıcıdır.”
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
