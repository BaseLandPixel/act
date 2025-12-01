"use client";

import React from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
    const { items, removeItem, isCartOpen, toggleCart, cartTotal } = useCart();
    const [loading, setLoading] = React.useState(false);

    const handlePayment = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items, total: cartTotal }),
            });
            const data = await res.json();
            if (data.status === "success" && data.checkoutFormContent) {
                // In a real implementation, you'd render this content or redirect
                // For Iyzico checkout form, usually it returns HTML content to be embedded
                // or a link. Here we assume we might get a redirect link or HTML.
                // For simplicity in this demo, let's just alert.
                alert("Ödeme formu oluşturuldu! (Sandbox)");
                console.log(data.checkoutFormContent);
            } else {
                alert("Ödeme başlatılamadı.");
            }
        } catch (error) {
            console.error(error);
            alert("Bir hata oluştu.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-[70] w-full max-w-md bg-bg-primary shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-gold/20 ${isCartOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-bg-secondary">
                        <h2 className="font-serif text-2xl text-text">Sepetim ({items.length})</h2>
                        <button onClick={toggleCart} className="text-text hover:text-brand transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                                <p className="font-sans text-gray-400">Sepetiniz boş.</p>
                                <Link
                                    href="/katalog"
                                    onClick={toggleCart}
                                    className="text-xs font-sans tracking-[0.2em] border-b border-gold text-text hover:text-brand pb-1 uppercase"
                                >
                                    Alışverişe Başla
                                </Link>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative w-20 h-20 bg-white border border-bg-secondary flex-shrink-0">
                                        {/* Placeholder image if none provided */}
                                        {item.image ? (
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-400">Img</div>
                                        )}
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-serif text-lg text-text">{item.name}</h3>
                                            {item.customization && (
                                                <p className="text-xs text-gray-500 font-sans mt-1">
                                                    {item.customization.text} - {item.customization.size}
                                                </p>
                                            )}
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="font-serif text-gold">₺{item.price.toLocaleString()}</span>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                        <div className="p-6 border-t border-bg-secondary bg-white">
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-serif text-lg text-text">Toplam</span>
                                <span className="font-serif text-2xl text-gold">₺{cartTotal.toLocaleString()}</span>
                            </div>
                            <button
                                onClick={handlePayment}
                                disabled={loading}
                                className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 rounded-none disabled:opacity-50"
                            >
                                {loading ? "İşleniyor..." : "Ödemeye Geç"}
                            </button>
                            <p className="text-[10px] text-center text-gray-400 mt-4 font-sans">
                                Güvenli ödeme altyapısı Iyzico ile korunmaktadır.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
