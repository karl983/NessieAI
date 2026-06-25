import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import LeadCapture from "../components/LeadCapture";

const services = [
  {
    title: "Private Drivers",
    slug: "private-drivers",
    image: "/images/transport/transport-driver.jpg",
    text: "Private Highland drivers for Loch Ness, Skye, castles, whisky stops, golf days and custom routes."
  },
  {
    title: "Airport Transfers",
    slug: "airport-transfers",
    image: "/images/transport/airport-transfers.jpg",
    text: "Inverness Airport pickups and drop-offs for hotels, lodges, groups and onward Highland travel."
  },
  {
    title: "Cruise Transfers",
    slug: "cruise-transfers",
    image: "/images/transport/cruise-transfers.jpg",
    text: "Transfers and day-trip planning for cruise passengers arriving into Invergordon and nearby ports."
  },
  {
    title: "Golf Transfers",
    slug: "golf-transfers",
    image: "/images/transport/golf-transfers.jpg",
    text: "Golf transport for Royal Dornoch, Castle Stuart, Nairn, Brora and Highland golf routes."
  },
  {
    title: "Corporate Travel",
    slug: "corporate-travel",
    image: "/images/transport/corporate-travel.jpg",
    text: "Reliable executive travel for business visitors, meetings, private aviation and premium guest movement."
  },
  {
    title: "Whisky Tours",
    slug: "whisky-tours",
    image: "/images/transport/whisky-tours.jpg",
    text: "Driver-led whisky days around Tomatin, Glen Ord, Speyside and Highland distillery routes."
  }
];

export default function Transport() {
  return (
    <main className="destination-page-clean">
      <SEO
        title="Inverness Transport, Private Drivers & Highland Transfers | Nessie AI"
        description="Request Inverness airport transfers, private drivers, cruise transfers, golf transport, corporate travel and whisky tour transport."
      />

      <section
        className="clean-destination-hero"
        style={{ "--hero-image": `url(/images/transport/transport-driver.jpg)` }}
      >
        <div className="clean-destination-content">
          <span className="kicker">Transport · Drivers · Transfers</span>
          <h1>Highland transport without the hassle.</h1>
          <p>
            Airport transfers, private drivers, cruise pickups, golf transport, whisky tours
            and custom Highland routes around Inverness, Loch Ness, Skye and the NC500.
          </p>
        </div>
      </section>

      <section className="section">
        <span className="kicker">Transport options</span>
        <h2>What do you need?</h2>

        <div className="transport-card-grid">
          {services.map((service) => (
            <Link className="transport-service-card" key={service.title} to={`/transport/${service.slug}`}>
              <img src={service.image} alt={service.title} />
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="transport-section money-section">
        <div>
          <span className="kicker">Transport enquiry</span>
          <h2>Request Highland transport.</h2>
          <p>
            Tell us your date, pickup point, destination, group size and what kind of trip you need.
          </p>
        </div>

        <LeadCapture type="Transport Enquiry" button="Send Transport Enquiry" />
      </section>
    </main>
  );
}
