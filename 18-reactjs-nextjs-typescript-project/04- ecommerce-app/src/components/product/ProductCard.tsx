import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import AddToCartButton from "@/components/product/AddToCartButton";
import { Card } from "@/components/ui/card";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full gap-0 overflow-hidden py-0 transition hover:shadow-lg">
      {/* Image area stays white so product photos look right in dark mode too */}
      <Link href={`/product/${product.id}`} className="group block bg-white">
        <div className="relative h-48 sm:h-52 md:h-56">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-4 transition duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="mb-1 line-clamp-2 min-h-[40px] text-sm font-medium hover:text-primary sm:min-h-[48px] sm:text-base">
            {product.title}
          </h3>
        </Link>
        <p className="mb-2 text-xs text-muted-foreground capitalize sm:text-sm">
          {product.category}
        </p>

        <div className="mt-auto mb-3 flex items-center justify-between">
          <span className="text-lg font-bold sm:text-xl">{formatPrice(product.price)}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground sm:text-sm">
            <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
            {product.rating?.rate ?? 4.5}
          </span>
        </div>

        <AddToCartButton
          product={{
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
          }}
          className="w-full"
        />
      </div>
    </Card>
  );
}
