type LineageEntry = {
  stage: string;
  names: string[];
  note?: string;
};

type CrossReference = {
  text: string;
  href: string;
  label: string;
};

type ImamSection = {
  id: string;
  heading: string;
  summary: string;
  lineage: LineageEntry[];
  crossReferences: CrossReference[];
};

const PROPHET_LABEL = "Muhammad \uFDFA";
const BASMALAH =
  "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u064e\u0651\u0670\u0647\u0650 \u0671\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0645\u0650";

const imamSections: ImamSection[] = [
  {
    id: "abu-hanifa",
    heading: "Abu Hanifa",
    summary:
      "This Kufan line highlights the major transmitters through whom the legal and devotional learning of the early community reached Abu Hanifa.",
    lineage: [
      {
        stage: "Prophet",
        names: [PROPHET_LABEL],
      },
      {
        stage: "Companions",
        names: ["Abdullah ibn Masud", "Ali ibn Abi Talib"],
      },
      {
        stage: "Successors",
        names: ["Alqamah ibn Qays", "Masruq", "al-Aswad ibn Yazid"],
      },
      {
        stage: "Scholars",
        names: ["Ibrahim al-Nakhai", "Amir al-Shabi"],
      },
      {
        stage: "Teacher",
        names: ["Hammad ibn Abi Sulayman"],
      },
      {
        stage: "Imam",
        names: ["Abu Hanifa al-Nu'man"],
        note:
          "His circle later intersects with al-Shafi'i through Muhammad ibn al-Hasan al-Shaybani and Abu Yusuf.",
      },
    ],
    crossReferences: [
      {
        text: "For the strongest overlap with this line,",
        href: "#al-shafii",
        label: "see al-Shafi'i's lineage",
      },
      {
        text: "Ahmad also receives from a related Hanafi strand through Abu Yusuf;",
        href: "#ahmad",
        label: "see Ahmad ibn Hanbal",
      },
    ],
  },
  {
    id: "malik",
    heading: "Malik ibn Anas",
    summary:
      "This Medinan line centers on the inherited practice and scholarship of the city, especially the transmitters linked to Ibn Umar and the jurists of Madinah.",
    lineage: [
      {
        stage: "Prophet",
        names: [PROPHET_LABEL],
      },
      {
        stage: "Companions",
        names: ["Abdullah ibn Umar", "Aishah", "Zayd ibn Thabit"],
      },
      {
        stage: "Successors",
        names: ["Nafi", "Salim ibn Abdullah", "al-Qasim ibn Muhammad"],
      },
      {
        stage: "Scholars",
        names: ["Ibn Shihab al-Zuhri", "Yahya ibn Said", "Abu al-Zinad"],
      },
      {
        stage: "Teachers",
        names: ["Rabiah al-Rai", "Nafi", "al-Zuhri"],
      },
      {
        stage: "Imam",
        names: ["Malik ibn Anas"],
        note:
          "Malik's section becomes a major meeting point because both al-Shafi'i and later transmitters draw directly from this Medinan inheritance.",
      },
    ],
    crossReferences: [
      {
        text: "Malik's most direct later overlap is with",
        href: "#al-shafii",
        label: "al-Shafi'i's lineage",
      },
      {
        text: "and through al-Shafi'i it also shapes",
        href: "#ahmad",
        label: "Ahmad ibn Hanbal's lineage",
      },
    ],
  },
  {
    id: "al-shafii",
    heading: "al-Shafi'i",
    summary:
      "This section follows the line most visibly associated with Malik, while also noting the Hanafi and Makkan teachers that broadened al-Shafi'i's formation.",
    lineage: [
      {
        stage: "Prophet",
        names: [PROPHET_LABEL],
      },
      {
        stage: "Companions",
        names: ["Abdullah ibn Umar"],
      },
      {
        stage: "Successors",
        names: ["Nafi"],
      },
      {
        stage: "Scholars",
        names: ["Malik ibn Anas"],
      },
      {
        stage: "Teachers",
        names: ["Muhammad ibn al-Hasan al-Shaybani", "Sufyan ibn Uyaynah"],
      },
      {
        stage: "Imam",
        names: ["Muhammad ibn Idris al-Shafi'i"],
        note:
          "This lineage sits at the clearest crossroads, joining Medinan learning with transmission linked to Abu Hanifa's circle.",
      },
    ],
    crossReferences: [
      {
        text: "For the Medinan foundation behind this section,",
        href: "#malik",
        label: "see Malik's lineage",
      },
      {
        text: "For the Hanafi overlap through Muhammad ibn al-Hasan,",
        href: "#abu-hanifa",
        label: "see Abu Hanifa's lineage",
      },
      {
        text: "Ahmad later receives directly from this section;",
        href: "#ahmad",
        label: "see Ahmad ibn Hanbal",
      },
    ],
  },
  {
    id: "ahmad",
    heading: "Ahmad ibn Hanbal",
    summary:
      "This line is presented through Ahmad's best-known scholarly inheritance from al-Shafi'i, while noting his wider reception from Makkan and Iraqi teachers as well.",
    lineage: [
      {
        stage: "Prophet",
        names: [PROPHET_LABEL],
      },
      {
        stage: "Companions",
        names: ["Abdullah ibn Umar"],
      },
      {
        stage: "Successors",
        names: ["Nafi"],
      },
      {
        stage: "Scholars",
        names: ["Malik ibn Anas"],
      },
      {
        stage: "Teachers",
        names: ["Muhammad ibn Idris al-Shafi'i", "Sufyan ibn Uyaynah", "Abu Yusuf"],
      },
      {
        stage: "Imam",
        names: ["Ahmad ibn Hanbal"],
        note:
          "Ahmad's formation gathers several streams, but this presentation keeps them readable by foregrounding the clearest chronological path and linking out to related sections.",
      },
    ],
    crossReferences: [
      {
        text: "The most visible direct overlap here is with",
        href: "#al-shafii",
        label: "al-Shafi'i's lineage",
      },
      {
        text: "and Abu Yusuf connects Ahmad back into",
        href: "#abu-hanifa",
        label: "Abu Hanifa's lineage",
      },
    ],
  },
];

export default function ImamsPage() {
  return (
    <div id="top" className="container page-intro-seq">
      <p className="naskh basmalah mt-3 text-center page-intro-e1">{BASMALAH}</p>

      <div className="doc-page page-intro-e4 imams-page">
        <h1 className="doc-title">
          The Scholarly Transmission Leading to the Four Sunni Imams
        </h1>

        <p className="doc-p imams-intro">
          This page presents a clearer single-page view of the scholarly
          transmission leading to Abu Hanifa, Malik ibn Anas, al-Shafi&apos;i, and
          Ahmad ibn Hanbal. The chains are arranged chronologically from the
          Prophet {"\uFDFA"} through companions, successors, later scholars,
          and major teachers, and some figures appear in more than one lineage.
        </p>
        <p className="doc-p">
          The sections below emphasize principal lines of transmission for ease
          of reading rather than attempting to reproduce every connection in a
          dense network graph.
        </p>

        <div className="imam-jump-nav" aria-label="Quick navigation">
          <span className="imam-jump-label">Jump to:</span>
          <a className="imam-jump-link" href="#abu-hanifa">Abu Hanifa</a>
          <a className="imam-jump-link" href="#malik">Malik ibn Anas</a>
          <a className="imam-jump-link" href="#al-shafii">al-Shafi&apos;i</a>
          <a className="imam-jump-link" href="#ahmad">Ahmad ibn Hanbal</a>
        </div>

        {imamSections.map((section) => (
          <section key={section.id} id={section.id} className="imam-section">
            <div className="imam-section-header">
              <div>
                <h2 className="doc-section imam-section-title">
                  {section.heading}
                </h2>
                <p className="doc-p imam-section-summary">{section.summary}</p>
              </div>
              <a className="imam-back-link" href="#top">
                Back to top
              </a>
            </div>

            <ol className="imam-lineage" aria-label={`${section.heading} lineage`}>
              {section.lineage.map((entry, index) => {
                const isImam = index === section.lineage.length - 1;

                return (
                  <li
                    key={`${section.id}-${entry.stage}`}
                    className={`imam-lineage-item ${isImam ? "imam-lineage-item-final" : ""}`}
                  >
                    <div className="imam-lineage-card">
                      <div className="imam-lineage-stage">{entry.stage}</div>
                      <div className="imam-lineage-name">{entry.names.join(" / ")}</div>
                      {entry.note ? (
                        <p className="imam-lineage-note">{entry.note}</p>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="imam-cross-links">
              <h3 className="imam-cross-links-title">Shared lineage notes</h3>
              <ul className="imam-cross-links-list">
                {section.crossReferences.map((reference) => (
                  <li
                    key={`${section.id}-${reference.href}`}
                    className="imam-cross-links-item"
                  >
                    {reference.text} <a href={reference.href}>{reference.label}</a>.
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <hr className="doc-divider" />

        <div className="imam-source-links">
          <p className="doc-p">Reference visuals retained from the earlier page:</p>
          <p className="p text-center">
            <a href="/beyondQuran/images/imams.jpg">Image (Bayyinah)</a>
            <br />
            <a href="/beyondQuran/images/imamsTimeline.jpg">Timeline (Bayyinah)</a>
          </p>
        </div>
      </div>
    </div>
  );
}

