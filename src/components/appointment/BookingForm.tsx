"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DateSelector from "./DateSelector";
import { bookAppointment } from "@/actions/bookAppointment";

interface BookingFormProps {
    bookedSlots: { date: Date; timeSlot: string }[];
}

export default function BookingForm({ bookedSlots }: BookingFormProps) {
    const router = useRouter();
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleDateSelect = (date: Date, time: string) => {
        setSelectedDate(date);
        setSelectedTime(time);
        setError("");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!selectedDate || !selectedTime) {
            setError("Lütfen tarih ve saat seçiniz.");
            return;
        }

        setLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        formData.set("date", selectedDate.toISOString());
        formData.set("timeSlot", selectedTime);

        const result = await bookAppointment(formData);

        if (result.error) {
            setError(result.error);
            setLoading(false);
        } else {
            setSubmitted(true);
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="text-center py-16 animate-fade-in bg-white p-8 border border-bg-secondary">
                <h3 className="font-serif text-3xl text-text mb-4">Teşekkürler!</h3>
                <p className="font-sans text-sm text-gray-500 mb-8">
                    Randevu talebiniz alındı. Onay ve detaylar e-posta ile gönderilecektir.
                </p>
                <Link
                    href="/giris"
                    className="inline-block border-b border-gold pb-1 text-xs font-sans uppercase tracking-[0.2em] hover:text-brand hover:border-brand transition-colors"
                >
                    Hesabım sayfasına git
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-bg-secondary shadow-none rounded-none space-y-8">
            {error && (
                <div className="bg-red-50 text-red-800 text-xs p-3 rounded-none border border-red-100">
                    {error}
                </div>
            )}

            {/* Date & Time Selector */}
            <DateSelector onSelect={handleDateSelect} bookedSlots={bookedSlots} />

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                        Telefon
                    </label>
                    <input
                        name="phone"
                        type="tel"
                        required
                        className="w-full border-b border-bg-secondary py-2 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors"
                        placeholder="05XX XXX XX XX"
                    />
                </div>
                <div>
                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-4">
                        İlgilendiğiniz Ürün Tipi
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {["Yüzük", "Bileklik", "Kolye", "Özel Tasarım"].map((type) => (
                            <label key={type} className="flex items-center space-x-2 cursor-pointer">
                                <input type="radio" name="product" value={type} className="accent-gold" />
                                <span className="font-serif text-text">{type}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                    Notlar
                </label>
                <textarea
                    name="notes"
                    className="w-full border border-bg-secondary p-4 font-serif text-text focus:outline-none focus:border-gold bg-transparent transition-colors h-32 resize-none rounded-none"
                    placeholder="Özel isteklerinizi belirtebilirsiniz..."
                ></textarea>
            </div>

            <div className="pt-4">
                <div className="flex items-start space-x-2 mb-6">
                    <input type="checkbox" required className="mt-1 accent-gold" />
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                        Randevu bilgilerini gizlilik politikamıza uygun olarak kullanıyoruz.
                    </p>
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand text-bg-primary py-4 font-sans text-xs uppercase tracking-[0.2em] hover:bg-brand/90 transition-colors duration-300 rounded-none disabled:opacity-50"
                >
                    {loading ? "İşleniyor..." : "Randevu Talep Et"}
                </button>
            </div>
        </form>
    );
}
