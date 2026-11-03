"use client";

import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { store, type RootState } from "@/lib/store";

function ThemeApplier() {
  const theme = useSelector((s: RootState) => s.ui.theme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return null;
}

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeApplier />
      {children}
    </Provider>
  );
}