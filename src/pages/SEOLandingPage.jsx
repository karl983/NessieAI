import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { seoPages } from "../data/seoPages";
import HomeNessieAsk from "../components/HomeNessieAsk";

export default function SEOLandingPage() {
  const { slug } = useParams();
  const page = seoPages[slug];

  if (!page) {
    return (
      <main className="seo-page">
        <h1>Page not found</h1>
        <Link to="/">Back to Nessie AI</Link>
      </main>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  return (
    <main className="seo-page">
      <SEO title={page.metaTitle} description={page.description} />

      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>

      <section className="seo-hero">
        <span className="kicker">Nessie AI Highlands Guide</span>
        <h1>{page.h1}</h1>
        <p>{page.intro}</p>

        <div className="seo-actions">
          <Link className="btn primary" to="/">Ask Nessie</Link>
          <Link className="btn ghost" to="/transport">Need transport?</Link>
        </div>
      </section>

      <section className="seo-content-grid">
        {page.sections.map(([heading, text]) => (
          <article className="seo-info-card" key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="seo-faq">
        <span className="kicker">Local FAQs</span>
        <h2>Questions visitors ask</h2>
        {page.faqs.map(([question, answer]) => (
          <div className="seo-faq-item" key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </section>

      <HomeNessieAsk />

      <section className="seo-internal-links">
        <Link to="/what-to-do-in-inverness-tomorrow">What to do tomorrow</Link>
        <Link to="/inverness-restaurants">Inverness restaurants</Link>
        <Link to="/inverness-private-driver">Private driver</Link>
        <Link to="/skye-from-inverness">Skye from Inverness</Link>
        <Link to="/loch-ness-day-trip">Loch Ness day trip</Link>
        <Link to="/nc500-from-inverness">NC500 from Inverness</Link>
      </section>
    </main>
  );
}
