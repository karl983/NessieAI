import { Link } from "react-router-dom";
import DestinationGrid from "../components/DestinationGrid";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="kicker">Inverness · Loch Ness · Skye · NC500</span>
          <h1>Plan the perfect Scottish Highlands trip in minutes.</h1>
          <p>Nessie AI helps visitors build smarter itineraries, choose realistic routes, discover local gems and find trusted transport across the Highlands.</p>
          <div className="actions">
            <Link className="btn primary" to="/planner">Plan My Trip</Link>
            <Link className="btn secondary" to="/transport">Find Transport</Link>
          </div>
        </div>

        <div className="ask-card">
          <h2>What do you need?</h2>
          <p>Pick a route or start a custom plan.</p>
          <div className="quick-grid">
            <Link to="/loch-ness">🏰 Loch Ness</Link>
            <Link to="/skye">⛰️ Isle of Skye</Link>
            <Link to="/nc500">🚗 NC500</Link>
            <Link to="/transport">🚕 Transport</Link>
          </div>
          <div className="fake-input">
            <span>Ask about Skye, Loch Ness, whisky, castles...</span>
            <Link to="/planner">Ask</Link>
          </div>
        </div>
      </section>

      <section className="section slim">
        <span className="kicker">Start here</span>
        <h2>Choose your starting point.</h2>
        <DestinationGrid />
      </section>
    </main>
  );
}
