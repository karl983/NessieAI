import { useState } from "react";

export default function HomeNessieAsk() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askNessie(e) {
    e.preventDefault();

    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch(import.meta.env.VITE_NESSIE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(JSON.stringify(data));

      setAnswer(data.answer || "Nessie could not answer that.");
    } catch (err) {
      console.error(err);
      setAnswer("Nessie had a wobble. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="home-nessie-ask">
      <div className="home-nessie-card">
        <div className="home-nessie-head">
          <img src="/images/nessie-mascot.png" alt="Nessie" />
          <div>
            <span className="kicker">Ask Nessie</span>
            <h2>Your Highland AI concierge.</h2>
          </div>
        </div>

        <form className="home-nessie-form" onSubmit={askNessie}>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask about restaurants, Loch Ness, Skye, NC500, transport..."
          />
          <button disabled={loading}>{loading ? "Thinking..." : "Ask"}</button>
        </form>

        {answer && (
          <div className="home-nessie-answer">
            <p>{answer}</p>
          </div>
        )}
      </div>
    </section>
  );
}
