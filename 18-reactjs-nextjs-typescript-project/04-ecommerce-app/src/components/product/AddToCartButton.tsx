"use client";

import type { ComponentProps } from "react";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { truncate } from "@/lib/utils";
import type { Product } from "@/types/product";

interface AddToCartButtonProps {
  product: Pick<Product, "id" | "title" | "price" | "image">;
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
}

export default function AddToCartButton({
  product,
  size = "default",
  className,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const inCart = useAppSelector((state) =>
    state.cart.items.some((item) => item.id === product.id),
  );

  const handleClick = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      }),
    );

    toast.success(
      inCart
        ? `Increased ${truncate(product.title)} quantity`
        : `${truncate(product.title)} added to cart`,
    );
  };

  return (
    <Button size={size} className={className} onClick={handleClick}>
      <ShoppingCart /> Add to Cart
    </Button>
  );
}
