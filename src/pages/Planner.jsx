import { useState } from "react";
import SEO from "../components/SEO";
import LeadCapture from "../components/LeadCapture";

export default function Planner() {
  const [plan, setPlan] = useState(null);

  function generatePlan(e) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const base = data.get("base") || "Inverness";
    const interests = data.get("interests") || "scenery, castles and local food";
    const car = (data.get("car") || "not specified").toLowerCase();
    const people = data.get("people") || "your group";

    const noCar = car.includes("no");

    setPlan({
      title: `Your Highlands plan from ${base}`,
      summary: noCar
        ? "Because you do not have a car, Nessie recommends focusing on Inverness, Loch Ness and bookable private transport for longer routes."
        : "Because you have access to transport, Nessie can build a wider Highlands route with Loch Ness, castles, whisky country or Skye.",
      days: [
        {
          day: "Day 1",
          title: `${base} arrival and local exploring`,
          points: [
            "Keep the first day light and realistic.",
            "Explore the city/base area, food stops and short walks.",
            "Avoid committing to a long-distance route immediately after arrival."
          ]
        },
        {
          day: "Day 2",
          title: "Loch Ness, castles and viewpoints",
          points: [
            "Urquhart Castle early if possible.",
            "Add a Loch Ness cruise if weather and timing work.",
            "Use Dores Beach or Foyers as a quieter scenic stop."
          ]
        },
        {
          day: "Day 3",
          title: `Tailored around ${interests}`,
          points: noCar
            ? [
                "Choose a private driver, guided tour or shorter local route.",
                "Good options: Culloden, Clava Cairns, Cawdor Castle, Loch Ness or whisky country.",
                "Skye is possible but should not be attempted casually without transport."
              ]
            : [
                "Choose Skye, whisky country, Culloden/Clava Cairns or an NC500 section.",
                "Keep the route focused instead of trying to see everything.",
                "Build in food stops, weather backup and daylight limits."
              ]
        }
      ],
      transport: noCar
        ? "Transport recommended. Submit a transport enquiry before committing to Skye, whisky country or NC500 routes."
        : "Transport optional. If you want a relaxed day without driving, request a private driver or guided route."
    });
  }

  return (
    <main className="destination-page-clean">
      <SEO
        title="Scottish Highlands AI Trip Planner | Nessie AI"
        description="Build a personalised Inverness, Loch Ness, Skye or NC500 itinerary with Nessie AI."
      />

      <section
        className="clean-destination-hero"
        style={{ "--hero-image": `url(/images/home/hero.jpg)` }}
      >
        <div className="clean-destination-content">
          <span className="kicker">AI itinerary builder</span>
          <h1>Build a realistic Highlands trip.</h1>
          <p>
            Tell Nessie where you are staying, when you are travelling, what you enjoy,
            and whether you have a car. Get a sensible starter route in seconds.
          </p>

          <div className="actions">
            <a className="btn primary" href="#planner-form">Start planning</a>
          </div>
        </div>
      </section>

      <section className="planner-layout" id="planner-form">
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
              <h2>Your starter plan appears here.</h2>
              <p>
                This is the MVP planner. It already behaves intelligently enough to guide visitors,
                and next we connect it to the full AI concierge.
              </p>

              <div className="preview-day">
                <strong>What Nessie checks</strong>
                <p>Base location, travel time, interests, car access, group size and whether the route is realistic.</p>
              </div>
            </>
          ) : (
            <>
              <h2>{plan.title}</h2>
              <p>{plan.summary}</p>

              {plan.days.map((item) => (
                <div className="preview-day" key={item.day}>
                  <strong>{item.day}: {item.title}</strong>
                  <ul className="mini-plan-list">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="preview-day transport-note">
                <strong>Transport recommendation</strong>
                <p>{plan.transport}</p>
              </div>

              <a className="btn primary" href="/transport">Request transport help</a>
            </>
          )}
        </div>
      </section>

      <section className="transport-section money-section">
        <div>
          <span className="kicker">Want help with this trip?</span>
          <h2>Send your plan to Nessie.</h2>
          <p>
            If you want help shaping this route, send your details and we’ll pick it up as a planning enquiry.
          </p>
        </div>

        <LeadCapture type="Planner Enquiry" button="Send Planner Enquiry" />
      </section>
    </main>
  );
}
