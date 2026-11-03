"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { toast } from "sonner";

import LoadingSpinner from "@/components/common/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  clearCart,
  removeFromCart,
  selectCartHydrated,
  selectCartItems,
  selectTotalPrice,
  selectTotalQuantity,
  updateQuantity,
  type CartItem,
} from "@/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { formatPrice, truncate } from "@/lib/utils";

const SHIPPING = 10;
const TAX_RATE = 0.1;

export default function CartView() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const hydrated = useAppSelector(selectCartHydrated);
  const totalQuantity = useAppSelector(selectTotalQuantity);
  const totalPrice = useAppSelector(selectTotalPrice);

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
    toast.success("Cart updated");
  };

  const handleRemove = (item: CartItem) => {
    dispatch(removeFromCart(item.id));
    toast.error(`${truncate(item.title)} removed`);
  };

  const handleClear = () => {
    if (window.confirm("Clear entire cart?")) {
      dispatch(clearCart());
      toast.success("Cart cleared");
    }
  };

  // Wait until the saved cart is loaded from localStorage (avoids an "empty cart" flash)
  if (!hydrated) return <LoadingSpinner />;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="mx-auto mb-4 size-14 text-muted-foreground" />
        <h2 className="mb-4 text-xl font-bold md:text-2xl">Your cart is empty</h2>
        <p className="mb-8 text-muted-foreground">
          Looks like you haven&apos;t added any items yet
        </p>
        <Button asChild size="lg">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const tax = totalPrice * TAX_RATE;
  const grandTotal = totalPrice + SHIPPING + tax;

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <h1 className="mb-4 text-xl font-bold md:mb-6 md:text-2xl">
        Shopping Cart
        <span className="ml-2 text-base font-normal text-muted-foreground md:text-lg">
          ({totalQuantity} items)
        </span>
      </h1>

      <div className="flex flex-col gap-6 md:gap-8 lg:flex-row">
        <div className="lg:w-2/3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 border-b py-4 sm:flex-row"
            >
              <Link href={`/product/${item.id}`} className="shrink-0 rounded-md bg-white p-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="size-20 object-contain"
                />
              </Link>

              <div className="flex-1 text-center sm:text-left">
                <h3 className="line-clamp-2 text-sm font-semibold sm:text-base">{item.title}</h3>
                <p className="font-bold text-primary">{formatPrice(item.price)}</p>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="secondary"
                  size="icon"
                  className="size-7"
                  aria-label="Decrease quantity"
                  disabled={item.quantity <= 1}
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  <Minus />
                </Button>
                <span className="w-8 text-center">{item.quantity}</span>
                <Button
                  variant="secondary"
                  size="icon"
                  className="size-7"
                  aria-label="Increase quantity"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  <Plus />
                </Button>
              </div>

              <div className="min-w-[80px] text-center font-bold">
                {formatPrice(item.price * item.quantity)}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-destructive hover:text-destructive"
                aria-label={`Remove ${item.title}`}
                onClick={() => handleRemove(item)}
              >
                <Trash2 />
              </Button>
            </div>
          ))}

          <div className="mt-6 flex flex-col justify-between gap-3 border-t pt-4 sm:flex-row">
            <Button asChild variant="link" className="justify-center px-0 sm:justify-start">
              <Link href="/">
                <ArrowLeft /> Continue Shopping
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="text-destructive hover:text-destructive"
              onClick={handleClear}
            >
              Clear Cart
            </Button>
          </div>
        </div>

        <div className="lg:w-1/3">
          <Card className="sticky top-20 gap-4">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 space-y-2 md:space-y-3">
                <div className="flex justify-between text-sm md:text-base">
                  <span>Subtotal ({totalQuantity} items)</span>
                  <span className="font-semibold">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span>Shipping</span>
                  <span>{formatPrice(SHIPPING)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground md:text-sm">
                  <span>Estimated Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <div className="mt-3 border-t pt-3">
                  <div className="flex justify-between text-base font-bold md:text-lg">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(grandTotal)}</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full">
                Proceed to Checkout
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
