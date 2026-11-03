"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", revenue: 2400 },
  { day: "Tue", revenue: 1398 },
  { day: "Wed", revenue: 3800 },
  { day: "Thu", revenue: 3908 },
  { day: "Fri", revenue: 4800 },
  { day: "Sat", revenue: 3800 },
  { day: "Sun", revenue: 4300 },
];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
        <XAxis dataKey="day" stroke="#9ca3af" fontSize={12} />
        <YAxis stroke="#9ca3af" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Bar dataKey="revenue" fill="#3b82f6" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}