import { Link } from "react-router-dom";

const items = [
  ["Restaurants", "Where to eat in Inverness, from relaxed cafés to special dinners."],
  ["Pubs & drinks", "Traditional pubs, live music, whisky bars and relaxed evening spots."],
  ["Attractions", "River Ness, Inverness Castle viewpoint, cathedral, museums and walks."],
  ["Day trips", "Culloden, Clava Cairns, Fort George, Cawdor and Loch Ness."],
];

export default function Inverness() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">City base for the Highlands</span>
        <h1>Inverness Travel Guide</h1>
        <p>Use Inverness as your base for Loch Ness, Skye, Culloden, whisky country and Highland day trips.</p>
        <Link className="btn primary" to="/planner">Build an Inverness itinerary</Link>
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
