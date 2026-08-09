export type RelationKind =
  | "studied with"
  | "taught"
  | "principal teacher of"
  | "transmitted to"
  | "influenced";

export type RelationNode = {
  name: string;
  relationToNext?: RelationKind;
};

export type ScholarRelationTrail = {
  id: string;
  title: string;
  note?: string;
  nodes: RelationNode[];
};

export const scholarRelationTrails: ScholarRelationTrail[] = [
  {
    id: "kufan-hanafi",
    title: "Kufan juristic teaching",
    note: "A compact line of direct study central to the formation of early Hanafi doctrine.",
    nodes: [
      { name: "Abdullah ibn Mas'ud", relationToNext: "transmitted to" },
      { name: "Alqamah ibn Qays", relationToNext: "principal teacher of" },
      { name: "Ibrahim al-Nakha'i", relationToNext: "principal teacher of" },
      { name: "Hammad ibn Abi Sulayman", relationToNext: "principal teacher of" },
      { name: "Abu Hanifa", relationToNext: "principal teacher of" },
      { name: "Abu Yusuf" },
    ],
  },
  {
    id: "hanafi-shaybani",
    title: "Early Hanafi transmission",
    nodes: [
      { name: "Abu Hanifa", relationToNext: "principal teacher of" },
      { name: "Muhammad al-Shaybani", relationToNext: "principal teacher of" },
      { name: "al-Shafi'i" },
    ],
  },
  {
    id: "medinan-jurists",
    title: "Medinan transmission and the later imams",
    note: "The links shown are direct study relationships; they do not imply identical methods or doctrine.",
    nodes: [
      { name: "Abdullah ibn Umar ibn al-Khattab", relationToNext: "principal teacher of" },
      { name: "Nafi'", relationToNext: "principal teacher of" },
      { name: "Malik ibn Anas", relationToNext: "principal teacher of" },
      { name: "al-Shafi'i", relationToNext: "principal teacher of" },
      { name: "Ahmad ibn Hanbal" },
    ],
  },
  {
    id: "aishah-medina",
    title: "A'ishah's Medinan students",
    nodes: [
      { name: "A'ishah bint Abi Bakr", relationToNext: "principal teacher of" },
      { name: "Urwah ibn al-Zubayr", relationToNext: "transmitted to" },
      { name: "Ibn Shihab al-Zuhri" },
    ],
  },
  {
    id: "aishah-qasim",
    title: "A'ishah and al-Qasim",
    nodes: [
      { name: "A'ishah bint Abi Bakr", relationToNext: "principal teacher of" },
      { name: "al-Qasim ibn Muhammad" },
    ],
  },
  {
    id: "ibn-abbas-tafsir",
    title: "Early Meccan tafsir",
    nodes: [
      { name: "Abdullah ibn Abbas", relationToNext: "principal teacher of" },
      { name: "Mujahid ibn Jabr" },
    ],
  },
  {
    id: "ibn-abbas-ata",
    title: "Ibn Abbas and Ata",
    nodes: [
      { name: "Abdullah ibn Abbas", relationToNext: "principal teacher of" },
      { name: "Ata ibn Abi Rabah" },
    ],
  },
  {
    id: "shafii-egypt",
    title: "Early Shafi'i teaching",
    nodes: [
      { name: "al-Shafi'i", relationToNext: "principal teacher of" },
      { name: "al-Muzani" },
    ],
  },
  {
    id: "ashari-classical",
    title: "Classical Ash'ari development",
    note: "Al-Baqillani's link to al-Juwayni is intellectual influence; al-Juwayni directly taught al-Ghazali.",
    nodes: [
      { name: "Abu al-Hasan al-Ash'ari", relationToNext: "influenced" },
      { name: "al-Baqillani", relationToNext: "influenced" },
      { name: "al-Juwayni", relationToNext: "principal teacher of" },
      { name: "al-Ghazali" },
    ],
  },
  {
    id: "baghdad-twelver",
    title: "Baghdadi Twelver scholarship",
    note: "Al-Tusi studied with al-Mufid and then continued under al-Sharif al-Murtada.",
    nodes: [
      { name: "al-Mufid", relationToNext: "principal teacher of" },
      { name: "al-Sharif al-Murtada", relationToNext: "principal teacher of" },
      { name: "al-Tusi" },
    ],
  },
  {
    id: "hilli-school",
    title: "The Hilla juristic school",
    nodes: [
      { name: "al-Muhaqqiq al-Hilli", relationToNext: "principal teacher of" },
      { name: "al-Allama al-Hilli" },
    ],
  },
  {
    id: "hadith-travel",
    title: "Hadith study across regions",
    nodes: [
      { name: "Sufyan ibn Uyaynah", relationToNext: "principal teacher of" },
      { name: "Ahmad ibn Hanbal" },
    ],
  },
  {
    id: "taymiyyah-qayyim",
    title: "Damascene Hanbali teaching",
    note: "Ibn al-Qayyim was Ibn Taymiyyah's closest and most sustained student.",
    nodes: [
      { name: "Ibn Taymiyyah", relationToNext: "principal teacher of" },
      { name: "Ibn al-Qayyim" },
    ],
  },
  {
    id: "taymiyyah-kathir",
    title: "Damascene hadith and tafsir study",
    note: "Ibn Kathir studied with Ibn Taymiyyah while also drawing heavily upon other Damascene teachers, especially al-Mizzi.",
    nodes: [
      { name: "Ibn Taymiyyah", relationToNext: "taught" },
      { name: "Ibn Kathir" },
    ],
  },
  {
    id: "ahmad-bukhari-muslim",
    title: "Hadith teaching across three generations",
    nodes: [
      { name: "Ahmad ibn Hanbal", relationToNext: "taught" },
      { name: "al-Bukhari", relationToNext: "principal teacher of" },
      { name: "Muslim ibn al-Hajjaj" },
    ],
  },
  {
    id: "bukhari-tirmidhi",
    title: "Khurasani hadith scholarship",
    nodes: [
      { name: "al-Bukhari", relationToNext: "principal teacher of" },
      { name: "al-Tirmidhi" },
    ],
  },
  {
    id: "ahmad-abu-dawud",
    title: "Hadith and legal questions",
    note: "Abu Dawud studied hadith and legal questions with Ahmad and later transmitted a collection of questions addressed to him.",
    nodes: [
      { name: "Ahmad ibn Hanbal", relationToNext: "taught" },
      { name: "Abu Dawud" },
    ],
  },
  {
    id: "hakim-bayhaqi",
    title: "Nishapur hadith teaching",
    nodes: [
      { name: "al-Hakim al-Nishapuri", relationToNext: "principal teacher of" },
      { name: "al-Bayhaqi" },
    ],
  },
  {
    id: "abduh-rida",
    title: "Modern Qur'anic reform",
    note: "Rashid Rida studied with Muhammad Abduh and continued his Qur'anic lectures in Tafsir al-Manar, while also developing positions of his own.",
    nodes: [
      { name: "Muhammad Abduh", relationToNext: "principal teacher of" },
      { name: "Rashid Rida" },
    ],
  },
];

export function getRelationTrails(scholarName: string) {
  return scholarRelationTrails.filter((trail) =>
    trail.nodes.some((node) => node.name === scholarName),
  );
}
