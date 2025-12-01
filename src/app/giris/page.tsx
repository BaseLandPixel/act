"use client";

import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const { data: session, status } = useSession();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCredentialsLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const res = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (res?.error) {
            setError("Giriş yapılamadı. Bilgilerinizi kontrol edin.");
            setLoading(false);
        } else {
            // Successful login will trigger session update
        }
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

    if (session) {
        return (
            <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-between items-center mb-12 border-b border-bg-secondary pb-8">
                        <div>
                            <h1 className="font-serif text-3xl text-text mb-2">Hesabım</h1>
                            <p className="font-sans text-sm text-gray-500">Hoşgeldiniz, {session.user?.name}.</p>
                        </div>
                        <button
                            onClick={() => signOut()}
                            className="flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-text hover:text-brand transition-colors"
                        >
                            <LogOut size={16} />
                            <span>Çıkış Yap</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Appointments */}
                        <div className="md:col-span-2 bg-white p-8 border border-bg-secondary shadow-none rounded-none">
                            <h2 className="font-serif text-xl text-text mb-6">Randevularım</h2>
                            <div className="text-center py-12 bg-bg-primary/50 rounded-none border border-dashed border-bg-secondary">
                                <p className="font-sans text-sm text-gray-400 mb-2">Henüz aktif bir randevunuz bulunmuyor.</p>
                                <Link href="/randevu" className="text-xs font-sans uppercase tracking-widest text-text hover:text-brand transition-colors border-b border-gold pb-0.5">
                                    Yeni Randevu Al
                                </Link>
                            </div>
                        </div>

                        {/* Downloads / Files */}
                        <div className="bg-white p-8 border border-bg-secondary shadow-none rounded-none">
                            <h2 className="font-serif text-xl text-text mb-6">Dosyalar</h2>
                            <ul className="space-y-4">
                                <li className="flex items-center justify-between text-sm group cursor-pointer">
                                    <span className="font-sans text-gray-500 group-hover:text-text transition-colors">Katalog 2024.pdf</span>
                                    <span className="text-xs text-gray-300">2.4 MB</span>
                                </li>
                                <li className="flex items-center justify-between text-sm group cursor-pointer">
                                    <span className="font-sans text-gray-500 group-hover:text-text transition-colors">Bakım Kılavuzu.pdf</span>
                                    <span className="text-xs text-gray-300">1.1 MB</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
            <div className="max-w-md mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-sans text-gray-400 mb-8 tracking-widest uppercase">
                    <Link href="/" className="hover:text-text transition-colors">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <span className="text-text">Giriş Yap</span>
                </div>

                <div className="bg-white p-8 md:p-12 border border-bg-secondary shadow-none rounded-none">
                    <h1 className="font-serif text-3xl text-text mb-2 text-center">Giriş Yap</h1>
                    <p className="font-sans text-sm text-gray-500 mb-8 text-center">
                        Randevularınızı yönetmek için giriş yapın.
                    </p>

                    {error && (
                        <div className="bg-red-50 text-red-800 text-xs p-3 mb-6 rounded-none border border-red-100">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleCredentialsLogin} className="space-y-6 mb-8">
                        <div>
                            <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                                E-posta
                            </label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                                placeholder="********"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 rounded-none disabled:opacity-50"
                        >
                            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                        </button>
                    </form>

                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-bg-secondary"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase tracking-widest">
                            <span className="bg-white px-4 text-gray-400">veya</span>
                        </div>
                    </div>

                    <button
                        onClick={() => signIn("google")}
                        className="w-full flex items-center justify-center space-x-3 border border-bg-secondary py-4 hover:bg-gray-50 transition-colors rounded-none group"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                className="text-[#4285F4]"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                className="text-[#34A853]"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                className="text-[#FBBC05]"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                className="text-[#EA4335]"
                            />
                        </svg>
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-gray-600 group-hover:text-text transition-colors">
                            Google ile Devam Et
                        </span>
                    </button>

                    <div className="mt-8 text-center">
                        <p className="text-xs font-sans text-gray-400">
                            Hesabınız yok mu?{" "}
                            <Link href="/kayit" className="text-text hover:text-brand transition-colors underline">
                                Kayıt Ol
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
