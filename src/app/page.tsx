import { LibraryTabs } from "../components/library/LibraryTabs";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="library-hero" aria-labelledby="library-title">
        <p className="library-eyebrow">A growing library of study and reflection</p>
        <h1 id="library-title">Reading revelation with care.</h1>
        <p className="library-intro">
          Qurʾānic studies, theological essays, and a developing lexicon—written
          for thoughtful reading, patient inquiry, and return.
        </p>
      </section>
      <LibraryTabs />
    </div>
  );
}
