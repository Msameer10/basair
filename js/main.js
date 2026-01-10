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

  loadPartial("#siteHeader", "partials/header.html");
  loadPartial("#siteFooter", "partials/footer.html");


  wireThemeToggle();
  setFooterYear();
})();

// ------------------------

function makeSearchableList({ inputId, clearId, listId, emptyId }) {
  const input = document.getElementById(inputId);
  const clearBtn = document.getElementById(clearId);
  const list = document.getElementById(listId);
  const empty = document.getElementById(emptyId);

  if (!input || !clearBtn || !list || !empty) return;

  const items = Array.from(list.querySelectorAll(".list-group-item"));

  function filter() {
    const q = input.value.trim().toLowerCase();
    let visibleCount = 0;

    items.forEach((li) => {
      const haystack = (li.getAttribute("data-search") || li.textContent || "").toLowerCase();
      const show = q === "" || haystack.includes(q);
      li.classList.toggle("d-none", !show);
      if (show) visibleCount += 1;
    });

    empty.classList.toggle("d-none", visibleCount !== 0);
  }

  input.addEventListener("input", filter);

  clearBtn.addEventListener("click", () => {
    input.value = "";
    input.focus();
    filter();
  });

  // initial state
  filter();
}

// Call these AFTER your header/footer partials are loaded (same place you wire other stuff)
makeSearchableList({ inputId: "searchA", clearId: "clearA", listId: "listA", emptyId: "emptyA" });
makeSearchableList({ inputId: "searchB", clearId: "clearB", listId: "listB", emptyId: "emptyB" });
