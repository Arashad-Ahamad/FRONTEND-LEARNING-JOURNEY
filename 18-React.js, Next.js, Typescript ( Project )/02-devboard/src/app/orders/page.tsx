"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/features/ordersSlice";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { RootState, AppDispatch } from "@/lib/store";

export default function OrdersPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((s: RootState) => s.orders);

  useEffect(() => {
    if (status === "idle") dispatch(fetchOrders());
  }, [status, dispatch]);

  if (status === "loading") {
    return (
      <div className="space-y-2 max-w-7xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full" />
        ))}
      </div>
    );
  }

  const statusVariant = {
    pending: "secondary",
    shipped: "default",
    delivered: "outline",
  } as const;

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Orders</h1>
      <div className="border rounded-xl overflow-x-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Order ID</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Customer</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Items</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Total</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Status</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold hidden sm:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {items.map((o) => (
              <tr key={o.id} className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <td className="p-3 text-gray-900 dark:text-white font-medium">#{o.id}</td>
                <td className="p-3 text-gray-700 dark:text-gray-300">User {o.userId}</td>
                <td className="p-3 text-gray-700 dark:text-gray-300">{o.items}</td>
                <td className="p-3 text-gray-900 dark:text-white font-semibold">${o.total}</td>
                <td className="p-3">
                  <Badge variant={statusVariant[o.status]}>{o.status}</Badge>
                </td>
                <td className="p-3 hidden sm:table-cell text-gray-700 dark:text-gray-300">{o.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}