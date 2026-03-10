import { ImamsMermaid } from "../../../components/beyondQuran/ImamsMermaid";

export default function ImamsPage() {
  return (
    <div className="container page-intro-seq">
      <p className="naskh basmalah mt-3 text-center page-intro-e1">
        بِسۡمِ ٱللّٰهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
      </p>

      <div className="page-intro-e4">
      <div className="diagram-wrap mt-3 mb-4">
        <ImamsMermaid />
      </div>

      <p className="p text-center">
        <a href="/beyondQuran/images/imams.jpg">Image (Bayyinah)</a>
        <br />
        <a href="/beyondQuran/images/imamsTimeline.jpg">Timeline (Bayyinah)</a>
      </p>
      </div>
    </div>
  );
}

