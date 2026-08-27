"use client";

import { useEffect, useRef, useState } from "react";

const moments = [
  { era: "Egypt & Sinai", title: "The Exodus", text: ["Moses and Aaron lead the Exodus from Egypt, followed by forty years of wandering in Sinai.", "Moses views the Promised Land from afar and dies outside it."], image: ["/beyondQuran/images/1.jpg", "Schematic map of the Exodus from Egypt", "The Exodus from Egypt — route map (schematic)."] },
  { era: "Canaan", title: "Joshua & the Judges", text: ["Joshua succeeds Moses and leads the conquest of Canaan.", "The period of the Judges follows; Samuel emerges as prophet."], image: ["/beyondQuran/images/joshua-jordan.jpg", "Joshua crossing the Jordan with the Ark of the Covenant, painted by Benjamin West", "Joshua passing the River Jordan with the Ark of the Covenant — Benjamin West, 1800.", "Public domain · Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Joshua_passing_the_River_Jordan_with_the_Ark_of_the_Covenant_(cropped).jpg"] },
  { era: "The United Kingdom", title: "Saul, David & Jerusalem", text: ["Saul becomes the first king. David defeats Goliath and later captures Jerusalem."], image: ["/beyondQuran/images/4.jpg", "Schematic map of the United Kingdom of Israel", "The United Kingdom around the time of Saul and David (schematic)."] },
  { era: "Temple I", title: "Solomon & the First Temple", text: ["Solomon builds the First Temple, where the Ark of the Covenant is placed.", "The kingdom later divides into Israel in the north and Judah in the south."], image: ["/beyondQuran/images/2.jpg", "Map of the kingdoms of Israel and Judah", "Israel in the north and Judah in the south of the Levant."] },
  { era: "Assyria & Babylon", title: "Conquest & Exile", text: ["Assyria destroys the Northern Kingdom of Israel.", "Babylon destroys Judah and the First Temple, beginning the exile."], image: ["/beyondQuran/images/3.jpg", "Schematic map of the Babylonian Exile", "The Babylonian Exile — movement toward Babylon (schematic)."] },
  { era: "Persian Rule", title: "Return & Temple II", text: ["Cyrus of Persia permits the exiles to return; the Second Temple is built."], image: ["/beyondQuran/images/cyrus-relief.jpg", "Historical drawing of the winged figure relief at Pasargadae associated with Cyrus", "The winged figure relief at Pasargadae — Eugène Flandin, 1851.", "Freely licensed · Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Relief_of_Cyrus,_Pasargadae.jpg"] },
  { era: "Hellenistic Age", title: "Alexander & the Maccabees", text: ["Alexander the Great conquers the region, bringing Hellenistic rule.", "The Maccabean revolt leads to an independent Jewish kingdom."], image: ["/beyondQuran/images/alexander-mosaic.jpg", "Detail of Alexander the Great in the ancient Alexander Mosaic", "Alexander the Great — detail from the Alexander Mosaic, c. 100 BCE.", "Public domain · Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Alexander_the_Great_mosaic.jpg"] },
  { era: "Roman Rule", title: "Rome & the Diaspora", text: ["Rome conquers the region. In 70 CE, the Second Temple is destroyed and the diaspora follows."], image: ["/beyondQuran/images/rome-temple.jpg", "The Destruction of the Temple of Jerusalem painted by Francesco Hayez", "The Destruction of the Temple of Jerusalem — Francesco Hayez, 1867.", "Public domain · Wikimedia Commons", "https://commons.wikimedia.org/wiki/File:Francesco_Hayez_017.jpg"] },
];

export default function MusaRomeTimeline() {
  const rootRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [viewing, setViewing] = useState<string[] | null>(null);

  useEffect(() => {
    const sections = [...(rootRef.current?.querySelectorAll<HTMLElement>(".musa-moment") ?? [])];
    const update = () => {
      const focus = window.innerHeight * 0.48;
      let closest = 0;
      let distance = Infinity;
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const current = Math.abs(rect.top + Math.min(rect.height / 2, 180) - focus);
        if (current < distance) { distance = current; closest = index; }
      });
      setActive(closest);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  useEffect(() => {
    if (!viewing) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setViewing(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [viewing]);

  return (
    <main className="musa-page page-intro-seq">
      <header className="musa-hero page-intro-e4">
        <p className="naskh basmalah page-intro-e1">بِسۡمِ ٱللّٰهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ</p>
        <p className="musa-kicker">A Biblical–Abrahamic historical timeline</p>
        <h1>From Mūsā <span className="amiri">عَلَيْهِ ٱلسَّلَامُ</span> to Rome</h1>
        <p className="musa-deck">A journey through leadership, kingdoms, temples, exile, and empire.</p>
        <a className="musa-scroll-cue" href="#timeline"><span>Begin the journey</span><b aria-hidden="true">↓</b></a>
      </header>

      <section ref={rootRef} id="timeline" className="musa-timeline" style={{ "--timeline-progress": `${active / (moments.length - 1) * 100}%` } as React.CSSProperties}>
        <div className="musa-line" aria-hidden="true"><i /></div>
        {moments.map((moment, index) => (
          <article className={`musa-moment ${index === active ? "is-active" : ""} ${index < active ? "is-past" : ""}`} key={moment.title}>
            <div className="musa-point" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
            {moment.image && <figure className="musa-visual"><button type="button" className="musa-image-button" onClick={() => setViewing(moment.image ?? null)} aria-label={`View larger: ${moment.image[1]}`}><img src={moment.image[0]} alt={moment.image[1]} loading="lazy" /><span aria-hidden="true">View image</span></button><figcaption><span>{moment.image[2]}</span>{moment.image[3] && <a href={moment.image[4]} target="_blank" rel="noreferrer">{moment.image[3]} ↗</a>}</figcaption></figure>}
            <div className="musa-content">
              <p className="musa-era">{moment.era}</p>
              <h2>{moment.title}</h2>
              {moment.text.map(text => <p key={text}>{text}</p>)}
            </div>
          </article>
        ))}
      </section>

      <footer className="musa-footer"><p>End of the timeline</p><a href="/beyondQuran/docs/musa_to_arrum.pdf">Read the document version ↗</a></footer>

      {viewing && (
        <div className="musa-lightbox" role="dialog" aria-modal="true" aria-label={viewing[1]} onClick={() => setViewing(null)}>
          <button type="button" className="musa-lightbox-close" onClick={() => setViewing(null)} aria-label="Close image viewer">×</button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={viewing[0]} alt={viewing[1]} />
            <figcaption>{viewing[2]}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
