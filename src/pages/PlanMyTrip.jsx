import { useState } from "react";
import SEO from "../components/SEO";
import HomeNessieAsk from "../components/HomeNessieAsk";

export default function PlanMyTrip() {
  const [prompt, setPrompt] = useState("");

  function buildPrompt(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const days = form.get("days");
    const base = form.get("base");
    const transport = form.get("transport");
    const interests = form.getAll("interests").join(", ");
    const group = form.get("group");

    setPrompt(
      `Build me a realistic Scottish Highlands itinerary. I have ${days} day(s), I am based in ${base}, transport: ${transport}, travelling as ${group}, interests: ${interests}. Include realistic travel times, food ideas, weather-aware backup options and tell me if I need transport.`
    );

    setTimeout(() => {
      document.querySelector(".ask-nessie-form input")?.focus();
    }, 100);
  }

  return (
    <main className="plan-my-trip-page">
      <SEO
        title="Plan My Highland Trip | Nessie AI"
        description="Build a personalised Scottish Highlands itinerary for Inverness, Loch Ness, Skye, NC500, whisky, castles, restaurants and transport."
      />

      <section className="plan-trip-hero">
        <span className="kicker">Plan My Trip</span>
        <h1>Build a realistic Highland itinerary.</h1>
        <p>
          Tell Nessie where you are staying, how long you have and what you enjoy.
          Then use the generated prompt in Ask Nessie.
        </p>
      </section>

      <section className="trip-builder-card">
        <form onSubmit={buildPrompt}>
          <label>
            How many days?
            <select name="days" defaultValue="2">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>5</option>
              <option>7</option>
            </select>
          </label>

          <label>
            Where are you based?
            <input name="base" placeholder="Inverness, Portree, Loch Ness, Aviemore..." required />
          </label>

          <label>
            Transport
            <select name="transport" defaultValue="I have a car">
              <option>I have a car</option>
              <option>I need public transport</option>
              <option>I may need a private driver</option>
              <option>I am arriving by cruise ship</option>
            </select>
          </label>

          <label>
            Who is travelling?
            <select name="group" defaultValue="a couple">
              <option>a solo traveller</option>
              <option>a couple</option>
              <option>a family with children</option>
              <option>a group of friends</option>
              <option>older travellers</option>
            </select>
          </label>

          <div className="trip-checks">
            {["Castles", "Whisky", "Food", "Walks", "Wildlife", "Photography", "Hidden gems", "Rainy day ideas"].map((item) => (
              <label key={item}>
                <input type="checkbox" name="interests" value={item} />
                {item}
              </label>
            ))}
          </div>

          <button type="submit">Create Nessie prompt</button>
        </form>

        {prompt && (
          <div className="generated-trip-prompt">
            <strong>Copy this into Ask Nessie:</strong>
            <p>{prompt}</p>
          </div>
        )}
      </section>

      <HomeNessieAsk />
    </main>
  );
}
