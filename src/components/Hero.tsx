import React from "react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Jewelry"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="z-10 space-y-8 animate-fade-in px-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white drop-shadow-lg">
                    Timeless Elegance
                </h1>
                <p className="text-sm md:text-base font-sans uppercase tracking-[0.3em] text-white/90">
                    Heirlooms for Eternity
                </p>
                <div className="pt-8">
                    <button className="border border-white/50 px-8 py-3 text-sm font-sans uppercase tracking-[0.2em] hover:bg-white hover:text-primary transition-all duration-500">
                        Discover
                    </button>
                </div>
            </div>
        </section>
    );
}
