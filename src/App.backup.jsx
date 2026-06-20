function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">Inverness · Loch Ness · Skye · NC500</div>

          <h1>Your personal AI travel concierge for the Scottish Highlands.</h1>

          <p className="hero-subtitle">
            Plan smarter trips around Inverness, Loch Ness, Isle of Skye, whisky country,
            castles, airport transfers and private Highland tours.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#concierge">Start planning</a>
            <a className="secondary-btn" href="#transport">Need a driver?</a>
          </div>
        </div>

        <aside className="concierge-card" id="concierge">
          <h2>Ask Nessie AI</h2>
          <p>
            Tell me your dates, group size, interests and whether you need transport.
            I’ll help shape the trip.
          </p>

          <div className="prompt-grid">
            <button>Plan 3 days in Inverness</button>
            <button>Can I visit Skye in one day?</button>
            <button>I need an airport transfer</button>
            <button>Best Loch Ness itinerary</button>
          </div>

          <div className="chat-form">
            <input placeholder="Ask about Inverness, Loch Ness, Skye, NC500..." />
            <button>Send</button>
          </div>
        </aside>
      </section>

      <section className="section">
        <h2>Not another tourist directory. A planning engine.</h2>
        <p>
          Nessie AI should reduce confusion, build realistic plans and turn high-intent
          visitors into bookings, transport enquiries and partner referrals.
        </p>
      </section>

      <section className="transport-section" id="transport">
        <div>
          <h2>Turn visitors into enquiries, not just page views.</h2>
          <p>
            A tourist asking for Skye, Loch Ness, golf, whisky or airport help is not browsing.
            They are a lead.
          </p>
        </div>

        <form className="lead-form">
          <h3>Request travel help</h3>
          <input placeholder="Your name" />
          <input placeholder="Email address" />
          <input placeholder="Travel date" />
          <textarea placeholder="What do you need?" />
          <button type="button">Send enquiry</button>
        </form>
      </section>
    </main>
  );
}

export default App;