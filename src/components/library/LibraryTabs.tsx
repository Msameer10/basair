"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type LibraryItem = {
  href: string;
  title: string;
  description: string;
  meta?: string;
  arabic?: string;
};

type Collection = {
  id: string;
  number: string;
  title: string;
  description: string;
  items: LibraryItem[];
};

const collections: Collection[] = [
  {
    id: "quran-studies",
    number: "01",
    title: "Qurʾān Studies",
    description: "Close readings of individual sūrahs, language, structure, and meaning.",
    items: [
      { href: "/quranStudies/001alFatihah", title: "Al-Fātiḥah", arabic: "سُورَةُ ٱلْفَاتِحَةِ", meta: "Sūrah 1", description: "The opening, its grammar, divine names, praise, and prayer." },
      { href: "/quranStudies/055arRahman", title: "Ar-Raḥmān", arabic: "سُورَةُ ٱلرَّحْمَٰنِ", meta: "Sūrah 55", description: "A study of mercy, balance, signs, and the repeated question of gratitude." },
    ],
  },
  {
    id: "beyond-quran",
    number: "02",
    title: "Beyond the Qurʾān",
    description: "Essays in theology, intellectual history, scholarship, and the life of ideas.",
    items: [
      { href: "/beyondQuran/divineJusticeHumanCapacity", title: "Divine Justice, Human Capacity, and the Path to Allah", meta: "Theology", description: "Accountability, capacity, revelation, and the reach of divine mercy." },
      { href: "/beyondQuran/quranAsSufficientProof", title: "The Qurʾān as Sufficient Proof", meta: "Revelation", description: "Divine signs, miracle-demands, moral agency, and enduring proof." },
      { href: "/beyondQuran/fromMusatoRome", title: "From Mūsā to Rome", meta: "History", description: "A historical outline following communities, empires, and transmission." },
      { href: "/beyondQuran/alGhurfaHighestChambersOfJannah", title: "Al-Ghurfa: The Lofty Chambers of Jannah", meta: "Eschatology", description: "The Qurʾānic image of the lofty chamber and the lives associated with it." },
      { href: "/beyondQuran/scholars-of-islam", title: "Scholars of Islam", meta: "Reference", description: "A chronological, cross-traditional guide with selected teacher–student relations." },
      { href: "/beyondQuran/imams", title: "The Four Great Imams", meta: "Legal history", description: "Formation, method, relationships, and the survival of the Sunni legal schools." },
      { href: "/beyondQuran/docs/predestination.pdf", title: "Understanding Qadr: Predestination", meta: "PDF", description: "A document-length introduction to divine decree and human responsibility." },
    ],
  },
  {
    id: "lexicon",
    number: "03",
    title: "Lexicon",
    description: "Key Qurʾānic words studied through roots, usage, grammar, and theological resonance.",
    items: [
      { href: "/lexicon/rabb", title: "Rabb", arabic: "رَبّ", description: "Lordship, nurture, mastery, and care." },
      { href: "/lexicon/arRahman", title: "Ar-Raḥmān", arabic: "ٱلرَّحْمَٰنِ", description: "The divine name of encompassing mercy." },
      { href: "/lexicon/arRaheem", title: "Ar-Raḥīm", arabic: "ٱلرَّحِيم", description: "The divine name of continuous and particular mercy." },
      { href: "/lexicon/alhumdulillah", title: "Al-ḥamdu lillāh", arabic: "ٱلْحَمْدُ لِلَّٰهِ", description: "Praise, gratitude, and the grammar of belonging." },
    ],
  },
];

export function LibraryTabs() {
  const [query, setQuery] = useState("");
  const [activeCollection, setActiveCollection] = useState("quran-studies");
  const normalized = query.trim().toLocaleLowerCase();
  const collection = collections.find((item) => item.id === activeCollection) ?? collections[0];
  const visibleItems = useMemo(() => normalized ? collection.items.filter((item) =>
      `${item.title} ${item.description} ${item.meta ?? ""}`.toLocaleLowerCase().includes(normalized)
    ) : collection.items, [collection, normalized]);

  return (
    <section className="editorial-library" aria-label="Library collections">
      <div className="library-category-tabs" role="tablist" aria-label="Library sections">
        {collections.map((item) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeCollection === item.id}
            aria-controls="library-active-panel"
            className={activeCollection === item.id ? "is-active" : ""}
            key={item.id}
            onClick={() => { setActiveCollection(item.id); setQuery(""); }}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="library-search-bar">
        <label htmlFor="library-search">Search the library</label>
        <div className="library-search-control">
          <span aria-hidden="true">⌕</span>
          <input id="library-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, subjects, and themes" />
          {query && <button type="button" onClick={() => setQuery("")}>Clear</button>}
        </div>
      </div>

      <section className="library-collection is-open" id="library-active-panel" role="tabpanel">
        {visibleItems.length === 0 ? (
          <p className="library-empty">No entries match “{query}”.</p>
        ) : (
          <div className="collection-list">
            {visibleItems.map((item) => (
              <Link className="collection-entry" href={item.href} key={item.href}>
                <div className="entry-meta">{item.meta ?? collection.title}</div>
                <div className="entry-main">
                  <h3>{item.title}</h3>
                  {item.arabic && <span className="entry-arabic" lang="ar">{item.arabic}</span>}
                </div>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
