import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { content } from "@/lib/content";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/manrope-variable.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/cormorant-garamond-medium-italic.ttf", weight: "500", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const metadata: Metadata = {
  title: content.pt.pageTitle,
  description: content.pt.description,
  applicationName: "Fabiano Sachs Advocacia",
  authors: [{ name: "Fabiano Ferreira Sachs" }],
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    title: content.pt.pageTitle,
    description: content.pt.description,
    locale: "pt_BR",
    alternateLocale: "en_US",
    type: "website",
    siteName: "Fabiano Sachs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body>
        <Script id="saved-color-theme" strategy="beforeInteractive">
          {`try{document.documentElement.dataset.theme=localStorage.getItem("fsachs-theme")==="dark"?"dark":"light"}catch{}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
