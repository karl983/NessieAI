import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const categories = [
  ["Restaurants", "Find places to eat around Inverness, Loch Ness, Skye and the NC500.", "/inverness-restaurants"],
  ["Castles", "Culloden, Urquhart, Cawdor, Dunrobin and Highland history.", "/inverness"],
  ["Loch Ness", "Cruises, viewpoints, Urquhart Castle, Dores Beach and day routes.", "/loch-ness"],
  ["Isle of Skye", "Storr, Portree, Fairy Pools, weather and realistic routes.", "/skye"],
  ["NC500", "Route planning, driving advice, stops and realistic timing.", "/nc500"],
  ["Transport", "Private drivers, airport transfers, cruise tours and golf transfers.", "/transport"],
  ["Rainy Days", "Indoor ideas, short routes, food, whisky and weather-aware planning.", "/trip-planner"],
  ["Whisky", "Distilleries, whisky bars and driver-friendly planning.", "/trip-planner"]
];

export default function Explore() {
  return (
    <main className="v2-page">
      <SEO
        title="Explore Inverness, Loch Ness, Skye & the Highlands | Nessie AI"
        description="Explore Highland restaurants, castles, whisky, Skye, Loch Ness, NC500 routes and transport with Nessie AI."
      />

      <section className="v2-hero compact">
        <span className="kicker">Explore</span>
        <h1>Choose what you want to discover.</h1>
        <p>Fast routes into the best parts of the Highlands — food, castles, whisky, weather-proof ideas, Skye, Loch Ness and the NC500.</p>
      </section>

      <section className="v2-card-grid">
        {categories.map(([title, text, link]) => (
          <Link className="v2-card" to={link} key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
            <span>Explore →</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
