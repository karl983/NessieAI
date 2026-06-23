import DestinationPage from "../components/DestinationPage";
import AttractionImageCard from "../components/AttractionImageCard";
import CTASection from "../components/CTASection";
import attractions from "../data/lochness";
import { attractionImages } from "../data/attractionImages";
import SEO from "../components/SEO";

export default function LochNess() {
  return (
    <>
      <SEO
        title="Loch Ness Planner | Castles, Cruises & Highland Routes"
        description="Plan Loch Ness trips with Urquhart Castle, cruises, Dores Beach, Foyers and transport from Inverness."
      />
    <>
      <DestinationPage
        kicker="Castles · Cruises · Viewpoints"
        title="Loch Ness Planner"
        intro="Plan a Loch Ness day that actually works: castles, cruises, quiet viewpoints, villages, waterfalls and easy routes from Inverness."
        image="/images/destinations/loch-ness.jpg"
        cta="Plan Loch Ness"
        transportText="Loch Ness is easy to underestimate. A local driver can help combine Urquhart Castle, cruise points, Dores, Foyers and hidden stops without wasting the day."
        highlights={[
          { icon: "🏰", title: "Urquhart Castle", text: "The classic Loch Ness stop with dramatic ruins and loch views." },
          { icon: "⛴️", title: "Cruises", text: "Boat trips that show the scale of the loch." },
          { icon: "🌊", title: "Dores", text: "A quieter local favourite near Inverness." },
          { icon: "🌲", title: "Foyers", text: "Waterfalls, woodland and south-side scenery." }
        ]}
        itinerary={{
          title: "A strong one-day Loch Ness route",
          text: "A simple route for visitors based in Inverness.",
          steps: [
            "Start in Inverness after breakfast",
            "Visit Urquhart Castle before peak crowds",
            "Add a Loch Ness cruise if weather and timings work",
            "Stop at Dores Beach for a quieter view",
            "Return via a food or whisky stop depending on interests"
          ]
        }}
      />

      <section className="section">
        <span className="kicker">Loch Ness highlights</span>
        <h2>What to see around Loch Ness</h2>

        <div className="card-grid">
          {attractions.map(([emoji, title, description, tag], index) => (
            <AttractionImageCard
              key={title}
              image={attractionImages.lochness[index % attractionImages.lochness.length]}
              title={title}
              description={description}
              tag={tag}
            />
          ))}
        </div>
      </section>

      <CTASection
        kicker="High-intent visitor?"
        title="Need a Loch Ness driver or private tour?"
        text="This is one of the first pages that can generate real transport leads."
        button="Request Loch Ness Transport"
        link="/transport"
      />
    </>
    </>
  );
}
