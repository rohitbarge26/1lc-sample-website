"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  Activity,
  CreditCard,
  Search,
  Bell
} from "lucide-react";

const STATS = [
  { title: "Total Revenue", value: "₹ 24,50,000", change: "+12.5%", trend: "up" },
  { title: "Active Subscriptions", value: "1,240", change: "+5.2%", trend: "up" },
  { title: "Pending Orders", value: "42", change: "-2.4%", trend: "down" },
  { title: "Customer Churn", value: "1.2%", change: "-0.5%", trend: "down" },
];

const TRANSACTIONS = [
  { id: "TX-1092", user: "Acme Corp", amount: "₹ 1,25,000", status: "Completed", date: "Today, 14:32" },
  { id: "TX-1091", user: "Globex Inc", amount: "₹ 45,000", status: "Processing", date: "Today, 11:15" },
  { id: "TX-1090", user: "Stark Industries", amount: "₹ 3,50,000", status: "Completed", date: "Yesterday" },
  { id: "TX-1089", user: "Wayne Ent", amount: "₹ 85,000", status: "Failed", date: "Yesterday" },
  { id: "TX-1088", user: "Umbrella Corp", amount: "₹ 12,000", status: "Completed", date: "Jun 15" },
];

export default function DashboardPage() {
  return (
    <div className="flex-1 flex flex-col md:flex-row min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r bg-background flex flex-col p-4 hidden md:flex">
        <div className="font-bold text-xl mb-8 px-2">Admin Portal</div>
        <nav className="flex flex-col gap-2">
          {["Overview", "Analytics", "Customers", "Orders", "Settings"].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 lg:p-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard Overview</h1>
            <p className="text-muted-foreground text-sm mt-1">Monitor your store's performance metrics.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="h-9 w-64 rounded-md border border-input bg-background pl-8 pr-4 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
            <button className="p-2 border rounded-md hover:bg-accent relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-card border rounded-xl shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-sm font-medium text-muted-foreground">{stat.title}</h3>
                {i === 0 ? <DollarSign className="w-4 h-4 text-muted-foreground" /> :
                 i === 1 ? <Users className="w-4 h-4 text-muted-foreground" /> :
                 i === 2 ? <CreditCard className="w-4 h-4 text-muted-foreground" /> :
                 <Activity className="w-4 h-4 text-muted-foreground" />}
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <p className={`text-xs font-medium flex items-center gap-1 ${
                stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
              }`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change} from last month
              </p>
            </motion.div>
          ))}
        </div>

        {/* Transactions Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-card border rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold">Recent Transactions</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground bg-muted/50 uppercase">
                <tr>
                  <th className="px-6 py-3 font-medium">Transaction ID</th>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Amount</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{tx.id}</td>
                    <td className="px-6 py-4">{tx.user}</td>
                    <td className="px-6 py-4 font-medium">{tx.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        tx.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-500' :
                        tx.status === 'Processing' ? 'bg-amber-500/10 text-amber-500' :
                        'bg-red-500/10 text-red-500'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{tx.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
