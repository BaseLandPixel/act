"use server";

import { PrismaClient } from "@prisma/client";
import { Resend } from "resend";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function bookAppointment(formData: FormData) {
    const session = await getServerSession();
    if (!session || !session.user?.email) {
        return { error: "You must be logged in to book an appointment." };
    }

    const dateStr = formData.get("date") as string;
    const timeSlot = formData.get("timeSlot") as string;
    const notes = formData.get("notes") as string;

    if (!dateStr || !timeSlot) {
        return { error: "Date and time are required." };
    }

    const date = new Date(dateStr);

    try {
        // 1. Race Condition Check
        const existingAppointment = await prisma.appointment.findFirst({
            where: {
                date: date,
                timeSlot: timeSlot,
                status: {
                    in: ["PENDING", "CONFIRMED"],
                },
            },
        });

        if (existingAppointment) {
            return { error: "Sorry, this slot was just taken. Please choose another time." };
        }

        // 2. Create Appointment
        const user = await prisma.user.findUnique({ where: { email: session.user.email } });

        if (!user) {
            return { error: "User not found." };
        }

        const appointment = await prisma.appointment.create({
            data: {
                date: date,
                timeSlot: timeSlot,
                userId: user.id,
                status: "PENDING",
            },
        });

        // 3. Send Emails (if API key exists)
        if (process.env.RESEND_API_KEY) {
            // Admin Notification
            await resend.emails.send({
                from: "Gentogen <onboarding@resend.dev>", // Update with your verified domain
                to: "admin@gentogen.com",
                subject: `New Booking Request: ${session.user.name}`,
                html: `
            <h1>New Appointment Request</h1>
            <p><strong>User:</strong> ${session.user.name} (${session.user.email})</p>
            <p><strong>Date:</strong> ${dateStr}</p>
            <p><strong>Time:</strong> ${timeSlot}</p>
            <p><strong>Notes:</strong> ${notes}</p>
        `,
            });

            // User Notification
            await resend.emails.send({
                from: "Gentogen <onboarding@resend.dev>",
                to: session.user.email,
                subject: "Appointment Request Received",
                html: `
            <h1>Request Received</h1>
            <p>Dear ${session.user.name},</p>
            <p>We have received your appointment request for <strong>${dateStr} at ${timeSlot}</strong>.</p>
            <p>Status: <strong>Pending Confirmation</strong></p>
            <p>We will review your request and send a confirmation shortly.</p>
        `,
            });
        }

        // 4. Revalidate
        revalidatePath("/randevu");
        revalidatePath("/admin/appointments");

        return { success: true };
    } catch (error) {
        console.error("Booking Error:", error);
        return { error: "An error occurred while booking. Please try again." };
    }
}
