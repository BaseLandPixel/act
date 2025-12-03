"use client";

import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { useCart } from "@/context/CartContext";
import BraceModel from "@/components/3d/BraceModel";

export default function CustomBraceletPage() {
    const [engravingText, setEngravingText] = useState("GENTOGEN");
    const [ringSize, setRingSize] = useState("14");
    const { addItem } = useCart();

    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // If Backspace, remove last char
            if (e.key === 'Backspace') {
                setEngravingText(prev => prev.slice(0, -1));
            }
            // If a valid letter/number and length < limit
            else if (/^[a-zA-Z0-9]$/.test(e.key) && engravingText.length < 10) {
                setEngravingText(prev => (prev + e.key).toUpperCase());
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [engravingText]);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary flex flex-col lg:flex-row h-screen">
            {/* 3D Canvas Area */}
            <div className="w-full lg:w-2/3 h-[50vh] lg:h-auto relative bg-bg-secondary/20 border border-gold/30 order-1 lg:order-2">
                <div className="absolute top-4 left-4 z-10">
                    <span className="font-serif text-gold text-lg tracking-widest uppercase">Atölye Önizleme</span>
                </div>
                <Canvas shadows camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={2048} castShadow />
                    <Environment preset="city" />

                    <Suspense fallback={null}>
                        <BraceModel text={engravingText} />
                        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                    </Suspense>

                    <OrbitControls
                        enableZoom={true}
                        enablePan={false}
                        enableRotate={true}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.5}
                        minDistance={3}
                        maxDistance={8}
                    />
                </Canvas>
                <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-10">
                    <p className="font-sans text-xs text-gray-500 italic opacity-60 tracking-widest">
                        Klavyenizi kullanarak isminizi yazın...
                    </p>
                </div>
            </div>

            {/* Controls Area */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12 bg-white border-l border-gold/20 flex flex-col justify-center order-2 lg:order-1">
                <h1 className="font-serif text-4xl text-text mb-2">Kendi Künyeni Tasarla</h1>
                <p className="font-sans text-sm text-gray-500 mb-12 tracking-wide">
                    İsminiz, tarihiniz veya size özel bir söz. Altın üzerine işlenmiş miras.
                </p>

                <div className="space-y-8">
                    {/* Input removed for cleaner UI */}

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
                                    image: "", // We could capture the canvas here, but leaving empty for now
                                    quantity: 1,
                                    customization: {
                                        text: engravingText,
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
