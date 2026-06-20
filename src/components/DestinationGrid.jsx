import { Link } from "react-router-dom";

export default function DestinationGrid() {
  const destinations = [
    ["🏙️", "Inverness", "City base, restaurants, pubs and day trips.", "/inverness"],
    ["🏰", "Loch Ness", "Cruises, castles, viewpoints and hidden stops.", "/loch-ness"],
    ["⛰️", "Isle of Skye", "Epic scenery, long drives and realistic route planning.", "/skye"],
    ["🚗", "NC500", "Road-trip routes, stops, fuel, timings and overnights.", "/nc500"],
  ];

  return (
    <div className="card-grid">
      {destinations.map(([emoji, title, text, url]) => (
        <Link className="feature-card" to={url} key={title}>
          <span>{emoji}</span>
          <h3>{title}</h3>
          <p>{text}</p>
        </Link>
      ))}
    </div>
  );
}
