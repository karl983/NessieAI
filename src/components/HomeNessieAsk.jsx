import { useState } from "react";

export default function HomeNessieAsk() {
  const [open, setOpen] = useState(false);
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
      setAnswer("Nessie had a wobble. Try again in a moment.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={`nessie-float ${open ? "open" : ""}`}>
      {open && (
        <div className="nessie-chat-window">
          <img className="nessie-sitting" src="/images/nessie-mascot.png" alt="Nessie" />

          <div className="nessie-chat-inner">
            <div className="nessie-chat-title">
              <span className="kicker">Ask Nessie</span>
              <h2>Highlands AI Concierge</h2>
              <p>Ask me about Inverness, Loch Ness, Skye, NC500, food, hidden gems or transport.</p>
            </div>

            <form className="nessie-chat-form" onSubmit={askNessie}>
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask Nessie..."
              />
              <button disabled={loading}>{loading ? "..." : "Ask"}</button>
            </form>

            {answer && (
              <div className="nessie-chat-answer">
                <p>{answer}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <button className="nessie-orb" onClick={() => setOpen(!open)}>
        <img src="/images/nessie-mascot.png" alt="Ask Nessie" />
        <span>Ask Nessie</span>
      </button>
    </div>
  );
}
