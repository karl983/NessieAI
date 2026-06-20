import { Link } from "react-router-dom";

const results = [
  ["Loch Ness day trip", "/loch-ness", "Cruises, Urquhart Castle, Dores and Foyers."],
  ["Isle of Skye from Inverness", "/skye", "Realistic Skye planning and long-drive advice."],
  ["Airport transfer", "/transport", "Find transport from Inverness Airport."],
  ["NC500 route", "/nc500", "Plan sensible road-trip sections."],
  ["Inverness restaurants", "/inverness", "Food, pubs, walks and local attractions."]
];

export default function Search() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Search Nessie AI</span>
        <h1>Find Highland trip help fast.</h1>
        <p>Use this as the MVP search page. AI-powered search comes after launch.</p>
      </section>

      <section className="section">
        <div className="search-box">
          <input placeholder="Search: Skye, Loch Ness, airport transfer, whisky..." />
          <button>Search</button>
        </div>

        <div className="stack-list">
          {results.map(([title, url, text]) => (
            <Link className="result-card" to={url} key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
