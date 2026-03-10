import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Basaʾir",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Font Awesome for theme icon, matching the existing site */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bs-body-bg)] text-[var(--bs-body-color)]">
        <SiteHeader />
        <main className="flex-1 container">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

