const services = [
  ["✈️", "Airport Transfers", "Inverness Airport to hotels, lodges, golf resorts and Highland destinations."],
  ["🚗", "Private Drivers", "Custom routes for Loch Ness, Skye, castles, whisky and scenic days."],
  ["🥃", "Whisky Tours", "Speyside and Highland distillery routes without worrying about driving."],
  ["🏌️", "Golf Transport", "Royal Dornoch, Castle Stuart, Nairn and group golf logistics."],
  ["🛳️", "Cruise Passengers", "Day tours and transfers for visitors arriving into Highland ports."],
  ["💼", "Corporate Travel", "Reliable transport for business visitors, events and premium guests."]
];

export default function Transport() {
  function sendLead(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = encodeURIComponent(
      `Name: ${f.get("name")}\nEmail: ${f.get("email")}\nDate: ${f.get("date")}\nPassengers: ${f.get("passengers")}\nRequest: ${f.get("request")}`
    );
    window.location.href = `mailto:hello@nessieai.co.uk?subject=Nessie AI Transport Enquiry&body=${body}`;
  }

  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Airport transfers · Private tours · Drivers</span>
        <h1>Highlands Transport & Private Tours</h1>
        <p>Airport transfers, private drivers, whisky tours, golf transport and custom Highland journeys.</p>
      </section>

      <section className="section">
        <span className="kicker">Transport options</span>
        <h2>What do you need?</h2>
        <div className="card-grid">
          {services.map(([icon, title, text]) => (
            <article className="feature-card" key={title}>
              <span>{icon}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="transport-section">
        <div>
          <span className="kicker">Send enquiry</span>
          <h2>Request a driver or private tour</h2>
          <p>This opens an email for now. Next step is Cloudflare form/API capture.</p>
        </div>

        <form className="lead-form" onSubmit={sendLead}>
          <h3>Transport Enquiry</h3>
          <input name="name" placeholder="Your name" required />
          <input name="email" placeholder="Email address" required />
          <input name="date" placeholder="Travel date" />
          <input name="passengers" placeholder="Number of passengers" />
          <textarea name="request" placeholder="Where do you need to go?" required />
          <button type="submit">Send Transport Enquiry</button>
        </form>
      </section>
    </main>
  );
}
