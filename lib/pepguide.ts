export const guideBasePath = "/PEPGuide";

export type GuideSection = { slug: string; title: string };

export const guideSections: GuideSection[] = [
  { slug: "welcome", title: "Welcome" },
  { slug: "sunshine", title: "Sunshine / Shadow Contract" },
  { slug: "firstassign", title: "First Assignments" },
  { slug: "presfeedback", title: "Presentations & Feedback" },
  { slug: "cars", title: "Personal Vehicles" },
  { slug: "apts", title: "Apartments" },
  { slug: "rxplan", title: "Treatment Planning" },
];

export const aptsBasePath = `${guideBasePath}/apts`;

export const rxplanBasePath = `${guideBasePath}/rxplan`;

export const aptSections: GuideSection[] = [
  { slug: "aptliv", title: "Apartment Living" },
  { slug: "aptrules", title: "Apartment Complex Rules" },
  { slug: "aptcleaning", title: "Apartment Cleaning" },
  { slug: "aptmaint", title: "Apartment Maintenance Issues" },
  { slug: "aptpool", title: "Pool" },
];

/* ── Route map ── */

export type RouteInfo = {
  title: string;
  parentHref: string | null;
  parentTitle: string | null;
  prevHref: string | null;
  prevTitle: string | null;
  nextHref: string | null;
  nextTitle: string | null;
};

export const routeMap: Record<string, RouteInfo> = {};

// Guide home
routeMap[guideBasePath] = {
  title: "PEP Guide",
  parentHref: null,
  parentTitle: null,
  prevHref: null,
  prevTitle: null,
  nextHref: null,
  nextTitle: null,
};

// Quick Reference (standalone — no prev/next in main sequence)
routeMap[`${guideBasePath}/quickref`] = {
  title: "Quick Reference",
  parentHref: guideBasePath,
  parentTitle: "PEP Guide",
  prevHref: null,
  prevTitle: null,
  nextHref: null,
  nextTitle: null,
};

// FAQ (standalone)
routeMap[`${guideBasePath}/faq`] = {
  title: "FAQ",
  parentHref: guideBasePath,
  parentTitle: "PEP Guide",
  prevHref: null,
  prevTitle: null,
  nextHref: null,
  nextTitle: null,
};

// GroupMe (standalone)
routeMap[`${guideBasePath}/groupme`] = {
  title: "PEP GroupMe",
  parentHref: guideBasePath,
  parentTitle: "PEP Guide",
  prevHref: null,
  prevTitle: null,
  nextHref: null,
  nextTitle: null,
};

// Main guide sections (linear sequence)
guideSections.forEach((s, i) => {
  const path = `${guideBasePath}/${s.slug}`;
  const prev = guideSections[i - 1];
  const next = guideSections[i + 1];
  routeMap[path] = {
    title: s.title,
    parentHref: guideBasePath,
    parentTitle: "PEP Guide",
    prevHref: prev ? `${guideBasePath}/${prev.slug}` : null,
    prevTitle: prev?.title ?? null,
    nextHref: next ? `${guideBasePath}/${next.slug}` : null,
    nextTitle: next?.title ?? null,
  };
});

// Treatment Planning continues onto a second page
const rxplanMorePath = `${rxplanBasePath}/rxplanmore`;
const rxplanMoreTitle = "More About Treatment Planning";

routeMap[rxplanMorePath] = {
  title: rxplanMoreTitle,
  parentHref: rxplanBasePath,
  parentTitle: "Treatment Planning",
  prevHref: rxplanBasePath,
  prevTitle: "Treatment Planning",
  nextHref: null,
  nextTitle: null,
};

routeMap[rxplanBasePath].nextHref = rxplanMorePath;
routeMap[rxplanBasePath].nextTitle = rxplanMoreTitle;

// Apartment sub-sections (linear sequence within apts)
aptSections.forEach((s, i) => {
  const path = `${aptsBasePath}/${s.slug}`;
  const prev = aptSections[i - 1];
  const next = aptSections[i + 1];
  routeMap[path] = {
    title: s.title,
    parentHref: `${guideBasePath}/apts`,
    parentTitle: "Apartments",
    prevHref: prev ? `${aptsBasePath}/${prev.slug}` : null,
    prevTitle: prev?.title ?? null,
    nextHref: next ? `${aptsBasePath}/${next.slug}` : null,
    nextTitle: next?.title ?? null,
  };
});
