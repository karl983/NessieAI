import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ImageDestinationGrid from "../components/ImageDestinationGrid";
import NessieChat from "../components/NessieChat";
import MiniConcierge from "../components/MiniConcierge";

export default function Home() {
  return (
    <main className="home-page-clean">
      <SEO
        title="Nessie AI | Inverness & Scottish Highlands AI Travel Concierge"
        description="Plan Inverness, Loch Ness, Isle of Skye and NC500 trips with Nessie AI."
      />

      <section className="clean-hero">
        <div className="clean-hero-content">
          <span className="kicker">Inverness · Loch Ness · Skye · NC500</span>

          <h1>Your AI travel concierge for the Scottish Highlands.</h1>

          <p>
            Plan better days around Inverness, Loch Ness, Isle of Skye and the NC500.
            Get realistic routes, local-style ideas and transport help when you need it.
          </p>

          <div className="actions">
            <Link className="btn primary" to="/tomorrow">What should I do tomorrow?</Link>
            <Link className="btn secondary" to="/planner">Build my trip</Link>
          </div>

          <NessieChat page="home" />
        </div>
      </section>

      <section className="clean-links">
        <Link to="/inverness">Inverness</Link>
        <Link to="/loch-ness">Loch Ness</Link>
        <Link to="/skye">Isle of Skye</Link>
        <Link to="/nc500">NC500</Link>
        <Link to="/transport">Transport</Link>
      </section>

      <section className="clean-destinations">
        <span className="kicker">Start with a destination</span>
        <h2>Choose the part of the Highlands you want to explore.</h2>
        <ImageDestinationGrid />
      </section>
    </main>
  );
}
