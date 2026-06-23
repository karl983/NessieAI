import { useState } from "react";

export default function LeadCapture({ type = "Travel enquiry", button = "Send enquiry" }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);

    const body = encodeURIComponent(
      `Type: ${type}\nName: ${f.get("name")}\nEmail: ${f.get("email")}\nDate: ${f.get("date")}\nPeople: ${f.get("people")}\nMessage: ${f.get("message")}`
    );

    setSent(true);
    window.location.href = `mailto:hello@nessieai.co.uk?subject=Nessie AI ${encodeURIComponent(type)}&body=${body}`;
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <h3>{type}</h3>
      <input name="name" placeholder="Your name" required />
      <input name="email" placeholder="Email address" required />
      <input name="date" placeholder="Travel date" />
      <input name="people" placeholder="Number of people" />
      <textarea name="message" placeholder="Tell us what you need..." required />
      <button type="submit">{button}</button>
      {sent && <small>Opening your email app now...</small>}
    </form>
  );
}
