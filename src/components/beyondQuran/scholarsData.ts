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

export type MadhhabTag =
  | "Hanafi"
  | "Maliki"
  | "Shafi'i"
  | "Hanbali"
  | "Twelver"
  | "Ismaili"
  | "Zaydi";

export type ScholarEntry = {
  name: string;
  dates: string;
  traditionPrimary: TraditionPrimary;
  periodPrimary: PeriodPrimary;
  fieldTags: FieldTag[];
  madhhabTags?: MadhhabTag[];
  description: string;
  sortYear: number;
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
    madhhabTags: ["Twelver"],
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
    madhhabTags: ["Twelver", "Ismaili"],
    description:
      "Early Imam best known for legal and theological teaching that became central in later Twelver Shi'i thought.",
    sortYear: 702,
    searchKeywords: ["Jafar al-Sadiq", "Ja'far"],
  },
  {
    name: "al-Kulayni",
    dates: "c. 864-941",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Hadith"],
    madhhabTags: ["Twelver"],
    description:
      "Scholar best known for compiling al-Kafi, a major Twelver Shi'i hadith collection.",
    sortYear: 864,
  },
  {
    name: "al-Saduq",
    dates: "c. 923-991",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Hadith", "Aqidah / Kalam"],
    madhhabTags: ["Twelver"],
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
    madhhabTags: ["Twelver"],
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
    madhhabTags: ["Twelver"],
    description:
      "Scholar best known for Twelver legal theory, hadith, and institutional influence in Baghdad and Najaf.",
    sortYear: 995,
  },
  {
    name: "al-Tabrisi",
    dates: "1073-1153",
    traditionPrimary: "Shi'i",
    periodPrimary: "Classical",
    fieldTags: ["Tafsir"],
    madhhabTags: ["Twelver"],
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
    madhhabTags: ["Twelver"],
    description:
      "Philosopher best known for later Islamic metaphysics and for the school often called transcendent theosophy.",
    sortYear: 1571,
  },
  {
    name: "al-Majlisi",
    dates: "1627-1699",
    traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern",
    fieldTags: ["Hadith"],
    madhhabTags: ["Twelver"],
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
    madhhabTags: ["Twelver"],
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
    madhhabTags: ["Twelver"],
    description:
      "Contemporary jurist best known for Twelver legal authority and for a wide body of practical legal guidance.",
    sortYear: 1930,
  },
  {
    name: "Muhammad Baqir al-Sadr",
    dates: "1935-1980",
    traditionPrimary: "Shi'i",
    periodPrimary: "Modern",
    fieldTags: ["Usul al-fiqh", "Fiqh", "Modern thought / reform"],
    madhhabTags: ["Twelver"],
    description:
      "Modern Shi'i jurist and thinker best known for legal theory and for Islamic work on economics and political thought.",
    sortYear: 1935,
  },
  {
    name: "Abu Bakr al-Siddiq", dates: "c. 573-634", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Fiqh", "Hadith"], sortYear: 573,
    description: "Companion and first caliph whose judgments, leadership, and preservation of the early community shaped later legal and political reflection.",
  },
  {
    name: "Umar ibn al-Khattab", dates: "c. 584-644", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Fiqh", "Political thought"], sortYear: 584,
    description: "Companion and second caliph renowned for legal judgment, consultation, public administration, and influential Companion precedent.",
  },
  {
    name: "Uthman ibn Affan", dates: "c. 576-656", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Qur'an transmission", "Fiqh"], sortYear: 576,
    description: "Companion and third caliph especially associated with the authoritative written recension and dissemination of the Qur'an.",
  },
  {
    name: "Abu Hurayrah", dates: "c. 603-681", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Hadith"], sortYear: 603,
    description: "Prolific Companion transmitter whose reports became central to later hadith, law, ethics, and devotional teaching.",
  },
  {
    name: "Abdullah ibn Umar ibn al-Khattab", dates: "c. 610-693", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Hadith", "Fiqh"], sortYear: 610,
    description: "Companion renowned for close attention to Prophetic practice and a major source of Medinan legal and hadith transmission.",
    searchKeywords: ["Abdullah ibn Umar", "Ibn Umar"],
  },
  {
    name: "Anas ibn Malik", dates: "c. 612-709", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Hadith"], sortYear: 612,
    description: "Companion and long-lived Basran transmitter who preserved extensive reports concerning the Prophet's conduct and worship.",
  },
  {
    name: "Umm Salamah", dates: "c. 596-680", traditionPrimary: "Early / Shared",
    periodPrimary: "Companions", fieldTags: ["Hadith", "Fiqh"], sortYear: 596,
    description: "Wife of the Prophet and major transmitter whose reports preserve household, ritual, legal, and historical knowledge.",
  },
  {
    name: "Urwah ibn al-Zubayr", dates: "c. 644-713", traditionPrimary: "Early / Shared",
    periodPrimary: "Successors", fieldTags: ["Hadith", "History", "Fiqh"], sortYear: 644,
    description: "Medinan Successor known for transmission from A'ishah, early historical reports, and membership in the city's juristic circles.",
  },
  {
    name: "al-Qasim ibn Muhammad", dates: "c. 660-728", traditionPrimary: "Early / Shared",
    periodPrimary: "Successors", fieldTags: ["Fiqh", "Hadith"], sortYear: 660,
    description: "Medinan Successor and jurist whose learning from A'ishah contributed to later Medinan law and hadith.",
  },
  {
    name: "Salim ibn Abdullah", dates: "c. 650-724", traditionPrimary: "Early / Shared",
    periodPrimary: "Successors", fieldTags: ["Fiqh", "Hadith"], sortYear: 650,
    description: "Medinan jurist and transmitter of the legal and devotional legacy of his father, Abdullah ibn Umar.",
  },
  {
    name: "Muhammad ibn Sirin", dates: "653-729", traditionPrimary: "Early / Shared",
    periodPrimary: "Successors", fieldTags: ["Hadith", "Fiqh"], sortYear: 653,
    description: "Basran Successor noted for hadith criticism, legal learning, piety, and later literature concerning dreams.",
  },
  {
    name: "Amir al-Sha'bi", dates: "c. 640-721", traditionPrimary: "Early / Shared",
    periodPrimary: "Successors", fieldTags: ["Hadith", "Fiqh", "History"], sortYear: 640,
    description: "Kufan Successor known for broad transmission, legal judgment, historical memory, and participation in early Iraqi scholarship.",
  },
  {
    name: "Ibn Shihab al-Zuhri", dates: "c. 671-742", traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars", fieldTags: ["Hadith", "History"], sortYear: 671,
    description: "Pivotal early collector and transmitter whose work joined Medinan learning, historical reports, and the developing written hadith tradition.",
  },
  {
    name: "Sufyan al-Thawri", dates: "716-778", traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars", fieldTags: ["Hadith", "Fiqh"], sortYear: 716,
    description: "Kufan hadith master and jurist whose once-distinct legal school and ascetic teaching influenced later Sunni scholarship.",
  },
  {
    name: "al-Awza'i", dates: "c. 707-774", traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars", fieldTags: ["Fiqh", "Hadith"], sortYear: 707,
    description: "Leading Syrian jurist whose legal school was influential in Syria and al-Andalus before its later institutional decline.",
  },
  {
    name: "al-Layth ibn Sa'd", dates: "713-791", traditionPrimary: "Early / Shared",
    periodPrimary: "Early Formative Scholars", fieldTags: ["Fiqh", "Hadith"], sortYear: 713,
    description: "Major Egyptian jurist and hadith scholar whose independent doctrine was admired but did not survive as an organized madhhab.",
  },
  {
    name: "Abdullah ibn al-Mubarak", dates: "726-797", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Hadith", "Fiqh", "Tasawwuf"], sortYear: 726,
    description: "Transregional hadith scholar, jurist, ascetic author, and teacher whose works joined transmitted learning with ethical discipline.",
  },
  {
    name: "Sufyan ibn Uyaynah", dates: "725-814", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Hadith", "Tafsir"], sortYear: 725,
    description: "Meccan hadith authority and exegete who taught major compilers and jurists across the emerging Sunni scholarly network.",
  },
  {
    name: "Abd al-Razzaq al-San'ani", dates: "744-827", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Hadith", "Fiqh"], sortYear: 744,
    description: "Yemeni hadith scholar whose Musannaf preserves a major early corpus of Prophetic, Companion, and Successor reports.",
  },
  {
    name: "Waki ibn al-Jarrah", dates: "746-812", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Hadith", "Fiqh"], sortYear: 746,
    description: "Kufan hadith master and jurist who taught al-Shafi'i, Ahmad ibn Hanbal, and other formative authorities.",
  },
  {
    name: "Ishaq ibn Rahawayh", dates: "778-853", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Hadith", "Fiqh"], sortYear: 778,
    description: "Influential traditionist-jurist of Khurasan and teacher of major hadith compilers, with an independent legal following.",
  },
  {
    name: "Dawud al-Zahiri", dates: "c. 815-883", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Fiqh", "Usul al-fiqh"], sortYear: 815,
    description: "Founder of the Zahiri approach, known for restricting analogy and emphasizing the apparent sense of revealed texts.",
  },
  {
    name: "Abu Ja'far al-Tahawi", dates: "853-933", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Fiqh", "Hadith", "Aqidah / Kalam"], madhhabTags: ["Hanafi"], sortYear: 853,
    description: "Egyptian Hanafi jurist and hadith scholar known for legal comparison, hadith interpretation, and a widely studied creed.",
  },
  {
    name: "Abu Bakr al-Khallal", dates: "c. 848-923", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Fiqh", "Hadith"], madhhabTags: ["Hanbali"], sortYear: 848,
    description: "Systematizer of early Hanbali doctrine who gathered and compared dispersed transmissions from Ahmad ibn Hanbal's students.",
  },
  {
    name: "Ibn Khuzaymah", dates: "837-923", traditionPrimary: "Sunni",
    periodPrimary: "Early", fieldTags: ["Hadith", "Aqidah / Kalam"], madhhabTags: ["Shafi'i"], sortYear: 837,
    description: "Khurasani hadith authority and Shafi'i jurist known for his Sahih and influential traditionalist theology.",
  },
  {
    name: "al-Quduri", dates: "973-1037", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Fiqh"], madhhabTags: ["Hanafi"], sortYear: 973,
    description: "Baghdadi Hanafi jurist whose Mukhtasar became one of the school's most enduring teaching manuals.",
  },
  {
    name: "al-Mawardi", dates: "972-1058", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Fiqh", "Political thought", "Tafsir"], madhhabTags: ["Shafi'i"], sortYear: 972,
    description: "Shafi'i jurist and political theorist known for works on governance, legal doctrine, ethics, and Qur'anic interpretation.",
  },
  {
    name: "Ibn Hazm", dates: "994-1064", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Fiqh", "Usul al-fiqh", "Aqidah / Kalam", "History"], sortYear: 994,
    description: "Andalusian Zahiri jurist and polymath known for legal argument, comparative religion, theology, genealogy, and literature.",
  },
  {
    name: "Abu Ishaq al-Shirazi", dates: "1003-1083", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Fiqh", "Usul al-fiqh"], madhhabTags: ["Shafi'i"], sortYear: 1003,
    description: "Shafi'i jurist and legal theorist whose concise manuals became central to the classical school curriculum.",
  },
  {
    name: "Abu al-Walid al-Baji", dates: "1013-1081", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Fiqh", "Usul al-fiqh", "Hadith"], madhhabTags: ["Maliki"], sortYear: 1013,
    description: "Andalusian Maliki jurist, hadith scholar, and legal theorist known for commentary on the Muwatta and public disputation.",
  },
  {
    name: "Abu al-Yusr al-Bazdawi", dates: "c. 1030-1099", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Usul al-fiqh", "Aqidah / Kalam"], madhhabTags: ["Hanafi"], sortYear: 1030,
    description: "Hanafi-Maturidi authority known for influential works in legal theory and systematic theology.",
  },
  {
    name: "Ibn al-Jawzi", dates: "c. 1116-1201", traditionPrimary: "Sunni",
    periodPrimary: "Classical", fieldTags: ["Hadith", "History", "Biography", "Tafsir"], madhhabTags: ["Hanbali"], sortYear: 1116,
    description: "Baghdadi Hanbali preacher and prolific author in history, biography, hadith, exegesis, ethics, and polemic.",
  },
  {
    name: "Izz al-Din ibn Abd al-Salam", dates: "1181-1262", traditionPrimary: "Sunni",
    periodPrimary: "Late Classical", fieldTags: ["Fiqh", "Usul al-fiqh"], madhhabTags: ["Shafi'i"], sortYear: 1181,
    description: "Shafi'i jurist and legal theorist celebrated for integrating public welfare, ethical purpose, and juristic classification.",
  },
  {
    name: "al-Dhahabi", dates: "1274-1348", traditionPrimary: "Sunni",
    periodPrimary: "Late Classical", fieldTags: ["Hadith", "History", "Biography"], madhhabTags: ["Shafi'i"], sortYear: 1274,
    description: "Hadith critic and historian whose biographical dictionaries are indispensable sources for Islamic intellectual history.",
  },
  {
    name: "Taj al-Din al-Subki", dates: "1327-1370", traditionPrimary: "Sunni",
    periodPrimary: "Late Classical", fieldTags: ["Fiqh", "Usul al-fiqh", "Biography", "Aqidah / Kalam"], madhhabTags: ["Shafi'i"], sortYear: 1327,
    description: "Shafi'i jurist, theologian, and historian known for legal theory and a major biographical history of the school.",
  },
  {
    name: "Ibn Khaldun", dates: "1332-1406", traditionPrimary: "Sunni",
    periodPrimary: "Late Classical", fieldTags: ["History", "Political thought"], madhhabTags: ["Maliki"], sortYear: 1332,
    description: "Historian, Maliki jurist, and theorist of society best known for the Muqaddimah and its analysis of civilization and power.",
  },
  {
    name: "Mulla Ali al-Qari", dates: "d. 1606", traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern", fieldTags: ["Hadith", "Fiqh", "Aqidah / Kalam"], madhhabTags: ["Hanafi"], sortYear: 1520,
    description: "Meccan Hanafi scholar known for widely circulated works on hadith commentary, law, devotional practice, and creed.",
  },
  {
    name: "Ahmad Sirhindi", dates: "1564-1624", traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern", fieldTags: ["Tasawwuf", "Aqidah / Kalam", "Modern thought / reform"], madhhabTags: ["Hanafi"], sortYear: 1564,
    description: "Naqshbandi thinker and theologian influential in South Asian discussions of Sufism, law, and religious renewal.",
  },
  {
    name: "Abd al-Ghani al-Nabulsi", dates: "1641-1731", traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern", fieldTags: ["Tasawwuf", "Fiqh", "Arabic language"], madhhabTags: ["Hanafi"], sortYear: 1641,
    description: "Damascene Hanafi jurist, Sufi author, poet, and commentator with a large corpus spanning law, metaphysics, and literature.",
  },
  {
    name: "Muhammad ibn Abd al-Wahhab", dates: "1703-1792", traditionPrimary: "Sunni",
    periodPrimary: "Pre-Modern", fieldTags: ["Aqidah / Kalam", "Fiqh", "Modern thought / reform"], madhhabTags: ["Hanbali"], sortYear: 1703,
    description: "Najdi theologian and reformer whose alliance with the Saudi polity shaped a highly influential revivalist movement.",
  },
  {
    name: "Muhammad al-Shaykh al-Tahir ibn Ashur", dates: "1879-1973", traditionPrimary: "Sunni",
    periodPrimary: "Modern", fieldTags: ["Tafsir", "Usul al-fiqh", "Arabic language"], madhhabTags: ["Maliki"], sortYear: 1879,
    description: "Tunisian Maliki jurist and exegete known for al-Tahrir wa-l-Tanwir and a major modern treatment of the objectives of law.",
  },
  {
    name: "Said Nursi", dates: "1877-1960", traditionPrimary: "Sunni",
    periodPrimary: "Modern", fieldTags: ["Aqidah / Kalam", "Tafsir", "Modern thought / reform"], sortYear: 1877,
    description: "Kurdish-Turkish theologian and Qur'anic commentator whose Risale-i Nur addressed faith, modernity, and spiritual renewal.",
  },
  {
    name: "Muhammad Zahid al-Kawthari", dates: "1879-1952", traditionPrimary: "Sunni",
    periodPrimary: "Modern", fieldTags: ["Hadith", "Fiqh", "Aqidah / Kalam"], madhhabTags: ["Hanafi"], sortYear: 1879,
    description: "Late Ottoman Hanafi scholar, editor, and polemicist influential in modern hadith, theology, and school-based legal debates.",
  },
  {
    name: "Mustafa al-Zarqa", dates: "1904-1999", traditionPrimary: "Sunni",
    periodPrimary: "Modern", fieldTags: ["Fiqh", "Usul al-fiqh", "Modern thought / reform"], madhhabTags: ["Hanafi"], sortYear: 1904,
    description: "Syrian jurist known for modern systematic treatments of Islamic legal theory, contracts, and contemporary legislation.",
  },
  {
    name: "Wahbah al-Zuhayli", dates: "1932-2015", traditionPrimary: "Sunni",
    periodPrimary: "Modern", fieldTags: ["Fiqh", "Tafsir", "Usul al-fiqh"], madhhabTags: ["Shafi'i"], sortYear: 1932,
    description: "Syrian jurist and exegete known for expansive comparative works in law, legal theory, and Qur'anic interpretation.",
  },
  {
    name: "Zayn al-Abidin", dates: "658-713", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Hadith", "Aqidah / Kalam"], madhhabTags: ["Twelver"], sortYear: 658,
    description: "Ali ibn al-Husayn, the fourth Twelver Imam, remembered especially for devotional teaching and the supplications of al-Sahifa al-Sajjadiyya.",
  },
  {
    name: "Zayd ibn Ali", dates: "c. 695-740", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Fiqh", "Hadith", "Aqidah / Kalam"], madhhabTags: ["Zaydi"], sortYear: 695,
    description: "Descendant of Ali and formative authority associated with the emergence of Zaydi theology, law, and activist conceptions of the imamate.",
  },
  {
    name: "Hisham ibn al-Hakam", dates: "d. c. 795", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Aqidah / Kalam"], madhhabTags: ["Twelver"], sortYear: 750,
    description: "Early Imami theologian and associate of Ja'far al-Sadiq known for arguments concerning the imamate and divine attributes.",
  },
  {
    name: "Musa al-Kazim", dates: "745-799", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Hadith", "Fiqh"], madhhabTags: ["Twelver"], sortYear: 745,
    description: "The seventh Twelver Imam and an important source of transmitted legal, ethical, and devotional teaching.",
  },
  {
    name: "Ali al-Rida", dates: "765-818", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Hadith", "Aqidah / Kalam"], madhhabTags: ["Twelver"], sortYear: 765,
    description: "The eighth Twelver Imam, central to later hadith and devotional traditions and to the history of the Abbasid succession crisis.",
  },
  {
    name: "al-Qasim al-Rassi", dates: "785-860", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Aqidah / Kalam", "Fiqh"], madhhabTags: ["Zaydi"], sortYear: 785,
    description: "Foundational Zaydi imam and theologian whose writings helped define early Zaydi doctrine and legal reasoning.",
  },
  {
    name: "Fadl ibn Shadhan", dates: "d. 874", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Hadith", "Fiqh", "Aqidah / Kalam"], madhhabTags: ["Twelver"], sortYear: 815,
    description: "Early Imami scholar of Nishapur known for hadith, law, and theological writing during the period of the later Imams.",
  },
  {
    name: "al-Hadi ila'l-Haqq Yahya", dates: "859-911", traditionPrimary: "Shi'i",
    periodPrimary: "Early", fieldTags: ["Fiqh", "Aqidah / Kalam", "Political thought"], madhhabTags: ["Zaydi"], sortYear: 859,
    description: "Zaydi imam and jurist who established an enduring Zaydi polity and legal tradition in Yemen.",
  },
  {
    name: "al-Hasan ibn Musa al-Nawbakhti", dates: "d. c. 922", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Aqidah / Kalam", "History"], madhhabTags: ["Twelver"], sortYear: 860,
    description: "Early Twelver theologian and heresiographer known for documenting sectarian formations and defending Imami doctrine.",
  },
  {
    name: "Abu Ya'qub al-Sijistani", dates: "d. after 971", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Philosophy", "Aqidah / Kalam"], madhhabTags: ["Ismaili"], sortYear: 900,
    description: "Major Ismaili philosopher and missionary who developed a sophisticated Neoplatonic cosmology and theory of revelation.",
  },
  {
    name: "al-Qadi al-Nu'man", dates: "d. 974", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Fiqh", "Hadith", "History"], madhhabTags: ["Ismaili"], sortYear: 900,
    description: "Foundational Fatimid Ismaili jurist and author of Da'a'im al-Islam, the central classical compendium of Ismaili law.",
  },
  {
    name: "al-Sharif al-Murtada", dates: "965-1044", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Aqidah / Kalam", "Usul al-fiqh", "Arabic language"], madhhabTags: ["Twelver"], sortYear: 965,
    description: "Baghdadi Twelver theologian and legal theorist whose rationalist works decisively shaped classical Imami doctrine.",
  },
  {
    name: "al-Sharif al-Radi", dates: "970-1015", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Arabic language", "Philology", "Hadith"], madhhabTags: ["Twelver"], sortYear: 970,
    description: "Poet and scholar best known as the compiler of Nahj al-Balagha and for distinguished work in Arabic literature.",
  },
  {
    name: "Hamid al-Din al-Kirmani", dates: "d. after 1020", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Philosophy", "Aqidah / Kalam"], madhhabTags: ["Ismaili"], sortYear: 970,
    description: "Fatimid Ismaili theologian and philosopher who systematized cosmology, metaphysics, and the intellectual defense of the imamate.",
  },
  {
    name: "Abu Talib al-Haruni", dates: "951-1033", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Fiqh", "Aqidah / Kalam"], madhhabTags: ["Zaydi"], sortYear: 951,
    description: "Caspian Zaydi imam and scholar important for the transmission and systematization of Zaydi law and theology.",
  },
  {
    name: "al-Mu'ayyad fi'l-Din al-Shirazi", dates: "c. 1000-1078", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Aqidah / Kalam", "Philosophy", "Arabic language"], madhhabTags: ["Ismaili"], sortYear: 1000,
    description: "Senior Fatimid Ismaili missionary, theologian, and poet whose lectures became a major source for Ismaili thought.",
  },
  {
    name: "Nasir Khusraw", dates: "1004-c. 1088", traditionPrimary: "Shi'i",
    periodPrimary: "Classical", fieldTags: ["Philosophy", "Aqidah / Kalam", "History"], madhhabTags: ["Ismaili"], sortYear: 1004,
    description: "Persian Ismaili philosopher, poet, traveler, and missionary known for philosophical works and the celebrated Safarnama.",
  },
  {
    name: "Ibn Idris al-Hilli", dates: "c. 1151-1202", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Fiqh", "Usul al-fiqh"], madhhabTags: ["Twelver"], sortYear: 1151,
    description: "Twelver jurist whose critical legal method helped renew independent reasoning after the towering authority of al-Tusi.",
  },
  {
    name: "Ibn Tawus", dates: "1193-1266", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Hadith", "Tasawwuf", "History"], madhhabTags: ["Twelver"], sortYear: 1193,
    description: "Twelver devotional scholar and bibliophile whose works preserve prayers, historical reports, and important earlier sources.",
  },
  {
    name: "Nasir al-Din al-Tusi", dates: "1201-1274", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Philosophy", "Logic", "Aqidah / Kalam"], madhhabTags: ["Twelver", "Ismaili"], sortYear: 1201,
    description: "Polymath whose career crossed Ismaili and Twelver settings and whose works transformed philosophy, theology, logic, and astronomy.",
  },
  {
    name: "al-Muhaqqiq al-Hilli", dates: "1205-1277", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Fiqh", "Usul al-fiqh"], madhhabTags: ["Twelver"], sortYear: 1205,
    description: "Major Twelver jurist whose legal classifications and Sharayi' al-Islam became foundational to later seminary study.",
  },
  {
    name: "al-Allama al-Hilli", dates: "1250-1325", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Fiqh", "Usul al-fiqh", "Aqidah / Kalam", "Logic"], madhhabTags: ["Twelver"], sortYear: 1250,
    description: "Prolific Twelver jurist and theologian whose systematic works shaped law, legal theory, philosophy, and doctrine.",
  },
  {
    name: "Yahya ibn Hamza", dates: "1270-1346", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Aqidah / Kalam", "Fiqh", "Arabic language"], madhhabTags: ["Zaydi"], sortYear: 1270,
    description: "Yemeni Zaydi imam and polymath known for extensive works in theology, law, rhetoric, and Arabic disciplines.",
  },
  {
    name: "al-Shahid al-Awwal", dates: "1334-1385", traditionPrimary: "Shi'i",
    periodPrimary: "Late Classical", fieldTags: ["Fiqh", "Usul al-fiqh"], madhhabTags: ["Twelver"], sortYear: 1334,
    description: "Twelver jurist whose concise al-Lum'a al-Dimashqiyya became an enduring legal textbook and commentary tradition.",
  },
  {
    name: "al-Muhaqqiq al-Karaki", dates: "c. 1464-1534", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Fiqh", "Usul al-fiqh", "Political thought"], madhhabTags: ["Twelver"], sortYear: 1464,
    description: "Influential jurist in early Safavid Iran who expanded the public and political authority of Twelver legal scholarship.",
  },
  {
    name: "al-Shahid al-Thani", dates: "1506-1558", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Fiqh", "Usul al-fiqh", "Hadith"], madhhabTags: ["Twelver"], sortYear: 1506,
    description: "Twelver jurist and educator whose commentaries remain central to advanced legal study.",
  },
  {
    name: "Muhammad Baqir al-Astarabadi", dates: "d. 1626", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Hadith", "Usul al-fiqh"], madhhabTags: ["Twelver"], sortYear: 1550,
    description: "Leading architect of the Akhbari revival, known for criticizing independent legal theory in favor of transmitted reports.",
  },
  {
    name: "Fayd Kashani", dates: "1598-1680", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Hadith", "Philosophy", "Tafsir", "Tasawwuf"], madhhabTags: ["Twelver"], sortYear: 1598,
    description: "Safavid polymath who integrated Twelver hadith, philosophy, ethics, spirituality, and Qur'anic commentary.",
  },
  {
    name: "al-Hurr al-Amili", dates: "1624-1693", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Hadith", "Fiqh"], madhhabTags: ["Twelver"], sortYear: 1624,
    description: "Hadith scholar best known for Wasa'il al-Shi'a, a foundational legal compilation in later Twelver jurisprudence.",
  },
  {
    name: "Yusuf al-Bahrani", dates: "1695-1772", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Fiqh", "Hadith"], madhhabTags: ["Twelver"], sortYear: 1695,
    description: "Bahraini Twelver jurist and leading later Akhbari whose encyclopedic legal work also records internal scholarly disagreements.",
  },
  {
    name: "Wahid al-Behbahani", dates: "c. 1706-1791", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Usul al-fiqh", "Fiqh"], madhhabTags: ["Twelver"], sortYear: 1706,
    description: "Jurist whose defense of Usuli legal theory proved decisive in its later ascendancy over Akhbari methodology.",
  },
  {
    name: "Murtada al-Ansari", dates: "1781-1864", traditionPrimary: "Shi'i",
    periodPrimary: "Pre-Modern", fieldTags: ["Fiqh", "Usul al-fiqh"], madhhabTags: ["Twelver"], sortYear: 1781,
    description: "Foundational modern Twelver legal theorist whose works remain central texts in advanced seminary curricula.",
  },
  {
    name: "Mirza Hasan al-Shirazi", dates: "1815-1895", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Fiqh", "Political thought"], madhhabTags: ["Twelver"], sortYear: 1815,
    description: "Leading marja associated with the Tobacco Protest and the growing transnational authority of the modern Twelver seminary.",
  },
  {
    name: "Akhund al-Khurasani", dates: "1839-1911", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Usul al-fiqh", "Fiqh", "Political thought"], madhhabTags: ["Twelver"], sortYear: 1839,
    description: "Author of Kifayat al-usul and major Najaf authority influential in both legal theory and Iran's Constitutional Revolution.",
  },
  {
    name: "Muhammad Husayn al-Na'ini", dates: "1860-1936", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Usul al-fiqh", "Political thought", "Fiqh"], madhhabTags: ["Twelver"], sortYear: 1860,
    description: "Najaf jurist known for advanced legal theory and an influential constitutional argument against arbitrary rule.",
  },
  {
    name: "Abd al-Husayn Sharaf al-Din", dates: "1872-1957", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Aqidah / Kalam", "Hadith", "Modern thought / reform"], madhhabTags: ["Twelver"], sortYear: 1872,
    description: "Lebanese scholar known for Sunni-Shia dialogue, hadith argumentation, communal leadership, and anti-colonial activity.",
  },
  {
    name: "Abu al-Qasim al-Khoei", dates: "1899-1992", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Fiqh", "Usul al-fiqh", "Hadith"], madhhabTags: ["Twelver"], sortYear: 1899,
    description: "Highly influential Najaf marja known for legal theory, biographical evaluation of transmitters, and a global network of students.",
  },
  {
    name: "Muhammad Husayn Tabataba'i", dates: "1903-1981", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Tafsir", "Philosophy", "Aqidah / Kalam"], madhhabTags: ["Twelver"], sortYear: 1903,
    description: "Philosopher and exegete best known for Tafsir al-Mizan and for reviving philosophical study in the Qom seminary.",
  },
  {
    name: "Murtada Mutahhari", dates: "1919-1979", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Philosophy", "Aqidah / Kalam", "Modern thought / reform"], madhhabTags: ["Twelver"], sortYear: 1919,
    description: "Iranian scholar and public intellectual whose works interpreted theology, philosophy, ethics, and society for modern audiences.",
  },
  {
    name: "Muhammad Husayn Fadlallah", dates: "1935-2010", traditionPrimary: "Shi'i",
    periodPrimary: "Modern", fieldTags: ["Fiqh", "Tafsir", "Modern thought / reform"], madhhabTags: ["Twelver"], sortYear: 1935,
    description: "Lebanese jurist and exegete known for extensive Qur'anic commentary, legal opinions, and modern social thought.",
  },
];

