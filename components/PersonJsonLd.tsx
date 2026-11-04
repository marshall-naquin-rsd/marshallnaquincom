import { personJsonLd, webSiteJsonLd } from "@/lib/seo";

type PersonJsonLdProps = {
  includeWebSite?: boolean;
};

function jsonLdScript(json: string) {
  return json.replace(/</g, "\\u003c");
}

export function PersonJsonLd({ includeWebSite = false }: PersonJsonLdProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(personJsonLd) }}
      />
      {includeWebSite ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(webSiteJsonLd) }}
        />
      ) : null}
    </>
  );
}
