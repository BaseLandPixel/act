"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { PRESS_ITEMS } from "@/data/constants";
import "swiper/css";
import "swiper/css/pagination";

export default function PressSlider() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h3 className="text-center font-serif text-3xl text-primary mb-16">
                    In The Press
                </h3>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="w-full pb-12"
                >
                    {PRESS_ITEMS.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col items-center text-center space-y-4 p-8 border border-gray-100 hover:border-accent transition-colors duration-500 h-full bg-gray-50/50">
                                {/* Image Placeholder */}
                                <div className="w-full h-48 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
                                    <span className="font-serif italic">{item.source} Image</span>
                                </div>

                                <h4 className="font-serif text-xl text-primary">
                                    {item.source}
                                </h4>
                                <p className="text-gray-600 font-sans text-sm leading-relaxed">
                                    "{item.title}"
                                </p>
                                <span className="text-xs text-gray-400 uppercase tracking-wider mt-auto">
                                    {item.date}
                                </span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
