import DestinationPage from "../components/DestinationPage";
import SEO from "../components/SEO";

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
      image="/images/destinations/skye.jpg"
      cta="Plan Skye"
      transportText="Skye from Inverness is possible in one day, but it is a long trip. A private driver or guide can make the difference between a rushed day and a brilliant one."
      highlights={[
        { icon: "⛰️", title: "Old Man of Storr", text: "Iconic Skye scenery and one of the island's best-known stops." },
        { icon: "🌿", title: "Quiraing", text: "Dramatic landscapes, winding roads and outstanding views." },
        { icon: "💧", title: "Fairy Pools", text: "Beautiful but busy. Timing matters." },
        { icon: "🌅", title: "One-day Skye", text: "Possible from Inverness, but only with realistic expectations." }
      ]}
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
    </>
  );
}
