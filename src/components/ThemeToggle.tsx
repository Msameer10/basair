"use client";

import { useState, useSyncExternalStore } from "react";

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
  const isClient = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const theme = selectedTheme ?? (isClient ? getPreferredTheme() : null);

  const handleClick = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setSelectedTheme(next);
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
