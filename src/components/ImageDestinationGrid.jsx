import { Link } from "react-router-dom";

const destinations = [
  {
    title: "Inverness",
    text: "City base, restaurants, pubs, attractions and Highland day trips.",
    link: "/inverness",
    image: "/images/destinations/inverness.jpg"
  },
  {
    title: "Loch Ness",
    text: "Castles, cruises, viewpoints, villages and hidden loch-side stops.",
    link: "/loch-ness",
    image: "/images/destinations/loch-ness.jpg"
  },
  {
    title: "Isle of Skye",
    text: "Epic scenery, long drives, must-see stops and realistic route planning.",
    link: "/skye",
    image: "/images/destinations/skye.jpg"
  },
  {
    title: "NC500",
    text: "Road-trip routes, scenic stops, driving advice and overnight planning.",
    link: "/nc500",
    image: "/images/destinations/nc500.jpg"
  }
];

export default function ImageDestinationGrid() {
  return (
    <div className="image-destination-grid">
      {destinations.map((item) => (
        <Link className="image-destination-card" to={item.link} key={item.title}>
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
