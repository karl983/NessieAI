import { useParams, Link } from "react-router-dom";
import { placeDetails } from "../data/placeDetails";
import LeadCapture from "../components/LeadCapture";

export default function PlaceDetail() {
  const { slug } = useParams();
  const place = placeDetails[slug];

  if (!place) {
    return (
      <main className="page">
        <section className="page-hero">
          <h1>Place not found</h1>
          <p>This place page has not been built yet.</p>
          <Link className="btn primary" to="/">Back home</Link>
        </section>
      </main>
    );
  }

  return (
    <main className="destination-page-clean">
      <section
        className="clean-destination-hero"
        style={{ "--hero-image": `url(${place.image})` }}
      >
        <div className="clean-destination-content">
          <span className="kicker">{place.area}</span>
          <h1>{place.title}</h1>
          <p>{place.shortDescription}</p>
        </div>
      </section>

      <section className="place-info-section">
        <div className="place-main-copy">
          <span className="kicker">History & context</span>
          <h2>{place.heading}</h2>
          {place.history.map((para) => <p key={para}>{para}</p>)}
        </div>

        <aside className="place-facts-card">
          <span className="kicker">Quick facts</span>
          <div className="fact-row"><strong>Best time</strong><span>{place.bestTime}</span></div>
          <div className="fact-row"><strong>Good for</strong><span>{place.bestFor.join(", ")}</span></div>
          <div className="fact-row"><strong>Transport</strong><span>{place.transportNote}</span></div>
        </aside>
      </section>

      <section className="local-intel-card">
        <span className="kicker">Local intelligence</span>
        

        <div className="local-intel-grid">
          <article>
            <h3>Local tip</h3>
            <p>{place.localTip}</p>
          </article>

          <article>
            <h3>Common mistake</h3>
            <p>{place.commonMistake}</p>
          </article>

          <article>
            <h3>How to use it in a trip</h3>
            <p>{place.suggestedRoute}</p>
          </article>
        </div>
      </section>

      <section className="transport-section money-section tighter-money">
        <div>
          <span className="kicker">Planning enquiry</span>
          <h2>Want help visiting {place.title}?</h2>
          <p>Send your dates, group size and what you need help with.</p>
        </div>

        <LeadCapture type={`${place.title} Enquiry`} button="Send Enquiry" />
      </section>
    </main>
  );
}
