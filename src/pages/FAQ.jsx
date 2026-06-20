const faqs = [
  ["Is Nessie AI a booking agent?", "Not yet. The MVP helps with planning and enquiries. Booking integrations come later."],
  ["Can Nessie AI plan Skye from Inverness?", "Yes, but it will warn users that Skye is a long day and needs realistic planning."],
  ["How does transport work?", "Visitors submit an enquiry, then trusted local operators can be matched manually at first."],
  ["Is this only for Inverness?", "No. Inverness is the base, but the platform covers Loch Ness, Skye, NC500 and the wider Highlands."],
  ["How will this make money?", "Transport leads, partner referrals, premium itineraries, affiliate bookings and local advertising."]
];

export default function FAQ() {
  return (
    <main className="page">
      <section className="page-hero">
        <span className="kicker">Questions</span>
        <h1>FAQ</h1>
        <p>Clear answers for visitors, partners and future operators.</p>
      </section>

      <section className="section">
        <div className="stack-list">
          {faqs.map(([q, a]) => (
            <article className="result-card" key={q}>
              <h3>{q}</h3>
              <p>{a}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
