import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function WhyNessie() {
  return (
    <main className="page">
      <SEO
        title="Why Use Nessie AI? | Highlands Travel Concierge"
        description="Why Nessie AI helps visitors plan better Inverness, Loch Ness, Isle of Skye and NC500 trips."
      />

      <section className="page-hero">
        <span className="kicker">Why Nessie AI</span>
        <h1>Tourist websites give you lists. Nessie helps you make decisions.</h1>
        <p>
          The Highlands are easy to overplan. Nessie AI is built to help visitors choose realistic routes,
          avoid wasted time and turn ideas into a proper trip.
        </p>

        <div className="actions">
          <Link className="btn primary" to="/planner">Plan My Trip</Link>
          <Link className="btn secondary" to="/transport">Find Transport</Link>
        </div>
      </section>

      <section className="section">
        <div className="card-grid">
          <article className="feature-card">
            <span>🧭</span>
            <h3>Realistic routes</h3>
            <p>No stupid itineraries that put Skye, Loch Ness and whisky country into one impossible day.</p>
          </article>

          <article className="feature-card">
            <span>🌧️</span>
            <h3>Weather-aware thinking</h3>
            <p>Highland plans need backups. Rain, wind and low cloud can change everything.</p>
          </article>

          <article className="feature-card">
            <span>🚗</span>
            <h3>Transport-first logic</h3>
            <p>The best plan depends on whether you have a car, need a driver, or are relying on tours.</p>
          </article>

          <article className="feature-card">
            <span>💸</span>
            <h3>Built around action</h3>
            <p>Planning is useful, but the real value is helping visitors book transport, tours and local help.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
