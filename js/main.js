// ---- Shared partial loader ----
async function loadPartial(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  el.innerHTML = await res.text();
}

// ---- Theme (Bootstrap 5.3 color modes via data-bs-theme) ----
const THEME_KEY = "basair_theme";

function getPreferredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;

  // default: respect OS preference
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  // Update toggle label (if header is loaded)
  const icon = document.getElementById("themeToggleIcon");
  const text = document.getElementById("themeToggleText");
  if (icon && text) {
    const isDark = theme === "dark";
    icon.textContent = isDark ? "☀️" : "🌙";
    text.textContent = isDark ? "Light" : "Dark";
  }
}

function wireThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-bs-theme") || "light";
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // Ensure button matches current theme
  const current = document.documentElement.getAttribute("data-bs-theme") || getPreferredTheme();
  applyTheme(current);
}

function setFooterYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

// ---- Boot sequence ----
(async function init() {
  // Apply theme early to avoid flash
  applyTheme(getPreferredTheme());

  // Load header/footer
  await loadPartial("#siteHeader", "partials/header.html");
  await loadPartial("#siteFooter", "partials/footer.html");

  // Wire interactions after partials load
  wireThemeToggle();
  setFooterYear();
})();
