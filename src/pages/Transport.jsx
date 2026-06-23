import SEO from "../components/SEO";
import LeadCapture from "../components/LeadCapture";

const services = [
  ["✈️", "Airport Transfers", "Inverness Airport to hotels, lodges, golf resorts and Highland destinations."],
  ["🚗", "Private Drivers", "Custom routes for Loch Ness, Skye, castles, whisky and scenic days."],
  ["🥃", "Whisky Tours", "Speyside and Highland distillery routes without worrying about driving."],
  ["🏌️", "Golf Transport", "Royal Dornoch, Castle Stuart, Nairn and group golf logistics."],
  ["🛳️", "Cruise Passengers", "Day tours and transfers for visitors arriving into Highland ports."],
  ["💼", "Corporate Travel", "Reliable transport for business visitors, events and premium guests."]
];

export default function Transport() {
  return (
    <main className="page">
      <SEO
        title="Inverness Airport Transfers & Highlands Private Drivers | Nessie AI"
        description="Request Inverness airport transfers, private drivers, Loch Ness tours, Skye transport, whisky tours and Highland travel help."
      />

      <section className="page-hero transport-hero">
        <span className="kicker">Transport · Transfers · Private tours</span>
        <h1>Need a driver in the Highlands?</h1>
        <p>
          Airport transfers, Loch Ness trips, Isle of Skye days, whisky tours,
          golf transport and custom private Highland journeys.
        </p>
      </section>

      <section className="section">
        <span className="kicker">Popular requests</span>
        <h2>What visitors usually need.</h2>

        <div className="card-grid">
          {services.map(([icon, title, text]) => (
            <article className="feature-card" key={title}>
              <span>{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="transport-section money-section">
        <div>
          <span className="kicker">Send enquiry</span>
          <h2>Request transport help.</h2>
          <p>
            Tell us where you are going, when you are travelling and how many
            people are in your group. For MVP this opens an email enquiry.
          </p>
        </div>

        <LeadCapture type="Transport Enquiry" button="Send Transport Enquiry" />
      </section>
    </main>
  );
}
