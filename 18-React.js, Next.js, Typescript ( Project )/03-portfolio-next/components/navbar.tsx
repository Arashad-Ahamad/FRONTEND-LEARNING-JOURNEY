"use client";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { profile } from "@/lib/data";
import { btnPrimary } from "@/lib/ui";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const iconBtn = "inline-flex size-10 items-center justify-center rounded-lg border border-line bg-card text-muted hover:text-fg";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#top" className="font-semibold tracking-tight">Arashad</a>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-fg">{l}</a></li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Toggle theme" className={iconBtn}
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>
            <Sun className="hidden size-4 dark:block" aria-hidden />
            <Moon className="size-4 dark:hidden" aria-hidden />
          </button>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} hidden sm:inline-flex`}>
            <Download className="size-4" aria-hidden /> Resume
          </a>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}
            aria-controls="mobile-menu" className={`${iconBtn} md:hidden`} onClick={() => setOpen(!open)}>
            {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-bg md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-fg">{l}</a>
              </li>
            ))}
            <li className="py-3 sm:hidden">
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} w-full`}>
                <Download className="size-4" aria-hidden /> Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
