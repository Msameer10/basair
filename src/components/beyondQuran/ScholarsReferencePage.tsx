"use client";

import { useMemo, useState } from "react";
import { getRelationTrails } from "./scholarRelations";
import {
  BASMALAH,
  PERIODS_BY_TRADITION,
  TRADITION_TABS,
  scholars,
  type FieldTag,
  type MadhhabTag,
  type PeriodPrimary,
  type ScholarEntry,
  type TraditionPrimary,
} from "./scholarsData";

type PeriodSection = { title: PeriodPrimary; scholars: ScholarEntry[] };
const ALL_FIELDS = "All disciplines";
const ALL_BRANCHES = "All schools and branches";

const TAB_LABELS: Record<TraditionPrimary, string> = {
  "Early / Shared": "Formative generations",
  Sunni: "Sunni traditions",
  "Shi'i": "Shia Islam",
};

const TAB_DESCRIPTIONS: Record<TraditionPrimary, string> = {
  "Early / Shared":
    "Companions, Successors, and formative authorities who precede the mature boundaries of the later legal and theological traditions.",
  Sunni:
    "A selective chronology of jurists, hadith scholars, exegetes, theologians, historians, linguists, and spiritual authors associated with Sunni intellectual traditions.",
  "Shi'i":
    "A cross-traditional chronology of major Twelver, Ismaili, and Zaydi authorities in law, hadith, theology, exegesis, philosophy, and literature.",
};

const PERIOD_DESCRIPTIONS: Partial<Record<PeriodPrimary, string>> = {
  Companions: "First-generation authorities who learned directly from the Prophet ﷺ.",
  Successors: "The generation that learned from the Companions and developed major regional circles.",
  "Early Formative Scholars": "Authorities linking regional learning to the later disciplines and schools.",
  Early: "The period in which major corpora, legal circles, and theological identities took durable form.",
  Classical: "The consolidation of disciplines through authoritative texts, commentaries, and institutions.",
  "Late Classical": "Expansion and synthesis within established scholarly traditions.",
  "Pre-Modern": "Scholars working between the later classical inheritance and modern reform movements.",
  Modern: "Selected twentieth- and twenty-first-century scholars and intellectuals.",
};

function compareScholars(a: ScholarEntry, b: ScholarEntry) {
  if (a.sortYear !== b.sortYear) return a.sortYear - b.sortYear;
  return a.name.localeCompare(b.name);
}

function getScholarTags(scholar: ScholarEntry) {
  return [...scholar.fieldTags, ...(scholar.madhhabTags ?? [])];
}

function matchesSearch(scholar: ScholarEntry, query: string) {
  if (!query) return true;
  return [scholar.name, scholar.dates, scholar.periodPrimary, scholar.description,
    ...getScholarTags(scholar), ...(scholar.searchKeywords ?? [])]
    .join(" ").toLocaleLowerCase().includes(query);
}

function buildSections(
  tradition: TraditionPrimary,
  query: string,
  field: FieldTag | typeof ALL_FIELDS,
  branch: MadhhabTag | typeof ALL_BRANCHES,
) {
  return PERIODS_BY_TRADITION[tradition]
    .map((period) => {
      const periodScholars = scholars
        .filter((scholar) =>
          scholar.traditionPrimary === tradition &&
          scholar.periodPrimary === period &&
          (field === ALL_FIELDS || scholar.fieldTags.includes(field)) &&
          (branch === ALL_BRANCHES || scholar.madhhabTags?.includes(branch)) &&
          matchesSearch(scholar, query))
        .sort(compareScholars);
      return periodScholars.length ? { title: period, scholars: periodScholars } : null;
    })
    .filter((section): section is PeriodSection => section !== null);
}

function ScholarRow({ scholar }: { scholar: ScholarEntry }) {
  const relationTrails = getRelationTrails(scholar.name);

  return (
    <li className="scholar-row scholars-chronology-row">
      <article className="scholar-row-main">
        <header className="scholar-row-heading">
          <h3 className="scholar-row-text"><span className="scholar-row-name">{scholar.name}</span></h3>
          <span className="scholar-row-dates">{scholar.dates} CE</span>
        </header>
        <p className="scholar-row-summary">{scholar.description}</p>
        <div className="scholar-row-meta scholars-tag-row" aria-label="Areas of study">
          {getScholarTags(scholar).map((tag) => (
            <span key={`${scholar.name}-${tag}`} className="scholar-meta-pill scholars-tag-pill">{tag}</span>
          ))}
        </div>
        {relationTrails.length ? (
          <details className="scholar-relations">
            <summary>Scholarly relations</summary>
            <div className="scholar-relations-body">
              {relationTrails.map((trail) => (
                <section key={trail.id} className="scholar-relation-trail">
                  <h4>{trail.title}</h4>
                  <ol aria-label={trail.title}>
                    {trail.nodes.map((node) => (
                      <li
                        key={`${trail.id}-${node.name}`}
                        className={node.name === scholar.name ? "is-current" : undefined}
                      >
                        <span>{node.name}</span>
                        {node.relationToNext ? <small>{node.relationToNext}</small> : null}
                      </li>
                    ))}
                  </ol>
                  {trail.note ? <p>{trail.note}</p> : null}
                </section>
              ))}
            </div>
          </details>
        ) : null}
      </article>
    </li>
  );
}

export function ScholarsReferencePage() {
  const [activeTab, setActiveTab] = useState<TraditionPrimary>("Early / Shared");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeField, setActiveField] = useState<FieldTag | typeof ALL_FIELDS>(ALL_FIELDS);
  const [activeBranch, setActiveBranch] = useState<MadhhabTag | typeof ALL_BRANCHES>(ALL_BRANCHES);
  const normalizedQuery = searchQuery.trim().toLocaleLowerCase();

  const availableFields = useMemo(() => Array.from(new Set(
    scholars.filter((scholar) => scholar.traditionPrimary === activeTab)
      .flatMap((scholar) => scholar.fieldTags),
  )).sort((a, b) => a.localeCompare(b)), [activeTab]);

  const availableBranches = useMemo(() => Array.from(new Set(
    scholars.filter((scholar) => scholar.traditionPrimary === activeTab)
      .flatMap((scholar) => scholar.madhhabTags ?? []),
  )).sort((a, b) => a.localeCompare(b)), [activeTab]);

  const sections = useMemo(
    () => buildSections(activeTab, normalizedQuery, activeField, activeBranch),
    [activeBranch, activeField, activeTab, normalizedQuery],
  );
  const visibleCount = useMemo(
    () => sections.reduce((total, section) => total + section.scholars.length, 0), [sections]);
  const totalInTradition = useMemo(
    () => scholars.filter((scholar) => scholar.traditionPrimary === activeTab).length, [activeTab]);

  const changeTab = (tradition: TraditionPrimary) => {
    setActiveTab(tradition);
    setActiveField(ALL_FIELDS);
    setActiveBranch(ALL_BRANCHES);
  };
  const clearFilters = () => { setSearchQuery(""); setActiveField(ALL_FIELDS); setActiveBranch(ALL_BRANCHES); };
  const filtersActive = Boolean(normalizedQuery || activeField !== ALL_FIELDS || activeBranch !== ALL_BRANCHES);

  return (
    <div id="top" className="container page-intro-seq">
      <p className="naskh basmalah mt-3 text-center page-intro-e1" lang="ar">{BASMALAH}</p>
      <article className="doc-page page-intro-e4 reference-page reference-page-wide scholars-page">
        <header className="scholars-page-header">
          <p className="scholars-eyebrow">Reference index</p>
          <h1 className="doc-title">Scholars of Islam
            <span className="doc-title-sub">A selective intellectual chronology</span>
          </h1>
          <p className="doc-p reference-intro">
            This index introduces major figures through the disciplines and historical settings for
            which they are especially known. It is selective rather than canonical: inclusion does
            not imply equal influence, agreement, or endorsement, and the short descriptions are
            orientation notes rather than complete biographies.
          </p>
        </header>

        <aside className="scholars-scope-note">
          Dates are given in the Common Era and are approximate where marked. “Formative
          generations” is used for figures who precede the mature boundaries of later Sunni and
          Shiʿi institutions. “Shia Islam” brings several distinct traditions into one navigational
          section; branch tags identify Twelver, Ismaili, and Zaydi affiliations where applicable.
        </aside>

        <div className="scholars-toolbar" aria-label="Filter scholars">
          <div className="scholars-tabs" role="tablist" aria-label="Historical traditions">
            {TRADITION_TABS.map((tradition) => {
              const isActive = tradition === activeTab;
              return <button key={tradition} type="button" role="tab"
                className={`scholars-tab ${isActive ? "is-active" : ""}`}
                aria-selected={isActive} aria-controls="scholars-results"
                onClick={() => changeTab(tradition)}>{TAB_LABELS[tradition]}</button>;
            })}
          </div>
          <div className="scholars-filter-row">
            <label className="scholars-search-wrap"><span>Search</span>
              <input type="search" className="form-control scholars-search"
                placeholder="Name, field, school, or keyword" value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)} />
            </label>
            <label className="scholars-field-wrap"><span>Discipline</span>
              <select className="form-control scholars-field-select" value={activeField}
                onChange={(event) => setActiveField(event.target.value as FieldTag | typeof ALL_FIELDS)}>
                <option>{ALL_FIELDS}</option>
                {availableFields.map((field) => <option key={field}>{field}</option>)}
              </select>
            </label>
            {availableBranches.length ? <label className="scholars-field-wrap"><span>School or branch</span>
              <select className="form-control scholars-field-select" value={activeBranch}
                onChange={(event) => setActiveBranch(event.target.value as MadhhabTag | typeof ALL_BRANCHES)}>
                <option>{ALL_BRANCHES}</option>
                {availableBranches.map((branch) => <option key={branch}>{branch}</option>)}
              </select>
            </label> : null}
          </div>
        </div>

        <section className="scholars-active-summary" aria-live="polite">
          <div><h2>{TAB_LABELS[activeTab]}</h2><p>{TAB_DESCRIPTIONS[activeTab]}</p></div>
          <div className="scholars-count-block"><strong>{visibleCount}</strong>
            <span>{filtersActive ? `of ${totalInTradition} shown` : "scholars listed"}</span></div>
        </section>

        <div id="scholars-results" role="tabpanel" className="scholars-tab-panel">
          {sections.length === 0 ? (
            <div className="reference-empty-state"><p className="doc-p">No entries match the current filters.</p>
              <button type="button" className="scholars-clear" onClick={clearFilters}>Clear filters</button></div>
          ) : <div className="scholars-period-stack">
            {sections.map((section) => <section key={section.title} className="scholars-period-block">
              <header className="scholars-period-heading"><div>
                <h2 className="doc-section scholars-period-title">{section.title}</h2>
                <p>{PERIOD_DESCRIPTIONS[section.title]}</p></div><span>{section.scholars.length}</span></header>
              <ul className="scholar-results-list scholars-period-list">
                {section.scholars.map((scholar) => <ScholarRow key={scholar.name} scholar={scholar} />)}
              </ul>
            </section>)}
          </div>}
        </div>
      </article>
    </div>
  );
}
