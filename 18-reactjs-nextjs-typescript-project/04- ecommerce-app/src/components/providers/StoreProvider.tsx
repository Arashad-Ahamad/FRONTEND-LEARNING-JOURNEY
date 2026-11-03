"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, type AppStore } from "@/lib/store";
import { hydrateCart } from "@/features/cart/cartSlice";
import { loadCart, saveCart } from "@/lib/cartStorage";

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const store = storeRef.current;
    if (!store) return;

    // 1. Load the saved cart (client only, so SSR and first render match)
    store.dispatch(hydrateCart(loadCart()));

    // 2. Persist the cart whenever its items change
    let previousItems = store.getState().cart.items;
    const unsubscribe = store.subscribe(() => {
      const items = store.getState().cart.items;
      if (items !== previousItems) {
        previousItems = items;
        saveCart(items);
      }
    });

    return unsubscribe;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
