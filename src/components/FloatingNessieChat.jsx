import { useState } from "react";
import { Link } from "react-router-dom";

export default function FloatingNessieChat() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-nessie ${open ? "open" : ""}`}>
      {open && (
        <div className="floating-chat-panel">
          <div className="floating-chat-head">
            <img src="/images/nessie-mascot.png" alt="Nessie" />
            <div>
              <strong>Ask Nessie</strong>
              <span>Highlands AI Concierge</span>
            </div>
          </div>

          <div className="floating-chat-body">
            <p>Hi, I’m Nessie. Ask me about Inverness, Loch Ness, Skye, the NC500 or transport.</p>
            <div className="floating-chat-links">
              <Link to="/planner">Build trip</Link>
              <Link to="/transport">Transport</Link>
            </div>
          </div>

          <input placeholder="Chatbot brain coming next..." disabled />
        </div>
      )}

      <button className="floating-nessie-button" onClick={() => setOpen(!open)}>
        <img src="/images/nessie-mascot.png" alt="Ask Nessie" />
      </button>
    </div>
  );
}
