"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { toggleCart, items } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-neutral-950/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className={`md:hidden drop-shadow-md ${scrolled ? "text-white" : "text-text"}`}
                        aria-label="Menu"
                    >
                        <Menu size={24} />
                    </button>

                    {/* Desktop Links (Left) */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/katalog" className={`text-sm font-sans tracking-[0.2em] hover:text-brand transition-colors drop-shadow-md ${scrolled ? "text-white" : "text-text"}`}>
                            KATALOG
                        </Link>
                        <Link href="/hakkimizda" className={`text-sm font-sans tracking-[0.2em] hover:text-brand transition-colors drop-shadow-md ${scrolled ? "text-white" : "text-text"}`}>
                            HAKKIMIZDA
                        </Link>
                    </div>

                    {/* Logo */}
                    <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className={`font-serif transition-all duration-300 drop-shadow-md ${scrolled ? "text-2xl text-white" : "text-3xl text-text"
                            }`}>
                            KS
                        </h1>
                    </Link>

                    {/* Desktop Links (Right) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/randevu" className={`text-sm font-sans tracking-[0.2em] hover:text-brand transition-colors drop-shadow-md ${scrolled ? "text-white" : "text-text"}`}>
                            RANDEVU
                        </Link>
                        <button onClick={toggleCart} className={`hover:text-brand transition-colors relative drop-shadow-md ${scrolled ? "text-white" : "text-text"}`} aria-label="Sepet">
                            <ShoppingBag size={20} />
                            {items.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-brand text-bg-primary text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                                    {items.length}
                                </span>
                            )}
                        </button>
                        <Link href="/giris" className={`hover:text-brand transition-colors drop-shadow-md ${scrolled ? "text-white" : "text-text"}`} aria-label="Giriş">
                            <User size={20} />
                        </Link>
                    </div>

                    {/* Mobile CTA */}
                    <Link href="/randevu" className={`md:hidden text-xs font-sans tracking-[0.2em] border px-3 py-2 rounded-none drop-shadow-md ${scrolled ? "border-gold text-white" : "border-text text-text"}`}>
                        RANDEVU
                    </Link>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-bg-primary transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-serif text-2xl text-text">KS</span>
                        <button onClick={() => setIsOpen(false)} className="text-text" aria-label="Close">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-8 items-center justify-center flex-1">
                        <Link href="/" className="text-2xl font-serif text-text hover:text-brand transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link href="/katalog" className="text-2xl font-serif text-text hover:text-brand transition-colors">
                            Katalog
                        </Link>
                        <Link href="/hakkimizda" className="text-2xl font-serif text-text hover:text-brand transition-colors">
                            Hakkımızda
                        </Link>
                        <Link href="/randevu" className="text-2xl font-serif text-text hover:text-brand transition-colors">
                            Randevu Al
                        </Link>
                        <Link href="/giris" className="text-xl font-sans text-gray-500 hover:text-brand transition-colors mt-8">
                            Giriş Yap
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
