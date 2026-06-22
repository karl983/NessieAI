import { useState } from "react";
import SEO from "../components/SEO";

export default function Tomorrow() {
  const [result, setResult] = useState(null);

  function buildDay(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const base = f.get("base") || "Inverness";
    const car = f.get("car") || "not sure";
    const style = f.get("style") || "scenery, food and easy exploring";

    setResult({
      title: `Tomorrow from ${base}`,
      plan: [
        `Morning: Start with a realistic nearby route from ${base}, avoiding overpacked travel.`,
        `Afternoon: Build around ${style}, with a backup indoor option if weather turns.`,
        `Evening: Keep it simple: food, riverside walk, whisky bar or relaxed local stop.`,
        `Transport note: Car status: ${car}. If no car, request a driver before committing to long-distance routes.`
      ]
    });
  }

  return (
    <>
      <SEO
        title="What Should I Do Tomorrow in Inverness? | Nessie AI"
        description="Get fast Highlands day trip ideas for Inverness, Loch Ness, Skye and nearby attractions."
      />
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Live-style trip help</span>
        <h1>What should I do tomorrow?</h1>
        <p>The fastest way for tourists already in the Highlands to get a useful plan.</p>
      </section>

      <section className="planner-layout">
        <form className="lead-form" onSubmit={buildDay}>
          <h3>Tomorrow Planner</h3>
          <input name="base" placeholder="Where are you staying? Inverness, Skye, Fort Augustus..." />
          <input name="people" placeholder="How many people?" />
          <input name="car" placeholder="Do you have a car? Yes / No" />
          <input name="weather" placeholder="Weather concern? Rain, wind, low cloud..." />
          <textarea name="style" placeholder="What do you like? Scenery, castles, whisky, food, wildlife, walks..." />
          <button type="submit">Build Tomorrow</button>
        </form>

        <div className="itinerary-preview">
          <span className="kicker">Nessie suggestion</span>
          {!result ? (
            <>
              <h2>Your tomorrow plan appears here.</h2>
              <p>This is the high-conversion tourist use case: people already there, ready to spend.</p>
            </>
          ) : (
            <>
              <h2>{result.title}</h2>
              {result.plan.map((item) => (
                <div className="preview-day" key={item}>
                  <p>{item}</p>
                </div>
              ))}
              <a className="btn primary" href="/transport">Need a driver?</a>
            </>
          )}
        </div>
      </section>
    </main>
    </>
  );
}
