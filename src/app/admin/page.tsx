import { Users, Calendar, DollarSign, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">Dashboard</h2>
                <p className="text-gray-500 mt-2">Welcome back, Admin. Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    title="Total Users"
                    value="1,234"
                    change="+12%"
                    icon={<Users className="w-6 h-6 text-blue-600" />}
                />
                <StatsCard
                    title="Active Appointments"
                    value="42"
                    change="+5%"
                    icon={<Calendar className="w-6 h-6 text-purple-600" />}
                />
                <StatsCard
                    title="Total Sales"
                    value="₺125,000"
                    change="+23%"
                    icon={<DollarSign className="w-6 h-6 text-green-600" />}
                />
                <StatsCard
                    title="Growth"
                    value="18%"
                    change="+2%"
                    icon={<TrendingUp className="w-6 h-6 text-orange-600" />}
                />
            </div>

            {/* Recent Activity Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center justify-between py-3 border-b last:border-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <Users className="w-5 h-5 text-gray-500" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">New user registered</p>
                                    <p className="text-sm text-gray-500">2 minutes ago</p>
                                </div>
                            </div>
                            <span className="text-sm font-medium text-green-600">Completed</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StatsCard({ title, value, change, icon }: { title: string; value: string; change: string; icon: React.ReactNode }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
                <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">{change}</span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
    );
}
