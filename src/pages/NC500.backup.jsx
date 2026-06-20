import { Link } from "react-router-dom";

const items = [
  ["Route planning", "Break the route into sensible daily sections."],
  ["Best stops", "Beaches, castles, viewpoints, villages and food stops."],
  ["Driving advice", "Single-track roads, timings, fuel and realistic mileage."],
  ["Accommodation", "Plan overnight stops before the best places are full."],
];

export default function NC500() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Road-trip planning made sane</span>
        <h1>NC500 Planner</h1>
        <p>Build a realistic North Coast 500 itinerary without rushing, backtracking or missing the best stops.</p>
        <Link className="btn primary" to="/planner">Build NC500 route</Link>
      </section>

      <section className="section">
        <div className="card-grid">
          {items.map(([title, text]) => (
            <article className="feature-card" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
