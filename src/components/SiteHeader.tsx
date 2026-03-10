"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header border-b bg-[var(--bs-body-bg)]">
      <nav className="container py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="navbar-brand fw-semibold">
            Basaʾir
          </Link>

          <div className="header-actions hidden items-center lg:flex">
            <Link href="/about" className="header-link">
              About
            </Link>
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-[var(--bs-border-color)] p-2 text-[var(--bs-body-color)] lg:hidden"
            aria-label="Toggle navigation"
            aria-controls="site-nav-links"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>

        <div
          id="site-nav-links"
          className={`${isOpen ? "mt-3 flex" : "hidden"} flex-col gap-3 lg:hidden`}
        >
          <Link
            href="/about"
            className="header-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
