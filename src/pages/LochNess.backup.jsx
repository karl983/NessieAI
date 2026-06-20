import { Link } from "react-router-dom";

const items = [
  ["Urquhart Castle", "The classic Loch Ness stop with dramatic castle ruins and loch views."],
  ["Loch Ness cruises", "Boat trips from Fort Augustus, Dochgarroch and other local points."],
  ["Dores Beach", "A quieter loch-side stop close to Inverness."],
  ["Foyers & Falls", "A scenic south-side route with waterfall walks and viewpoints."],
];

export default function LochNess() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Castles · Cruises · Viewpoints</span>
        <h1>Loch Ness Planner</h1>
        <p>Plan a Loch Ness day that actually works, without wasting half the day driving in circles.</p>
        <Link className="btn primary" to="/planner">Plan Loch Ness</Link>
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
