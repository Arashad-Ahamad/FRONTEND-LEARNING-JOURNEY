import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { profile } from "@/lib/data";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const title = `${profile.name} | ${profile.role}`;
const description = "Front-End Developer building clean, responsive web apps with React, Next.js, TypeScript and Redux Toolkit. Open to full-time roles.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title, description,
  keywords: ["Arashad Ahamad", "Front-End Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: { title, description, url: "/", siteName: profile.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};
export const viewport: Viewport = { themeColor: "#0c0c0f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${mono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
