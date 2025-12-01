import React from "react";
import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-bg-primary border-t border-bg-secondary py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                {/* Brand */}
                <div className="text-center md:text-left">
                    <h2 className="font-serif text-2xl text-text mb-2">Künyeci Süleyman</h2>
                    <p className="text-xs font-sans text-gray-500 tracking-[0.2em] uppercase">
                        Hikâyeni üstünde taşı
                    </p>
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
                    <div className="flex items-center space-x-2 text-text hover:text-brand transition-colors">
                        <Mail size={16} />
                        <a href="mailto:info@kunyecisuleyman.com" className="text-sm font-sans tracking-wider">
                            info@kunyecisuleyman.com
                        </a>
                    </div>
                    <div className="flex items-center space-x-2 text-text hover:text-brand transition-colors">
                        <Phone size={16} />
                        <a href="tel:+902120000000" className="text-sm font-sans tracking-wider">
                            +90 (212) 000 00 00
                        </a>
                    </div>
                    <div className="flex items-center space-x-2 text-text hover:text-brand transition-colors">
                        <Instagram size={16} />
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm font-sans tracking-wider">
                            @kunyecisuleyman
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-right">
                    <p className="text-[10px] font-sans text-gray-400 uppercase tracking-widest">
                        © {new Date().getFullYear()} Künyeci Süleyman
                    </p>
                    <p className="text-[10px] font-sans text-gray-400 uppercase tracking-widest mt-1">
                        İstanbul
                    </p>
                </div>
            </div>
        </footer>
    );
}
