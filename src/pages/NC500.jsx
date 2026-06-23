import DestinationPage from "../components/DestinationPage";
import AttractionImageCard from "../components/AttractionImageCard";
import attractions from "../data/nc500";
import { attractionImages } from "../data/attractionImages";
import SEO from "../components/SEO";
import NessiePageChat from "../components/NessiePageChat";
import PageLeadSection from "../components/PageLeadSection";

export default function NC500() {
  return (
    <>
      <SEO
        title="NC500 Route Planner | North Coast 500 Itinerary Help"
        description="Build a realistic NC500 route with stops, driving advice, overnight planning and Highlands travel support."
      />

      <DestinationPage
        kicker="Road trips · Routes · Highland driving"
        title="NC500 Route Planner"
        intro="Build a realistic North Coast 500 itinerary without rushing, backtracking or missing the best stops across the Highlands."
        image="/images/destinations/nc500.jpg"
        cta="Plan NC500"
        itinerary={{
          title: "A smarter NC500 structure",
          text: "The best NC500 trip is paced, not crammed.",
          steps: [
            "Start or finish in Inverness",
            "Choose overnight stops before building attractions",
            "Keep daily driving time realistic",
            "Plan fuel and food stops in remote sections",
            "Leave room for weather changes and photo stops"
          ]
        }}
      />

      <section className="section">
        <span className="kicker">NC500 highlights</span>
        <h2>Essential NC500 stops</h2>

        <div className="card-grid">
          {attractions.map(([emoji, title, description, tag], index) => (
            <AttractionImageCard
              key={title}
              image={attractionImages.nc500[index % attractionImages.nc500.length]}
              title={title}
              description={description}
              tag={tag}
            />
          ))}
        </div>
      </section>
      <PageLeadSection
        title="Need help planning the NC500?"
        text="Tell us your trip length, overnight stops and whether you need route or transport help."
        type="NC500 Planning Enquiry"
      />
      <NessiePageChat page="nc500" />
    </>
  );
}
