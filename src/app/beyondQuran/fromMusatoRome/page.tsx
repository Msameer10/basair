export default function FromMusaToRomePage() {
  return (
    <div className="container">
      <p className="naskh basmalah mt-3 text-center">
        بِسۡمِ ٱللّٰهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
      </p>
      <div className="pdf-article mt-4 mb-5">
        <h2 className="text-center mb-4">
          Biblical–Abrahamic Historical Timeline:
          <br />
          From Musa
          <span className="amiri" style={{ fontSize: "0.6em", fontWeight: 100 }}>
            {" "}
            (عَلَيْهِ ٱلسَّلَامُ)
          </span>{" "}
          to Rome
        </h2>

        <h4>Timeline</h4>
        <div className="timeline-list">
          <ul>
            <li>
              Moses and the Exodus from Egypt → Wandering in Sinai (40 years)
            </li>
            <li>
              Moses views the Promised Land from afar and dies outside it
            </li>
            <li>Joshua succeeds Moses and leads the Conquest of Canaan</li>
            <li>Period of the Judges → Samuel emerges as prophet</li>
            <li>
              Saul becomes first king; David defeats Goliath and captures
              Jerusalem
            </li>
            <li>
              Solomon builds the First Temple; Ark of the Covenant placed inside
            </li>
            <li>Kingdom splits: Israel (north) and Judah (south)</li>
            <li>Assyria destroys Northern Kingdom (Israel)</li>
            <li>
              Babylon destroys Judah and the First Temple; Exile
            </li>
            <li>Cyrus of Persia allows return; Second Temple built</li>
            <li>Alexander the Great conquers the region; Hellenistic rule</li>
            <li>Maccabean revolt leads to independent Jewish kingdom</li>
            <li>
              Roman conquest; Second Temple destroyed (70 CE); Diaspora
            </li>
          </ul>
        </div>

        <h4 className="mt-4">Illustrative Timeline Markers (schematic)</h4>
        <p className="mb-4 timeline-markers">
          Moses and Aaron → Exodus → Joshua → David → Temple I → Exile → Temple
          II → Rome
        </p>

        <hr />

        <div className="pdf-figure">
          <img
            src="/beyondQuran/images/1.jpg"
            alt="The Exodus From Egypt map"
          />
          <div className="pdf-caption">
            The Exodus From Egypt — route map (schematic).
          </div>
        </div>

        <div className="pdf-figure">
          <img
            src="/beyondQuran/images/2.jpg"
            alt="Kingdom of Israel and Judah map"
          />
          <div className="pdf-caption">
            Map showing Kingdom of Israel (north) and Kingdom of Judah (south)
            in the Levant.
          </div>
        </div>

        <div className="pdf-figure">
          <img
            src="/beyondQuran/images/3.jpg"
            alt="Babylonian Exile map"
          />
          <div className="pdf-caption">
            Babylonian Exile — schematic map showing movement toward Babylon.
          </div>
        </div>

        <div className="pdf-figure">
          <img
            src="/beyondQuran/images/4.jpg"
            alt="United Kingdom of Israel map"
          />
          <div className="pdf-caption">
            United Kingdom of Israel around the time of Saul and David
            (schematic).
          </div>
        </div>

        <a href="/beyondQuran/docs/musa_to_arrum.pdf">Document Form</a>
      </div>
    </div>
  );
}

