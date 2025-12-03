"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF9]">
      {/* STANDARD HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#FAFAF9]">
        <div className="absolute inset-0 z-0 opacity-40">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bannervideo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center space-y-6 px-6">
          <span className="text-xs md:text-sm font-sans tracking-[0.3em] text-gray-500 uppercase block">
            Established 1989 • Istanbul
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-[#0F2F24] leading-tight">
            The Art of <br />
            <span className="text-[#D4AF37] italic">Eternal Gold</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-gray-600 tracking-widest uppercase max-w-md mx-auto">
            Discover the Gen to Gen Legacy
          </p>
          <div className="pt-8">
            <Link
              href="/shop/custom-bracelet"
              className="px-8 py-4 bg-[#0F2F24] text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#D4AF37] hover:text-[#0F2F24] transition-all duration-300"
            >
              Enter The Atelier
            </Link>
          </div>
        </div>
      </section>

      {/* STANDARD PRODUCT GRID TEASER */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-[#0F2F24]">Curated Collection</h2>
            <Link href="/katalog" className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-[#D4AF37] transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] bg-[#F9F7F2] mb-4 overflow-hidden">
                  <Image
                    src="/images/bracelet-1.png"
                    alt="Product"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg text-[#0F2F24] mb-1">Classic Gold Band</h3>
                <p className="font-sans text-xs text-gray-500 tracking-widest">12,500 TL</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
