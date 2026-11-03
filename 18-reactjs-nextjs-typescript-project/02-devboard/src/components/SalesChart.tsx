"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 5500 },
  { month: "Jul", sales: 7000 },
];

export function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
        <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
        <YAxis stroke="#9ca3af" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: "#1f2937",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
          }}
        />
        <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}