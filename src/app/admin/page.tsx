import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Users, Calendar, Package, Star, Settings, LogOut } from "lucide-react";

export default async function AdminDashboard() {
    const session = await getServerSession();

    if (!session) {
        redirect("/giris");
    }

    // In a real app, check for role === 'ADMIN'
    // if (session.user.email !== "admin@kunyecisuleyman.com") {
    //   redirect("/");
    // }

    return (
        <div className="min-h-screen bg-bg-primary flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-bg-secondary hidden md:flex flex-col">
                <div className="p-8 border-b border-bg-secondary">
                    <h1 className="font-serif text-2xl text-text">KS Admin</h1>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 bg-bg-primary text-brand font-sans text-sm tracking-wide rounded-sm">
                        <Users size={18} />
                        <span>Genel Bakış</span>
                    </Link>
                    <Link href="/admin/appointments" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-bg-primary hover:text-text transition-colors font-sans text-sm tracking-wide rounded-sm">
                        <Calendar size={18} />
                        <span>Randevular</span>
                    </Link>
                    <Link href="/admin/products" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-bg-primary hover:text-text transition-colors font-sans text-sm tracking-wide rounded-sm">
                        <Package size={18} />
                        <span>Ürünler</span>
                    </Link>
                    <Link href="/admin/talent" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-bg-primary hover:text-text transition-colors font-sans text-sm tracking-wide rounded-sm">
                        <Star size={18} />
                        <span>Yetenekler</span>
                    </Link>
                    <Link href="/admin/settings" className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-bg-primary hover:text-text transition-colors font-sans text-sm tracking-wide rounded-sm">
                        <Settings size={18} />
                        <span>Ayarlar</span>
                    </Link>
                </nav>
                <div className="p-4 border-t border-bg-secondary">
                    <div className="flex items-center space-x-3 px-4 py-3 text-gray-400">
                        <div className="w-8 h-8 bg-bg-secondary rounded-full flex items-center justify-center text-xs font-serif">
                            {session.user?.name?.charAt(0) || "A"}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-xs font-medium text-text truncate">{session.user?.name}</p>
                            <p className="text-[10px] truncate">{session.user?.email}</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 pt-32 md:pt-8 overflow-y-auto">
                <h2 className="font-serif text-3xl text-text mb-8">Panel Özeti</h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {[
                        { label: "Toplam Satış", value: "₺124.500", icon: Package },
                        { label: "Aktif Randevu", value: "12", icon: Calendar },
                        { label: "Yeni Üyeler", value: "48", icon: Users },
                        { label: "Bekleyen Sipariş", value: "5", icon: Star },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white p-6 border border-bg-secondary flex items-start justify-between">
                            <div>
                                <p className="text-xs font-sans text-gray-400 uppercase tracking-wider mb-1">{stat.label}</p>
                                <p className="font-serif text-2xl text-text">{stat.value}</p>
                            </div>
                            <div className="p-2 bg-bg-primary rounded-full text-brand">
                                <stat.icon size={20} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Recent Activity */}
                <div className="bg-white border border-bg-secondary p-8">
                    <h3 className="font-serif text-xl text-text mb-6">Son Hareketler</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center justify-between py-3 border-b border-bg-secondary last:border-0">
                                <div className="flex items-center space-x-4">
                                    <div className="w-2 h-2 bg-gold rounded-full"></div>
                                    <div>
                                        <p className="text-sm font-medium text-text">Yeni Sipariş #102{i}</p>
                                        <p className="text-xs text-gray-400">2 saat önce</p>
                                    </div>
                                </div>
                                <span className="text-sm font-serif text-text">₺12.500</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
