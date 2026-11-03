import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (value: number) => `$${value.toFixed(2)}`;

export const truncate = (text: string, length = 20) =>
  text.length > length ? `${text.slice(0, length)}…` : text;
