import React from "react";

interface ControlsProps {
    text: string;
    setText: (text: string) => void;
    font: "serif" | "sans";
    setFont: (font: "serif" | "sans") => void;
    price: number;
}

export default function Controls({
    text,
    setText,
    font,
    setFont,
    price,
}: ControlsProps) {
    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value.toUpperCase().slice(0, 10);
        setText(val);
    };

    return (
        <div className="h-full bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl font-serif text-primary mb-12 tracking-wide">
                Personalize
            </h2>

            <div className="space-y-10 flex-1">
                {/* Text Input */}
                <div>
                    <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-4">
                        Engraving
                    </label>
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="YOUR TEXT"
                        className="w-full border-b border-gray-200 py-2 text-xl font-serif text-primary focus:outline-none focus:border-primary transition-colors bg-transparent placeholder-gray-200"
                    />
                </div>

                {/* Font Selection */}
                <div>
                    <label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-4">
                        Typography
                    </label>
                    <div className="flex space-x-4">
                        <button
                            onClick={() => setFont("serif")}
                            className={`flex-1 py-3 border transition-all duration-300 ${font === "serif"
                                ? "border-primary text-primary"
                                : "border-gray-200 text-gray-300 hover:border-gray-300"
                                }`}
                        >
                            <span className="font-serif text-lg">Serif</span>
                        </button>
                        <button
                            onClick={() => setFont("sans")}
                            className={`flex-1 py-3 border transition-all duration-300 ${font === "sans"
                                ? "border-primary text-primary"
                                : "border-gray-200 text-gray-300 hover:border-gray-300"
                                }`}
                        >
                            <span className="font-sans text-lg">Sans</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer: Price & Action */}
            <div className="mt-auto pt-8 border-t border-gray-50">
                <div className="flex justify-between items-end mb-8">
                    <span className="text-gray-400 font-sans text-xs tracking-widest uppercase">Total</span>
                    <span className="text-2xl font-serif text-primary">
                        {price.toLocaleString("tr-TR")} TL
                    </span>
                </div>
                <button className="w-full bg-primary text-white py-4 font-sans text-xs uppercase tracking-[0.3em] hover:bg-black transition-colors duration-500">
                    Add to Collection
                </button>
            </div>
        </div>
    );
}
