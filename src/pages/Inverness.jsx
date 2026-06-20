import DestinationPage from "../components/DestinationPage";

export default function Inverness() {
  return (
    <DestinationPage
      kicker="City base · Food · Day trips"
      title="Inverness Travel Guide"
      intro="Use Inverness as your base for Loch Ness, Culloden, Clava Cairns, Fort George, whisky country, Skye day trips and Highland adventures."
      image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200"
      cta="Plan Inverness"
      transportText="Inverness works best when used as a base. Private transfers and local drivers can connect the city with Loch Ness, Skye, distilleries and castles."
      highlights={[
        { icon: "🍽️", title: "Restaurants", text: "Find relaxed cafés, pubs, riverside dining and special dinners." },
        { icon: "🍻", title: "Pubs", text: "Traditional pubs, whisky bars and live music spots." },
        { icon: "🏛️", title: "Attractions", text: "River Ness, cathedral, castle viewpoint, museums and walks." },
        { icon: "🚌", title: "Day Trips", text: "Culloden, Clava Cairns, Fort George, Loch Ness and more." }
      ]}
      itinerary={{
        title: "A strong Inverness base plan",
        text: "Perfect for visitors who want a relaxed Highland base.",
        steps: [
          "Spend your first afternoon exploring Inverness",
          "Use one day for Loch Ness and Urquhart Castle",
          "Use another for Culloden, Clava Cairns and Fort George",
          "Add a whisky or Skye day if time allows",
          "Keep evenings free for food, pubs and riverside walks"
        ]
      }}
    />
  );
}
