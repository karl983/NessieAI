function App() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <div className="eyebrow">
            INVERNESS • LOCH NESS • ISLE OF SKYE • NC500
          </div>

          <h1>
            Plan the perfect Scottish Highlands trip in minutes.
          </h1>

          <p className="hero-subtitle">
            Discover hidden gems, build personalised itineraries, find trusted
            local drivers and uncover the very best of Inverness, Loch Ness,
            Skye and the Highlands with Nessie AI.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#planner">
              Plan My Trip
            </a>

            <a className="secondary-btn" href="#transport">
              Find a Driver
            </a>
          </div>

          <div className="hero-proof">
            <div>
              <strong>24/7</strong>
              <span>Travel Planning</span>
            </div>

            <div>
              <strong>Local</strong>
              <span>Highlands Knowledge</span>
            </div>

            <div>
              <strong>Free</strong>
              <span>Trip Concierge</span>
            </div>
          </div>
        </div>

        <aside className="concierge-card">
          <h2>Ask Nessie AI</h2>

          <p>
            Tell me your dates, interests and travel style.
          </p>

          <div className="prompt-grid">
            <button>Plan 3 days in Inverness</button>
            <button>Can I visit Skye in one day?</button>
            <button>Best Loch Ness itinerary</button>
            <button>Whisky tour ideas</button>
          </div>

          <div className="chat-form">
            <input placeholder="Ask Nessie AI anything..." />
            <button>Send</button>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="center-heading">
          <span className="section-kicker">
            Popular Highland Experiences
          </span>

          <h2>
            Explore the very best of the Scottish Highlands
          </h2>

          <p>
            Start with a destination and let Nessie AI build the perfect trip.
          </p>
        </div>

        <div className="trip-grid">
          <article className="trip-card">
            <h3>🏰 Loch Ness</h3>
            <p>Castles, cruises, viewpoints and hidden gems.</p>
          </article>

          <article className="trip-card">
            <h3>⛰️ Isle of Skye</h3>
            <p>Old Man of Storr, Quiraing and Fairy Pools.</p>
          </article>

          <article className="trip-card">
            <h3>🥃 Whisky Trails</h3>
            <p>Discover the best distilleries in Scotland.</p>
          </article>

          <article className="trip-card">
            <h3>🚗 NC500</h3>
            <p>Plan a realistic North Coast 500 adventure.</p>
          </article>

          <article className="trip-card">
            <h3>🏌️ Golf Tours</h3>
            <p>Royal Dornoch, Castle Stuart and more.</p>
          </article>

          <article className="trip-card">
            <h3>🏛️ Castles & History</h3>
            <p>Culloden, Cawdor Castle and Highland heritage.</p>
          </article>
        </div>
      </section>

      <section className="transport-section" id="planner">
        <div className="transport-content">
          <span className="section-kicker">
            Build Your Trip
          </span>

          <h2>
            Let Nessie AI create your perfect itinerary.
          </h2>

          <p>
            Tell us what you enjoy and we'll build a Highlands adventure around it.
          </p>
        </div>

        <form className="lead-form">
          <h3>Trip Planner</h3>

          <input placeholder="Arrival Date" />
          <input placeholder="Departure Date" />
          <input placeholder="Adults" />
          <input placeholder="Children" />

          <textarea placeholder="Whisky, castles, hiking, golf, food, wildlife..." />

          <button type="button">
            Generate My Trip
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
