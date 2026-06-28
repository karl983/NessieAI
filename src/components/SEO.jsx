import { useEffect } from "react";

const SITE = "https://nessieai.co.uk";

function setMeta(name, content, attr = "name") {
  if (!content) return;

  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

export default function SEO({ title, description, schema }) {
  useEffect(() => {
    const url = `${SITE}${window.location.pathname}`;

    document.title = title || "Nessie AI | Scottish Highlands Travel Guide";

    setMeta("description", description);
    setMeta("robots", "index, follow");

    setLink("canonical", url);

    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:url", url, "property");
    setMeta("og:image", `${SITE}/images/home/hero.jpg`, "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${SITE}/images/home/hero.jpg`);

    const oldSchema = document.getElementById("nessie-schema");
    if (oldSchema) oldSchema.remove();

    const baseSchema = schema || {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE}/#organization`,
          "name": "Nessie AI",
          "url": SITE,
          "logo": `${SITE}/images/nessie-mascot.png`
        },
        {
          "@type": "WebSite",
          "@id": `${SITE}/#website`,
          "url": SITE,
          "name": "Nessie AI",
          "description": "AI travel guide for Inverness, Loch Ness, Skye, the NC500 and the Scottish Highlands.",
          "publisher": { "@id": `${SITE}/#organization` }
        }
      ]
    };

    const script = document.createElement("script");
    script.id = "nessie-schema";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(baseSchema);
    document.head.appendChild(script);
  }, [title, description, schema]);

  return null;
}
