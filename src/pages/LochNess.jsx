import DestinationPage from "../components/DestinationPage";

export default function LochNess() {
  return (
    <DestinationPage
      kicker="Castles · Cruises · Viewpoints"
      title="Loch Ness Planner"
      intro="Plan a Loch Ness day that actually works: castles, cruises, quiet viewpoints, villages, waterfalls and easy routes from Inverness."
      image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200"
      cta="Plan Loch Ness"
      transportText="Loch Ness is easy to underestimate. A local driver can help you combine Urquhart Castle, cruise points, Dores, Foyers and hidden stops without wasting the day."
      highlights={[
        { icon: "🏰", title: "Urquhart Castle", text: "The classic Loch Ness stop with dramatic ruins and loch views." },
        { icon: "⛴️", title: "Loch Cruises", text: "Boat trips from key points around Loch Ness." },
        { icon: "🌊", title: "Dores Beach", text: "A quieter loch-side stop close to Inverness." },
        { icon: "🌲", title: "Foyers", text: "Waterfalls, woodland walks and south-side scenery." }
      ]}
      itinerary={{
        title: "A strong one-day Loch Ness route",
        text: "A simple route for visitors based in Inverness.",
        steps: [
          "Start in Inverness after breakfast",
          "Visit Urquhart Castle before the busiest part of the day",
          "Add a Loch Ness cruise if weather and timings work",
          "Stop at Dores Beach for a quieter view",
          "Return via a food or whisky stop depending on interests"
        ]
      }}
    />
  );
}
