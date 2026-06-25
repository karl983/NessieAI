import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import LeadCapture from "../components/LeadCapture";
import { transportDetails } from "../data/transportDetails";

export default function TransportDetail() {
  const { slug } = useParams();
  const item = transportDetails[slug];

  if (!item) {
    return (
      <main className="page">
        <section className="page-hero">
          <h1>Transport service not found</h1>
          <Link className="btn primary" to="/transport">Back to transport</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="destination-page-clean">
      <SEO
        title={`${item.title} | Nessie AI Highland Transport`}
        description={item.intro}
      />

      <section
        className="clean-destination-hero"
        style={{ "--hero-image": `url(${item.image})` }}
      >
        <div className="clean-destination-content">
          <span className="kicker">Transport service</span>
          <h1>{item.title}</h1>
          <p>{item.intro}</p>
        </div>
      </section>

      <section className="place-info-section">
        <div className="place-main-copy">
          <span className="kicker">{item.service}</span>
          <h2>What visitors need to know.</h2>
          {item.sections.map(([title, text]) => (
            <div className="preview-day" key={title}>
              <strong>{title}</strong>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <aside className="place-facts-card">
          <span className="kicker">Common questions</span>
          {item.questions.map(([q, a]) => (
            <div className="fact-row" key={q}>
              <strong>{q}</strong>
              <span>{a}</span>
            </div>
          ))}
        </aside>
      </section>

      <section className="transport-section money-section">
        <div>
          <span className="kicker">Enquiry</span>
          <h2>Need {item.title.toLowerCase()}?</h2>
          <p>Send your date, pickup point, destination, group size and any luggage or timing requirements.</p>
        </div>

        <LeadCapture type={`${item.title} Enquiry`} button="Send Enquiry" />
      </section>
    </main>
  );
}
