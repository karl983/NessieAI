import SEO from "../components/SEO";
import HomeNessieAsk from "../components/HomeNessieAsk";

export default function TripPlanner() {
  return (
    <main className="trip-planner-page">
      <SEO
        title="Scottish Highlands AI Trip Planner | Nessie AI"
        description="Build a personalised Scottish Highlands itinerary for Inverness, Loch Ness, Skye and the NC500 with Nessie AI."
      />

      <section className="planner-hero-v2">
        <span className="kicker">AI Trip Planner</span>
        <h1>Tell Nessie what kind of Highland trip you want.</h1>
        <p>
          Ask for one day in Inverness, a rainy day plan, a Skye route, a whisky
          trip, a family itinerary or a private-driver friendly route.
        </p>
      </section>

      <section className="planner-prompts">
        <div>“I have 2 days in Inverness.”</div>
        <div>“Plan Skye from Inverness.”</div>
        <div>“What should I do if it rains?”</div>
        <div>“I need transport for Loch Ness.”</div>
      </section>

      <HomeNessieAsk />
    </main>
  );
}
