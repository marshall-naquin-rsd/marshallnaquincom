import type { Metadata } from "next";

/**
 * Share image path. Swap this one line for "/og/marshallnaquin-og.jpg"
 * when that file exists.
 */
export const SHARE_IMAGE_PATH = "/og/marshallnaquin-og.jpg";

const shareImage = {
  url: SHARE_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: "Marshall Naquin, MD — Both Sides of the White Coat",
};

type SeoPage = {
  title: string;
  description: string;
  path: "/" | "/about" | "/booking";
  openGraphType: "website" | "profile";
};

export function pageMetadata({
  title,
  description,
  path,
  openGraphType,
}: SeoPage): Metadata {
  const shared = {
    title: { absolute: title },
    description,
    url: path,
    images: [shareImage],
  };

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
    },
    openGraph:
      openGraphType === "profile"
        ? {
            ...shared,
            type: "profile",
            siteName: "Marshall Naquin",
            locale: "en_US",
          }
        : {
            ...shared,
            type: "website",
            siteName: "Marshall Naquin",
            locale: "en_US",
          },
    twitter: {
      card: "summary_large_image",
      title: { absolute: title },
      description,
      images: [shareImage],
    },
  };
}

/** Person node, verbatim from the approved on-page spec. */
export const personJsonLd = `{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://marshallnaquin.com/#person",
  "name": "Marshall R. Naquin",
  "alternateName": "Marshall Naquin",
  "honorificSuffix": "MD",
  "jobTitle": "Emergency Physician and Recovery Speaker",
  "description": "Board-certified emergency physician in recovery from gambling addiction who speaks to treatment programs, 12-step groups and clinicians about addiction and the long road to recovery.",
  "url": "https://marshallnaquin.com/",
  "image": "https://marshallnaquin.com/images/marshall-naquin-md-portrait.jpg",
  "alumniOf": {"@type": "CollegeOrUniversity", "name": "LSU Health Sciences Center New Orleans School of Medicine"},
  "hasCredential": {"@type": "EducationalOccupationalCredential", "name": "Board Certified, Emergency Medicine", "recognizedBy": {"@type": "Organization", "name": "American Board of Emergency Medicine"}},
  "knowsAbout": ["Gambling addiction", "Addiction recovery", "Emergency medicine", "Physician health programs", "Addiction treatment and monitoring", "Professionals with addiction"],
  "worksFor": {"@type": "Organization", "name": "Professional Support Consulting", "url": "https://professionalsupportconsulting.com/"},
  "sameAs": [
    "https://www.linkedin.com/in/marshall-naquin-65965814",
    "https://professionalsupportconsulting.com/about"
  ]
}`;

/**
 * Homepage WebSite node from the spec. @context is included so this
 * script is valid JSON-LD on its own.
 */
export const webSiteJsonLd = `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://marshallnaquin.com/",
  "name": "Marshall Naquin",
  "publisher": {"@id": "https://marshallnaquin.com/#person"}
}`;
