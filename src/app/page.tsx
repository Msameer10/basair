import { LibraryTabs } from "../components/library/LibraryTabs";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="library-hero" aria-labelledby="library-title">
        <p className="library-eyebrow">A growing library of study and reflection</p>
        <h1 id="library-title">Reading revelation with care.</h1>
        <p className="library-intro">
          Basaʾir is a personal, evolving research space for careful inquiry
          into Islam and its intellectual tradition. It brings Qurʾānic themes,
          language, history, theology, and law into conversation—treating each
          entry as part of an unfinished process of reading, reflection, and
          revision rather than a final judgment.
        </p>
      </section>
      <LibraryTabs />
    </div>
  );
}
