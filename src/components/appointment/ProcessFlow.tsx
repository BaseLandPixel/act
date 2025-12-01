"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MailCheck, Video, Gem } from "lucide-react";

const STEPS = [
    {
        id: 1,
        icon: Calendar,
        title: "Randevunu Planla",
        desc: "Uygun gün ve saati seçerek talebini ilet.",
    },
    {
        id: 2,
        icon: MailCheck,
        title: "Onay & Hazırlık",
        desc: "E-postana gelen onay ile ön hazırlık formunu incele.",
    },
    {
        id: 3,
        icon: Video,
        title: "Zoom Bağlantısı",
        desc: "Görüşme linki, randevu saatinden 15 dk önce e-postana ve paneline düşecek.",
    },
    {
        id: 4,
        icon: Gem,
        title: "Tasarım Buluşması",
        desc: "Usta tasarımcımızla hayalindeki parçayı şekillendir.",
    },
];

export default function ProcessFlow() {
    return (
        <section className="w-full py-12 px-4 md:px-0">
            <div className="max-w-5xl mx-auto">
                <h2 className="font-serif text-2xl text-text text-center mb-12">Nasıl Çalışır?</h2>

                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-6 left-0 w-full h-[1px] bg-bg-secondary hidden md:block -z-10"></div>

                    {/* Animated Progress Line (Desktop) */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-6 left-0 h-[1px] bg-gold hidden md:block -z-10"
                    ></motion.div>

                    {STEPS.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.3 }}
                            className="flex flex-row md:flex-col items-start md:items-center w-full md:w-1/4 mb-8 md:mb-0 relative group"
                        >
                            {/* Vertical Line (Mobile) */}
                            {index !== STEPS.length - 1 && (
                                <div className="absolute left-6 top-12 bottom-[-2rem] w-[1px] bg-bg-secondary md:hidden"></div>
                            )}

                            {/* Icon Circle */}
                            <div className="w-12 h-12 rounded-full bg-bg-primary border border-bg-secondary flex items-center justify-center z-10 group-hover:border-gold transition-colors duration-500">
                                <motion.div
                                    initial={{ color: "#9CA3AF" }} // gray-400
                                    whileInView={{ color: "#D4AF37" }} // gold
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                                >
                                    <step.icon size={20} />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="ml-6 md:ml-0 md:mt-6 text-left md:text-center flex-1">
                                <h3 className="font-serif text-lg text-text mb-2">{step.title}</h3>
                                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[200px] mx-auto">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
