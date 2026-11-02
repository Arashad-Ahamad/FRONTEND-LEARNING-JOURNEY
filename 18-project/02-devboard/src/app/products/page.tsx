"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setFilters, setPage } from "@/features/productsSlice";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { RootState, AppDispatch } from "@/lib/store";

export default function ProductsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { items, status, filters, error } = useSelector(
    (s: RootState) => s.products
  );

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [status, dispatch]);

  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(items.map((p) => p.category)))];
  }, [items]);

  const filtered = useMemo(() => {
    let data = [...items];
    if (filters.search) {
      data = data.filter((p) =>
        p.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    if (filters.category !== "all") {
      data = data.filter((p) => p.category === filters.category);
    }
    if (filters.sortBy === "price-asc") data.sort((a, b) => a.price - b.price);
    if (filters.sortBy === "price-desc") data.sort((a, b) => b.price - a.price);
    if (filters.sortBy === "name") data.sort((a, b) => a.title.localeCompare(b.title));
    return data;
  }, [items, filters]);

  const perPage = 8;
  const paginated = filtered.slice((filters.page - 1) * perPage, filters.page * perPage);
  const totalPages = Math.ceil(filtered.length / perPage);

  if (status === "loading") {
    return (
      <div className="space-y-2 max-w-7xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-14 w-full" />
        ))}
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="max-w-7xl mx-auto text-center py-20">
        <p className="text-red-500 mb-2">Failed to load products</p>
        <p className="text-sm text-gray-500">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 border px-4 py-2 rounded-lg text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Products</h1>

      <div className="flex gap-2 flex-wrap">
        <Input
          placeholder="Search products..."
          value={filters.search}
          onChange={(e) => dispatch(setFilters({ search: e.target.value }))}
          className="max-w-xs"
        />
        <select
          value={filters.category}
          onChange={(e) => dispatch(setFilters({ category: e.target.value }))}
          className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
        >
          {categories.map((c) => (
            <option key={c} value={c}>
              {c === "all" ? "All Categories" : c}
            </option>
          ))}
        </select>
        <select
          value={filters.sortBy}
          onChange={(e) => dispatch(setFilters({ sortBy: e.target.value as any }))}
          className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white"
        >
          <option value="name">Sort: Name</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      <div className="border rounded-xl overflow-x-auto bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Product</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold hidden sm:table-cell">Category</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Price</th>
              <th className="p-3 text-left text-gray-700 dark:text-gray-300 font-semibold hidden md:table-cell">Rating</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((p) => (
              <tr
                key={p.id}
                onClick={() => router.push(`/products/${p.id}`)}
                className="border-t border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
              >
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.title} className="h-10 w-10 object-contain bg-white rounded" />
                    <span className="line-clamp-1 text-gray-900 dark:text-white font-medium">{p.title}</span>
                  </div>
                </td>
                <td className="p-3 hidden sm:table-cell">
                  <Badge variant="secondary">{p.category}</Badge>
                </td>
                <td className="p-3 text-gray-900 dark:text-white font-semibold">${p.price}</td>
                <td className="p-3 hidden md:table-cell text-gray-700 dark:text-gray-300">⭐ {p.rating.rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Showing {paginated.length} of {filtered.length} · Page {filters.page} of {totalPages || 1}
        </p>
        <div className="flex gap-2">
          <button
            disabled={filters.page === 1}
            onClick={() => dispatch(setPage(filters.page - 1))}
            className="border px-4 py-2 rounded-lg disabled:opacity-40 text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Prev
          </button>
          <button
            disabled={filters.page === totalPages || totalPages === 0}
            onClick={() => dispatch(setPage(filters.page + 1))}
            className="border px-4 py-2 rounded-lg disabled:opacity-40 text-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}