'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type TabId = "A" | "B" | "C";
const LIBRARY_TAB_KEY = "basair_library_tab";

const SURAH_AL_FATIHAH_AR =
  "\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0671\u0644\u0652\u0641\u064e\u0627\u062a\u0650\u062d\u064e\u0629\u0650";
const SURAH_AR_RAHMAN_AR =
  "\u0633\u064f\u0648\u0631\u064e\u0629\u064f \u0671\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u064e\u0670\u0646\u0650";
const ALAYHI_AL_SALAM_AR =
  "\u0639\u064e\u0644\u064e\u064a\u0652\u0647\u0650 \u0671\u0644\u0633\u064e\u0651\u0644\u064e\u0627\u0645\u064f";
const RABB_AR = "\u0631\u064e\u0628\u0651";
const AR_RAHMAN_AR = "\u0671\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u064e\u0670\u0646\u0650";
const AR_RAHEEM_AR = "\u0671\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0645";
const ALHAMDU_LILLAH_AR = "\u0627\u0644\u062d\u0645\u062f\u064f \u0644\u0644\u0647\u0650";

function getInitialTab(): TabId {
  if (typeof window === "undefined") return "A";
  const stored = window.localStorage.getItem(LIBRARY_TAB_KEY);
  return stored === "A" || stored === "B" || stored === "C" ? stored : "A";
}

interface LibraryItem {
  href: string;
  label: React.ReactNode;
  search: string;
}

const quranStudiesItems: LibraryItem[] = [
  {
    href: "/quranStudies/001alFatihah",
    label: (
      <>
        1. Al-Fatihah&emsp;
        <span className="arabic">{SURAH_AL_FATIHAH_AR}</span>
      </>
    ),
    search: "1. Al-Fatihah",
  },
  {
    href: "/quranStudies/055arRahman",
    label: (
      <>
        55. Ar-Rahman&emsp;
        <span className="arabic">{SURAH_AR_RAHMAN_AR}</span>
      </>
    ),
    search: "55. Ar-Rahman",
  },
];

const beyondQuranItems: LibraryItem[] = [
  {
    href: "/beyondQuran/divineJusticeHumanCapacity",
    label: <>Divine Justice, Human Capacity, and the Path to Allah</>,
    search: "Divine Justice Human Capacity Path to Allah accountability salvation examination",
  },
  {
    href: "/beyondQuran/quranAsSufficientProof",
    label: <>Quran as Sufficient Proof</>,
    search: "Quran as Sufficient Proof",
  },
  {
    href: "/beyondQuran/fromMusatoRome",
    label: (
      <>
        From Musa
        <span className="amiri" style={{ fontSize: "0.6em" }}>
          {" "}
          ({ALAYHI_AL_SALAM_AR})
        </span>{" "}
        to Rome: A Historical Outline
      </>
    ),
    search: "From Musa to Rome: A Historical Outline",
  },
  {
    href: "/beyondQuran/alGhurfaHighestChambersOfJannah",
    label: <>Al-Ghurfa: the highest chambers of Jannah</>,
    search: "Al-Ghurfa: the highest chambers of Jannah",
  },
  {
    href: "/beyondQuran/scholars-of-islam",
    label: <>Scholars of Islam</>,
    search: "Scholars of Islam",
  },
  {
    href: "/beyondQuran/imams",
    label: <>The Four Great Imams</>,
    search: "The Four Great Imams Sunni legal traditions madhhabs jurisprudence",
  },
  {
    href: "/beyondQuran/docs/predestination.pdf",
    label: <>Understanding Qadr: Predestination</>,
    search: "Understanding Qadr: Predestination",
  },
];

const lexiconItems: LibraryItem[] = [
  {
    href: "/lexicon/rabb",
    label: (
      <>
        Rabb <span className="arabic">{RABB_AR}</span>
      </>
    ),
    search: "Rabb",
  },
  {
    href: "/lexicon/arRahman",
    label: (
      <>
        Ar-Rahman <span className="arabic">{AR_RAHMAN_AR}</span>
      </>
    ),
    search: "ar Rahman",
  },
  {
    href: "/lexicon/arRaheem",
    label: (
      <>
        Ar-Raheem <span className="arabic">{AR_RAHEEM_AR}</span>
      </>
    ),
    search: "ar Raheem",
  },
  {
    href: "/lexicon/alhumdulillah",
    label: (
      <>
        Alhamdu lillah <span className="arabic">{ALHAMDU_LILLAH_AR}</span>
      </>
    ),
    search: "alhamdu lillah",
  },
];

export function LibraryTabs() {
  const [activeTab, setActiveTab] = useState<TabId>(getInitialTab);
  const [searchA, setSearchA] = useState("");
  const [searchB, setSearchB] = useState("");
  const [searchC, setSearchC] = useState("");

  useEffect(() => {
    window.localStorage.setItem(LIBRARY_TAB_KEY, activeTab);
  }, [activeTab]);

  const filteredA = useFilteredItems(quranStudiesItems, searchA);
  const filteredB = useFilteredItems(beyondQuranItems, searchB);
  const filteredC = useFilteredItems(lexiconItems, searchC);

  return (
    <>
      <ul className="nav nav-tabs library-tabs" id="topicTabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className={`nav-link ${activeTab === "A" ? "active" : ""}`}
            id="tab-a-btn"
            role="tab"
            aria-controls="tab-a"
            aria-selected={activeTab === "A"}
            onClick={() => setActiveTab("A")}
          >
            Qur&apos;an Studies
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className={`nav-link ${activeTab === "B" ? "active" : ""}`}
            id="tab-b-btn"
            role="tab"
            aria-controls="tab-b"
            aria-selected={activeTab === "B"}
            onClick={() => setActiveTab("B")}
          >
            Beyond the Qur&apos;an
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className={`nav-link ${activeTab === "C" ? "active" : ""}`}
            id="tab-c-btn"
            role="tab"
            aria-controls="tab-c"
            aria-selected={activeTab === "C"}
            onClick={() => setActiveTab("C")}
          >
            Lexicon
          </button>
        </li>
      </ul>

      <div className="tab-content library-panel" id="topicTabsContent">
        {activeTab === "A" && (
          <div
            className="tab-pane fade show active library-pane"
            id="tab-a"
            role="tabpanel"
            aria-labelledby="tab-a-btn"
          >
            <SearchRow
              inputId="searchA"
              placeholder="Search Qur&apos;an Studies..."
              value={searchA}
              onChange={setSearchA}
            />
            <ItemList items={filteredA} emptyText="No results found." />
          </div>
        )}

        {activeTab === "B" && (
          <div
            className="tab-pane fade show active library-pane"
            id="tab-b"
            role="tabpanel"
            aria-labelledby="tab-b-btn"
          >
            <SearchRow
              inputId="searchB"
              placeholder="Search Beyond the Qur&apos;an..."
              value={searchB}
              onChange={setSearchB}
            />
            <ItemList items={filteredB} emptyText="No results found." />
          </div>
        )}

        {activeTab === "C" && (
          <div
            className="tab-pane fade show active library-pane"
            id="tab-c"
            role="tabpanel"
            aria-labelledby="tab-c-btn"
          >
            <SearchRow
              inputId="searchC"
              placeholder="Search Lexicon..."
              value={searchC}
              onChange={setSearchC}
            />
            <ItemList items={filteredC} emptyText="No results found." />
          </div>
        )}
      </div>
    </>
  );
}

function useFilteredItems(items: LibraryItem[], query: string) {
  const q = query.trim().toLowerCase();

  return useMemo(() => {
    if (!q) return items;
    return items.filter((item) => item.search.toLowerCase().includes(q));
  }, [items, q]);
}

interface SearchRowProps {
  inputId: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

function SearchRow({
  inputId,
  placeholder,
  value,
  onChange,
}: SearchRowProps) {
  const handleClear = () => onChange("");

  return (
    <div className="search-row mb-3">
      <label className="sr-only" htmlFor={inputId}>
        {placeholder}
      </label>
      <input
        id={inputId}
        className="form-control search-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-outline-secondary search-clear"
        onClick={handleClear}
      >
        Clear
      </button>
    </div>
  );
}

interface ItemListProps {
  items: LibraryItem[];
  emptyText: string;
}

function ItemList({ items, emptyText }: ItemListProps) {
  if (items.length === 0) {
    return <p className="small text-body-secondary mt-3">{emptyText}</p>;
  }

  return (
    <ul className="list-group library-results">
      {items.map((item) => (
        <li key={item.href} className="list-group-item library-item">
          <Link href={item.href} className="library-item-link">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}




