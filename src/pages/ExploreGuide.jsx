import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import HomeNessieAsk from "../components/HomeNessieAsk";
import { exploreGuides } from "../data/exploreGuides";

export default function ExploreGuide() {
  const { category } = useParams();
  const guide = exploreGuides[category];

  if (!guide) {
    return (
      <main className="explore-guide-page">
        <section className="explore-guide-hero">
          <h1>Guide not found</h1>
          <Link to="/explore">Back to Explore</Link>
        </section>
      </main>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    name: guide.metaTitle,
    description: guide.description,
    url: `https://nessieai.co.uk/explore/${category}`
  };

  return (
    <main className="explore-guide-page">
      <SEO title={guide.metaTitle} description={guide.description} schema={schema} />

      <section className="explore-guide-hero">
        <span className="kicker">Explore the Highlands</span>
        <h1>{guide.hero}</h1>
        <p>{guide.intro}</p>
      </section>

      <section className="explore-guide-layout">
        <div className="explore-guide-main">
          {guide.sections.map(([heading, text]) => (
            <article className="explore-guide-card" key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>

        <aside className="explore-guide-side">
          <span className="kicker">Local tips</span>
          <h2>Before you go</h2>
          <ul>
            {guide.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          <Link className="explore-guide-cta" to="/trip-planner">
            Build this into a trip
          </Link>
          <Link className="explore-guide-cta secondary" to="/transport">
            Need transport?
          </Link>
        </aside>
      </section>

      <section className="explore-guide-ask">
        <HomeNessieAsk />
      </section>

      <section className="explore-guide-links">
        <Link to="/explore/restaurants">Restaurants</Link>
        <Link to="/explore/castles">Castles</Link>
        <Link to="/explore/loch-ness">Loch Ness</Link>
        <Link to="/explore/skye">Skye</Link>
        <Link to="/explore/nc500">NC500</Link>
        <Link to="/explore/transport">Transport</Link>
        <Link to="/explore/rainy-days">Rainy Days</Link>
        <Link to="/explore/whisky">Whisky</Link>
      </section>
    </main>
  );
}
