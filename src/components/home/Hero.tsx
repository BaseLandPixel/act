"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-900 snap-start">
            {/* 1. The Video Layer (Background) */}
            <div className="absolute inset-0 w-full h-full -z-20">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/bannervideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* 2. The Content Layer (Foreground) */}
            <div className="relative z-20 flex flex-col items-center text-center space-y-8 px-6 max-w-5xl mx-auto">
                {/* Top Badge */}
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xs md:text-sm font-sans tracking-[0.3em] text-[#F4EBD0] uppercase"
                >
                    Established 1989 • Istanbul
                </motion.span>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg"
                >
                    The Art of <br />
                    <span className="text-[#D4AF37] italic">Eternal Gold.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="font-sans text-sm md:text-base text-gray-200 tracking-widest uppercase max-w-md drop-shadow-md"
                >
                    Discover the Gen to Gen Legacy.
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="pt-8"
                >
                    <Link
                        href="/shop/custom-bracelet"
                        className="px-10 py-4 border border-white/80 text-white font-sans text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
                    >
                        Enter The Atelier
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
