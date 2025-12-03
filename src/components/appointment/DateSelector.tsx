"use client";

import React, { useState, useEffect } from "react";
import { format, addDays, isSameDay } from "date-fns";
import { tr } from "date-fns/locale";

interface DateSelectorProps {
    onSelect: (date: Date, time: string) => void;
    bookedSlots: { date: Date; timeSlot: string }[];
}

const TIME_SLOTS = ["10:00", "11:00", "13:00", "14:00", "15:00", "16:00"];

export default function DateSelector({ onSelect, bookedSlots }: DateSelectorProps) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [availableDates, setAvailableDates] = useState<Date[]>([]);

    useEffect(() => {
        // Generate next 14 days (excluding weekends)
        const dates = [];
        let currentDate = new Date();
        let count = 0;
        while (count < 14) {
            if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
                dates.push(new Date(currentDate));
            }
            currentDate = addDays(currentDate, 1);
            count++;
        }
        setAvailableDates(dates);
    }, []);

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
        setSelectedTime(null); // Reset time when date changes
    };

    const handleTimeClick = (time: string) => {
        if (selectedDate) {
            setSelectedTime(time);
            onSelect(selectedDate, time);
        }
    };

    const isSlotBooked = (date: Date, time: string) => {
        return bookedSlots.some(
            (slot) => isSameDay(new Date(slot.date), date) && slot.timeSlot === time
        );
    };

    return (
        <div className="space-y-6">
            {/* Date Selection */}
            <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                    Tarih Seçin
                </label>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {availableDates.map((date, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => handleDateClick(date)}
                            className={`flex-shrink-0 w-24 h-24 border flex flex-col items-center justify-center transition-all duration-300 ${selectedDate && isSameDay(selectedDate, date)
                                    ? "border-gold bg-gold/10 text-brand"
                                    : "border-bg-secondary text-gray-400 hover:border-gold/50"
                                }`}
                        >
                            <span className="text-xs font-sans uppercase">
                                {format(date, "EEE", { locale: tr })}
                            </span>
                            <span className="text-2xl font-serif font-bold">
                                {format(date, "d")}
                            </span>
                            <span className="text-xs font-sans">
                                {format(date, "MMM", { locale: tr })}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Time Selection */}
            {selectedDate && (
                <div className="animate-fade-in">
                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-gray-400 mb-3">
                        Saat Seçin
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                        {TIME_SLOTS.map((time) => {
                            const booked = isSlotBooked(selectedDate, time);
                            return (
                                <button
                                    key={time}
                                    type="button"
                                    disabled={booked}
                                    onClick={() => handleTimeClick(time)}
                                    className={`py-3 border text-sm font-serif transition-all duration-300 ${booked
                                            ? "border-gray-100 bg-gray-50 text-gray-300 cursor-not-allowed line-through"
                                            : selectedTime === time
                                                ? "border-gold bg-gold text-white"
                                                : "border-bg-secondary text-text hover:border-gold hover:text-brand"
                                        }`}
                                >
                                    {time}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
