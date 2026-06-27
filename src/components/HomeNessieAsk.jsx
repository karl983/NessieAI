import { useEffect, useRef, useState } from "react";

const examples = [
  "Plan one day in Inverness",
  "What should I do tomorrow if it rains?",
  "Best lunch in Inverness",
  "Can I do Skye in one day?",
  "Where can I see dolphins?",
  "Do I need a private driver?"
];

function cleanText(text) {
  return String(text || "")
    .replace(/#{1,6}\s?/g, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/^\s*[-•]\s+/gm, "")
    .trim();
}

export default function HomeNessieAsk() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nessie-chat") || "[]");
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(false);
  const threadRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("nessie-chat", JSON.stringify(messages.slice(-12)));
  }, [messages]);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  async function askNessie(e, overrideQuestion) {
    e?.preventDefault();

    const cleanQuestion = (overrideQuestion || question).trim();
    if (!cleanQuestion || loading) return;

    const nextMessages = [...messages, { role: "user", content: cleanQuestion }];

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

      if (!res.ok) throw new Error(data.error || `Request failed with status ${res.status}`);

      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: cleanText(data.answer || "Nessie could not answer that."),
          places: data.places || [],
          showTransportCard: Boolean(data.showTransportCard),
          weatherUsed: Boolean(data.weatherUsed)
        }
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...nextMessages,
        { role: "assistant", content: "Nessie had a wobble. Try again in a moment." }
      ]);
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    localStorage.removeItem("nessie-chat");
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
            castles, hidden gems, live weather and transport.
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
          <div className="ask-nessie-thread" ref={threadRef}>
            {messages.map((message, index) => (
              <div key={index} className={`ask-nessie-message ${message.role}`}>
                <p>{message.content}</p>

                <div className="ask-nessie-tags">
                  {message.weatherUsed && <span>Live weather used</span>}
                </div>

                {message.places?.length > 0 && (
                  <div className="ask-nessie-places">
                    {message.places.slice(0, 3).map((place) => (
                      <a key={place.title} href={place.mapsUrl} target="_blank" rel="noreferrer">
                        <strong>{place.title}</strong>
                        <span>{place.region} · Open in Maps</span>
                      </a>
                    ))}
                  </div>
                )}

                {message.showTransportCard && (
                  <div className="ask-nessie-transport-card">
                    <strong>Need Highland transport?</strong>
                    <span>Airport transfers, private drivers, cruise tours, golf transfers and Skye day trips.</span>
                    <a href="/transport?source=ask-nessie">Get a transport quote</a>
                  </div>
                )}
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

        {messages.length > 0 && (
          <button className="ask-nessie-clear" type="button" onClick={clearChat}>
            Start a fresh chat
          </button>
        )}
      </div>
    </section>
  );
}
