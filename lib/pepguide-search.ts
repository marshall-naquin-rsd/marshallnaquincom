import { guideBasePath, aptsBasePath } from "@/lib/pepguide";

export type SearchEntry = {
  title: string;
  href: string;
  /** One-line description shown beneath the result title. */
  summary: string;
  /** Additional terms a peer would actually type that aren't in the title or summary. */
  keywords: string[];
};

export const searchEntries: SearchEntry[] = [
  {
    title: "Welcome",
    href: `${guideBasePath}/welcome`,
    summary: "An introduction to PEP from a former peer, and how to get the most out of your time here.",
    keywords: ["intro", "peer m", "former peer", "recheck", "relapse", "binder", "values", "culture", "structure", "accountability", "respect", "community"],
  },
  {
    title: "Sunshine / Shadow Contract",
    href: `${guideBasePath}/sunshine`,
    summary: "How the sunshine-and-shadow pairing works, why it exists, and what both sides are responsible for.",
    keywords: ["shadow", "sunshine", "alone", "pairing", "chaperone", "off shadow", "senior member", "hand-off", "cover", "accountability", "alone", "errand", "outside"],
  },
  {
    title: "First Assignments",
    href: `${guideBasePath}/firstassign`,
    summary: "The first things you'll be asked to do when you arrive — paperwork, binder, and self-assessments.",
    keywords: ["paperwork", "binder", "community guidelines", "self-assessments", "assignments", "treatment plan", "notebook", "intake"],
  },
  {
    title: "Personal Vehicles / Cars",
    href: `${guideBasePath}/cars`,
    summary: "Car search policy, when keys are held, who can drive, who can ride, and the three-person rule.",
    keywords: ["keys", "driving", "drive", "license", "insurance", "passengers", "three-person rule", "three person", "search", "contraband", "vehicle", "car", "passenger", "ride", "who can ride", "pine grove", "other programs"],
  },
  {
    title: "Treatment Planning",
    href: `${guideBasePath}/rxplan`,
    summary: "An overview of how your treatment plan is built and used.",
    keywords: ["treatment plan", "plan", "goals", "rx", "planning"],
  },
  {
    title: "Apartments",
    href: `${guideBasePath}/apts`,
    summary: "Everything about the Lakes at Turtle Creek apartments where PEP residents live.",
    keywords: ["apartment", "apartments", "housing", "turtle creek", "lakes", "where i live", "living"],
  },
  {
    title: "Apartment Living",
    href: `${aptsBasePath}/aptliv`,
    summary: "Day-to-day life in the apartments — expectations and how things work.",
    keywords: ["living", "daily life", "apartment life", "routines", "expectations"],
  },
  {
    title: "Apartment Complex Rules",
    href: `${aptsBasePath}/aptrules`,
    summary: "The rules set by the apartment complex itself that all residents must follow.",
    keywords: ["complex rules", "apartment rules", "lease", "property rules", "resident"],
  },
  {
    title: "Apartment Cleaning",
    href: `${aptsBasePath}/aptcleaning`,
    summary: "Cleaning expectations and schedules for your apartment.",
    keywords: ["cleaning", "clean", "chores", "housekeeping", "inspection", "tidy"],
  },
  {
    title: "Apartment Maintenance",
    href: `${aptsBasePath}/aptmaint`,
    summary: "How to report and handle maintenance issues in your apartment.",
    keywords: ["maintenance", "repair", "broken", "fix", "work order", "issue", "report"],
  },
  {
    title: "Pool",
    href: `${aptsBasePath}/aptpool`,
    summary: "Pool access, hours, and the pool code.",
    keywords: ["pool", "swimming", "pool code", "4772", "hours", "swim"],
  },
  {
    title: "Quick Reference",
    href: `${guideBasePath}/quickref`,
    summary: "Phone numbers, the apartment address, gate and pool codes, black ink, OTC meds, and mail address at a glance.",
    keywords: [
      "phone numbers", "on-call", "on call", "staff", "pep number",
      "gate code", "1551", "pool code", "4772",
      "address", "mail", "po box", "broadway drive", "cross creek",
      "black ink", "ink", "pen",
      "otc", "over the counter", "medications", "supplements", "vitamins", "ibuprofen", "protein powder", "approved",
      "emergency", "911", "public safety", "security",
      "fgh", "family medicine", "clinic",
    ],
  },
  {
    title: "FAQ",
    href: `${guideBasePath}/faq`,
    summary: "Frequently asked questions from incoming peers.",
    keywords: ["faq", "questions", "answers", "frequently asked", "common questions"],
  },
];

type Score = 0 | 1 | 2 | 3;

function scoreEntry(entry: SearchEntry, tokens: string[]): Score {
  const titleLower = entry.title.toLowerCase();
  const summaryLower = entry.summary.toLowerCase();
  const keywordsLower = entry.keywords.map((k) => k.toLowerCase());
  const allKeywords = keywordsLower.join(" ");

  let best: Score = 0;
  for (const token of tokens) {
    if (titleLower.includes(token)) {
      best = Math.max(best, 3) as Score;
    } else if (allKeywords.includes(token)) {
      best = Math.max(best, 2) as Score;
    } else if (summaryLower.includes(token)) {
      best = Math.max(best, 1) as Score;
    } else {
      // Token matched nowhere — this entry doesn't qualify.
      return 0;
    }
  }
  return best;
}

export function searchGuide(query: string): SearchEntry[] {
  const tokens = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  if (tokens.length === 0) return [];

  const scored = searchEntries
    .map((entry) => ({ entry, score: scoreEntry(entry, tokens) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.map(({ entry }) => entry);
}
