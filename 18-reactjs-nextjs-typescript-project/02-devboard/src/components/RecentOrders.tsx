"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "@/features/ordersSlice";
import { Badge } from "@/components/ui/badge";
import type { RootState, AppDispatch } from "@/lib/store";

export function RecentOrders() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status } = useSelector((s: RootState) => s.orders);

  useEffect(() => {
    if (status === "idle") dispatch(fetchOrders());
  }, [status, dispatch]);

  const statusVariant = {
    pending: "secondary",
    shipped: "default",
    delivered: "outline",
  } as const;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-900 dark:text-white">Recent Orders</h2>
        <Link href="/orders" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
          View all →
        </Link>
      </div>
      {status === "loading" ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : (
        <div className="space-y-3">
          {items.slice(0, 5).map((o) => (
            <div
              key={o.id}
              className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 last:border-0"
            >
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Order #{o.id}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  User {o.userId} · {o.date}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">${o.total}</span>
                <Badge variant={statusVariant[o.status]}>{o.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}