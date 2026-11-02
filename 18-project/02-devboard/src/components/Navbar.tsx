"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, toggleTheme } from "@/features/uiSlice";
import { Button } from "@/components/ui/button";
import type { RootState, AppDispatch } from "@/lib/store";

export function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((s: RootState) => s.ui.theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-gray-200 dark:border-gray-800 px-4 py-3 bg-white dark:bg-gray-900 shrink-0">
      <div className="flex items-center gap-3">
        {/* Hamburger desktop + mobile dono pe */}
        <Button variant="ghost" size="icon" onClick={() => dispatch(toggleSidebar())}>
          <Menu size={20} />
        </Button>
        <span className="font-semibold text-gray-900 dark:text-white md:hidden">
          DevBoard
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
          Welcome, Admin
        </span>
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
          A
        </div>
        <Button variant="ghost" size="icon" onClick={() => dispatch(toggleTheme())}>
          {mounted ? (
            theme === "light" ? <Moon size={18} /> : <Sun size={18} />
          ) : (
            <div className="w-[18px] h-[18px]" />
          )}
        </Button>
      </div>
    </header>
  );
}