import React from "react";

export default function StyleGuidePage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-[#FBF7F1]">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Header */}
                <div>
                    <h1 className="font-serif text-4xl text-primary mb-4">Style Guide</h1>
                    <p className="font-sans text-sm text-gray-500 tracking-wide">
                        Künyeci Süleyman Design System
                    </p>
                </div>

                {/* Colors */}
                <section>
                    <h2 className="font-serif text-2xl text-primary mb-8 border-b border-[#E7E2DD] pb-4">Colors</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div className="space-y-2">
                            <div className="w-full h-24 bg-[#FBF7F1] border border-[#E7E2DD]"></div>
                            <p className="font-sans text-xs font-bold text-primary">Ivory BG</p>
                            <p className="font-sans text-xs text-gray-400">#FBF7F1</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-24 bg-[#2F1F16]"></div>
                            <p className="font-sans text-xs font-bold text-primary">Deep Brown</p>
                            <p className="font-sans text-xs text-gray-400">#2F1F16</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-24 bg-[#CFA96B]"></div>
                            <p className="font-sans text-xs font-bold text-primary">Soft Gold</p>
                            <p className="font-sans text-xs text-gray-400">#CFA96B</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-24 bg-[#7A0E17]"></div>
                            <p className="font-sans text-xs font-bold text-primary">Deep Ruby</p>
                            <p className="font-sans text-xs text-gray-400">#7A0E17</p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-full h-24 bg-[#E7E2DD]"></div>
                            <p className="font-sans text-xs font-bold text-primary">Divider Grey</p>
                            <p className="font-sans text-xs text-gray-400">#E7E2DD</p>
                        </div>
                    </div>
                </section>

                {/* Typography */}
                <section>
                    <h2 className="font-serif text-2xl text-primary mb-8 border-b border-[#E7E2DD] pb-4">Typography</h2>
                    <div className="space-y-8">
                        <div>
                            <p className="font-sans text-xs text-gray-400 mb-2">Display Heading (Playfair Display)</p>
                            <h1 className="font-serif text-6xl text-primary">Künyeci Süleyman</h1>
                        </div>
                        <div>
                            <p className="font-sans text-xs text-gray-400 mb-2">Section Heading (Playfair Display)</p>
                            <h2 className="font-serif text-3xl text-primary">Miras ve Ustalık</h2>
                        </div>
                        <div>
                            <p className="font-sans text-xs text-gray-400 mb-2">Body Text (Inter)</p>
                            <p className="font-sans text-primary/80 leading-relaxed max-w-2xl">
                                Künyeci Süleyman, kuşaktan kuşağa aktarılan ustalığın güncel yorumu. Her parça kişiye özel tasarım, her randevu bir hikâye başlangıcıdır.
                            </p>
                        </div>
                        <div>
                            <p className="font-sans text-xs text-gray-400 mb-2">Microcopy / Tracking (Inter)</p>
                            <p className="font-sans text-xs uppercase tracking-[0.2em] text-primary">
                                Hikâyeni üstünde taşı
                            </p>
                        </div>
                    </div>
                </section>

                {/* Buttons */}
                <section>
                    <h2 className="font-serif text-2xl text-primary mb-8 border-b border-[#E7E2DD] pb-4">Buttons</h2>
                    <div className="flex flex-wrap gap-8">
                        <div>
                            <p className="font-sans text-xs text-gray-400 mb-4">Primary Button</p>
                            <button className="px-10 py-4 border border-[#CFA96B] rounded-lg bg-transparent hover:bg-[#CFA96B] transition-colors duration-200 group">
                                <span className="font-sans text-sm tracking-[0.2em] text-primary group-hover:text-[#FBF7F1]">
                                    RANDEVU AL
                                </span>
                            </button>
                        </div>
                        <div>
                            <p className="font-sans text-xs text-gray-400 mb-4">Secondary Link</p>
                            <button className="text-xs font-sans tracking-[0.2em] text-primary/60 hover:text-primary border-b border-transparent hover:border-primary transition-all">
                                E-KATALOGU İNCELE
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
