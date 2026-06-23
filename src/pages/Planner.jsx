import { useState } from "react";
import SEO from "../components/SEO";

export default function Planner() {
  const [plan, setPlan] = useState(null);

  function generatePlan(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const base = data.get("base") || "Inverness";
    const interests = data.get("interests") || "scenery, castles and local food";
    const car = data.get("car") || "not specified";

    setPlan({
      title: `Your starter Highlands plan from ${base}`,
      days: [
        `Day 1: Arrive in ${base}. Keep it light: explore locally, get your bearings and enjoy a relaxed evening.`,
        `Day 2: Loch Ness route: Urquhart Castle, cruise option, Dores Beach and scenic viewpoints.`,
        `Day 3: Choose Skye, whisky country, Culloden/Clava Cairns or an NC500 section based on your interests: ${interests}.`,
        `Transport note: Car status is "${car}". If you do not have a car, request transport before committing to longer routes.`
      ]
    });
  }

  return (
    <main className="page">
      <SEO
        title="Scottish Highlands AI Trip Planner | Nessie AI"
        description="Build a personalised Inverness, Loch Ness, Skye or NC500 itinerary with Nessie AI."
      />

      <section className="page-hero">
        <span className="kicker">AI itinerary builder</span>
        <h1>Build a realistic Highlands trip.</h1>
        <p>
          Tell Nessie AI where you are staying, when you are travelling and what you enjoy.
          This starter planner helps shape a route before the full AI engine connects.
        </p>
      </section>

      <section className="planner-layout">
        <form className="lead-form premium-form" onSubmit={generatePlan}>
          <h3>Your trip details</h3>

          <input name="arrival" placeholder="Arrival date" />
          <input name="departure" placeholder="Departure date" />
          <input name="base" placeholder="Where are you staying? Inverness, Skye, touring..." />
          <input name="people" placeholder="Number of people" />
          <input name="car" placeholder="Do you have a car? Yes / No" />
          <input name="budget" placeholder="Budget: simple / mid-range / premium" />

          <textarea name="interests" placeholder="Interests: whisky, castles, scenery, food, hiking, wildlife, golf..." />

          <button type="submit">Generate Starter Plan</button>
        </form>

        <div className="itinerary-preview premium-preview">
          <span className="kicker">Nessie preview</span>

          {!plan ? (
            <>
              <h2>Your plan appears here.</h2>
              <p>
                Use the form to generate a quick starter itinerary. The next build connects
                this to real AI, live weather and transport enquiry routing.
              </p>

              <div className="preview-day">
                <strong>What Nessie checks</strong>
                <p>Travel time, base location, car access, trip length, interests and whether a day is realistic.</p>
              </div>
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
