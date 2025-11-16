"use client";

import "./globals.css";
import { Bebas_Neue, Oxanium } from "next/font/google";
import { useEffect } from "react";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas"
});

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium"
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const root = document.documentElement;
      root.style.setProperty("--cursor-x", `${event.clientX}px`);
      root.style.setProperty("--cursor-y", `${event.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <html lang="en" className={`${bebas.variable} ${oxanium.variable}`}>
      <body className="relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-grain opacity-60 mix-blend-screen" />
          <div className="crt-scanline" />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
