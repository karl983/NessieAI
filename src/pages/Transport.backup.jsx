export default function Transport() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Airport transfers · tours · private drivers</span>
        <h1>Highlands Transport & Private Tours</h1>
        <p>This is the money page. Visitors who need transport are high-intent leads.</p>
      </section>

      <section className="transport-section">
        <div>
          <h2>Request a driver or private tour</h2>
          <p>Airport transfers, Loch Ness, Skye, whisky tours, golf groups, cruise passengers and custom journeys.</p>
        </div>

        <form className="lead-form">
          <input placeholder="Your name" />
          <input placeholder="Email address" />
          <input placeholder="Travel date" />
          <input placeholder="Number of passengers" />
          <textarea placeholder="Where do you need to go?" />
          <button type="button">Send Transport Enquiry</button>
        </form>
      </section>
    </main>
  );
}
