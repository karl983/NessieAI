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
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function askNessie(e, overrideQuestion) {
    e?.preventDefault();

    const cleanQuestion = (overrideQuestion || question).trim();
    if (!cleanQuestion || loading) return;

    const nextMessages = [
      ...messages,
      { role: "user", content: cleanQuestion }
    ];

    setQuestion("");
    setMessages(nextMessages);
    setLoading(true);

    try {
      const history = messages.slice(-8);

      const res = await fetch(import.meta.env.VITE_NESSIE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: cleanQuestion, history })
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (!res.ok) {
        throw new Error(data.error || `Request failed with status ${res.status}`);
      }

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: data.answer || "Nessie could not answer that."
        }
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: "Nessie had a wobble. Try again in a moment."
        }
      ]);
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

        {messages.length > 0 && (
          <div className="ask-nessie-thread">
            {messages.map((message, index) => (
              <div key={index} className={`ask-nessie-message ${message.role}`}>
                <p>{message.content}</p>
              </div>
            ))}

            {loading && (
              <div className="ask-nessie-message assistant">
                <p>Nessie is checking the Highlands...</p>
              </div>
            )}
          </div>
        )}

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
      </div>
    </section>
  );
}
