import { useState } from "react";
import { Link } from "react-router-dom";

export default function MiniConcierge() {
  const [answer, setAnswer] = useState("");

  function handleAsk(e) {
    e.preventDefault();
    const query = new FormData(e.currentTarget).get("query") || "";

    if (query.toLowerCase().includes("skye")) {
      setAnswer("Skye is stunning but a long day from Inverness. If you have no car, request transport or use a guided tour.");
    } else if (query.toLowerCase().includes("loch")) {
      setAnswer("For Loch Ness, start with Urquhart Castle, add a cruise if timings work, then consider Dores or Foyers.");
    } else if (query.toLowerCase().includes("nc500")) {
      setAnswer("For the NC500, avoid rushing. Plan overnight stops first, then build attractions around the route.");
    } else if (query.toLowerCase().includes("driver") || query.toLowerCase().includes("transport")) {
      setAnswer("Transport is a high-value enquiry. Tell us your date, group size and destination on the Transport page.");
    } else {
      setAnswer("Tell Nessie where you are staying, your dates, whether you have a car, and what you enjoy. Start with the planner.");
    }
  }

  return (
    <div className="clean-chat-card">
      <span className="kicker">Ask Nessie</span>
      <h2>Where are you staying?</h2>
      <p>Ask about Loch Ness, Skye, NC500, transport, whisky, castles or Inverness.</p>

      <form className="mini-concierge-form" onSubmit={handleAsk}>
        <input name="query" placeholder="Example: 3 days in Inverness, no car..." />
        <button type="submit">Ask</button>
      </form>

      {answer && (
        <div className="mini-answer">
          <p>{answer}</p>
          <Link className="btn primary" to="/planner">Build my trip</Link>
        </div>
      )}
    </div>
  );
}
