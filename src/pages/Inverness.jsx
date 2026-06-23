import DestinationPage from "../components/DestinationPage";
import AttractionImageCard from "../components/AttractionImageCard";
import PageLeadSection from "../components/PageLeadSection";
import attractions from "../data/inverness";
import { attractionImages } from "../data/attractionImages";
import SEO from "../components/SEO";
import NessiePageChat from "../components/NessiePageChat";

export default function Inverness() {
  return (
    <>
      <SEO
        title="Inverness Travel Guide | Nessie AI Highlands Concierge"
        description="Plan Inverness restaurants, pubs, attractions, Culloden, Loch Ness day trips and Highland transport with Nessie AI."
      />
    <>
      <DestinationPage
        kicker="City base · Food · Day trips"
        title="Inverness Travel Guide"
        intro="Use Inverness as your base for Loch Ness, Culloden, Clava Cairns, Fort George, whisky country, Skye day trips and Highland adventures."
        image="/images/destinations/inverness.jpg"
        cta="Plan Inverness"
        transportText="Need transport around Inverness, from the airport, or out to Loch Ness, Skye, whisky country or castles?"
        highlights={[
          { icon: "🍽️", title: "Food & drink", text: "Restaurants, pubs, cafés and relaxed Highland evenings." },
          { icon: "🏛️", title: "History", text: "Culloden, Clava Cairns, castles and heritage stops." },
          { icon: "🌊", title: "Walks", text: "River Ness, canal paths and scenic short routes." },
          { icon: "🚗", title: "Day trips", text: "Loch Ness, Fort George, Cawdor and whisky country." }
        ]}
        itinerary={{
          title: "A strong Inverness base plan",
          text: "Perfect for visitors who want a relaxed Highland base.",
          steps: [
            "Spend your first afternoon exploring Inverness",
            "Use one day for Loch Ness and Urquhart Castle",
            "Use another for Culloden, Clava Cairns and Fort George",
            "Add whisky country or Skye if time allows",
            "Keep evenings free for food, pubs and riverside walks"
          ]
        }}
      />

      
      <section className="section">
        <span className="kicker">Local highlights</span>
        <h2>Explore Inverness</h2>

        <div className="card-grid">
          {attractions.map(([emoji, title, description, tag], index) => (
            <AttractionImageCard
              key={title}
              image={attractionImages.inverness[index % attractionImages.inverness.length]}
              title={title}
              description={description}
              tag={tag}
            />
          ))}
        </div>
      </section>


      <PageLeadSection
        title="Need help planning Inverness?"
        text="Tell us your dates, interests and whether you need transport. Nessie AI can help shape your trip."
        type="Inverness Planning Enquiry"
      />
      <NessiePageChat page="inverness" />
    </>
      <NessiePageChat page="inverness" />
    </>
  );
}
