export default function Partners() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Partner network</span>
        <h1>Work with Nessie AI</h1>
        <p>Drivers, guides, hotels, restaurants and activity providers can join the Highlands concierge network.</p>
      </section>

      <section className="section">
        <div className="card-grid">
          <article className="feature-card"><span>🚗</span><h3>Drivers</h3><p>Receive transport and private tour enquiries.</p></article>
          <article className="feature-card"><span>🏨</span><h3>Hotels</h3><p>Help guests discover routes, tours and local experiences.</p></article>
          <article className="feature-card"><span>🥃</span><h3>Experiences</h3><p>Promote whisky, wildlife, castles, food and outdoor activities.</p></article>
          <article className="feature-card"><span>🍽️</span><h3>Restaurants</h3><p>Be discovered by visitors looking for trusted local recommendations.</p></article>
        </div>
      </section>

      <section className="transport-section">
        <div>
          <span className="kicker">Apply</span>
          <h2>Become a local partner</h2>
          <p>Tell us what you offer and where you operate.</p>
        </div>

        <form className="lead-form" onSubmit={(e) => {
          e.preventDefault();
          const f = new FormData(e.currentTarget);
          const body = encodeURIComponent(`Business: ${f.get("business")}\nContact: ${f.get("contact")}\nEmail: ${f.get("email")}\nOffer: ${f.get("offer")}`);
          window.location.href = `mailto:hello@nessieai.co.uk?subject=Nessie AI Partner Application&body=${body}`;
        }}>
          <input name="business" placeholder="Business name" required />
          <input name="contact" placeholder="Contact name" required />
          <input name="email" placeholder="Email address" required />
          <textarea name="offer" placeholder="What do you offer?" required />
          <button type="submit">Apply to Partner</button>
        </form>
      </section>
    </main>
  );
}
