import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import StoreProvider from "@/components/providers/StoreProvider";
import ThemeProvider from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ShopHub - E-Commerce App",
    template: "%s | ShopHub",
  },
  description:
    "Modern e-commerce web app built with Next.js, TypeScript, Redux Toolkit, Tailwind CSS and Shadcn UI.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning: next-themes sets the theme class on <html> before hydration
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster position="top-right" richColors />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
