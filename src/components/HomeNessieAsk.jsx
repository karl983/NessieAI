import { useEffect, useRef, useState } from "react";

const examples = [
  "What is good near me?",
  "Plan one day in Inverness",
  "What should I do tomorrow if it rains?",
  "Best lunch near me",
  "Can I do Skye in one day?",
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
  const [manualLocation, setManualLocation] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("nessie-chat") || "[]");
    } catch {
      return [];
    }
  });

  const [loading, setLoading] = useState(false);
  const [gpsLocation, setGpsLocation] = useState(null);
  const [locationStatus, setLocationStatus] = useState("");
  const threadRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("nessie-chat", JSON.stringify(messages.slice(-12)));
  }, [messages]);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  function requestLocation() {
    if (!navigator.geolocation) {
      setGpsLocation(null);
      setLocationStatus("GPS is not supported. Type your area instead.");
      return;
    }

    setLocationStatus("Checking GPS accuracy...");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const accuracy = pos.coords.accuracy;

        if (accuracy > 100) {
          setGpsLocation(null);
          setLocationStatus(
            `GPS rejected — only accurate to about ${Math.round(
              accuracy
            )}m. Type where you are instead.`
          );
          return;
        }

        setGpsLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          accuracy
        });

        setLocationStatus(`GPS active — about ${Math.round(accuracy)}m accuracy.`);
      },
      () => {
        setGpsLocation(null);
        setLocationStatus("GPS unavailable. Type where you are instead.");
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 20000
      }
    );
  }

  async function askNessie(e, overrideQuestion) {
    e?.preventDefault();

    const cleanQuestion = (overrideQuestion || question).trim();
    if (!cleanQuestion || loading) return;

    const location = {
      manual: manualLocation.trim(),
      gps: gpsLocation
    };

    const nextMessages = [...messages, { role: "user", content: cleanQuestion }];

    setQuestion("");
    setMessages(nextMessages);
    setLoading(true);

    try {
      const history = messages.slice(-8);

      const res = await fetch(import.meta.env.VITE_NESSIE_WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: cleanQuestion, history, location })
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
          content: cleanText(data.answer || "Nessie could not answer that."),
          places: data.places || [],
          showTransportCard: Boolean(data.showTransportCard),
          weatherUsed: Boolean(data.weatherUsed),
          locationUsed: Boolean(data.locationUsed)
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
            castles, hidden gems, live weather, nearby ideas and transport.
          </p>
        </div>

        <div className="ask-nessie-location-row">
          <input
            value={manualLocation}
            onChange={(e) => setManualLocation(e.target.value)}
            placeholder="I’m near... Inverness Castle, Portree, Kingsmills Hotel"
          />
          <button type="button" onClick={requestLocation}>
            Use GPS
          </button>
        </div>

        {locationStatus && (
          <p className="ask-nessie-location-status">{locationStatus}</p>
        )}

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
                  {message.locationUsed && <span>Location aware</span>}
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
                    <span>
                      Airport transfers, private drivers, cruise tours, golf transfers and Skye day trips.
                    </span>
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
