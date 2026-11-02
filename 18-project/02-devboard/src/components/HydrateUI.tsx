"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme, setSidebarOpen } from "@/features/uiSlice";
import type { AppDispatch } from "@/lib/store";

export function HydrateUI() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Restore theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      dispatch(setTheme(savedTheme));
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      dispatch(setTheme(prefersDark ? "dark" : "light"));
    }

    // Restore sidebar (desktop: open by default on first visit)
    const savedSidebar = localStorage.getItem("sidebarOpen");
    if (savedSidebar === "true") {
      dispatch(setSidebarOpen(true));
    } else if (savedSidebar === "false") {
      dispatch(setSidebarOpen(false));
    } else {
      dispatch(setSidebarOpen(window.innerWidth >= 768));
    }
  }, [dispatch]);

  return null;
}