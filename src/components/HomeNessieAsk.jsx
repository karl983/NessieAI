import { useState } from "react";

const examples = [
  "Best lunch in Inverness",
  "Can I do Skye in one day?",
  "Where can I see dolphins?",
  "Hidden waterfalls near Loch Ness",
  "Best whisky tour from Inverness",
  "Do I need a private driver?"
];

export default function HomeNessieAsk() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askNessie(e, overrideQuestion) {
    e?.preventDefault();

    const cleanQuestion = (overrideQuestion || question).trim();
    if (!cleanQuestion) return;

    setQuestion(cleanQuestion);
    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch(import.meta.env.VITE_NESSIE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: cleanQuestion })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(JSON.stringify(data));

      setAnswer(data.answer || "Nessie could not answer that.");
    } catch (err) {
      console.error(err);
      setAnswer("Nessie had a wobble. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="ask-nessie-section">
      <div className="ask-nessie-card">
        <img className="ask-nessie-mascot" src="/images/nessie-mascot.png" alt="Nessie" />

        <div className="ask-nessie-copy">
          <span className="kicker">Ask Nessie</span>
          <h2>Your personal Highlands guide.</h2>
          <p>
            I know Inverness, Loch Ness, Skye, the NC500, restaurants, whisky,
            castles, hidden gems and transport.
          </p>
        </div>

        <div className="ask-nessie-chips">
          {examples.map((item) => (
            <button key={item} type="button" onClick={(e) => askNessie(e, item)}>
              {item}
            </button>
          ))}
        </div>

        <form className="ask-nessie-form" onSubmit={askNessie}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask Nessie anything about the Highlands..."
          />
          <button type="submit" disabled={loading}>
            {loading ? "Thinking..." : "Ask Nessie"}
          </button>
        </form>

        {(loading || answer) && (
          <div className="ask-nessie-answer">
            {loading ? <p>Nessie is checking the Highlands...</p> : <p>{answer}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
