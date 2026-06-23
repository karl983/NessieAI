import { useState } from "react";
import { LEAD_WEBHOOK_URL } from "../data/leadConfig";

export default function LeadCapture({ type = "Travel enquiry", button = "Send enquiry" }) {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const f = new FormData(form);

    const payload = {
      type,
      name: f.get("name") || "",
      email: f.get("email") || "",
      date: f.get("date") || "",
      people: f.get("people") || "",
      message: f.get("message") || "",
      page: window.location.pathname
    };

    setStatus("sent");
    form.reset();

    fetch(LEAD_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(payload)
    }).catch(() => {});

    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h3>{type}</h3>

      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Email address" required />
      <input name="date" placeholder="Travel date" />
      <input name="people" placeholder="Number of people" />
      <textarea name="message" placeholder="Tell us what you need..." required />

      <button type="submit">
        {status === "sent" ? "Sent" : button}
      </button>

      {status === "sent" && (
        <small className="form-success">Enquiry sent. We’ll be in touch.</small>
      )}
    </form>
  );
}
