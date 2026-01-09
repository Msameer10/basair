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
  if (stored) return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-bs-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  const icon = document.getElementById("themeIcon");
  if (!icon) return;

  if (theme === "dark") {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
}

function wireThemeToggle() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-bs-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}

// ---- Boot sequence ----
(async function init() {
  applyTheme(getPreferredTheme());

  await loadPartial("#siteHeader", "partials/header.html");
  await loadPartial("#siteFooter", "partials/footer.html");

  wireThemeToggle();
  setFooterYear();
})();


// footer year
document.addEventListener("DOMContentLoaded", function () {
  const y = new Date().getFullYear();
  const el = document.getElementById("cprtxt");
  if (el) el.textContent = y;
});