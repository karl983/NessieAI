import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import ImageDestinationGrid from "../components/ImageDestinationGrid";
import HomeNessieAsk from "../components/HomeNessieAsk";

const quickQuestions = [
  ["Best restaurants in Inverness", "Best restaurants in Inverness tonight"],
  ["What to do if it rains", "What should I do in Inverness tomorrow if it rains?"],
  ["Can I do Skye in one day?", "Can I do Skye in one day from Inverness?"],
  ["Loch Ness day trip", "Plan a realistic Loch Ness day trip from Inverness"],
  ["Private driver or transport", "Do I need a private driver for Skye or Loch Ness?"],
  ["Dolphins near Inverness", "Where can I see dolphins near Inverness?"],
  ["Whisky ideas", "Best whisky experiences near Inverness"],
  ["NC500 planning", "Help me plan the NC500 from Inverness"]
];

export default function Home() {
  return (
    <main className="home-page-clean home-v2-fixed">
      <SEO
        title="Nessie AI | Inverness, Loch Ness & Scottish Highlands Travel Guide"
        description="Plan your visit to Inverness, Loch Ness, the Isle of Skye and the Scottish Highlands. Discover restaurants, castles, whisky, NC500 routes, transport and local recommendations with Nessie AI."
      />

      <section className="clean-hero home-v2-hero">
        <div className="clean-hero-content">
          <span className="kicker">Inverness · Loch Ness · Skye · NC500</span>
          <h1>Your AI guide to Inverness, Loch Ness and the Scottish Highlands.</h1>
          <p>
            Plan the perfect trip to Inverness, Loch Ness, Isle of Skye and the NC500 with Nessie — your free AI travel guide for the Scottish Highlands. Get honest local tips, restaurant recommendations, hidden gems, day trip routes, live weather and transport advice.
          </p>
        </div>
      </section>

      <section className="home-v2-chat-only">
        <HomeNessieAsk />
      </section>

      <section className="clean-destinations home-v2-destinations">
        <span className="kicker">Destinations</span>
        <h2>Choose the part of the Highlands you want to explore.</h2>
        <ImageDestinationGrid />
      </section>

      <p className="last-updated">Last updated: June 2026</p>
    </main>
  );
}
