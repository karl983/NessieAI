import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main className="home-page">
      <SEO
        title="Nessie AI | Inverness & Scottish Highlands AI Travel Concierge"
        description="Plan Inverness, Loch Ness, Isle of Skye and NC500 trips with Nessie AI, your Scottish Highlands AI travel concierge."
      />

      <section className="home-hero">
        <div className="home-overlay" />

        <div className="home-content">
          <span className="kicker">Scottish Highlands AI Travel Concierge</span>

          <h1>Plan your Inverness and Highlands trip with Nessie AI.</h1>

          <p>
            Build smarter itineraries for Inverness, Loch Ness, Isle of Skye and the NC500.
            Get realistic routes, local-style suggestions and transport help.
          </p>

          <div className="actions">
            <Link className="btn primary" to="/planner">Plan My Trip</Link>
            <Link className="btn secondary" to="/tomorrow">What Should I Do Tomorrow?</Link>
          </div>

          <div className="home-chat-card">
            <h2>Ask Nessie</h2>
            <p>Tell Nessie where you are staying, when you are visiting and what kind of trip you want.</p>

            <div className="fake-input">
              <span>Ask about Loch Ness, Skye, whisky, castles...</span>
              <Link to="/planner">Start</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-simple-links">
        <Link to="/inverness">Inverness</Link>
        <Link to="/loch-ness">Loch Ness</Link>
        <Link to="/skye">Isle of Skye</Link>
        <Link to="/nc500">NC500</Link>
        <Link to="/transport">Transport</Link>
      </section>
    </main>
  );
}
