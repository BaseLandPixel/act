import React from "react";
import { SOLUTION_PARTNERS } from "@/data/constants";

export default function Marquee() {
    return (
        <div className="w-full bg-white py-8 overflow-hidden border-b border-gray-100">
            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex space-x-16">
                    {/* First set of items */}
                    {SOLUTION_PARTNERS.map((partner, index) => (
                        <span
                            key={`p1-${index}`}
                            className="text-2xl font-serif text-gray-400 tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            {partner}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {SOLUTION_PARTNERS.map((partner, index) => (
                        <span
                            key={`p2-${index}`}
                            className="text-2xl font-serif text-gray-400 tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            {partner}
                        </span>
                    ))}
                    {/* Triplicate set for wide screens */}
                    {SOLUTION_PARTNERS.map((partner, index) => (
                        <span
                            key={`p3-${index}`}
                            className="text-2xl font-serif text-gray-400 tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity duration-300"
                        >
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
