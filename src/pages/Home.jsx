import SEO from "../components/SEO";
import ImageDestinationGrid from "../components/ImageDestinationGrid";
import HomeNessieAsk from "../components/HomeNessieAsk";

export default function Home() {
  return (
    <main className="home-page-clean">
      <SEO
        title="Nessie AI | Inverness & Scottish Highlands AI Travel Concierge"
        description="Plan Inverness, Loch Ness, Isle of Skye and NC500 trips with Nessie AI."
      />

      <section className="clean-hero">
        <div className="clean-hero-content">
          <span className="kicker">Inverness · Loch Ness · Skye · NC500</span>

          <h1>Your AI travel concierge for the Scottish Highlands.</h1>

          <p>
            Plan better days around Inverness, Loch Ness, Isle of Skye and the NC500.
            Get realistic routes, local-style ideas and transport help when you need it.
          </p>
        </div>
      </section>

      <HomeNessieAsk />

      <section className="clean-destinations move-up">
        <span className="kicker">Start with a destination</span>
        <h2>Choose the part of the Highlands you want to explore.</h2>
        <ImageDestinationGrid />
      </section>
    </main>
  );
}
