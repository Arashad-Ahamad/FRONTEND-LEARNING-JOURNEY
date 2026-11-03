import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import AddToCartButton from "@/components/product/AddToCartButton";
import BackButton from "@/components/common/BackButton";
import StarRating from "@/components/common/StarRating";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { fetchProductById } from "@/services/api";

// Next.js 15: params is a Promise
interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = /^\d+$/.test(id) ? await fetchProductById(id).catch(() => null) : null;

  return { title: product?.title ?? "Product" };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  if (!/^\d+$/.test(id)) notFound();

  const product = await fetchProductById(id);
  if (!product) notFound();

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <BackButton />

      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {/* Image area stays white so product photos look right in dark mode too */}
        <div className="relative h-72 rounded-lg bg-white sm:h-96 md:h-[28rem] md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain p-6 md:p-8"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="mb-2 text-xl font-bold sm:text-2xl md:text-3xl">{product.title}</h1>
          <p className="mb-3 text-muted-foreground capitalize">{product.category}</p>
          <div className="mb-4">
            <StarRating rate={product.rating.rate} count={product.rating.count} />
          </div>
          <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {product.description}
          </p>
          <p className="mb-6 text-2xl font-bold text-primary sm:text-3xl">
            {formatPrice(product.price)}
          </p>

          <AddToCartButton
            product={{
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image,
            }}
            size="lg"
            className="w-full"
          />

          <Button asChild variant="secondary" size="lg" className="mt-4 w-full">
            <Link href="/cart">View Cart</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
