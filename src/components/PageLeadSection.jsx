import LeadCapture from "./LeadCapture";

export default function PageLeadSection({ title, text, type }) {
  return (
    <section className="transport-section money-section">
      <div>
        <span className="kicker">Need help?</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <LeadCapture type={type} button="Send Enquiry" />
    </section>
  );
}
