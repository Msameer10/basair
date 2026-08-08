import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Four Great Imams: Formation of the Sunni Legal Traditions",
  description:
    "A comparative study of Abu Hanifa, Malik, al-Shafi'i, Ahmad ibn Hanbal, and the formation of the four Sunni legal schools.",
};

const imams = [
  {
    name: "Abū Ḥanīfa",
    dates: "80–150 AH / 699–767 CE",
    place: "Kufa",
    inheritance: "The Iraqi juristic tradition associated especially with Ibn Masʿūd, ʿAlqama, Ibrāhīm al-Nakhaʿī, and Ḥammād ibn Abī Sulaymān.",
    transmitters: "Abū Yūsuf, Muḥammad al-Shaybānī, Zufar ibn al-Hudhayl, and al-Ḥasan ibn Ziyād.",
    emphasis: "Systematic analogy, juristic preference, commercial practice, and the testing of rules against hypothetical cases.",
  },
  {
    name: "Mālik ibn Anas",
    dates: "93–179 AH / 711–795 CE",
    place: "Medina",
    inheritance: "The learning of Medinan Successors and their students, including Nāfiʿ, Ibn Shihāb al-Zuhrī, Rabīʿa al-Raʾy, and Yaḥyā ibn Saʿīd al-Anṣārī.",
    transmitters: "Ibn al-Qāsim, Ibn Wahb, Ashhab, Yaḥyā al-Laythī, and Asad ibn al-Furāt.",
    emphasis: "Prophetic reports, inherited Medinan practice, Companion judgments, public welfare, and blocking the means to harm.",
  },
  {
    name: "Muḥammad al-Shāfiʿī",
    dates: "150–204 AH / 767–820 CE",
    place: "Mecca, Medina, Iraq, and Egypt",
    inheritance: "A mobile synthesis shaped by Mālik in Medina, Muḥammad al-Shaybānī in Iraq, Makkan learning, Arabic philology, and legal debate.",
    transmitters: "Al-Muzanī, al-Buwayṭī, al-Rabīʿ al-Murādī, al-Rabīʿ al-Jīzī, and al-Ḥumaydī.",
    emphasis: "Textual proof, Prophetic Sunnah, disciplined analogy, and a more explicit theory of legal interpretation.",
  },
  {
    name: "Aḥmad ibn Ḥanbal",
    dates: "164–241 AH / 780–855 CE",
    place: "Baghdad and the wider hadith network",
    inheritance: "The transregional hadith movement, together with study under al-Shāfiʿī, Wakīʿ, Sufyān ibn ʿUyayna, ʿAbd al-Razzāq, and others.",
    transmitters: "His sons Ṣāliḥ and ʿAbd Allāh, Abū Bakr al-Athram, al-Marwadhī, Ḥanbal ibn Isḥāq, and later al-Khallāl.",
    emphasis: "Revealed texts, Companion positions, transmitted precedent, and restrained analogy where no stronger evidence resolved the case.",
  },
];

const cases = [
  {
    question: "Does ordinary skin contact between a man and woman invalidate wuḍūʾ?",
    evidence: "The schools read Qurʾān 4:43 and 5:6—particularly lamastum al-nisāʾ—and combine that reading with reports concerning the Prophet’s physical contact with his wives.",
    hanafi: "No. The expression is read idiomatically as sexual intercourse; ordinary touch does not itself invalidate ablution.",
    maliki: "It may invalidate when accompanied by pleasure or its pursuit, with further details concerning the person touched and the mode of contact.",
    shafii: "Direct skin contact between marriageable adult members of the opposite sex generally invalidates ablution, even without desire, subject to the school’s detailed exceptions.",
    hanbali: "The relied-upon rule commonly connects invalidation to touch with desire; transmissions from Aḥmad and later formulations preserve further detail.",
  },
  {
    question: "Should the basmala be recited aloud in an audible prayer?",
    evidence: "The disagreement turns on whether the basmala is counted as a verse of al-Fātiḥa and on apparently differing reports describing the Prophet’s recitation.",
    hanafi: "It is recited quietly before al-Fātiḥa, including in prayers whose Qurʾānic recitation is audible.",
    maliki: "The well-known position does not treat it as part of al-Fātiḥa and omits it in the obligatory prayer, while allowing it in other contexts and preserving internal qualifications.",
    shafii: "It is a verse of al-Fātiḥa and is recited aloud when al-Fātiḥa itself is recited aloud.",
    hanbali: "It is recited quietly; it is not normally pronounced aloud as part of the imam’s audible recitation.",
  },
  {
    question: "Does bleeding elsewhere than the private parts invalidate wuḍūʾ?",
    evidence: "Jurists weigh reports about blood, analogies with substances leaving the body, and reports of Companions continuing prayer despite wounds.",
    hanafi: "Flowing blood or pus that passes beyond its point of emergence invalidates ablution; a trace that does not flow does not.",
    maliki: "It does not ordinarily invalidate ablution, though blood must still be treated according to the school’s rules of ritual cleanliness.",
    shafii: "It does not invalidate ablution merely by leaving a wound or the nose.",
    hanbali: "The classical school contains more than one transmission; the familiar later position treats a large amount as invalidating, while another significant position does not.",
  },
  {
    question: "May an adult woman conclude her own marriage contract without a guardian?",
    evidence: "The schools bring together Qurʾānic language assigning actions to women or guardians, hadith requiring a walī, Companion practice, and analogy between marriage and other contracts.",
    hanafi: "A sane adult woman may conclude her own marriage, although compatibility and the proper dower protect the guardian’s interests and can create grounds for objection.",
    maliki: "A guardian is required for validity, with the school distinguishing among guardians and forms of delegation.",
    shafii: "A guardian is an indispensable contracting party; the woman does not contract the marriage for herself.",
    hanbali: "A guardian is required, and guardianship follows an ordered hierarchy developed in the school’s substantive law.",
  },
];

export default function ImamsPage() {
  return (
    <div className="container page-intro-seq">
      <p className="naskh basmalah mt-3 text-center page-intro-e1" lang="ar">
        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </p>

      <article className="doc-page page-intro-e4 article-page article-page-wide imams-article">
        <h1 className="doc-title">
          The Four Great Imams
          <span className="doc-title-sub">Formation of the Sunni Legal Traditions</span>
        </h1>

        <p className="doc-lede">
          Abū Ḥanīfa, Mālik, al-Shāfiʿī, and Aḥmad ibn Ḥanbal did not sit down to create four
          competing versions of Islam. Each inherited a living body of revelation, transmitted
          learning, regional practice, and juristic reasoning. Their names later became anchors for
          institutions far larger than any one teacher. To understand the four madhhabs, one must
          therefore study three different things at once: the imam, his scholarly circle, and the
          school constructed by later generations.
        </p>

        <aside className="imams-note">
          <strong>A note on scope.</strong> This is a history of Sunni legal interpretation, not a
          ranking of the imams or a manual for choosing convenient rulings. A short comparison can
          state a school&apos;s relied-upon position, but cannot reproduce all internal transmissions,
          conditions, or later revisions.
        </aside>

        <nav className="imams-contents" aria-label="Contents">
          <p className="imams-kicker">In this study</p>
          <ol>
            <li><a href="#before">The legal world before the four schools</a></li>
            <li><a href="#profiles">Four imams in parallel</a></li>
            <li><a href="#school">The imam is not the entire madhhab</a></li>
            <li><a href="#cases">Methodology in concrete legal cases</a></li>
            <li><a href="#relationships">A connected scholarly world</a></li>
            <li><a href="#survival">Why these four schools endured</a></li>
          </ol>
        </nav>

        <section id="before">
          <h2 className="doc-section">I. The Legal World Before the Four Schools</h2>
          <p className="doc-p">
            Islamic law begins neither with a textbook nor with a school bearing a jurist&apos;s name.
            During the Prophet&apos;s lifetime, the Qurʾān was revealed into real disputes, acts of
            worship, family relationships, commercial dealings, war, reconciliation, and public
            administration. The Prophet ﷺ explained revelation through word, judgment, action, and
            approval. His authority joined moral instruction, legal interpretation, and the
            governance of an emerging community.
          </p>
          <p className="doc-p">
            After his death, the Companions carried this learning into a rapidly expanding world.
            They possessed unequal collections of Prophetic reports, remembered different events,
            and encountered unprecedented circumstances. Their judgments drew upon the Qurʾān,
            remembered Sunnah, consultation, linguistic understanding, analogy, and attention to
            benefit and harm. Disagreement therefore appeared within the earliest generations; it
            was not invented by the later madhhabs.
          </p>

          <h3 className="doc-subsection">From Companions to regional traditions</h3>
          <div className="imams-region-grid">
            <div>
              <h4>Medina</h4>
              <p>The city retained an unusually dense memory of Prophetic life and the judgments of figures such as ʿUmar, ʿĀʾisha, Ibn ʿUmar, and Zayd ibn Thābit. Its jurists could treat established communal practice as evidence of inherited Sunnah.</p>
            </div>
            <div>
              <h4>Kufa</h4>
              <p>A newer and socially complex garrison city inherited the jurisprudence associated with ʿAlī and Ibn Masʿūd. Its jurists faced extensive commercial and administrative problems and developed rigorous habits of analogy and consistency.</p>
            </div>
            <div>
              <h4>Mecca</h4>
              <p>Its circles were especially important for pilgrimage and Qurʾānic interpretation, with the legacy of Ibn ʿAbbās transmitted through scholars such as ʿAṭāʾ, Mujāhid, and ʿAmr ibn Dīnār.</p>
            </div>
            <div>
              <h4>Basra and Syria</h4>
              <p>These regions also produced major legal authorities and coherent traditions. The later dominance of four schools should not erase al-Ḥasan al-Baṣrī, al-Awzāʿī, or the wider landscape of early jurisprudence.</p>
            </div>
          </div>

          <h3 className="doc-subsection">Beyond “tradition versus reason”</h3>
          <p className="doc-p">
            The labels <span className="doc-term">ahl al-ḥadīth</span> and <span className="doc-term">ahl al-raʾy</span>
            describe genuine tendencies, but they become misleading when translated as “people who
            followed hadith” and “people who preferred opinion.” Iraqi jurists transmitted hadith;
            Medinan and hadith-oriented jurists reasoned. The real disputes concerned which reports
            were established, how solitary reports related to general principles or inherited
            practice, when analogy was required, and who possessed authority to interpret.
          </p>
          <p className="doc-p">
            Early affiliation was also looser than later school membership. A scholar might be
            identified with the teaching of a master, the practice of a city, or a recognizable
            method without belonging to a fully organized madhhab. The doctrinal school—with a
            canon of texts, ranks of jurists, rules for deriving the official position, and a
            durable teaching community—was a later achievement.
          </p>
        </section>

        <section id="profiles">
          <h2 className="doc-section">II. Four Imams in Parallel</h2>
          <p className="doc-p">
            The four imams overlap chronologically, but each stands at a different point in the
            movement from regional jurisprudence toward transregional legal schools. Reading them
            in parallel reveals continuity as well as difference.
          </p>
          <div className="imams-profile-grid">
            {imams.map((imam) => (
              <section className="imam-profile" key={imam.name}>
                <header>
                  <p className="imams-kicker">{imam.place}</p>
                  <h3>{imam.name}</h3>
                  <p className="imam-dates">{imam.dates}</p>
                </header>
                <dl>
                  <div><dt>Inherited world</dt><dd>{imam.inheritance}</dd></div>
                  <div><dt>Principal transmitters</dt><dd>{imam.transmitters}</dd></div>
                  <div><dt>Juristic character</dt><dd>{imam.emphasis}</dd></div>
                </dl>
              </section>
            ))}
          </div>

          <h3 className="doc-subsection">Abū Ḥanīfa: law as a coherent system</h3>
          <p className="doc-p">
            Abū Ḥanīfa al-Nuʿmān ibn Thābit worked in Kufa, a city shaped by trade, political
            conflict, sectarian argument, and the legal inheritance of Ibn Masʿūd&apos;s circle. His
            long study with Ḥammād ibn Abī Sulaymān situated him within a recognizable Kufan chain.
            Reports of his teaching portray a deliberative circle: problems were proposed,
            evidence debated, consequences tested, and answers refined. Hypothetical jurisprudence
            allowed rules to be examined before a dispute reached the judge.
          </p>
          <p className="doc-p">
            His reputation for <span className="doc-term">raʾy</span> should not be confused with
            indifference to revelation. The issue was how texts were authenticated, reconciled,
            generalized, and applied. He used analogy extensively, while <span className="doc-term">istiḥsān</span>
            allowed departure from an apparent analogy when stronger evidence, necessity, custom,
            or a more compelling juristic rationale required it. His refusal of certain offices and
            his difficult relationship with political authority also became part of his remembered
            moral biography.
          </p>

          <h3 className="doc-subsection">Mālik: Medina as archive and argument</h3>
          <p className="doc-p">
            Mālik ibn Anas spent his career in Medina, collecting reports and judgments while
            studying the practice of the city. His <em>Muwaṭṭaʾ</em> is not merely a hadith
            collection: Prophetic reports appear beside Companion judgments, Successor opinions,
            Medinan practice, and Mālik&apos;s own legal conclusions. It displays law as an inherited
            conversation rather than a list of isolated narrations.
          </p>
          <p className="doc-p">
            The “practice of the people of Medina” was not a single undifferentiated source. Later
            Mālikīs distinguished mass-transmitted practice, inherited public acts, judicial
            practice, and juristic agreement. The school also developed Mālik&apos;s attention to public
            welfare, custom, consequences, and blocking lawful means likely to produce prohibited
            ends. His resistance to coercing the empire onto one recension of the <em>Muwaṭṭaʾ</em>,
            as remembered in the tradition, aptly reflects the plurality already present.
          </p>

          <h3 className="doc-subsection">Al-Shāfiʿī: a transregional theory of proof</h3>
          <p className="doc-p">
            Al-Shāfiʿī crossed the intellectual geographies that earlier scholarship often kept
            apart. He learned from Mālik, debated Iraqi jurists, studied with Muḥammad al-Shaybānī,
            and later reformulated positions after moving to Egypt. His surviving writings let us
            hear a jurist arguing in his own voice more directly than is possible with Abū Ḥanīfa.
          </p>
          <p className="doc-p">
            In the <em>Risāla</em> and <em>Umm</em>, al-Shāfiʿī insisted upon the binding authority of
            authentic Prophetic Sunnah and disciplined the movement from text to rule through
            language, specification, abrogation, consensus, and analogy. Calling him the sole
            “inventor” of legal theory goes too far: jurists had reasoned about sources before him.
            His achievement was to state and defend a particularly consequential architecture of
            proof. Even his own school distinguishes his earlier Iraqi positions from his later
            Egyptian positions.
          </p>

          <h3 className="doc-subsection">Aḥmad ibn Ḥanbal: transmission, restraint, and endurance</h3>
          <p className="doc-p">
            Aḥmad travelled widely for hadith and compiled the vast <em>Musnad</em>. His legal
            responses characteristically begin with text and the reported judgments of the early
            community. Where direct evidence did not settle a matter, he could choose among
            Companion opinions or employ analogy, but with a reluctance to let abstract structure
            outrun transmission. The contrast is one of ordering and temperament, not reason versus
            its absence.
          </p>
          <p className="doc-p">
            His refusal to affirm the createdness of the Qurʾān during the Miḥna made him a symbol
            of scholarly resistance to state-imposed doctrine. Yet his legal school did not emerge
            automatically from that fame. His answers survived in numerous, sometimes conflicting,
            student transmissions. Later Ḥanbalīs had to gather, compare, and organize them before a
            stable doctrinal tradition could exist.
          </p>
        </section>

        <section id="school">
          <h2 className="doc-section">III. The Imam Is Not the Entire Madhhab</h2>
          <p className="doc-p">
            A madhhab is not a preserved transcript of one man&apos;s opinions. It is a cumulative
            method for remembering reports, resolving contradictions, extending doctrine to new
            cases, teaching students, issuing fatwas, and deciding which of several valid
            transmissions represents the school. Later jurists could disagree with the eponym while
            remaining fully inside his tradition.
          </p>
          <div className="imams-development">
            <div><span>Teacher</span><p>Answers questions, transmits evidence, and models a method.</p></div>
            <div><span>Circle</span><p>Records, debates, qualifies, and sometimes disagrees with those answers.</p></div>
            <div><span>Canon</span><p>Authoritative books stabilize doctrine and terminology across distance.</p></div>
            <div><span>School</span><p>Generations establish rules for preference, fatwa, teaching, and new cases.</p></div>
          </div>

          <h3 className="doc-subsection">Four different acts of construction</h3>
          <p className="doc-p">
            <strong>The Ḥanafī school</strong> is accessible principally through Abū Ḥanīfa&apos;s
            students. Abū Yūsuf carried the tradition into the judiciary and wrote independently;
            Muḥammad al-Shaybānī&apos;s works became the central textual reservoir of early doctrine.
            The school contains their positions as well as their teacher&apos;s, and later jurists built
            hierarchies for deciding among them.
          </p>
          <p className="doc-p">
            <strong>The Mālikī school</strong> arose through several geographic transmissions.
            Egyptian students such as Ibn al-Qāsim, North African jurists, Andalusian transmitters,
            and Iraqi Mālikīs did not always preserve identical emphases. Saḥnūn&apos;s
            <em> Mudawwana</em>, rooted heavily in Ibn al-Qāsim&apos;s transmission, became decisive in
            the western school without exhausting everything reported from Mālik.
          </p>
          <p className="doc-p">
            <strong>The Shāfiʿī school</strong> inherited an unusual quantity of writing from its
            imam, but still required construction. Al-Muzanī&apos;s abridgment, the work of early
            transmitters, and later synthesis by jurists such as al-Juwaynī, al-Ghazālī, al-Rāfiʿī,
            and al-Nawawī determined how the school identified its relied-upon doctrine.
          </p>
          <p className="doc-p">
            <strong>The Ḥanbalī school</strong> faced the opposite problem: Aḥmad avoided authoring a
            compact law code, while students transmitted many responsa. Abū Bakr al-Khallāl
            collected these dispersed materials; later jurists compared Aḥmad&apos;s variant reports
            and developed methods for preference. The mature school is therefore both deeply
            Aḥmadian and unmistakably post-Aḥmad.
          </p>
        </section>

        <section id="cases">
          <h2 className="doc-section">IV. Methodology in Concrete Legal Cases</h2>
          <p className="doc-p">
            Abstract descriptions such as “textual” and “rational” conceal more than they reveal.
            The following cases show jurists starting from shared revelation yet differing over
            language, authentication, reconciliation, legal analogy, and the weight assigned to
            transmitted practice.
          </p>
          <div className="imams-case-stack">
            {cases.map((item, index) => (
              <section className="imams-case" key={item.question}>
                <p className="imams-kicker">Case {index + 1}</p>
                <h3>{item.question}</h3>
                <p className="case-evidence"><strong>Point of interpretation:</strong> {item.evidence}</p>
                <div className="imams-rulings">
                  <p><strong>Ḥanafī</strong>{item.hanafi}</p>
                  <p><strong>Mālikī</strong>{item.maliki}</p>
                  <p><strong>Shāfiʿī</strong>{item.shafii}</p>
                  <p><strong>Ḥanbalī</strong>{item.hanbali}</p>
                </div>
              </section>
            ))}
          </div>
          <p className="doc-p">
            These are not four arbitrary answers. Each is the visible endpoint of prior judgments:
            whether a Qurʾānic expression is literal or idiomatic, whether two reports describe
            different occasions or establish a general rule, whether an act implies legal
            obligation, and whether a rule should turn on an observable event or its probable
            meaning. The disagreement is often located in the path from evidence to rule, not in
            the acceptance or rejection of evidence itself.
          </p>
        </section>

        <section id="relationships">
          <h2 className="doc-section">V. A Connected Scholarly World</h2>
          <p className="doc-p">
            The familiar sequence—Abū Ḥanīfa, Mālik, al-Shāfiʿī, Aḥmad—can create the false image of
            a single chain. The real network is denser. Some links are direct study; others are
            influence transmitted through students, books, debate, or a shared regional legacy.
            These categories should not be collapsed into a decorative isnād.
          </p>
          <div className="imams-network" role="list" aria-label="Selected scholarly relationships">
            <div role="listitem"><b>Ḥammād ibn Abī Sulaymān</b><span>long-term teacher of</span><b>Abū Ḥanīfa</b></div>
            <div role="listitem"><b>Abū Ḥanīfa</b><span>teacher of</span><b>Muḥammad al-Shaybānī</b></div>
            <div role="listitem"><b>Mālik</b><span>teacher of</span><b>al-Shāfiʿī</b></div>
            <div role="listitem"><b>Muḥammad al-Shaybānī</b><span>Iraqi teacher and interlocutor of</span><b>al-Shāfiʿī</b></div>
            <div role="listitem"><b>Al-Shāfiʿī</b><span>teacher and major influence upon</span><b>Aḥmad</b></div>
            <div role="listitem"><b>Abū Yūsuf and Wakīʿ</b><span>among the Iraqi learning encountered by</span><b>Aḥmad</b></div>
          </div>
          <p className="doc-p">
            The network also crossed later school boundaries. A scholar could study with several
            masters before the schools hardened into exclusive identities. Al-Shāfiʿī could revere
            Mālik while criticizing the use made of Medinan practice; he could learn from
            al-Shaybānī while contesting Ḥanafī arguments. Aḥmad could honor al-Shāfiʿī&apos;s legal
            intelligence without turning into a Shāfiʿī jurist. Intellectual inheritance included
            disciplined disagreement.
          </p>
          <p className="doc-p">
            For a broader, searchable chronology of teachers, students, theologians, traditionists,
            and later school authorities, see the <Link className="doc-link" href="/beyondQuran/scholars-of-islam">Scholars of Islam reference</Link>.
          </p>
        </section>

        <section id="survival">
          <h2 className="doc-section">VI. Why These Four Schools Endured</h2>
          <p className="doc-p">
            The early Sunni world contained more than four plausible legal traditions. Al-Awzāʿī&apos;s
            teaching was once influential in Syria and al-Andalus; al-Layth ibn Saʿd was a towering
            Egyptian jurist; Sufyān al-Thawrī, Isḥāq ibn Rāhawayh, Dāwūd al-Ẓāhirī, and al-Ṭabarī
            each supported substantial bodies of learning. Their decline does not prove inferior
            scholarship. Survival required an ecology, not simply a brilliant founder.
          </p>

          <div className="imams-survival-grid">
            <div><span>01</span><h3>Students</h3><p>A large, capable circle had to preserve doctrine, teach successors, and defend the method in debate.</p></div>
            <div><span>02</span><h3>Texts</h3><p>Portable and teachable books allowed a tradition to survive the death of its immediate oral network.</p></div>
            <div><span>03</span><h3>Method</h3><p>A school needed procedures for answering cases its founder never encountered and for selecting among competing opinions.</p></div>
            <div><span>04</span><h3>Institutions</h3><p>Judgeships, mosques, madrasas, endowments, and scholarly appointments reproduced trained jurists across generations.</p></div>
            <div><span>05</span><h3>Geography</h3><p>Regional adoption created durable constituencies: North and West Africa, Egypt, Iraq, Central Asia, Syria, and beyond.</p></div>
            <div><span>06</span><h3>Recognition</h3><p>Mutual Sunni recognition allowed four schools to disagree while sharing courts, cities, pilgrimage, and a larger orthodoxy.</p></div>
          </div>

          <h3 className="doc-subsection">Patronage mattered—but it did not create doctrine from nothing</h3>
          <p className="doc-p">
            Political and judicial support enlarged some networks. Abū Yūsuf&apos;s judicial prominence
            aided Ḥanafī expansion; later dynasties and especially Ottoman administration gave the
            Ḥanafī school extraordinary reach. Mālikī doctrine travelled through North Africa and
            al-Andalus; Shāfiʿī networks became deeply rooted from Egypt and Yemen to East Africa
            and Southeast Asia; Ḥanbalism maintained concentrated but resilient centers, especially
            in Baghdad and later Damascus and Arabia. Yet a ruler could patronize only what scholars
            had already made teachable, adaptable, and credible.
          </p>
          <p className="doc-p">
            From roughly the fifth/eleventh century, the spread of the madrasa strengthened
            school-based legal education. Endowed teaching posts, curricular texts, chains of
            authorization, and judicial careers gave madhhab affiliation a durable social form.
            The four-school arrangement then became increasingly self-reinforcing: a student could
            find teachers, manuals, commentaries, courts, and colleagues within an established
            tradition.
          </p>

          <h3 className="doc-subsection">The achievement was continuity without complete uniformity</h3>
          <p className="doc-p">
            The four madhhabs endured because each joined memory to controlled change. Their jurists
            conserved a recognizable grammar of interpretation while continuously producing new
            distinctions, preferences, fatwas, and applications. A school that merely repeated its
            founder could not govern new realities; one that abandoned its inherited method would
            cease to be a school. Durability lay in negotiating that tension.
          </p>
        </section>

        <section>
          <h2 className="doc-section">Selected References</h2>
          <ul className="imams-references">
            <li>Wael B. Hallaq, <em>The Origins and Evolution of Islamic Law</em>, especially “The Formation of Legal Schools.”</li>
            <li>Christopher Melchert, <em>The Formation of the Sunni Schools of Law, 9th–10th Centuries C.E.</em></li>
            <li>Ahmed El Shamsy, <em>The Canonization of Islamic Law: A Social and Intellectual History</em>.</li>
            <li>Yasin Dutton, <em>The Origins of Islamic Law: The Qurʾan, the Muwaṭṭaʾ and Madinan ʿAmal</em>.</li>
            <li>Muḥammad ibn Idrīs al-Shāfiʿī, <em>al-Risāla</em> and <em>al-Umm</em>.</li>
            <li>Mālik ibn Anas, <em>al-Muwaṭṭaʾ</em>, in its major transmissions.</li>
            <li>Al-Shaybānī, the works of the <em>ẓāhir al-riwāya</em>; Saḥnūn, <em>al-Mudawwana</em>; Ibn Qudāma, <em>al-Mughnī</em>; and al-Nawawī, <em>al-Majmūʿ</em>.</li>
            <li><a className="doc-link" href="https://www.iranicaonline.org/articles/abu-hanifa-noman-b/">Encyclopaedia Iranica, “Abū Ḥanīfa”</a> and <a className="doc-link" href="https://www.iranicaonline.org/articles/hanafite-madhab/">“Hanafite Madhhab.”</a></li>
          </ul>
        </section>

        <p className="doc-closing-note">
          This opening edition concentrates on formation, method, and institutional survival. A
          later expansion can add political biographies, myths and corrections, geographic maps,
          and a fuller treatment of the ethics of disagreement.
        </p>
      </article>
    </div>
  );
}
