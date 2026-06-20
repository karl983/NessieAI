export default function Planner() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">AI itinerary builder</span>
        <h1>Build Your Highlands Trip</h1>
        <p>Tell Nessie AI when you are visiting, who is travelling and what you enjoy.</p>
      </section>

      <section className="transport-section">
        <div>
          <h2>Your trip details</h2>
          <p>Version 1 captures the planning structure. Next we connect this to the AI engine.</p>
        </div>

        <form className="lead-form">
          <input placeholder="Arrival date" />
          <input placeholder="Departure date" />
          <input placeholder="Adults" />
          <input placeholder="Children" />
          <input placeholder="Budget level: low / mid / premium" />
          <textarea placeholder="Interests: whisky, castles, wildlife, food, hiking, golf..." />
          <button type="button">Generate My Itinerary</button>
        </form>
      </section>
    </main>
  );
}
