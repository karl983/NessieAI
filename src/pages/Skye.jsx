import DestinationPage from "../components/DestinationPage";
import AttractionImageCard from "../components/AttractionImageCard";
import attractions from "../data/skye";
import { attractionImages } from "../data/attractionImages";
import SEO from "../components/SEO";
import PageLeadSection from "../components/PageLeadSection";

export default function Skye() {
  return (
    <>
      <SEO
        title="Isle of Skye Trip Planner from Inverness | Nessie AI"
        description="Plan Isle of Skye routes from Inverness with realistic timing, top stops, private transport and Highland travel advice."
      />

      <DestinationPage
        kicker="Big scenery · Long drives · Smart planning"
        title="Isle of Skye Trip Planner"
        intro="Skye is spectacular, but bad planning ruins it. Nessie AI helps build realistic routes around travel time, weather, daylight and must-see stops."
        image="/images/attractions/skye/old-man-of-storr.jpg"
        cta="Plan Skye"
        itinerary={{
          title: "A realistic Skye day from Inverness",
          text: "This is not a lazy day. It needs early timing and sensible choices.",
          steps: [
            "Leave Inverness early",
            "Stop at Eilean Donan Castle en route",
            "Focus on two or three key Skye stops",
            "Avoid trying to see the whole island in one day",
            "Return with food stops planned in advance"
          ]
        }}
      />

      <section className="section">
        <span className="kicker">Skye highlights</span>
        <h2>What to see on Skye</h2>

        <div className="card-grid">
          {attractions.map(([emoji, title, description, tag], index) => (
            <AttractionImageCard
              key={title}
              image={attractionImages.skye[index % attractionImages.skye.length]}
              title={title}
              description={description}
              tag={tag}
            />
          ))}
        </div>
      </section>
      <PageLeadSection
        title="Need help planning Skye?"
        text="Skye is spectacular but easy to overpack. Tell us your dates, base and transport situation."
        type="Skye Planning Enquiry"
      />
      
    </>
  );
}
