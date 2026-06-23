import { useState } from "react";
import { Link } from "react-router-dom";

export default function NessieChat({ page = "general" }) {
  const [messages, setMessages] = useState([
    {
      from: "nessie",
      text: "Hi, I’m Nessie. Tell me where you’re staying, your dates, what you enjoy, and whether you have a car."
    }
  ]);

  function sendMessage(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.message.value.trim();
    if (!input) return;

    const lower = input.toLowerCase();

    let reply =
      "Good start. For a proper Highlands plan, I need your base, dates, group size, interests and whether you have transport.";

    if (lower.includes("skye")) {
      reply =
        "Skye is spectacular, but from Inverness it is a long day. I’d recommend choosing 2–3 major stops only, or requesting a private driver.";
    }

    if (lower.includes("loch") || lower.includes("ness")) {
      reply =
        "For Loch Ness, a strong route is Urquhart Castle, a cruise if timing works, then Dores Beach or Falls of Foyers.";
    }

    if (lower.includes("nc500")) {
      reply =
        "For the NC500, plan overnight stops first. The biggest mistake is trying to cram too much driving into each day.";
    }

    if (lower.includes("driver") || lower.includes("transport") || lower.includes("airport")) {
      reply =
        "Transport is available as an enquiry. Tell me your date, number of passengers, pickup and destination.";
    }

    setMessages((prev) => [
      ...prev,
      { from: "user", text: input },
      { from: "nessie", text: reply }
    ]);

    form.reset();
  }

  return (
    <section className="nessie-chat-shell">
      <div className="nessie-chat-header">
        <div className="nessie-avatar">N</div>
        <div>
          <h2>Nessie</h2>
          <p>AI Highlands Travel Concierge</p>
        </div>
      </div>

      <div className="nessie-chat-window">
        {messages.map((msg, index) => (
          <div className={`chat-bubble ${msg.from}`} key={index}>
            {msg.text}
          </div>
        ))}
      </div>

      <form className="nessie-chat-input" onSubmit={sendMessage}>
        <input name="message" placeholder="Ask Nessie about Inverness, Loch Ness, Skye, NC500..." />
        <button type="submit">Send</button>
      </form>

      <div className="nessie-chat-actions">
        <Link to="/planner">Build full trip</Link>
        <Link to="/transport">Need transport?</Link>
      </div>
    </section>
  );
}
