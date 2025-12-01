import React from "react";
import Image from "next/image";

const PRODUCTS = [
    {
        id: 1,
        name: "The Ottoman Ring",
        price: "12,500 TL",
        image: "/images/ring.png",
    },
    {
        id: 2,
        name: "Sultan's Signet",
        price: "18,000 TL",
        image: "/images/ring.png",
    },
    {
        id: 3,
        name: "Harem's Secret",
        price: "15,200 TL",
        image: "/images/ring.png",
    },
];

export default function ProductGrid() {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-16 tracking-wide text-primary">
                    Curated Collection
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
                    {PRODUCTS.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative aspect-square overflow-hidden bg-bg-secondary mb-6">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-serif tracking-wider text-primary">
                                    {product.name}
                                </h3>
                                <p className="text-sm font-sans text-gray-500 tracking-widest">
                                    {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button className="border-b border-primary pb-1 text-sm font-sans uppercase tracking-[0.2em] hover:text-accent hover:border-accent transition-colors">
                        View All Creations
                    </button>
                </div>
            </div>
        </section>
    );
}
