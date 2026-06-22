import { Link } from "react-router-dom";

export default function CTASection({
  kicker = "Need help?",
  title = "Want this planned properly?",
  text = "Nessie AI can help turn ideas into a realistic Highland itinerary.",
  button = "Plan My Trip",
  link = "/planner"
}) {
  return (
    <section className="premium-cta">
      <div>
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="btn primary" to={link}>{button}</Link>
    </section>
  );
}
