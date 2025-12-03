"use client";

import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { useCart } from "@/context/CartContext";
import BraceModel from "@/components/3d/BraceModel";

export default function CustomBraceletPage() {
    // Metin state'i kaldırıldı, sadece yüzük ölçüsü kaldı
    const [ringSize, setRingSize] = useState("14");
    const { addItem } = useCart();

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary flex flex-col lg:flex-row h-screen">

            {/* 3D Canvas Area */}
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-auto relative bg-bg-secondary/20 border border-gold/30 order-1 lg:order-2">

                {/* "Atölye Önizleme" yazısı ve tüm etiketler KALDIRILDI */}

                <Canvas shadows camera={{ position: [0, 0, 4], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
                    <Environment preset="city" />

                    <Suspense fallback={null}>
                        {/* Metin özelliği iptal edildiği için boş string gönderiyoruz */}
                        <BraceModel text="" />
                        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                    </Suspense>

                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        enableRotate={true}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.5}
                        minDistance={0.5}
                        maxDistance={20}
                    />
                </Canvas>
            </div>

            {/* Controls Area */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12 bg-white border-l border-gold/20 flex flex-col justify-center order-2 lg:order-1">
                <h1 className="font-serif text-4xl text-text mb-2">Kendi Künyeni Tasarla</h1>
                <p className="font-sans text-sm text-gray-500 mb-12 tracking-wide">
                    Altın üzerine işlenmiş miras.
                </p>

                <div className="space-y-8">
                    <div>
                        <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                            Ölçü Seçimi
                        </label>
                        <div className="flex gap-4">
                            {['12', '14', '16', '18'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setRingSize(size)}
                                    className={`w-12 h-12 flex items-center justify-center border ${ringSize === size ? 'border-gold bg-gold text-bg-primary' : 'border-bg-secondary text-text hover:border-gold'} transition-all font-serif`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="pt-8 border-t border-bg-secondary">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-serif text-lg text-text">Tahmini Tutar</span>
                            <span className="font-serif text-2xl text-gold">₺12.500</span>
                        </div>
                        <button
                            onClick={() => {
                                addItem({
                                    id: `custom-bracelet-${Date.now()}`,
                                    name: "Özel Tasarım Künye",
                                    price: 12500,
                                    image: "",
                                    quantity: 1,
                                    customization: {
                                        text: "", // Metin yok
                                        size: ringSize,
                                    },
                                });
                            }}
                            className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 rounded-none"
                        >
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}