"use client";

import { useEffect, useState } from "react";

const THEME_KEY = "basair_theme";
type Theme = "light" | "dark";

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(THEME_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;

  document.documentElement.setAttribute("data-bs-theme", theme);
  window.localStorage.setItem(THEME_KEY, theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const initial = getPreferredTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const handleClick = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      applyTheme(next);
      return next;
    });
  };

  const iconClass =
    theme === "dark" ? "fa-solid fa-moon" : "fa-solid fa-sun";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleClick}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--bs-border-color)] bg-transparent text-sm text-[var(--bs-body-color)] transition-colors hover:bg-[rgba(67,45,215,0.10)]"
    >
      <i id="themeIcon" className={iconClass} />
    </button>
  );
}
