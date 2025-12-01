import { NextResponse } from "next/server";

import { getServerSession } from "next-auth";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(req: Request) {
    try {
        const session = await getServerSession();
        // In a real app, ensure user is logged in
        // if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

        const { items, total } = await req.json();

        // Dynamically require iyzipay to avoid build-time evaluation
        const Iyzipay = require("iyzipay");
        const iyzipay = new Iyzipay({
            apiKey: process.env.IYZICO_API_KEY || "",
            secretKey: process.env.IYZICO_SECRET_KEY || "",
            uri: process.env.IYZICO_BASE_URL || "https://sandbox-api.iyzipay.com",
        });

        const request = {
            locale: "tr",
            conversationId: `order-${Date.now()}`,
            price: total.toString(),
            paidPrice: total.toString(),
            currency: "TRY",
            basketId: `basket-${Date.now()}`,
            paymentGroup: "PRODUCT",
            callbackUrl: `${process.env.NEXTAUTH_URL}/api/payment/callback`,
            enabledInstallments: [2, 3, 6, 9],
            buyer: {
                id: session?.user?.email || "guest-user",
                name: session?.user?.name?.split(" ")[0] || "Misafir",
                surname: session?.user?.name?.split(" ").slice(1).join(" ") || "Kullanıcı",
                gsmNumber: "+905350000000",
                email: session?.user?.email || "guest@example.com",
                identityNumber: "11111111111",
                lastLoginDate: "2015-10-05 12:43:35",
                registrationAddress: "Nispetiye Cad. No: 1",
                ip: "85.34.78.112",
                city: "Istanbul",
                country: "Turkey",
                zipCode: "34732",
            },
            shippingAddress: {
                contactName: "Jane Doe",
                city: "Istanbul",
                country: "Turkey",
                address: "Nispetiye Cad. No: 1",
                zipCode: "34742",
            },
            billingAddress: {
                contactName: "Jane Doe",
                city: "Istanbul",
                country: "Turkey",
                address: "Nispetiye Cad. No: 1",
                zipCode: "34742",
            },
            basketItems: items.map((item: any) => ({
                id: item.id,
                name: item.name,
                category1: "Jewelry",
                itemType: "PHYSICAL",
                price: item.price.toString(),
            })),
        };

        return new Promise<NextResponse>((resolve, reject) => {
            iyzipay.checkoutFormInitialize.create(request, (err: any, result: any) => {
                if (err) {
                    resolve(NextResponse.json({ error: err }, { status: 500 }));
                } else {
                    resolve(NextResponse.json(result));
                }
            });
        });
    } catch (error) {
        return NextResponse.json({ error: "Payment initialization failed" }, { status: 500 });
    }
}
