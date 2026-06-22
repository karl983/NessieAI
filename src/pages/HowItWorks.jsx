import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function HowItWorks() {
  return (
    <main className="page">
      <SEO
        title="How Nessie AI Works | Scottish Highlands AI Travel Planner"
        description="Learn how Nessie AI helps visitors plan Inverness, Loch Ness, Isle of Skye and NC500 trips with realistic routes and transport options."
      />
      <section className="page-hero">
        <span className="kicker">How Nessie AI works</span>
        <h1>AI travel planning for the Scottish Highlands.</h1>
        <p>
          Nessie AI helps visitors plan Inverness, Loch Ness, Isle of Skye and
          NC500 trips with clearer routes, local-style suggestions and transport options.
        </p>
      </section>

      <section className="section">
        <div className="how-grid">
          <article>
            <strong>1</strong>
            <h3>Tell Nessie your trip details</h3>
            <p>Where you are staying, when you are visiting, who is travelling and whether you have a car.</p>
          </article>

          <article>
            <strong>2</strong>
            <h3>Get a realistic Highlands plan</h3>
            <p>Nessie helps avoid overpacked days, bad travel times and confusing tourist-site research.</p>
          </article>

          <article>
            <strong>3</strong>
            <h3>Find transport or local help</h3>
            <p>If you need a driver, private tour or transfer, Nessie points you to the right next step.</p>
          </article>
        </div>

        <div className="actions page-actions">
          <Link className="btn primary" to="/planner">Plan My Trip</Link>
          <Link className="btn secondary" to="/transport">Find Transport</Link>
        </div>
      </section>
    </main>
  );
}
