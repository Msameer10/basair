export type ChainTone = "prophet" | "transmission" | "final";

export type ChainStep = {
  label: string;
  tone: ChainTone;
  branches?: string[];
};

export type ChainGroup = {
  id: string;
  title: string;
  note: string;
  steps: ChainStep[];
};

const PROPHET = "Prophet Muhammad \uFDFA";

export const chainMap: Record<string, ChainGroup> = {
  ibn_abbas: {
    id: "ibn_abbas",
    title: "Exegetical line associated with Ibn Abbas",
    note:
      "This is a concise reference line commonly presented through early Qur'an interpretation rather than a complete isnad reconstruction.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Abbas", tone: "transmission" },
      { label: "Mujahid ibn Jabr", tone: "transmission" },
      {
        label: "al-Tabari",
        tone: "transmission",
        branches: ["Later branch: Ibn Kathir", "Later branch: al-Alusi"],
      },
      { label: "Ibn Abbas as an early exegetical authority", tone: "final" },
    ],
  },
  mujahid: {
    id: "mujahid",
    title: "A concise tafsir transmission line",
    note: "This line places Mujahid within a widely cited early exegetical chain.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Abbas", tone: "transmission" },
      {
        label: "Mujahid ibn Jabr",
        tone: "final",
        branches: ["Later branch: al-Tabari", "Later branch: Ibn Kathir"],
      },
    ],
  },
  ibrahim_nakhai: {
    id: "ibrahim_nakhai",
    title: "A Kufan legal line to Ibrahim al-Nakha'i",
    note:
      "This compressed line highlights the Iraqi juristic stream often cited in discussions of early fiqh.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Mas'ud", tone: "transmission" },
      { label: "Alqamah ibn Qays", tone: "transmission" },
      {
        label: "Ibrahim al-Nakha'i",
        tone: "final",
        branches: ["Later branch: Hammad ibn Abi Sulayman", "Later branch: Abu Hanifa"],
      },
    ],
  },
  nafi: {
    id: "nafi",
    title: "A Medinan transmission line to Nafi'",
    note:
      "This concise line places Nafi' within a widely cited Medinan stream of hadith and legal transmission.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Umar", tone: "transmission" },
      {
        label: "Nafi'",
        tone: "final",
        branches: ["Later branch: Malik ibn Anas", "Later branch: al-Shafi'i"],
      },
    ],
  },
  hammad: {
    id: "hammad",
    title: "A Kufan legal line to Hammad ibn Abi Sulayman",
    note:
      "This line summarizes the juristic continuity often used to situate Hammad before Abu Hanifa in the Kufan tradition.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Mas'ud", tone: "transmission" },
      { label: "Alqamah ibn Qays", tone: "transmission" },
      { label: "Ibrahim al-Nakha'i", tone: "transmission" },
      {
        label: "Hammad ibn Abi Sulayman",
        tone: "final",
        branches: ["Later branch: Abu Hanifa", "Later branch: Abu Yusuf"],
      },
    ],
  },
  rabiah: {
    id: "rabiah",
    title: "A Medinan legal line to Rabi'ah al-Ra'y",
    note:
      "This line is a compact reference map for the Medinan juristic current often associated with Rabi'ah and later Malik.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Umar", tone: "transmission" },
      { label: "Nafi'", tone: "transmission" },
      {
        label: "Rabi'ah al-Ra'y",
        tone: "final",
        branches: ["Later branch: Malik ibn Anas", "Later branch: al-Shafi'i"],
      },
    ],
  },
  abu_hanifa: {
    id: "abu_hanifa",
    title: "Kufan legal transmission to Abu Hanifa",
    note:
      "This is a widely cited summary of the line through which early Iraqi legal learning reached Abu Hanifa.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Mas'ud", tone: "transmission" },
      { label: "Alqamah ibn Qays", tone: "transmission" },
      { label: "Ibrahim al-Nakha'i", tone: "transmission" },
      {
        label: "Hammad ibn Abi Sulayman",
        tone: "transmission",
        branches: ["Later branch: Abu Yusuf", "Later branch: Muhammad al-Shaybani"],
      },
      { label: "Abu Hanifa", tone: "final" },
    ],
  },
  malik: {
    id: "malik",
    title: "Medinan transmission commonly linked to Malik",
    note:
      "This line compresses major Medinan transmitters rather than listing every intermediary teacher.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Umar", tone: "transmission" },
      { label: "Nafi'", tone: "transmission" },
      { label: "Rabi'ah al-Ra'y", tone: "transmission" },
      {
        label: "Malik ibn Anas",
        tone: "final",
        branches: ["Later branch: al-Shafi'i", "Later branch: Ibn Abd al-Barr"],
      },
    ],
  },
  shafii: {
    id: "shafii",
    title: "A teaching line leading to al-Shafi'i",
    note: "This line foregrounds Malik while keeping the chain schematic and readable.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Umar", tone: "transmission" },
      { label: "Nafi'", tone: "transmission" },
      { label: "Malik ibn Anas", tone: "transmission" },
      {
        label: "al-Shafi'i",
        tone: "final",
        branches: ["Later branch: al-Muzani", "Later branch: Ahmad ibn Hanbal"],
      },
    ],
  },
  ahmad: {
    id: "ahmad",
    title: "A compact line leading to Ahmad ibn Hanbal",
    note:
      "This line emphasizes Ahmad ibn Hanbal's best-known scholarly inheritance through al-Shafi'i.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Umar", tone: "transmission" },
      { label: "Nafi'", tone: "transmission" },
      { label: "Malik ibn Anas", tone: "transmission" },
      { label: "al-Shafi'i", tone: "transmission" },
      {
        label: "Ahmad ibn Hanbal",
        tone: "final",
        branches: ["Later branch: Ibn Qudamah", "Later branch: Ibn Taymiyyah"],
      },
    ],
  },
  bukhari: {
    id: "bukhari",
    title: "A compact hadith transmission line",
    note:
      "This chain is schematic and meant to show continuity from early transmitters into later hadith compilation.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "A'ishah bint Abi Bakr and Abdullah ibn Umar", tone: "transmission" },
      { label: "al-Zuhri", tone: "transmission" },
      {
        label: "Sufyan ibn Uyaynah",
        tone: "transmission",
        branches: ["Later branch: al-Bukhari", "Later branch: Muslim ibn al-Hajjaj"],
      },
      { label: "al-Bukhari", tone: "final" },
    ],
  },
  muslim: {
    id: "muslim",
    title: "A compact hadith transmission line to Muslim",
    note: "This is a concise map that places Muslim within a broader hadith teaching network.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "A'ishah bint Abi Bakr and Abdullah ibn Umar", tone: "transmission" },
      { label: "al-Zuhri", tone: "transmission" },
      { label: "Sufyan ibn Uyaynah", tone: "transmission" },
      { label: "Muslim ibn al-Hajjaj", tone: "final" },
    ],
  },
  tabari: {
    id: "tabari",
    title: "A concise tafsir line to al-Tabari",
    note: "This chain highlights how al-Tabari stands within a transmitted exegetical tradition.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Abbas", tone: "transmission" },
      { label: "Mujahid ibn Jabr", tone: "transmission" },
      {
        label: "al-Tabari",
        tone: "final",
        branches: ["Later branch: al-Qurtubi", "Later branch: Ibn Kathir"],
      },
    ],
  },
  ibn_kathir: {
    id: "ibn_kathir",
    title: "A concise tafsir line to Ibn Kathir",
    note: "This line shows Ibn Kathir working within earlier transmitted commentary.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Abdullah ibn Abbas", tone: "transmission" },
      { label: "Mujahid ibn Jabr", tone: "transmission" },
      { label: "al-Tabari", tone: "transmission" },
      { label: "Ibn Kathir", tone: "final" },
    ],
  },
  ashari: {
    id: "ashari",
    title: "A concise Sunni kalam line",
    note:
      "This chain is schematic and intended to show one commonly cited path of theological transmission.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Early Companion and Successor debates", tone: "transmission" },
      { label: "al-Baqillani", tone: "transmission" },
      { label: "al-Juwayni", tone: "transmission" },
      { label: "Abu al-Hasan al-Ash'ari as a central theological reference", tone: "final" },
    ],
  },
  jafar: {
    id: "jafar",
    title: "A compressed Shi'i teaching line to Ja'far al-Sadiq",
    note: "This chain is schematic and intended as a reference line rather than a complete isnad.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Ali ibn Abi Talib", tone: "transmission" },
      { label: "Muhammad al-Baqir", tone: "transmission" },
      {
        label: "Ja'far al-Sadiq",
        tone: "final",
        branches: ["Later branch: al-Kulayni", "Later branch: al-Mufid"],
      },
    ],
  },
  kulayni: {
    id: "kulayni",
    title: "A compact Shi'i hadith line to al-Kulayni",
    note:
      "This line foregrounds transmission through early Imams into later hadith compilation.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Ali ibn Abi Talib", tone: "transmission" },
      { label: "Ja'far al-Sadiq", tone: "transmission" },
      {
        label: "al-Kulayni",
        tone: "final",
        branches: ["Later branch: al-Saduq", "Later branch: al-Majlisi"],
      },
    ],
  },
  tusi: {
    id: "tusi",
    title: "A compact Twelver legal-theological line to al-Tusi",
    note:
      "This chain highlights one common way later Twelver legal and theological continuity is summarized.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Ali ibn Abi Talib", tone: "transmission" },
      { label: "Muhammad al-Baqir", tone: "transmission" },
      { label: "Ja'far al-Sadiq", tone: "transmission" },
      { label: "al-Mufid", tone: "transmission" },
      {
        label: "al-Tusi",
        tone: "final",
        branches: ["Later branch: Muhammad Baqir al-Sadr", "Later branch: Ali al-Sistani"],
      },
    ],
  },
  sistani: {
    id: "sistani",
    title: "A modern Twelver legal line to Ali al-Sistani",
    note:
      "This line is a high-level continuity map from early authority into later juristic leadership.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Ali ibn Abi Talib", tone: "transmission" },
      { label: "Muhammad al-Baqir", tone: "transmission" },
      { label: "Ja'far al-Sadiq", tone: "transmission" },
      { label: "al-Tusi", tone: "transmission" },
      { label: "Ali al-Sistani", tone: "final" },
    ],
  },
  mulla_sadra: {
    id: "mulla_sadra",
    title: "A philosophical continuity line to Mulla Sadra",
    note:
      "This chain is schematic and meant to place later philosophy within a transmitted Shi'i intellectual setting.",
    steps: [
      { label: PROPHET, tone: "prophet" },
      { label: "Ali ibn Abi Talib", tone: "transmission" },
      { label: "Muhammad al-Baqir", tone: "transmission" },
      { label: "Ja'far al-Sadiq", tone: "transmission" },
      { label: "al-Tusi", tone: "transmission" },
      { label: "Mulla Sadra", tone: "final" },
    ],
  },
};
