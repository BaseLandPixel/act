import React from "react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
            <div className="max-w-4xl mx-auto">
                {/* Manifesto Lead */}
                <div className="text-center mb-24 animate-fade-in">
                    <h1 className="font-serif text-3xl md:text-5xl text-text leading-tight mb-8">
                        “Kuşaktan kuşağa aktarılan ustalık—kişiye özel tasarımlarımızla mirasınızı taşıyın.”
                    </h1>
                    <div className="w-24 h-px bg-gold mx-auto"></div>
                </div>

                {/* Story Blocks */}
                <div className="space-y-24">
                    {/* Block A: Heritage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-square bg-white shadow-none border border-bg-secondary p-4 rotate-2">
                            <div className="relative w-full h-full bg-bg-primary overflow-hidden">
                                <Image
                                    src="/images/hero-texture.png"
                                    alt="Atelier 1979"
                                    fill
                                    className="object-cover opacity-50 sepia"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-text/60 font-serif italic text-xl mix-blend-multiply">
                                    Atelier 1979
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h2 className="font-serif text-2xl text-text">Miras ve Ustalık</h2>
                            <p className="font-sans text-text/80 leading-relaxed">
                                Künyeci Süleyman, İstanbul’daki geleneksel zanaatkârlığı çağdaş formlarla birleştirir. Her randevu, tasarımcılarımızla birebir yürütülen, detay odaklı bir süreçtir.
                            </p>
                        </div>
                    </div>

                    {/* Block B: Process */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                        <div className="order-2 md:order-1 space-y-6">
                            <h2 className="font-serif text-2xl text-text">Tasarım Süreci</h2>
                            <p className="font-sans text-text/80 leading-relaxed">
                                Tasarım sürecimiz; keşif, çizim, prototip ve hassas işçilik safhalarından oluşur. Müşterilerimize her adımda şeffaflık ve özen taahhüt ederiz.
                            </p>
                        </div>
                        <div className="order-1 md:order-2 relative aspect-square bg-white shadow-none border border-bg-secondary p-4 -rotate-2">
                            <div className="relative w-full h-full bg-bg-primary overflow-hidden">
                                <Image
                                    src="/images/bracelet-1.png"
                                    alt="Craftsmanship"
                                    fill
                                    className="object-cover opacity-80"
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-text/60 font-serif italic text-xl bg-white/30">
                                    Craftsmanship
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Heritage Timeline Visual */}
                <div className="mt-24">
                    {/* Connecting Path */}
                    <div className="flex justify-center mb-0">
                        <div className="h-24 w-px bg-gradient-to-b from-transparent via-gold to-bg-secondary"></div>
                    </div>

                    <div className="border-t border-bg-secondary pt-16 relative">
                        <h3 className="text-center font-sans text-xs uppercase tracking-[0.2em] text-gray-400 mb-16">
                            Zaman Çizelgesi
                        </h3>

                        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center space-y-12 md:space-y-0">
                            {/* Horizontal Line (Desktop) */}
                            <div className="absolute top-[1.6rem] left-0 right-0 h-px bg-bg-secondary hidden md:block -z-10"></div>
                            {/* Vertical Line (Mobile) */}
                            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-bg-secondary md:hidden -z-10 transform -translate-x-1/2"></div>

                            {/* Node 1 */}
                            <div className="relative w-full md:w-auto text-center group">
                                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-6 ring-8 ring-bg-primary transition-transform duration-300 group-hover:scale-125"></div>
                                <div className="bg-bg-primary px-4 inline-block">
                                    <span className="block font-serif text-2xl text-text mb-2">1979</span>
                                    <span className="block font-sans text-xs uppercase tracking-wider text-gray-500">Süleyman Usta</span>
                                </div>
                            </div>

                            {/* Node 2 */}
                            <div className="relative w-full md:w-auto text-center group">
                                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-6 ring-8 ring-bg-primary transition-transform duration-300 group-hover:scale-125"></div>
                                <div className="bg-bg-primary px-4 inline-block">
                                    <span className="block font-serif text-2xl text-text mb-2">1995</span>
                                    <span className="block font-sans text-xs uppercase tracking-wider text-gray-500">Grand Bazaar</span>
                                </div>
                            </div>

                            {/* Node 3 */}
                            <div className="relative w-full md:w-auto text-center group">
                                <div className="w-3 h-3 bg-gold rounded-full mx-auto mb-6 ring-8 ring-bg-primary transition-transform duration-300 group-hover:scale-125"></div>
                                <div className="bg-bg-primary px-4 inline-block">
                                    <span className="block font-serif text-2xl text-text mb-2">2023</span>
                                    <span className="block font-sans text-xs uppercase tracking-wider text-gray-500">Yeni Nesil</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
