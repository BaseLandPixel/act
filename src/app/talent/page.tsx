"use client";

import React, { useState } from "react";
import { ACTORS } from "@/data/constants";
import { X } from "lucide-react";

export default function TalentPage() {
    const [selectedActor, setSelectedActor] = useState<(typeof ACTORS)[0] | null>(
        null
    );

    return (
        <main className="min-h-screen bg-bg-primary pt-32 pb-24 px-6">
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-serif text-text text-center mb-16">
                    Our Talent
                </h1>

                {/* Actor Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ACTORS.map((actor) => (
                        <div
                            key={actor.id}
                            onClick={() => setSelectedActor(actor)}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden bg-white mb-4 border border-bg-secondary group-hover:border-gold transition-colors">
                                {/* Placeholder for Main Image */}
                                <div className="absolute inset-0 bg-bg-primary/50 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                                    <span className="font-serif italic text-text/60">{actor.name}</span>
                                </div>
                            </div>
                            <h3 className="text-xl font-serif text-text text-center group-hover:text-brand transition-colors">
                                {actor.name}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedActor && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                        <div className="bg-bg-primary w-full max-w-5xl h-[80vh] flex flex-col md:flex-row shadow-2xl overflow-hidden relative border border-gold rounded-none">
                            <button
                                onClick={() => setSelectedActor(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                            >
                                <X className="w-6 h-6 text-text" />
                            </button>

                            {/* Left: Gallery */}
                            <div className="w-full md:w-2/3 bg-bg-secondary/30 p-4 grid grid-rows-3 grid-cols-2 gap-2 h-full overflow-y-auto">
                                <div className="row-span-3 col-span-1 bg-white border border-bg-secondary flex items-center justify-center text-gray-400">
                                    Main Image
                                </div>
                                <div className="row-span-1 col-span-1 bg-white border border-bg-secondary flex items-center justify-center text-gray-400">
                                    Thumb 1
                                </div>
                                <div className="row-span-1 col-span-1 bg-white border border-bg-secondary flex items-center justify-center text-gray-400">
                                    Thumb 2
                                </div>
                                <div className="row-span-1 col-span-1 bg-white border border-bg-secondary flex items-center justify-center text-gray-400">
                                    Thumb 3
                                </div>
                            </div>

                            {/* Right: Info */}
                            <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white border-l border-bg-secondary">
                                <h2 className="text-3xl font-serif text-text mb-2">
                                    {selectedActor.name}
                                </h2>
                                <div className="w-12 h-px bg-gold mb-8"></div>

                                <div className="space-y-4 font-sans text-sm text-gray-600 mb-12">
                                    <div className="flex justify-between border-b border-bg-secondary pb-2">
                                        <span className="text-gray-400 uppercase tracking-wider">Age</span>
                                        <span className="font-medium text-text">{selectedActor.age}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-bg-secondary pb-2">
                                        <span className="text-gray-400 uppercase tracking-wider">Height</span>
                                        <span className="font-medium text-text">{selectedActor.height}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-bg-secondary pb-2">
                                        <span className="text-gray-400 uppercase tracking-wider">Weight</span>
                                        <span className="font-medium text-text">{selectedActor.weight}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-bg-secondary pb-2">
                                        <span className="text-gray-400 uppercase tracking-wider">Education</span>
                                        <span className="font-medium text-text text-right max-w-[60%]">
                                            {selectedActor.education}
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-serif text-lg text-text mb-4">Selected Works</h4>
                                    <ul className="space-y-2">
                                        {selectedActor.selectedWorks.map((work, i) => (
                                            <li key={i} className="text-sm text-gray-500 flex items-center">
                                                <span className="w-1.5 h-1.5 bg-gold rounded-full mr-3"></span>
                                                {work}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
