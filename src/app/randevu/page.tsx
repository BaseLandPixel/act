"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { ChevronRight } from "lucide-react";
import TockifyWidget from "@/components/TockifyWidget";
import ProcessFlow from "@/components/appointment/ProcessFlow";

export default function BookingPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/giris");
        }
    }, [status, router]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (status === "loading") {
        return (
            <main className="min-h-screen flex items-center justify-center bg-bg-primary">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="h-12 w-12 bg-gold/20 rounded-full mb-4"></div>
                    <div className="h-4 w-32 bg-bg-secondary rounded"></div>
                </div>
            </main>
        );
    }

    if (!session) {
        return null; // Will redirect
    }

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
            <div className="max-w-3xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-sans text-gray-400 mb-8 tracking-widest uppercase">
                    <Link href="/" className="hover:text-text transition-colors">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <span className="text-text">Randevu Al</span>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-serif text-4xl text-text mb-4">Randevu Al</h1>
                    <p className="font-sans text-sm text-gray-500 tracking-wide">
                        Haftaiçi Pazartesi–Cuma, 10:00–16:00 arası özel randevular.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="mb-16">
                    <ProcessFlow />
                </div>

                {/* Tockify Widget */}
                <div className="bg-white p-4 md:p-8 border border-bg-secondary shadow-none mb-12">
                    <TockifyWidget widgetId={process.env.NEXT_PUBLIC_TOCKIFY_WIDGET_ID || "kunyecisuleyman"} />
                </div>

                {/* Fallback Form */}
                <div className="bg-white p-8 md:p-12 border border-bg-secondary shadow-none rounded-none">
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                        Ad Soyad
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                        placeholder="İsim Giriniz"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                        E-posta
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                        placeholder="ornek@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                        Telefon
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                        placeholder="05XX XXX XX XX"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                        Tarih
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                    Saat (10:00 - 16:00)
                                </label>
                                <select className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors">
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-4">
                                    İlgilendiğiniz Ürün Tipi
                                </label>
                                <div className="flex flex-wrap gap-4">
                                    {["Yüzük", "Bileklik", "Kolye", "Özel Tasarım"].map((type) => (
                                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                            <input type="radio" name="product" className="accent-gold" />
                                            <span className="font-serif text-text">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                    Notlar
                                </label>
                                <textarea
                                    className="w-full border border-bg-secondary p-4 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors h-32 resize-none rounded-none"
                                    placeholder="Özel isteklerinizi belirtebilirsiniz..."
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <div className="flex items-start space-x-2 mb-6">
                                    <input type="checkbox" required className="mt-1 accent-gold" />
                                    <p className="text-[10px] text-gray-500 leading-relaxed">
                                        Randevu bilgilerini gizlilik politikamıza uygun olarak kullanıyoruz.
                                    </p>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 rounded-none"
                                >
                                    Randevu Talep Et
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center py-16 animate-fade-in">
                            <h3 className="font-serif text-3xl text-text mb-4">Teşekkürler!</h3>
                            <p className="font-sans text-sm text-gray-500 mb-8">
                                Randevu talebiniz alındı. Onay ve detaylar e-posta ile gönderilecektir.
                            </p>
                            <Link
                                href="/giris"
                                className="inline-block border-b border-gold pb-1 text-xs font-sans uppercase tracking-[0.2em] hover:text-brand hover:border-brand transition-colors"
                            >
                                Gmail ile giriş yaparak randevularınızı görüntüleyebilirsiniz
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
