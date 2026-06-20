import { Link } from "react-router-dom";

const items = [
  ["Old Man of Storr", "Iconic Skye scenery, but timing and weather matter."],
  ["Quiraing", "One of Skye's most dramatic landscapes and best photo stops."],
  ["Fairy Pools", "Popular, beautiful and often busy — plan realistically."],
  ["One-day from Inverness", "Possible, but long. Nessie AI helps decide if it is worth it."],
];

export default function Skye() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Big scenery · long drives · smart planning</span>
        <h1>Isle of Skye Trip Planner</h1>
        <p>Skye is stunning, but bad planning ruins it. Build a route that respects travel time, weather and daylight.</p>
        <Link className="btn primary" to="/planner">Plan Skye</Link>
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
