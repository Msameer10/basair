export type TraditionPrimary = "Early / Shared" | "Sunni" | "Shi'i";

export type PeriodPrimary =
  | "Companions"
  | "Successors"
  | "Early Formative Scholars"
  | "Early"
  | "Classical"
  | "Late Classical"
  | "Pre-Modern"
  | "Modern";

export type FieldTag =
  | "Fiqh"
  | "Usul al-fiqh"
  | "Hadith"
  | "Tafsir"
  | "Aqidah / Kalam"
  | "Philosophy"
  | "Tasawwuf"
  | "History"
  | "Biography"
  | "Arabic language"
  | "Grammar"
  | "Philology"
  | "Logic"
  | "Qur'an transmission"
  | "Modern thought / reform"
  | "Political thought";

export type MadhhabTag = "Hanafi" | "Maliki" | "Shafi'i" | "Hanbali";

export type ScholarEntry = {
  name: string;
  dates: string;
  traditionPrimary: TraditionPrimary;
  periodPrimary: PeriodPrimary;
  fieldTags: FieldTag[];
  madhhabTags?: MadhhabTag[];
  description: string;
  sortYear: number;
  chainId?: string;
  searchKeywords?: string[];
};

export const BASMALAH =
  "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u064e\u0651\u0670\u0647\u0650 \u0671\u0644\u0631\u064e\u0651\u062d\u0652\u0645\u064e\u0670\u0646\u0650 \u0671\u0644\u0631\u064e\u0651\u062d\u0650\u064a\u0645\u0650";

export const TRADITION_TABS: TraditionPrimary[] = [
  "Early / Shared",
  "Sunni",
  "Shi'i",
];

export const PERIODS_BY_TRADITION: Record<TraditionPrimary, PeriodPrimary[]> = {
  "Early / Shared": ["Companions", "Successors", "Early Formative Scholars"],
  Sunni: ["Early", "Classical", "Late Classical", "Pre-Modern", "Modern"],
  "Shi'i": ["Early", "Classical", "Late Classical", "Pre-Modern", "Modern"],
};

export const earlySharedExplanation =
  "This page presents major scholars of Islam by broad tradition and historical period. Field tags are used to indicate the disciplines for which each scholar is best known. The 'Early / Shared' section refers especially to formative scholars such as the Companions and the Successors, who lived before the later development of formal sectarian schools.";

export const scholars: ScholarEntry[] = [
  {
    name: "Ali ibn Abi Talib",
    dates: "c. 600-661",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Companions",
    fieldTags: ["Fiqh", "Hadith", "Aqidah / Kalam"],
    description:
      "Companion and early caliph best known for legal judgment, transmitted reports, and foundational teaching.",
    sortYear: 600,
    searchKeywords: ["Ali"],
  },
  {
    name: "A'ishah bint Abi Bakr",
    dates: "c. 613-678",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Companions",
    fieldTags: ["Hadith", "Fiqh"],
    description:
      "Companion best known for hadith transmission and for legal and devotional reports from the household of the Prophet.",
    sortYear: 613,
    searchKeywords: ["Aishah"],
  },
  {
    name: "Ubayy ibn Ka'b",
    dates: "d. c. 649",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Companions",
    fieldTags: ["Qur'an transmission", "Tafsir"],
    description:
      "Companion best known for Qur'an recitation and early teaching in Madinah.",
    sortYear: 620,
    searchKeywords: ["Ubayy"],
  },
  {
    name: "Zayd ibn Thabit",
    dates: "c. 610-665",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Companions",
    fieldTags: ["Qur'an transmission", "Fiqh"],
    description:
      "Companion best known for Qur'an writing, recitation, and Medinan legal learning.",
    sortYear: 610,
    searchKeywords: ["Zayd"],
  },
  {
    name: "Abdullah ibn Mas'ud",
    dates: "d. 653",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Companions",
    fieldTags: ["Fiqh", "Hadith", "Tafsir"],
    description:
      "Companion best known for Qur'an recitation, legal reasoning, and the Kufan scholarly tradition.",
    sortYear: 615,
    searchKeywords: ["Ibn Masud", "Ibn Mas'ud"],
  },
  {
    name: "Abdullah ibn Abbas",
    dates: "619-687",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Companions",
    fieldTags: ["Tafsir", "Hadith", "Fiqh"],
    description:
      "Companion best known for early Qur'an interpretation and for reports on legal and linguistic questions.",
    sortYear: 619,
    chainId: "ibn_abbas",
    searchKeywords: ["Ibn Abbas"],
  },
  {
    name: "Sa'id ibn al-Musayyib",
    dates: "642-715",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Successors",
    fieldTags: ["Fiqh", "Hadith"],
    description:
      "Successor best known for Medinan legal learning and for early hadith transmission.",
    sortYear: 642,
    searchKeywords: ["Said ibn al-Musayyib", "Sa'id"],
  },
  {
    name: "Hasan al-Basri",
    dates: "642-728",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Successors",
    fieldTags: ["Tasawwuf", "Aqidah / Kalam"],
    description:
      "Successor best known for preaching, piety literature, and early theological reflection.",
    sortYear: 642,
  },
  {
    name: "Mujahid ibn Jabr",
    dates: "c. 642-722",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Successors",
    fieldTags: ["Tafsir", "Hadith"],
    description:
      "Successor best known for Qur'an interpretation, especially through material associated with Ibn Abbas.",
    sortYear: 642,
    chainId: "mujahid",
    searchKeywords: ["Mujahid"],
  },
  {
    name: "Ata ibn Abi Rabah",
    dates: "c. 647-732",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Successors",
    fieldTags: ["Fiqh", "Hadith"],
    description:
      "Successor best known for legal learning in Makkah and for reports from Companions including Ibn Abbas.",
    sortYear: 647,
    searchKeywords: ["Ata", "Ata ibn Abi Rabah"],
  },
  {
    name: "Alqamah ibn Qays",
    dates: "d. 681",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Successors",
    fieldTags: ["Fiqh", "Hadith"],
    description:
      "Successor best known for transmitting the learning of Ibn Mas'ud within the Kufan legal tradition.",
    sortYear: 681,
    searchKeywords: ["Alqamah"],
  },
  {
    name: "Ibrahim al-Nakha'i",
    dates: "c. 670-714",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars",
    fieldTags: ["Fiqh", "Usul al-fiqh"],
    description:
      "Early Iraqi scholar best known for legal reasoning and the maturation of the Kufan juristic line.",
    sortYear: 670,
    chainId: "ibrahim_nakhai",
    searchKeywords: ["Ibrahim al-Nakhai", "Ibrahim al-Nakha'i"],
  },
  {
    name: "Nafi'",
    dates: "d. 734",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars",
    fieldTags: ["Hadith", "Fiqh"],
    description:
      "Early Medinan transmitter best known for narrating from Ibn Umar and shaping later legal transmission.",
    sortYear: 734,
    chainId: "nafi",
    searchKeywords: ["Nafi"],
  },
  {
    name: "Hammad ibn Abi Sulayman",
    dates: "d. 738",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars",
    fieldTags: ["Fiqh"],
    description:
      "Early Kufan jurist best known as a major teacher in the line leading to Abu Hanifa.",
    sortYear: 738,
    chainId: "hammad",
    searchKeywords: ["Hammad ibn Abi Sulayman", "Hammad"],
  },
  {
    name: "Rabi'ah al-Ra'y",
    dates: "d. 753",
    traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars",
    fieldTags: ["Fiqh", "Usul al-fiqh"],
    description:
      "Early Medinan jurist best known for legal reasoning and influence on the line leading to Malik ibn Anas.",
    sortYear: 753,
    chainId: "rabiah",
    searchKeywords: ["Rabiah al-Ra'y", "Rabi'ah"],
  },
  {
    name: "Abu Hanifa",
    dates: "699-767",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Usul al-fiqh"],
    madhhabTags: ["Hanafi"],
    description:
      "Jurist best known for the early Hanafi school and for systematic legal reasoning in Kufa.",
    sortYear: 699,
    chainId: "abu_hanifa",
  },
  {
    name: "Malik ibn Anas",
    dates: "711-795",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Hadith"],
    madhhabTags: ["Maliki"],
    description:
      "Jurist best known for the Maliki school and for the authority of the Medinan tradition.",
    sortYear: 711,
    chainId: "malik",
  },
  {
    name: "Abu Yusuf",
    dates: "731-798",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh"],
    madhhabTags: ["Hanafi"],
    description:
      "Hanafi jurist best known for transmitting and developing the legal teaching of Abu Hanifa.",
    sortYear: 731,
  },
  {
    name: "Muhammad al-Shaybani",
    dates: "749-805",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Usul al-fiqh"],
    madhhabTags: ["Hanafi"],
    description:
      "Hanafi jurist best known for recording and extending early school doctrine.",
    sortYear: 749,
    searchKeywords: ["Muhammad al-Shaybani", "al-Shaybani"],
  },
  {
    name: "al-Shafi'i",
    dates: "767-820",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Usul al-fiqh"],
    madhhabTags: ["Shafi'i"],
    description:
      "Jurist best known for the Shafi'i school and for shaping the theory of legal method.",
    sortYear: 767,
    chainId: "shafii",
  },
  {
    name: "Sahnun",
    dates: "776-854",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh"],
    madhhabTags: ["Maliki"],
    description:
      "Maliki jurist best known for transmitting North African Maliki doctrine through al-Mudawwanah.",
    sortYear: 776,
  },
  {
    name: "Ahmad ibn Hanbal",
    dates: "780-855",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Hadith"],
    madhhabTags: ["Hanbali"],
    description:
      "Jurist and hadith scholar best known for the Hanbali school and for a hadith-centered legal method.",
    sortYear: 780,
    chainId: "ahmad",
  },
  {
    name: "al-Muzani",
    dates: "791-878",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Fiqh"],
    madhhabTags: ["Shafi'i"],
    description:
      "Shafi'i jurist best known for summarizing and transmitting the doctrine of al-Shafi'i.",
    sortYear: 791,
  },
  {
    name: "al-Darimi",
    dates: "797-869",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith"],
    description:
      "Hadith scholar best known for an early musnad-sunan collection and for participation in formative Sunni hadith scholarship.",
    sortYear: 797,
  },
  {
    name: "al-Bukhari",
    dates: "810-870",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith"],
    description:
      "Hadith scholar best known for compiling one of the most influential Sunni hadith collections.",
    sortYear: 810,
    chainId: "bukhari",
  },
  {
    name: "Abu Dawud",
    dates: "817-889",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith", "Fiqh"],
    description:
      "Hadith scholar best known for a major Sunan collection with strong legal relevance.",
    sortYear: 817,
  },
  {
    name: "Muslim ibn al-Hajjaj",
    dates: "821-875",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith"],
    description:
      "Hadith scholar best known for a major Sunni hadith collection arranged with careful attention to transmission.",
    sortYear: 821,
    chainId: "muslim",
  },
  {
    name: "al-Tirmidhi",
    dates: "824-892",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith", "Fiqh"],
    description:
      "Hadith scholar best known for combining transmission, legal discussion, and assessment of reports.",
    sortYear: 824,
  },
  {
    name: "Ibn Majah",
    dates: "824-887",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith"],
    description:
      "Hadith scholar best known for the Sunan collection later counted among the six major Sunni books.",
    sortYear: 824,
  },
  {
    name: "al-Nasa'i",
    dates: "829-915",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Hadith"],
    description:
      "Hadith scholar best known for a major Sunan collection and careful attention to report quality.",
    sortYear: 829,
    searchKeywords: ["al-Nasai", "al-Nasa'i"],
  },
  {
    name: "al-Tabari",
    dates: "839-923",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Tafsir", "History"],
    description:
      "Qur'an exegete and historian best known for a comprehensive commentary and universal history.",
    sortYear: 839,
    chainId: "tabari",
  },
  {
    name: "Abu Mansur al-Maturidi",
    dates: "c. 853-944",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Aqidah / Kalam"],
    description:
      "Theologian best known for a Sunni kalam tradition commonly associated with later Maturidi theology.",
    sortYear: 853,
  },
  {
    name: "Abu al-Hasan al-Ash'ari",
    dates: "874-936",
    traditionPrimary: "Sunni",
    periodPrimary: "Early",
    fieldTags: ["Aqidah / Kalam"],
    description:
      "Theologian best known for a Sunni kalam tradition commonly associated with later Ash'ari theology.",
    sortYear: 874,
    chainId: "ashari",
    searchKeywords: ["al-Ashari", "al-Ash'ari"],
  },
  {
    name: "Ibn Hibban",
    dates: "c. 884-965",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Hadith", "Biography"],
    description:
      "Hadith scholar best known for compilation, transmitter criticism, and biographical scholarship.",
    sortYear: 884,
  },
  {
    name: "al-Hakim al-Nishapuri",
    dates: "933-1014",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Hadith"],
    description:
      "Hadith scholar best known for al-Mustadrak and for later debates over hadith authentication.",
    sortYear: 933,
  },
  {
    name: "al-Baqillani",
    dates: "c. 950-1013",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Aqidah / Kalam", "Logic"],
    description:
      "Theologian best known for systematizing Ash'ari argumentation in law, theology, and apologetics.",
    sortYear: 950,
  },
  {
    name: "Ibn Abd al-Barr",
    dates: "978-1071",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Fiqh", "Hadith", "Biography"],
    madhhabTags: ["Maliki"],
    description:
      "Maliki scholar best known for legal comparison, hadith study, and biographical scholarship.",
    sortYear: 978,
  },
  {
    name: "Junayd al-Baghdadi",
    dates: "d. 910",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Tasawwuf"],
    description:
      "Early Sufi teacher best known for formative writing and teaching on sobriety, discipline, and spiritual states.",
    sortYear: 910,
  },
  {
    name: "al-Qushayri",
    dates: "986-1074",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Tasawwuf", "Aqidah / Kalam"],
    madhhabTags: ["Shafi'i"],
    description:
      "Scholar best known for organizing Sufi terminology and doctrine in a systematic Sunni framework.",
    sortYear: 986,
  },
  {
    name: "al-Bayhaqi",
    dates: "994-1066",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Hadith", "Fiqh"],
    madhhabTags: ["Shafi'i"],
    description:
      "Hadith scholar best known for major collections organized around legal and doctrinal themes.",
    sortYear: 994,
  },
  {
    name: "al-Sarakhsi",
    dates: "c. 1009-1090",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Fiqh", "Usul al-fiqh"],
    madhhabTags: ["Hanafi"],
    description:
      "Hanafi jurist best known for extensive legal commentary and mature school reasoning.",
    sortYear: 1009,
  },
  {
    name: "al-Juwayni",
    dates: "1028-1085",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Usul al-fiqh", "Aqidah / Kalam"],
    madhhabTags: ["Shafi'i"],
    description:
      "Scholar best known for works on legal theory and Ash'ari theology.",
    sortYear: 1028,
  },
  {
    name: "al-Ghazali",
    dates: "1058-1111",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Aqidah / Kalam", "Fiqh", "Usul al-fiqh", "Tasawwuf", "Philosophy"],
    madhhabTags: ["Shafi'i"],
    description:
      "Scholar best known for integrating theology, legal theory, ethics, and spiritual discipline in a Sunni framework.",
    sortYear: 1058,
  },
  {
    name: "al-Zamakhshari",
    dates: "1075-1144",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Tafsir", "Arabic language", "Grammar", "Philology"],
    description:
      "Qur'an exegete best known for linguistic and rhetorical analysis in al-Kashshaf.",
    sortYear: 1075,
  },
  {
    name: "Abd al-Qadir al-Jilani",
    dates: "1077-1166",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Tasawwuf", "Fiqh"],
    description:
      "Preacher and spiritual teacher best known for devotional instruction and the later Qadiri tradition.",
    sortYear: 1077,
  },
  {
    name: "Ibn Rushd",
    dates: "1126-1198",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Philosophy", "Fiqh"],
    description:
      "Andalusian scholar best known for philosophical commentary and legal scholarship.",
    sortYear: 1126,
    searchKeywords: ["Ibn Rushd (Averroes)", "Averroes"],
  },
  {
    name: "Fakhr al-Din al-Razi",
    dates: "1149-1209",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Tafsir", "Aqidah / Kalam", "Philosophy", "Logic"],
    description:
      "Qur'an exegete and theologian best known for a commentary that integrates kalam, logic, and philosophical discussion.",
    sortYear: 1149,
  },
  {
    name: "Ibn Qudamah",
    dates: "1147-1223",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Fiqh"],
    madhhabTags: ["Hanbali"],
    description:
      "Hanbali jurist best known for concise and extended legal manuals of enduring influence.",
    sortYear: 1147,
  },
  {
    name: "Ibn Arabi",
    dates: "1165-1240",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Tasawwuf", "Philosophy"],
    description:
      "Mystical thinker best known for writing on metaphysics, spiritual anthropology, and symbolic interpretation.",
    sortYear: 1165,
  },
  {
    name: "al-Kasani",
    dates: "d. 1191",
    traditionPrimary: "Sunni",
    periodPrimary: "Classical",
    fieldTags: ["Fiqh"],
    madhhabTags: ["Hanafi"],
    description:
      "Hanafi jurist best known for Bada'i al-Sana'i, a major synthesis of school doctrine.",
    sortYear: 1191,
  },
  {
    name: "Abu al-Hasan al-Shadhili",
    dates: "1196-1258",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Tasawwuf"],
    description:
      "Spiritual teacher best known for the later Shadhili tradition and disciplined devotional practice.",
    sortYear: 1196,
  },
  {
    name: "Jalal al-Din Rumi",
    dates: "1207-1273",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Tasawwuf", "Philosophy"],
    description:
      "Poet and spiritual teacher best known for literary and devotional expression of Sufi themes.",
    sortYear: 1207,
  },
  {
    name: "al-Qurtubi",
    dates: "1214-1273",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Tafsir", "Fiqh"],
    madhhabTags: ["Maliki"],
    description:
      "Qur'an exegete best known for legal and linguistic analysis in his commentary on the Qur'an.",
    sortYear: 1214,
  },
  {
    name: "al-Baydawi",
    dates: "d. c. 1319",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Tafsir", "Aqidah / Kalam"],
    madhhabTags: ["Shafi'i"],
    description:
      "Qur'an exegete best known for a concise and influential commentary drawing on earlier tafsir traditions.",
    sortYear: 1225,
  },
  {
    name: "al-Nawawi",
    dates: "1233-1277",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Hadith", "Fiqh"],
    madhhabTags: ["Shafi'i"],
    description:
      "Scholar best known for influential hadith selection, commentary, and pedagogical writing.",
    sortYear: 1233,
  },
  {
    name: "Ibn Taymiyyah",
    dates: "1263-1328",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Aqidah / Kalam", "Fiqh", "Usul al-fiqh"],
    madhhabTags: ["Hanbali"],
    description:
      "Hanbali scholar best known for legal, theological, and polemical works that argued for renewed attention to early sources.",
    sortYear: 1263,
  },
  {
    name: "Ibn al-Qayyim",
    dates: "1292-1350",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Aqidah / Kalam", "Tasawwuf", "Fiqh"],
    madhhabTags: ["Hanbali"],
    description:
      "Hanbali scholar best known for theological, ethical, and devotional writing shaped by the teaching of Ibn Taymiyyah.",
    sortYear: 1292,
  },
  {
    name: "Ibn Kathir",
    dates: "1300-1373",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Tafsir", "History", "Hadith"],
    madhhabTags: ["Shafi'i"],
    description:
      "Qur'an exegete and historian best known for his commentary on the Qur'an and his historical writings.",
    sortYear: 1300,
    chainId: "ibn_kathir",
  },
  {
    name: "Ibn Hajar al-Asqalani",
    dates: "1372-1449",
    traditionPrimary: "Sunni",
    periodPrimary: "Late Classical",
    fieldTags: ["Hadith"],
    madhhabTags: ["Shafi'i"],
    description:
      "Hadith scholar best known for major commentary on Sahih al-Bukhari and biographical evaluation of transmitters.",
    sortYear: 1372,
  },
  {
    name: "al-Suyuti",
    dates: "1445-1505",
    traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Tafsir", "Hadith", "History"],
    description:
      "Scholar best known for encyclopedic writing across tafsir, hadith, and historical reference literature.",
    sortYear: 1445,
  },
  {
    name: "Shah Waliullah Dehlawi",
    dates: "1703-1762",
    traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Hadith", "Fiqh", "Modern thought / reform"],
    madhhabTags: ["Hanafi"],
    description:
      "Scholar best known for hadith revival, legal reflection, and reformist synthesis in South Asia.",
    sortYear: 1703,
    searchKeywords: ["Shah Waliullah", "Dehlawi"],
  },
  {
    name: "al-Shawkani",
    dates: "1759-1834",
    traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Fiqh", "Hadith", "Usul al-fiqh"],
    description:
      "Later jurist best known for legal scholarship that moved across established school boundaries while remaining rooted in hadith and fiqh.",
    sortYear: 1759,
  },
  {
    name: "al-Alusi",
    dates: "1802-1854",
    traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Tafsir"],
    madhhabTags: ["Hanafi"],
    description:
      "Qur'an exegete best known for a wide-ranging later commentary that synthesizes earlier Sunni tafsir.",
    sortYear: 1802,
  },
  {
    name: "Muhammad Abduh",
    dates: "1849-1905",
    traditionPrimary: "Sunni",
    periodPrimary: "Modern",
    fieldTags: ["Modern thought / reform", "Tafsir", "Aqidah / Kalam"],
    description:
      "Modern reformist scholar best known for legal and theological renewal and for influence on later modernist commentary.",
    sortYear: 1849,
  },
  {
    name: "Rashid Rida",
    dates: "1865-1935",
    traditionPrimary: "Sunni",
    periodPrimary: "Modern",
    fieldTags: ["Modern thought / reform", "Tafsir", "Aqidah / Kalam"],
    description:
      "Modern reformist scholar best known for Tafsir al-Manar and for linking interpretation to social and intellectual reform.",
    sortYear: 1865,
  },
  {
    name: "Abul A'la Maududi",
    dates: "1903-1979",
    traditionPrimary: "Sunni",
    periodPrimary: "Modern",
    fieldTags: ["Modern thought / reform", "Tafsir"],
    description:
      "Modern Sunni thinker best known for writing on Islamic revival, political thought, and Qur'an commentary.",
    sortYear: 1903,
  },
  {
    name: "Muhammad Nasir al-Din al-Albani",
    dates: "1914-1999",
    traditionPrimary: "Sunni",
    periodPrimary: "Modern",
    fieldTags: ["Hadith"],
    description:
      "Modern hadith scholar best known for reevaluating hadith grading and for influential edited collections.",
    sortYear: 1914,
  },
  {
    name: "Yusuf al-Qaradawi",
    dates: "1926-2022",
    traditionPrimary: "Sunni",
    periodPrimary: "Modern",
    fieldTags: ["Fiqh", "Modern thought / reform"],
    description:
      "Modern jurist best known for writing on applied fiqh, legal ethics, and contemporary Muslim public life.",
    sortYear: 1926,
  },
  {
    name: "Muhammad al-Baqir",
    dates: "c. 676-732",
    traditionPrimary: "Shi'i",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Hadith"],
    description:
      "Early Imam best known for transmitting legal and theological learning in the formative Shi'i tradition.",
    sortYear: 676,
  },
  {
    name: "Ja'far al-Sadiq",
    dates: "c. 702-765",
    traditionPrimary: "Shi'i",
    periodPrimary: "Early",
    fieldTags: ["Fiqh", "Hadith", "Aqidah / Kalam"],
    description:
      "Early Imam best known for legal and theological teaching that became central in later Twelver Shi'i thought.",
    sortYear: 702,
    chainId: "jafar",
    searchKeywords: ["Jafar al-Sadiq", "Ja'far"],
  },
  {
    name: "al-Kulayni",
    dates: "c. 864-941",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Hadith"],
    description:
      "Scholar best known for compiling al-Kafi, a major Twelver Shi'i hadith collection.",
    sortYear: 864,
    chainId: "kulayni",
  },
  {
    name: "al-Saduq",
    dates: "c. 923-991",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Hadith", "Aqidah / Kalam"],
    description:
      "Scholar best known for hadith compilation and doctrinal writing in early Twelver Shi'i scholarship.",
    sortYear: 923,
  },
  {
    name: "al-Mufid",
    dates: "c. 948-1022",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Aqidah / Kalam", "Usul al-fiqh"],
    description:
      "Theologian and jurist best known for systematic Twelver kalam and for shaping later Shi'i legal thought.",
    sortYear: 948,
  },
  {
    name: "al-Tusi",
    dates: "995-1067",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Usul al-fiqh", "Hadith", "Fiqh"],
    description:
      "Scholar best known for Twelver legal theory, hadith, and institutional influence in Baghdad and Najaf.",
    sortYear: 995,
    chainId: "tusi",
  },
  {
    name: "al-Tabrisi",
    dates: "1073-1153",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Tafsir"],
    description:
      "Qur'an exegete best known for a major Twelver commentary that combines language, narration, and doctrinal discussion.",
    sortYear: 1073,
  },
  {
    name: "Mulla Sadra",
    dates: "c. 1571-1640",
    traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Philosophy", "Aqidah / Kalam"],
    description:
      "Philosopher best known for later Islamic metaphysics and for the school often called transcendent theosophy.",
    sortYear: 1571,
    chainId: "mulla_sadra",
  },
  {
    name: "al-Majlisi",
    dates: "1627-1699",
    traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Hadith"],
    description:
      "Scholar best known for encyclopedic compilation of transmitted reports in later Safavid-era Twelver scholarship.",
    sortYear: 1627,
  },
  {
    name: "Ruhollah Khomeini",
    dates: "1902-1989",
    traditionPrimary: "Shi'i",
    periodPrimary: "Modern",
    fieldTags: ["Fiqh", "Modern thought / reform"],
    description:
      "Modern jurist and political thinker best known for Twelver legal scholarship and modern Shi'i political theory.",
    sortYear: 1902,
  },
  {
    name: "Ali al-Sistani",
    dates: "1930-",
    traditionPrimary: "Shi'i",
    periodPrimary: "Modern",
    fieldTags: ["Fiqh"],
    description:
      "Contemporary jurist best known for Twelver legal authority and for a wide body of practical legal guidance.",
    sortYear: 1930,
    chainId: "sistani",
  },
  {
    name: "Muhammad Baqir al-Sadr",
    dates: "1935-1980",
    traditionPrimary: "Shi'i",
    periodPrimary: "Modern",
    fieldTags: ["Usul al-fiqh", "Fiqh", "Modern thought / reform"],
    description:
      "Modern Shi'i jurist and thinker best known for legal theory and for Islamic work on economics and political thought.",
    sortYear: 1935,
  },
];

