"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/home/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BraceModel from "@/components/3d/BraceModel";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#FAFAF9]">
      <Hero />

      {/* SECTION 2: THE EDITORIAL SCROLL */}
      <section className="h-screen w-full py-24 px-6 md:px-12 lg:px-24 bg-[#FAFAF9] snap-start flex flex-col justify-center">
        {/* Block 1: Heritage */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/images/bracelet-1.png" // Placeholder
              alt="Craftsmanship"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6"
          >
            <span className="text-[#D4AF37] font-sans text-xs tracking-[0.2em] uppercase">Heritage</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0F2F24]">Mastery in Every Detail</h2>
            <p className="font-sans text-gray-600 leading-relaxed max-w-md">
              For over three decades, our atelier has been a sanctuary of silence and precision.
              Each piece is not merely manufactured but sculpted, carrying the weight of tradition
              and the brilliance of modern design.
            </p>
            <Link href="/hakkimizda" className="inline-block border-b border-[#0F2F24] pb-1 text-xs font-sans tracking-[0.2em] uppercase hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              Read Our Story
            </Link>
          </motion.div>
        </div>

        {/* Block 2: The Craft */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="/images/gizem_nameplate.jpg" // Placeholder
              alt="Design"
              fill
              className="object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 md:text-right flex flex-col items-end"
          >
            <span className="text-[#D4AF37] font-sans text-xs tracking-[0.2em] uppercase">The Craft</span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0F2F24]">Bespoke Elegance</h2>
            <p className="font-sans text-gray-600 leading-relaxed max-w-md">
              True luxury is personal. Our bespoke service invites you to become the architect
              of your own legacy. From the initial sketch to the final polish, your vision
              guides our hands.
            </p>
            <Link href="/katalog" className="inline-block border-b border-[#0F2F24] pb-1 text-xs font-sans tracking-[0.2em] uppercase hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors">
              Explore Collection
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE FEATURED CAROUSEL */}
      <section className="h-screen w-full py-24 bg-white overflow-hidden snap-start flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0F2F24]">Curated Selection</h2>
          <Link href="/katalog" className="text-xs font-sans tracking-[0.2em] uppercase text-gray-500 hover:text-[#D4AF37] transition-colors">
            View All
          </Link>
        </div>

        <div className="pl-6 md:pl-24">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.2 },
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="pb-12"
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <SwiperSlide key={i}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[4/5] bg-[#F9F7F2] mb-6 overflow-hidden">
                    <Image
                      src="/images/bracelet-1.png"
                      alt="Product"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-lg text-[#0F2F24] mb-1">The Classic Cuban</h3>
                  <p className="font-sans text-xs text-gray-500 tracking-widest">FROM 12,500 TL</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SECTION 4: THE ATELIER TEASER */}
      <section className="h-screen w-full flex flex-col md:flex-row bg-[#0F2F24] overflow-hidden snap-start">
        {/* Left: 3D Render */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gradient-to-br from-[#0F2F24] to-black">
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} castShadow />
            <Environment preset="city" />
            <BraceModel text="LEGACY" />
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
          </Canvas>
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center text-center p-12 bg-[#0F2F24] text-white">
          <span className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-6">The Atelier</span>
          <h2 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
            Design Your <br /> Own Legacy
          </h2>
          <p className="font-sans text-gray-300 max-w-md mb-12 leading-relaxed">
            Experience the fusion of technology and tradition. Visualize your bespoke piece in real-time 3D before it is crafted by our master jewelers.
          </p>
          <Link
            href="/shop/custom-bracelet"
            className="px-10 py-4 bg-[#D4AF37] text-[#0F2F24] font-sans text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300"
          >
            Start Customizing
          </Link>
        </div>
      </section>
    </main>
  );
}
