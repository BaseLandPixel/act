"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        title: "The Inquiry",
        subtitle: "Randevu",
        description: "Choose your moment. Schedule a private consultation via our digital calendar.",
    },
    {
        title: "The Preparation",
        subtitle: "Hazırlık",
        description: "We review your vision. You receive a confirmation email with a preliminary mood board guide.",
    },
    {
        title: "The Connection",
        subtitle: "Zoom/Link",
        description: "Digital Atelier access. 15 minutes before our meeting, a secure video link is sent to your dashboard and email.",
    },
    {
        title: "The Creation",
        subtitle: "Tasarım",
        description: "Face-to-face with the master. We co-create your heirloom in real-time using our 3D technology.",
    },
];

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="py-24 relative overflow-hidden" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <span className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase block mb-4">
                        The Process
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-[#0F2F24]">
                        Your Journey to the Unique
                    </h2>
                </div>

                <div className="relative">
                    {/* Central Line Background (Gray) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 transform -translate-x-1/2" />

                    {/* Animated Central Line (Gold) */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="absolute left-1/2 top-0 w-px bg-[#D4AF37] transform -translate-x-1/2 origin-top"
                    />

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`flex items-center justify-between ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                    }`}
                            >
                                {/* Text Content */}
                                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                                    <h3 className="font-serif text-2xl text-[#0F2F24] mb-2">{step.title}</h3>
                                    <span className="font-sans text-xs text-gray-400 tracking-widest uppercase block mb-4">
                                        {step.subtitle}
                                    </span>
                                    <p className="font-sans text-gray-600 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Center Node */}
                                <div className="relative z-10 w-2/12 flex justify-center">
                                    <div className="w-4 h-4 bg-[#FAFAF9] border-2 border-[#D4AF37] rounded-full transform rotate-45" />
                                </div>

                                {/* Empty Space for Balance */}
                                <div className="w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
