export default function LeadBox({ title = "Request help", button = "Send Enquiry" }) {
  return (
    <form className="lead-form">
      <h3>{title}</h3>
      <input placeholder="Your name" />
      <input placeholder="Email address" />
      <input placeholder="Travel date" />
      <input placeholder="Number of passengers" />
      <textarea placeholder="Tell us what you need..." />
      <button type="button">{button}</button>
    </form>
  );
}
