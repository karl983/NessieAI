import DestinationPage from "../components/DestinationPage";

export default function NC500() {
  return (
    <DestinationPage
      kicker="Road trips · Routes · Highland driving"
      title="NC500 Route Planner"
      intro="Build a realistic North Coast 500 itinerary without rushing, backtracking or missing the best stops across the Highlands."
      image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
      cta="Plan NC500"
      transportText="The NC500 needs sensible overnight stops, realistic mileage and awareness of Highland roads. Nessie AI can help structure it properly."
      highlights={[
        { icon: "🚗", title: "Route Planning", text: "Break the route into sensible daily sections." },
        { icon: "🏖️", title: "Best Stops", text: "Beaches, viewpoints, villages, castles and food stops." },
        { icon: "⛽", title: "Fuel & Timing", text: "Avoid poor planning on remote stretches." },
        { icon: "🏨", title: "Overnights", text: "Choose bases that make the trip flow properly." }
      ]}
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
  );
}
