import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Al-Hajjaj ibn Yusuf: Devotion, Power, and Bloodshed",
  description:
    "The unsettling legacy of an Umayyad governor whose attachment to the Qur’an coexisted with extraordinary political brutality.",
};

const sections = [
  {
    id: "teacher",
    title: "The Qur’an Teacher’s Son",
    paragraphs: [
      "Hajjaj was born in Ta’if around 40 AH, several decades after the death of the Prophet ﷺ. He belonged to the generation that followed the Companions. His father, Yusuf, taught the Qur’an, and accounts of Hajjaj’s early life describe him teaching children to read and recite it as well.",
      "He did not begin his life far from religion. He grew up with the Qur’an, and his later reputation for violence never entirely displaced the memory of that early attachment. Even writers who condemned him remembered his eloquence, his recitation, and his interest in the people of the Qur’an.",
      "But teaching would not define his career. He entered Umayyad service and eventually made his way to Damascus, the centre of the caliphate’s power. The teacher became a soldier; the soldier became an enforcer.",
    ],
  },
  {
    id: "damascus",
    title: "Rising Through the Ranks",
    paragraphs: [
      "In Damascus, Hajjaj served in the shurta. The term should not suggest a modern civilian police force: these were troops charged with protecting and enforcing the ruler’s authority. Discipline, security, and the coercive power of government belonged to the same world.",
      "Hajjaj distinguished himself by his severity. He could restore obedience where others struggled, and he showed little hesitation in punishing those who resisted. His abilities brought him to the attention of Caliph ʿAbd al-Malik ibn Marwan, who found in him a forceful commander and a fiercely loyal servant.",
      "The contrast that would mark his life was already taking shape. Later biographers describe a man who recited the Qur’an and avoided intoxicants, yet was alarmingly ready to shed blood. Personal restraint in some matters did not become restraint in the exercise of power. The assignment that made his name infamous would expose that contradiction before the entire Muslim world.",
    ],
  },
  {
    id: "ibn-al-zubayr",
    title: "The Challenge of ʿAbd Allah ibn al-Zubayr",
    paragraphs: [
      "The Umayyads’ great rival was ʿAbd Allah ibn al-Zubayr. He was the son of al-Zubayr ibn al-ʿAwwam and Asmaʾ bint Abi Bakr, and the nephew of ʿAʾishah. His ties to Islam’s earliest generation were profound. From Makkah, he had established a rival caliphate whose authority had once extended across much of the Muslim world.",
      "By the time Hajjaj received the command against him, that authority had contracted sharply. Yet the final confrontation presented an extraordinary difficulty: Ibn al-Zubayr was in Makkah.",
      "This was the Haram, not an ordinary fortified city. It contained the Kaʿbah, received pilgrims, and sheltered inhabitants who were not simply combatants in a political struggle. Its dependence on supplies from outside also made a prolonged siege especially punishing. Hajjaj nevertheless moved against it.",
    ],
  },
  {
    id: "siege",
    title: "The Siege of Makkah",
    paragraphs: [
      "In 72–73 AH / 692 CE, Hajjaj’s forces besieged Makkah for months. Supplies dwindled, hunger spread, and Ibn al-Zubayr’s supporters faced the suffering of their families alongside the prospect of military defeat. Offers of safety encouraged them to abandon his cause. One by one, they left.",
      "Hajjaj also deployed catapults. His army bombarded the sanctuary, and the Kaʿbah was damaged in the fighting. The significance was terrible: a Muslim army was attacking Islam’s sacred centre to defeat another Muslim claimant to the caliphate.",
      "The Kaʿbah then differed from the structure familiar today. Ibn al-Zubayr had rebuilt it after the earlier siege of 683 CE, incorporating the enclosed area beside it into the building and giving it two doors. He based these changes on a report from ʿAʾishah concerning the Prophet’s ﷺ wishes for its reconstruction. After Ibn al-Zubayr’s defeat, Hajjaj, acting on ʿAbd al-Malik’s instructions, reversed those changes. The account is preserved in Sahih Muslim.",
      "Within the besieged city, Ibn al-Zubayr’s choices narrowed. As his followers deserted him, he turned to the person whose judgment still carried an authority that military power could not supply: his mother.",
    ],
    source: { href: "https://sunnah.com/muslim:1333a", label: "Sahih Muslim 1333a: the reconstruction of the Kaʿbah" },
  },
  {
    id: "asma",
    title: "Asmaʾ bint Abi Bakr",
    paragraphs: [
      "Asmaʾ was very old and had lost her sight. In the historical accounts of their final meeting, her son came to her with a desperate question: his supporters had abandoned him, his position appeared hopeless, and his opponents were offering terms. Should he surrender?",
      "Her answer returned him to the purpose of his struggle. If he had pursued worldly power, then his cause had already failed him. If he believed he had stood for the truth, the loss of his supporters did not by itself make that truth disappear. The exchange is remembered as a mother’s insistence that her son judge his conduct by conviction rather than the prospect of survival.",
      "Ibn al-Zubayr took his leave of her and returned to the fighting. He was killed. Hajjaj then had his body displayed publicly, turning even the defeated man’s remains into a warning against resistance.",
    ],
  },
  {
    id: "confrontation",
    title: "Hajjaj Meets Asmaʾ",
    paragraphs: [
      "The confrontation that followed is recorded in Sahih Muslim. Hajjaj summoned Asmaʾ, but she refused to come. He threatened to have her dragged by her hair. She still refused. Finally, he went to her himself.",
      "He taunted her about what he had done to her son, whom he called an enemy of Allah. Asmaʾ answered that he had ruined her son’s worldly life while her son had ruined his hereafter. She then recalled the Prophet’s ﷺ warning that Thaqif would produce a liar and a mubir—a destroyer, or one who sheds much blood. She identified Hajjaj with the latter. He left without answering her.",
      "The governor could command soldiers and display the body of her son, but he could not make Asmaʾ accept his moral account of what he had done. His political victory had not become moral authority.",
    ],
    source: { href: "https://sunnah.com/muslim:2545", label: "Sahih Muslim 2545: Asmaʾ’s confrontation with Hajjaj" },
  },
  {
    id: "hijaz",
    title: "Authority over the Holy Cities",
    paragraphs: [
      "After Ibn al-Zubayr’s defeat, Hajjaj governed the Hijaz, including Makkah and Madinah. Some of the Companions were still alive. A man notorious for his severity now exercised authority in the very places where the Prophet ﷺ had lived and taught.",
      "His governorship drew resentment, and the biographical tradition also criticizes his treatment of prayer times. Political governors commonly led public congregational prayers, so their conduct affected entire communities. Religious observance and political authority could not easily be separated.",
      "In 75 AH / 694 CE, ʿAbd al-Malik transferred Hajjaj to Iraq. Whatever hostility he had provoked in the Hijaz, the caliph continued to regard him as indispensable. The new appointment gave him an even larger field in which to exercise his power.",
    ],
  },
  {
    id: "iraq",
    title: "Governing by the Sword",
    paragraphs: [
      "Iraq had repeatedly frustrated Umayyad attempts to impose stable control. Rival factions, military grievances, and opposition movements made it a difficult province to govern. Hajjaj arrived determined to make obedience unavoidable.",
      "The speech traditionally attributed to him on entering Kufa captures the character of his rule. He is remembered as looking over the assembly and seeing heads ripe for harvesting. Its transmitted wording belongs to the historical and literary tradition, but the image endured because it expressed something his subjects recognized: disobedience could be answered with death.",
      "His authority rested on more than speeches. Punishment, military force, and the threat of execution made political resistance extraordinarily costly. The province gradually came under tighter Umayyad control, but the grievances beneath that control did not disappear. They would erupt in the most dangerous rebellion of his career.",
    ],
  },
  {
    id: "revolt",
    title: "The Revolt of Ibn al-Ashʿath",
    paragraphs: [
      "ʿAbd al-Rahman ibn al-Ashʿath had been Hajjaj’s own commander. Sent east with a substantial army, he came into conflict with the governor over the demands of the campaign. Resentment among the soldiers helped turn a military expedition into a rebellion against the man who had dispatched it.",
      "The revolt drew support far beyond the army. Scholars and qurrāʾ—men associated with Qur’anic learning and recitation—joined the opposition. This was one reason the struggle left such a deep mark on religious memory: among Hajjaj’s opponents were people whose standing rested on learning and devotion rather than merely a rival claim to office.",
      "The fighting around the turn of the eighth century placed Umayyad control of Iraq in serious danger. Hajjaj eventually prevailed, and his victory brought severe reprisals. Many participants were killed; others fled. Ibn al-Ashʿath escaped eastward, where he later died. Accounts differ over the circumstances of his end.",
      "Hajjaj had survived the challenge. Yet the restoration of government authority came with a human cost that the language of victory could not erase.",
    ],
  },
  {
    id: "anas",
    title: "The Humiliation of Anas ibn Malik",
    paragraphs: [
      "Accounts of Hajjaj’s conduct toward Anas ibn Malik reveal how far his hostility to opposition could reach. Anas had personally served the Prophet ﷺ and was living in Basra during Hajjaj’s rule in Iraq. Even that connection to the Messenger of Allah ﷺ did not shield him from the governor’s anger.",
      "In the biographical tradition, Hajjaj insulted Anas and accused him of supporting opponents of Umayyad authority. Anas appealed to ʿAbd al-Malik, who sent the governor a severe rebuke and ordered him to seek the Companion’s forgiveness.",
      "The reported apology reveals another aspect of Hajjaj’s character. The man who intimidated provinces could still submit when the caliph corrected him. But that submission also raises an uncomfortable question: why had loyalty to his ruler restrained him where reverence for a Companion had not?",
      "His hostility is also remembered within the anti-ʿAlid political culture of the period. Later historians condemn his antagonism toward ʿAli ibn Abi Talib and his supporters. At the same time, the details of individual accusations and speeches require care: a notorious reputation can preserve real wrongdoing while also attracting embellishment.",
    ],
  },
  {
    id: "quran",
    title: "The Other Hajjaj",
    paragraphs: [
      "It would be easy to stop with the violence. Yet the religious attachment described in the sources makes the story more disturbing, not less. Hajjaj is remembered as a frequent reciter of the Qur’an and a patron of those who taught it. Biographers who condemned his bloodshed could also acknowledge these traits.",
      "He sponsored the copying and circulation of Qur’anic manuscripts and is associated with measures intended to make their reading more consistent and accessible. Reports about his precise role in dotting and other scribal developments differ. These were stages in the transmission and presentation of an existing text, not the creation of the Qur’an by a governor.",
      "The contradiction cannot be resolved by assuming that an attachment to sacred words always governs a person’s treatment of others. The same official could support Qur’anic learning and persecute Qur’an reciters who stood against him. Religious patronage did not prevent political cruelty.",
    ],
  },
  {
    id: "administration",
    title: "Expansion and the Work of Government",
    paragraphs: [
      "Hajjaj also helped direct the eastward expansion of Umayyad rule. His young kinsman Muhammad ibn Qasim led campaigns into Sindh, while commanders such as Qutayba ibn Muslim advanced in Central Asia. These conquests became part of the political history of regions that would eventually contain large Muslim populations.",
      "Conquest and conversion, however, were not the same event. The establishment of Muslim government was one stage in a much longer history through which communities encountered and embraced Islam. Hajjaj’s role in military expansion should be recognized without assigning him the whole religious future of those lands.",
      "His influence also reached the machinery of government. In Iraq, Arabic replaced Persian in important administrative records. Currency changed as the Umayyads moved from adapted Byzantine and Sasanian models toward distinctly Islamic inscriptions and designs. Hajjaj participated in these reforms under the authority of the caliph.",
      "He was therefore an administrator and military organizer as well as an enforcer. These accomplishments help explain his importance to the Umayyad state. They do not cancel the suffering produced by his rule.",
    ],
  },
  {
    id: "said",
    title: "The Scholar Who Escaped Him",
    paragraphs: [
      "Among those who remained beyond Hajjaj’s reach after Ibn al-Ashʿath’s revolt was Saʿid ibn Jubayr, a distinguished student of Ibn ʿAbbas. He was renowned for his knowledge of the Qur’an, tafsir, and hadith. After the rebellion’s defeat, he spent years in flight.",
      "Eventually, Saʿid was captured and brought before Hajjaj. By then the governor had secured the authority and military success for which he had struggled. He nevertheless ordered the scholar’s execution.",
      "Later accounts preserve dramatic exchanges between the two men and a final supplication in which Saʿid asks Allah not to allow Hajjaj to kill anyone after him. The details and wording vary, and should not be presented as a certain transcript. At the centre of the story stands the execution itself: one of the most respected scholars of his generation was put to death by a governor who was also remembered for his devotion to the Qur’an.",
    ],
  },
  {
    id: "death",
    title: "Illness, Memory, and the Hope of Mercy",
    paragraphs: [
      "Hajjaj died in 95 AH / 714 CE, soon after Saʿid’s execution. Accounts describe a severe final illness. Stories of his last days connect his suffering with the memory of Saʿid, portraying him as troubled by the killing and unable to escape it.",
      "The closeness of the two deaths gave particular force to the report of Saʿid’s supplication. But chronology does not establish the medical cause of an illness, nor does it allow a historian to declare with certainty how divine judgment operated in an individual case. The association belongs to the way both men were remembered.",
    ],
  },
];

const endingSections = [
  {
    id: "poet",
    title: "The Poet on His Deathbed",
    paragraphs: [
      "There was still another side to him. Hajjaj was remarkably eloquent. His speeches were remembered for generations. He could terrify a room with words before ever drawing a sword. He was also an accomplished poet. The historical descriptions of him were not particularly flattering physically; he was traditionally described as short and unattractive.",
      "But when he spoke, people listened. And as the feared governor lay dying, his final concern was apparently not politics. It was what Allah would do with him. People around him were certain about his fate. After everything he had done, they considered him a man destined for Jahannam - Hajjaj responded in poetry.",
      "In meaning, he said:",
      "People swear that I am among the people of Hell.",
      "But what do they know?",
      <>What do they know of the vastness of <strong>Allah&apos;s mercy and forgiveness</strong>?</>,
      "And with that hope, Hajjaj ibn Yusuf died.",
    ],
  },
  {
    id: "legacy",
    title: "The Man Who Does Not Fit Neatly Into a Box",
    paragraphs: [
      "That is perhaps why his story remains so unsettling.",
      "This was the man who besieged Makkah.",
      "The man whose forces bombarded the sacred city.",
      "The man who killed ʿAbd Allah ibn al-Zubayr and displayed his corpse.",
      "The man who threatened Asmaʾ bint Abi Bakr.",
      "The governor who terrorized Iraq.",
      "The man under whose rule scholars and Qur'an reciters were killed.",
      "The man who humiliated Anas ibn Malik.",
      "And finally, the man who ordered the execution of Saʿid ibn Jubayr.",
      "His attachment to the Qur'an did not prevent his cruelty. His avoidance of some personal sins did not prevent enormous public sins. His service to the Muslim state did not make his oppression disappear. And his oppression does not require us to pretend that everything he ever accomplished was worthless. That is what makes Hajjaj more interesting than a simple villain in a history book. He was a man capable of apparently sincere religious attachment and astonishing political brutality at the same time.",
      "It would be easier if Hajjaj had simply hated religion. He apparently did not. He grew up with the Qur'an. He loved it. He recited it. He spent money serving it. He helped strengthen Arabic administration and the Umayyad state. He supported the expansion of Muslim rule from Central Asia toward Sindh. He could apparently recognize the special status of a Companion such as Anas when his caliph forced him to confront what he had done. And when death arrived, he still hoped in Allah's mercy.",
      "Perhaps that is also the warning contained in his story. A person does not necessarily become incapable of oppression simply because he possesses religious knowledge, loves the Qur'an, avoids certain sins, serves Muslim causes or sincerely thinks that he is defending the Muslim state.",
      <>Human beings can compartmentalize. They can be extraordinarily disciplined in one part of their religion while becoming blind to another. And few figures in early Islamic history demonstrate that contradiction more dramatically than <strong>al-Hajjaj ibn Yusuf al-Thaqafi</strong>.</>,
    ],
  },
];

function HistoricalImage({ coin = false }: { coin?: boolean }) {
  return (
    <figure className={styles.figure}>
      <Image
        src={`/beyondQuran/images/hajjaj-${coin ? "coin" : "seal"}.jpg`}
        alt={coin
          ? "An Arab-Sasanian silver coin issued under Hajjaj, retaining the older royal bust design."
          : "Both sides of a lead seal bearing the Arabic name and title of al-Hajjaj ibn Yusuf."}
        width={coin ? 1318 : 500}
        height={coin ? 1311 : 235}
        sizes="(max-width: 600px) 90vw, 500px"
        className={styles.image}
      />
      <figcaption>
        {coin ? (
          <>
            An Arab-Sasanian drachm associated with Hajjaj, dated 695 CE. The inherited royal image
            illustrates the currency tradition from which Umayyad coinage developed; it is not a portrait of Hajjaj.
            <span className={styles.credit}>
              Photograph: Sailko, <a href="https://commons.wikimedia.org/wiki/File:Siria,_hajjaj_bin_yusuf,_drahm_arabo-sasanide,_695.JPG">Wikimedia Commons</a>
              {" · "}<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>. Unmodified.
            </span>
          </>
        ) : (
          <>
            A lead seal bearing the name of al-Hajjaj ibn Yusuf, attributed to his governorship,
            75–95 AH / 694–714 CE: a small surviving trace of the authority behind the name.
            <span className={styles.credit}>
              Photograph: Classical Numismatic Group, Inc., <a href="https://commons.wikimedia.org/wiki/File:Seal_of_al-Hajjaj_ibn_Yusuf.jpg">Wikimedia Commons</a>
              {" · "}<a href="https://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a>. Unmodified.
            </span>
          </>
        )}
      </figcaption>
    </figure>
  );
}

export default function AlHajjajIbnYusufPage() {
  return (
    <div className="container page-intro-seq">
      <p className="naskh basmalah mt-3 text-center page-intro-e1" lang="ar" dir="rtl">
        بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
      </p>
      <article className="doc-page page-intro-e4 article-page article-page-wide ghurfa-article clean-article">
        <h1 className="doc-title">
          Al-Hajjaj ibn Yusuf
          <span className="doc-title-sub">Devotion, Power, and Bloodshed</span>
        </h1>
        <p className="doc-p">
          Some people leave names larger than the offices they held. They were never kings or
          caliphs, yet centuries later their names still provoke an immediate reaction.
          <strong> Al-Hajjaj ibn Yusuf al-Thaqafi was one of those men.</strong>
        </p>
        <p className="doc-p">
          He was a governor, a commander, and a servant of the Umayyad state. Yet few governors in
          Islamic history acquired such a fearsome reputation. His name became inseparable from
          executions, rebellion, and ruthless political control. He besieged Makkah, crushed revolts
          in Iraq, and ordered the deaths of men remembered for their learning and devotion.
        </p>
        <p className="doc-p">
          He was also a former Qur’an teacher, a patron of Qur’anic manuscripts, and an able
          administrator. That combination makes his life so unsettling: religious attachment and
          political brutality existed in the same person. Understanding the contradiction requires
          looking at both without allowing either to conceal the other.
        </p>
        <HistoricalImage />
        <aside className="article-scope-note">
          This essay distinguishes the main events of Hajjaj’s career from the speeches, private
          conversations, and deathbed stories preserved in later accounts. Reported dialogue is
          paraphrased, and uncertain details are identified as such.
        </aside>
        <nav className="article-contents" aria-label="Article contents">
          <p>Contents</p>
          <ol>
            <li><a href="#teacher">From teaching to Umayyad service</a></li>
            <li><a href="#ibn-al-zubayr">Makkah, Ibn al-Zubayr, and Asmaʾ</a></li>
            <li><a href="#iraq">Iraq and the revolt of Ibn al-Ashʿath</a></li>
            <li><a href="#quran">Qur’anic patronage and government</a></li>
            <li><a href="#said">Saʿid ibn Jubayr and Hajjaj’s final days</a></li>
            <li><a href="#poet">The Poet on His Deathbed</a></li>
            <li><a href="#legacy">The Man Who Does Not Fit Neatly Into a Box</a></li>
          </ol>
        </nav>
        {sections.map((section) => (
          <section id={section.id} key={section.id}>
            <h2 className="doc-section">{section.title}</h2>
            {section.paragraphs.map((paragraph) => <p className="doc-p" key={paragraph}>{paragraph}</p>)}
            {section.source && (
              <p className="refs-note"><a className="doc-link" href={section.source.href}>{section.source.label}</a></p>
            )}
            {section.id === "administration" && <HistoricalImage coin />}
          </section>
        ))}
        <hr className="doc-divider" />
        <section aria-labelledby="sources-title">
          <h2 className="doc-section" id="sources-title">Sources and Reading Notes</h2>
          <p className="doc-p">
            The following resources cover the chronology, the two cited hadith reports, and the
            biographical tradition. The
            detailed apology to Anas, Saʿid’s final supplication, and the deathbed verses are retained
            as reported traditions, not independently authenticated quotations.
          </p>
          <ul className="refs-list article-ref-list">
            <li className="refs-item"><a className="doc-link" href="https://sunnah.com/muslim:2545">Sahih Muslim 2545</a> — Ibn al-Zubayr’s body and the encounter with Asmaʾ.</li>
            <li className="refs-item"><a className="doc-link" href="https://sunnah.com/muslim:1333a">Sahih Muslim 1333a</a> — Ibn al-Zubayr’s rebuilding of the Kaʿbah and the subsequent reversal.</li>
            <li className="refs-item"><a className="doc-link" href="https://islamqa.info/en/answers/144424">Biographical excerpts from Ibn Kathir and al-Dhahabi, collected by Islam Q&amp;A</a> — later assessments of Hajjaj’s religious practices and violence.</li>
            <li className="refs-item"><a className="doc-link" href="https://en.wikipedia.org/wiki/Al-Hajjaj_ibn_Yusuf">Al-Hajjaj ibn Yusuf: overview and bibliography</a> — chronology and pointers to historical scholarship.</li>
          </ul>
        </section>
        {endingSections.map((section) => (
          <section id={section.id} key={section.id}>
            <h2 className="doc-section">{section.title}</h2>
            {section.paragraphs.map((paragraph, index) => (
              <p className="doc-p" key={`${section.id}-${index}`}>{paragraph}</p>
            ))}
          </section>
        ))}
      </article>
    </div>
  );
}
