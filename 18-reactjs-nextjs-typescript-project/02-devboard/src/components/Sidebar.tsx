"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { LayoutDashboard, Package, ShoppingCart, Users, X } from "lucide-react";
import { closeSidebar } from "@/features/uiSlice";
import type { RootState, AppDispatch } from "@/lib/store";

const links = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/products", label: "Products", icon: Package },
  { href: "/orders", label: "Orders", icon: ShoppingCart },
  { href: "/users", label: "Users", icon: Users },
];

function NavLinksInner({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="space-y-1">
      {links.map(({ href, label, icon: Icon }) => {
        const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            onClick={onLinkClick}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
              active
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}

function NavLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  return (
    <Suspense fallback={<div className="space-y-1 h-40" />}>
      <NavLinksInner onLinkClick={onLinkClick} />
    </Suspense>
  );
}

export function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const open = useSelector((s: RootState) => s.ui.sidebarOpen);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <aside className="hidden md:block w-60 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shrink-0" />
    );
  }

  return (
    <>
     
      <AnimatePresence initial={false}>
        {open ? (
          <motion.aside
            key="desktop-sidebar"
            initial={false}
            animate={{ width: 240 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shrink-0"
          >
            <div className="w-60 p-4">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">DevBoard</h1>
              </div>
              <NavLinks />
            </div>
          </motion.aside>
        ) : (
          <aside key="desktop-placeholder" className="hidden md:block w-0 shrink-0" />
        )}
      </AnimatePresence>

      
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => dispatch(closeSidebar())}
          />
          <motion.aside
            initial={false}
            animate={{ x: 0 }}
            className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 p-4 z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">DevBoard</h1>
              </div>
              <button
                onClick={() => dispatch(closeSidebar())}
                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <X size={20} className="text-gray-900 dark:text-white" />
              </button>
            </div>
            <NavLinks onLinkClick={() => dispatch(closeSidebar())} />
          </motion.aside>
        </div>
      )}
    </>
  );
}