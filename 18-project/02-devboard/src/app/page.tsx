"use client";

import { motion } from "framer-motion";
import { DollarSign, ShoppingBag, Users, Package } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { SalesChart } from "@/components/SalesChart";
import { RevenueChart } from "@/components/RevenueChart";
import { RecentOrders } from "@/components/RecentOrders";

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6 max-w-7xl mx-auto"
    >
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here&apos;s what&apos;s happening today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Sales" value="$24,500" change="+12%" icon={<DollarSign size={20} />} />
        <StatCard title="Orders" value="1,245" change="+8%" icon={<ShoppingBag size={20} />} />
        <StatCard title="Customers" value="892" change="+15%" icon={<Users size={20} />} />
        <StatCard title="Products" value="156" change="-2%" positive={false} icon={<Package size={20} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
          <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">Sales Overview</h2>
          <SalesChart />
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
          <h2 className="font-semibold mb-4 text-gray-900 dark:text-white">Weekly Revenue</h2>
          <RevenueChart />
        </div>
      </div>

      <RecentOrders />
    </motion.div>
  );
}