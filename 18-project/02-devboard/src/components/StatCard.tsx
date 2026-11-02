"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Props {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: React.ReactNode;
}

export function StatCard({ title, value, change, positive = true, icon }: Props) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm"
    >
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      </div>
      <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      <div
        className={`flex items-center gap-1 text-xs mt-1 ${
          positive ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
        }`}
      >
        {positive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
        <span>{change} vs last month</span>
      </div>
    </motion.div>
  );
}