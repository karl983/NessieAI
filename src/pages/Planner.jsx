import { useState } from "react";

export default function Planner() {
  const [plan, setPlan] = useState(null);

  function generatePlan(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const base = data.get("base") || "Inverness";
    const interests = data.get("interests") || "castles, scenery and local food";

    setPlan({
      title: `Your Highlands plan from ${base}`,
      days: [
        `Day 1: Arrive in ${base}. Explore locally, enjoy a relaxed dinner and ask Nessie for nearby hidden gems.`,
        `Day 2: Loch Ness route: Urquhart Castle, cruise option, Dores Beach and scenic viewpoints.`,
        `Day 3: Choose Skye, whisky country, Culloden/Clava Cairns or an NC500 section based on: ${interests}.`
      ]
    });
  }

  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">AI itinerary builder</span>
        <h1>Build Your Highlands Trip</h1>
        <p>Enter the basics and Nessie AI will create a starter itinerary. Full AI connection comes next.</p>
      </section>

      <section className="planner-layout">
        <form className="lead-form" onSubmit={generatePlan}>
          <h3>Trip Details</h3>
          <input name="arrival" placeholder="Arrival date" />
          <input name="departure" placeholder="Departure date" />
          <input name="adults" placeholder="Adults" />
          <input name="children" placeholder="Children" />
          <input name="budget" placeholder="Budget: simple / mid-range / premium" />
          <input name="base" placeholder="Base: Inverness / Skye / touring" />
          <textarea name="interests" placeholder="Interests: whisky, castles, wildlife, food, hiking, golf..." />
          <button type="submit">Generate My Itinerary</button>
        </form>

        <div className="itinerary-preview">
          <span className="kicker">Your itinerary</span>
          {!plan ? (
            <>
              <h2>Your itinerary will appear here</h2>
              <p>Use the form to generate a starter Highlands plan.</p>
            </>
          ) : (
            <>
              <h2>{plan.title}</h2>
              {plan.days.map((day) => (
                <div className="preview-day" key={day}>
                  <p>{day}</p>
                </div>
              ))}
              <a className="btn primary" href="/transport">Need transport for this?</a>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
