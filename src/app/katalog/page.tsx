"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

const PRODUCTS = [
    {
        id: 0,
        code: "BSK-GIZEM-001",
        metal: "14K Solid Gold",
        weight: "19–26 GR",
        measurement: "Double Cuban",
        image: "/images/gizem_nameplate.jpg",
        description: "“GİZEM” yazılı bu özel tasarım bileklik, çift sıra kalın Gold Cuban zinciri ve tamamı elde işlenmiş mikro taşlı isim plakasıyla modern lüksün en iddialı örneklerinden biridir.",
        longDescription: "Koleksiyonumuzun “Bespoke Nameplate” serisindeki bu bileklik, kişiye özel tasarım şıklığını yüksek kuyumculuk detaylarıyla birleştirir. Çift sıralı 14 ayar altın Cuban zincir, güçlü ve dengeli bir duruş sağlar. İsim plakası ise ustalarımız tarafından tek tek yerleştirilen mikro taşlarla tamamen elde işlenmiştir. İ harfinin üzerindeki kırmızı taş, tasarıma özgün bir vurgu ve renk kimliği kazandırır. Her ürün sipariş üzerine ve müşterinin talep ettiği isimle yeniden üretilir."
    },
    { id: 1, code: "PRZ 1008", metal: "14K Gold", weight: "14.00 GR", measurement: "8.7 mm", image: "/images/bracelet-1.png", description: "Minimalist altın bileklik, kişiye özel isim işleme seçeneği ile." },
    { id: 2, code: "PRZ 1009", metal: "18K Gold", weight: "12.50 GR", measurement: "7.5 mm", image: "/images/bracelet-1.png", description: "Zarif ve modern tasarım, günlük kullanım için ideal." },
    { id: 3, code: "PRZ 1010", metal: "Rose Gold", weight: "10.20 GR", measurement: "6.0 mm", image: "/images/bracelet-1.png", description: "Romantik rose gold dokunuşu, ince işçilik." },
    { id: 4, code: "PRZ 1011", metal: "White Gold", weight: "15.10 GR", measurement: "9.0 mm", image: "/images/bracelet-1.png", description: "Modern beyaz altın, güçlü ve şık duruş." },
    { id: 5, code: "PRZ 1012", metal: "14K Gold", weight: "11.80 GR", measurement: "7.0 mm", image: "/images/bracelet-1.png", description: "Klasik tasarımın modern yorumu." },
    { id: 6, code: "PRZ 1013", metal: "18K Gold", weight: "13.40 GR", measurement: "8.0 mm", image: "/images/bracelet-1.png", description: "Lüks ve ağırlığı hissedilen özel parça." },
];

export default function CatalogPage() {
    const [selectedProduct, setSelectedProduct] = useState<typeof PRODUCTS[0] | null>(null);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <h1 className="font-serif text-4xl text-text mb-4">Koleksiyon</h1>
                        <p className="font-sans text-sm text-gray-500 tracking-wide max-w-md">
                            Kuşaktan kuşağa aktarılan ustalıkla şekillenen, kişiye özel tasarımlar.
                        </p>
                    </div>
                    <div className="mt-8 md:mt-0">
                        <button className="text-xs font-sans uppercase tracking-[0.2em] text-text border border-gold px-6 py-3 hover:bg-brand hover:text-bg-primary transition-colors rounded-none">
                            PDF Katalog İndir
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group cursor-pointer" onClick={() => setSelectedProduct(product)}>
                            <div className="relative aspect-[3/2] overflow-hidden bg-white mb-6 shadow-none border border-bg-secondary group-hover:border-gold transition-colors">
                                <Image
                                    src={product.image}
                                    alt={product.code}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-serif text-lg text-text tracking-wide mb-1">
                                        {product.code}
                                    </h3>
                                    <p className="text-xs font-sans text-gray-400 tracking-widest uppercase">
                                        {product.measurement}
                                    </p>
                                </div>
                                <span className="text-xs font-sans text-text/60 tracking-widest">
                                    {product.weight}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
                    <div className="bg-bg-primary w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col md:flex-row relative rounded-none border border-gold">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="absolute top-4 right-4 z-10 p-2 text-text hover:bg-black/5 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Image Carousel (Simplified) */}
                        <div className="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-white">
                            <Image
                                src={selectedProduct.image}
                                alt={selectedProduct.code}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Details */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="font-serif text-3xl text-text mb-2">{selectedProduct.code}</h2>
                            <p className="font-sans text-sm text-gray-500 mb-8 leading-relaxed">
                                {selectedProduct.longDescription || selectedProduct.description}
                            </p>

                            <div className="space-y-4 mb-8 border-t border-b border-bg-secondary py-6">
                                <div className="flex justify-between">
                                    <span className="text-xs font-sans uppercase tracking-widest text-gray-400">Ağırlık</span>
                                    <span className="text-sm font-serif text-text">{selectedProduct.weight}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xs font-sans uppercase tracking-widest text-gray-400">Ölçü</span>
                                    <span className="text-sm font-serif text-text">{selectedProduct.measurement}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-xs font-sans uppercase tracking-widest text-gray-400">Maden</span>
                                    <span className="text-sm font-serif text-text">{selectedProduct.metal}</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                    İsim / Yazı Önizleme
                                </label>
                                <input
                                    type="text"
                                    placeholder="Yazılacak isim..."
                                    className="w-full border-b border-bg-secondary py-2 font-serif text-xl text-text focus:outline-none focus:border-gold bg-transparent transition-colors placeholder:text-gray-300"
                                />
                            </div>

                            <Link
                                href={`/randevu?product_code=${selectedProduct.code}`}
                                className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 text-center rounded-none"
                            >
                                Atölye Randevusu Al
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
