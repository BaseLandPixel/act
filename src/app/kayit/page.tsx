"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                router.push("/giris");
            } else {
                const data = await res.json();
                setError(data.message || "Bir hata oluştu.");
            }
        } catch (err) {
            setError("Bir hata oluştu.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
            <div className="max-w-md mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-sans text-gray-400 mb-8 tracking-widest uppercase">
                    <Link href="/" className="hover:text-text transition-colors">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <span className="text-text">Kayıt Ol</span>
                </div>

                <div className="bg-white p-8 md:p-12 border border-bg-secondary shadow-none rounded-none">
                    <h1 className="font-serif text-3xl text-text mb-2 text-center">Kayıt Ol</h1>
                    <p className="font-sans text-sm text-gray-500 mb-8 text-center">
                        Yeni bir hesap oluşturun.
                    </p>

                    {error && (
                        <div className="bg-red-50 text-red-800 text-xs p-3 mb-6 rounded-none border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                Ad Soyad
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                placeholder="Adınız Soyadınız"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                E-posta
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                placeholder="ornek@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                Şifre
                            </label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                placeholder="********"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 rounded-none disabled:opacity-50"
                        >
                            {loading ? "Kayıt Yapılıyor..." : "Kayıt Ol"}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-xs font-sans text-gray-400">
                            Zaten hesabınız var mı?{" "}
                            <Link href="/giris" className="text-text hover:text-brand transition-colors underline">
                                Giriş Yap
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
