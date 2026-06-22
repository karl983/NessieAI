import { Link } from "react-router-dom";

export default function DestinationPage({
  kicker,
  title,
  intro,
  image,
  cta,
  itinerary,
  transportText
}) {
  return (
    <main className="destination-page">
      <section className="destination-hero">
        <div className="destination-copy">
          <span className="kicker">{kicker}</span>
          <h1>{title}</h1>
          <p>{intro}</p>

          <div className="actions">
            <Link className="btn primary" to="/planner">{cta}</Link>
          </div>
        </div>

        <div className="destination-image">
          <img src={image} alt={title} />
        </div>
      </section>

      <section className="split-panel">
        <div>
          <span className="kicker">Suggested plan</span>
          <h2>{itinerary.title}</h2>
          <p>{itinerary.text}</p>

          <ul className="clean-list">
            {itinerary.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="ask-card compact">
          <h2>Ask Nessie</h2>
          <p>Want this tailored to your dates, group size and travel style?</p>
          <Link className="btn primary" to="/planner">Build custom itinerary</Link>
        </div>
      </section>


    </main>
  );
}
