"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

import ThemeToggle from "@/components/common/ThemeToggle";
import { Button } from "@/components/ui/button";
import { selectTotalQuantity } from "@/features/cart/cartSlice";
import { useAppSelector } from "@/lib/hooks";

export default function Navbar() {
  const totalQuantity = useAppSelector(selectTotalQuantity);

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">S</span>
            </div>
            <span className="text-xl font-bold">ShopHub</span>
          </Link>

          <div className="flex items-center gap-1">
            {/* Light / Dark / System */}
            <ThemeToggle />

            {/* Cart Icon */}
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="relative rounded-full"
              aria-label={`Cart, ${totalQuantity} items`}
            >
              <Link href="/cart">
                <ShoppingCart className="size-5" />
                {totalQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {totalQuantity}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
