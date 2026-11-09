import { siteConfig, skills } from "@/lib/site";
import { featuredProject, projects } from "@/lib/projects";

/** Person + WebSite + portfolio ItemList structured data (schema.org JSON-LD). */
export function JsonLd() {
  const { url, name } = siteConfig;
  const personId = `${url}/#person`;
  const websiteId = `${url}/#website`;
  const live = [featuredProject, ...projects].filter((p) => p.url);

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name,
        url,
        image: `${url}/opengraph-image`,
        jobTitle: siteConfig.role,
        description: siteConfig.description,
        knowsAbout: [...skills, "Cybersecurity", "E-commerce", "Responsive Web Design"],
        knowsLanguage: ["en", "it", "ur"],
        sameAs: Object.values(siteConfig.socials),
        subjectOf: [
          { "@type": "DigitalDocument", name: "Europass CV (English)", url: `${url}${siteConfig.cv.en.href}`, inLanguage: "en", encodingFormat: "application/pdf" },
          { "@type": "DigitalDocument", name: "CV Europass (Italiano)", url: `${url}${siteConfig.cv.it.href}`, inLanguage: "it", encodingFormat: "application/pdf" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url,
        name: `${name} — Portfolio`,
        description: siteConfig.description,
        inLanguage: "en",
        author: { "@id": personId },
        publisher: { "@id": personId },
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#projects`,
        name: "Portfolio projects",
        itemListElement: live.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: p.title,
            url: p.url,
            description: p.description,
            genre: p.category,
            keywords: p.tech.join(", "),
            creator: { "@id": personId },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never terminate the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
