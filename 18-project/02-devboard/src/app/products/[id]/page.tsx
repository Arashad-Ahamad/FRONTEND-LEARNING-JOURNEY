"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, RefreshCw } from "lucide-react";
import { api } from "@/lib/api";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { Product } from "@/lib/types";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    if (!id) {
      setLoading(false);
      setError("Product ID missing");
      return;
    }

    setLoading(true);
    setError(null);

    api
      .get<Product>(`/products/${id}`, { timeout: 10000 })
      .then((res) => {
        if (!cancelled) {
          setProduct(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (cancelled) return;
        console.error("FETCH ERROR:", err);
        if (err.response?.status === 404) {
          setError("Product not found — ID galat hai");
        } else if (err.code === "ECONNABORTED") {
          setError("Request timeout — slow internet");
        } else {
          setError("Could not load the product");
        }
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id, retryKey]);

  const handleRetry = () => {
    setProduct(null);
    setRetryKey((k) => k + 1);
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto space-y-4 p-4">
        <Skeleton className="h-6 w-32" />
        <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
          <Skeleton className="h-72 w-full" />
          <div className="space-y-3">
            <Skeleton className="h-6 w-24" />
            <Skeleton className="h-8 w-full" />
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-20 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20 px-4">
        <div className="text-5xl mb-4">😕</div>
        <p className="text-red-500 mb-2 text-lg font-semibold">
          {error || "Product not found"}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Product ID: {id || "undefined"}
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
          >
            <RefreshCw size={16} />
            Retry
          </button>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-72 object-contain"
          />
        </div>

        <div className="space-y-4">
          <Badge variant="secondary">{product.category}</Badge>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {product.title}
          </h1>

          <div className="flex items-center gap-2">
            <Star size={18} className="fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              {product.rating.rate}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>

          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Product ID: <span className="font-mono">#{product.id}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}