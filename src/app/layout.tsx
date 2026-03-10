import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { IntroShell } from "../components/IntroShell";

export const metadata: Metadata = {
  title: "Basa\u02beir",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var key="basair_theme";var stored=window.localStorage.getItem(key);var theme=(stored==="dark"||stored==="light")?stored:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-bs-theme",theme);}catch(e){}})();',
          }}
        />
        {/* Font Awesome for theme icon, matching the existing site */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bs-body-bg)] text-[var(--bs-body-color)]">
        <IntroShell>
          <SiteHeader />
          <main className="flex-1 container">{children}</main>
          <SiteFooter />
        </IntroShell>
      </body>
    </html>
  );
}
