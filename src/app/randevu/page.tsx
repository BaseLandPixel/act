import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { ChevronRight } from "lucide-react";
import { PrismaClient } from "@prisma/client";
import ProcessFlow from "@/components/appointment/ProcessFlow";
import BookingForm from "@/components/appointment/BookingForm";

const prisma = new PrismaClient();

export default async function BookingPage() {
    const session = await getServerSession();

    if (!session) {
        redirect("/giris");
    }

    // Fetch existing appointments to block slots
    const appointments = await prisma.appointment.findMany({
        where: {
            status: {
                in: ["PENDING", "CONFIRMED"],
            },
            date: {
                gte: new Date(), // Only future appointments
            },
        },
        select: {
            date: true,
            timeSlot: true,
        },
    });

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 bg-bg-primary">
            <div className="max-w-3xl mx-auto">
                {/* Breadcrumb */}
                <div className="flex items-center space-x-2 text-xs font-sans text-gray-400 mb-8 tracking-widest uppercase">
                    <Link href="/" className="hover:text-text transition-colors">Ana Sayfa</Link>
                    <ChevronRight size={12} />
                    <span className="text-text">Randevu Al</span>
                </div>

                {/* Header */}
                <div className="mb-12">
                    <h1 className="font-serif text-4xl text-text mb-4">Randevu Al</h1>
                    <p className="font-sans text-sm text-gray-500 tracking-wide">
                        Haftaiçi Pazartesi–Cuma, 10:00–16:00 arası özel randevular.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="mb-16">
                    <ProcessFlow />
                </div>

                {/* Booking Form (Client Component) */}
                <BookingForm bookedSlots={appointments} />
            </div>
        </main>
    );
}
