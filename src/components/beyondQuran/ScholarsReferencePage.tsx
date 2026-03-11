"use client";

import { useEffect, useMemo, useState } from "react";

import { chainMap, type ChainGroup } from "./scholarsChains";
import {
  BASMALAH,
  PERIODS_BY_TRADITION,
  TRADITION_TABS,
  earlySharedExplanation,
  scholars,
  type ScholarEntry,
  type TraditionPrimary,
} from "./scholarsData";

type ChainContext = {
  scholar: ScholarEntry;
  chain: ChainGroup;
};

type PeriodSection = {
  title: string;
  scholars: ScholarEntry[];
};

function compareScholars(a: ScholarEntry, b: ScholarEntry) {
  if (a.sortYear !== b.sortYear) {
    return a.sortYear - b.sortYear;
  }

  return a.name.localeCompare(b.name);
}

function getScholarTags(scholar: ScholarEntry) {
  return [...scholar.fieldTags, ...(scholar.madhhabTags ?? [])];
}

function matchesSearch(scholar: ScholarEntry, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [
    scholar.name,
    scholar.dates,
    scholar.periodPrimary,
    scholar.description,
    ...getScholarTags(scholar),
    ...(scholar.searchKeywords ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(query);
}

function buildSections(tradition: TraditionPrimary, query: string) {
  return PERIODS_BY_TRADITION[tradition]
    .map((period) => {
      const periodScholars = scholars
        .filter(
          (scholar) =>
            scholar.traditionPrimary === tradition &&
            scholar.periodPrimary === period &&
            matchesSearch(scholar, query),
        )
        .sort(compareScholars);

      if (periodScholars.length === 0) {
        return null;
      }

      return {
        title: period,
        scholars: periodScholars,
      } satisfies PeriodSection;
    })
    .filter((section): section is PeriodSection => section !== null);
}

function ScholarRow({
  scholar,
  activeChainId,
  onOpenChain,
}: {
  scholar: ScholarEntry;
  activeChainId: string | null;
  onOpenChain: (scholar: ScholarEntry) => void;
}) {
  const isActive = Boolean(scholar.chainId && scholar.chainId === activeChainId);

  return (
    <li className="scholar-row scholars-chronology-row">
      <div className="scholar-row-main">
        <p className="scholar-row-text">
          <span className="scholar-row-name">{scholar.name}</span>
          <span className="scholar-row-dates"> ({scholar.dates})</span>
        </p>
        <div className="scholar-row-meta scholars-tag-row" aria-label="Scholar tags">
          {getScholarTags(scholar).map((tag) => (
            <span key={`${scholar.name}-${tag}`} className="scholar-meta-pill scholars-tag-pill">
              {tag}
            </span>
          ))}
        </div>
        <p className="scholar-row-summary">{scholar.description}</p>
      </div>
      {scholar.chainId ? (
        <button
          type="button"
          className={`scholar-chain-toggle ${isActive ? "is-active" : ""}`}
          aria-haspopup="dialog"
          aria-expanded={isActive}
          onClick={() => onOpenChain(scholar)}
        >
          View chain
        </button>
      ) : null}
    </li>
  );
}

function ChainModal({
  context,
  onClose,
}: {
  context: ChainContext;
  onClose: () => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="chain-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chain-modal-title"
      onClick={onClose}
    >
      <div className="chain-modal-card" onClick={(event) => event.stopPropagation()}>
        <div className="chain-modal-header">
          <div>
            <p className="chain-modal-kicker">
              {context.scholar.traditionPrimary} / {context.scholar.periodPrimary}
            </p>
            <h3 id="chain-modal-title" className="chain-modal-title">
              {context.scholar.name}
            </h3>
            <div className="scholar-row-meta scholars-tag-row chain-modal-tags" aria-label="Scholar tags">
              {getScholarTags(context.scholar).map((tag) => (
                <span key={`${context.scholar.name}-${tag}`} className="scholar-meta-pill scholars-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button type="button" className="chain-modal-close" onClick={onClose}>
            Close
          </button>
        </div>

        <p className="chain-modal-note">{context.chain.note}</p>

        <div className="chain-modal-scroll">
          <ol className="chain-list" aria-label={context.chain.title}>
            {context.chain.steps.map((step, index) => (
              <li key={`${context.chain.id}-${step.label}-${index}`} className="chain-step">
                <div className={`chain-step-card tone-${step.tone}`}>
                  <span>{step.label}</span>
                  {step.branches ? (
                    <div className="chain-branches" aria-label="Related later branches">
                      {step.branches.map((branch) => (
                        <span key={`${context.chain.id}-${branch}`} className="chain-branch-pill">
                          {branch}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function ScholarsReferencePage() {
  const [activeTab, setActiveTab] = useState<TraditionPrimary>("Early / Shared");
  const [searchQuery, setSearchQuery] = useState("");
  const [openChainId, setOpenChainId] = useState<string | null>(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const sections = useMemo(
    () => buildSections(activeTab, normalizedQuery),
    [activeTab, normalizedQuery],
  );

  const visibleCount = useMemo(
    () => sections.reduce((total, section) => total + section.scholars.length, 0),
    [sections],
  );

  const totalInTradition = useMemo(
    () => scholars.filter((scholar) => scholar.traditionPrimary === activeTab).length,
    [activeTab],
  );

  const openChainContext = useMemo(() => {
    if (!openChainId) {
      return null;
    }

    const scholar = scholars.find((entry) => entry.chainId === openChainId);
    const chain = chainMap[openChainId];

    if (!scholar || !chain) {
      return null;
    }

    return {
      scholar,
      chain,
    } satisfies ChainContext;
  }, [openChainId]);

  return (
    <>
      <div id="top" className="container page-intro-seq">
        <p className="naskh basmalah mt-3 text-center page-intro-e1">{BASMALAH}</p>

        <div className="doc-page page-intro-e4 reference-page reference-page-wide scholars-page">
          <h1 className="doc-title">Scholars of Islam</h1>

          <p className="doc-p reference-intro">{earlySharedExplanation}</p>

          <div className="scholars-toolbar" aria-label="Scholar navigation and search">
            <div className="scholars-tabs" role="tablist" aria-label="Traditions">
              {TRADITION_TABS.map((tradition) => {
                const isActive = tradition === activeTab;

                return (
                  <button
                    key={tradition}
                    type="button"
                    role="tab"
                    className={`scholars-tab ${isActive ? "is-active" : ""}`}
                    aria-selected={isActive}
                    aria-controls={`scholars-panel-${tradition}`}
                    id={`scholars-tab-${tradition}`}
                    onClick={() => setActiveTab(tradition)}
                  >
                    {tradition}
                  </button>
                );
              })}
            </div>

            <label className="scholars-search-wrap">
              <span className="sr-only">Search scholars</span>
              <input
                type="search"
                className="form-control scholars-search"
                placeholder="Search names, fields, or periods"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </label>
          </div>

          <p className="reference-results-count scholars-results-count">
            Showing {visibleCount} of {totalInTradition} scholars in {activeTab}.
          </p>

          <div
            id={`scholars-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`scholars-tab-${activeTab}`}
            className="scholars-tab-panel"
          >
            {sections.length === 0 ? (
              <div className="reference-empty-state">
                <p className="doc-p">No scholars match the current search.</p>
              </div>
            ) : (
              <div className="scholars-period-stack">
                {sections.map((section) => (
                  <section key={section.title} className="scholars-period-block">
                    <h2 className="doc-section scholars-period-title">{section.title}</h2>
                    <ul className="scholar-results-list scholars-period-list">
                      {section.scholars.map((scholar) => (
                        <ScholarRow
                          key={scholar.name}
                          scholar={scholar}
                          activeChainId={openChainId}
                          onOpenChain={(entry) => setOpenChainId(entry.chainId ?? null)}
                        />
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {openChainContext ? (
        <ChainModal context={openChainContext} onClose={() => setOpenChainId(null)} />
      ) : null}
    </>
  );
}
