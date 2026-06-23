import { Link } from "react-router-dom";

export default function BookableMoments({ title = "Turn your plan into a trip" }) {
  const items = [
    ["🚕", "Airport transfer", "Arriving at Inverness Airport and need onward travel?"],
    ["🚗", "Private driver", "Custom Highland day trips without the stress of driving."],
    ["🥃", "Whisky tour", "Speyside and Highland distillery routes with transport."],
    ["⛰️", "Skye day trip", "A long day made easier with proper planning and a driver."]
  ];

  return (
    <section className="bookable-moments">
      <div className="bookable-head">
        <span className="kicker">Bookable moments</span>
        <h2>{title}</h2>
        <p>These are the points where visitors usually need real local help.</p>
      </div>

      <div className="bookable-grid">
        {items.map(([icon, heading, text]) => (
          <Link className="bookable-card" to="/transport" key={heading}>
            <span>{icon}</span>
            <h3>{heading}</h3>
            <p>{text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
