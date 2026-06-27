import SEO from "../components/SEO";
import HomeNessieAsk from "../components/HomeNessieAsk";

const topics = [
  "Restaurants in Inverness",
  "Rainy day ideas",
  "Castles near Inverness",
  "Loch Ness viewpoints",
  "Skye day trips",
  "NC500 planning",
  "Whisky tours",
  "Dolphin watching",
  "Waterfalls",
  "Private drivers",
  "Cruise excursions",
  "Family days out"
];

export default function Explore() {
  return (
    <main className="explore-page">
      <SEO
        title="Explore the Scottish Highlands | Nessie AI"
        description="Explore Inverness, Loch Ness, Skye, NC500, restaurants, whisky, waterfalls, castles and Highland transport with Nessie AI."
      />

      <section className="explore-hero">
        <span className="kicker">Explore the Highlands</span>
        <h1>Find what to do, where to eat and how to get there.</h1>
        <p>
          Search Highland ideas by interest, weather, location or travel style.
          Nessie helps turn vague plans into realistic days out.
        </p>
      </section>

      <section className="explore-grid">
        {topics.map((topic) => (
          <button key={topic} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>
            {topic}
          </button>
        ))}
      </section>

      <HomeNessieAsk />
    </main>
  );
}
