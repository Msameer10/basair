import { LibraryTabs } from "../components/library/LibraryTabs";

export default function HomePage() {
  return (
    <section className="content-narrow mx-auto mt-4 list-container home-library">
      <h1 className="h4 mb-4 home-library-title" id="library">
        Library
      </h1>
      <div className="library-shell">
        <LibraryTabs />
      </div>
    </section>
  );
}
