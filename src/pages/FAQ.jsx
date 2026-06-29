import SEO from "../components/SEO";

const faqs = [
  ["Is one day enough for the Isle of Skye?", "It is possible from Inverness, but it is a long day. Nessie will usually recommend a tight route, an early start and no unrealistic stop-list. If you want to see Skye properly, stay overnight."],
  ["Can I visit Loch Ness without a car?", "Yes. Loch Ness is one of the easier Highland trips from Inverness, but your flexibility is limited without transport. Nessie can suggest public transport-friendly options or private driver routes."],
  ["Do I need a car in Inverness?", "Not for the city centre. You can walk to many restaurants, the river, the cathedral, the castle viewpoint and Eden Court. For Culloden, Clava Cairns, Loch Ness, Skye or the NC500, proper transport planning matters."],
  ["Is Uber reliable in Inverness?", "Do not build a Highland itinerary around Uber. Availability can be limited, especially for rural trips, late returns, cruise schedules and airport transfers. Use taxis, booked transfers or private drivers where timing matters."],
  ["What is the best month to visit the Highlands?", "May, June and September are strong months because daylight is good and crowds can be more manageable. July and August are popular but busier. Winter can be beautiful, but you need realistic weather and daylight expectations."],
  ["Can I see dolphins near Inverness?", "Yes, Chanonry Point is the famous spot, but timing matters. Tide, weather and patience make a big difference. Nessie can suggest realistic dolphin-watching plans from Inverness."],
  ["How many days do I need in the Highlands?", "For Inverness and Loch Ness, two to three days works well. Add Skye or the NC500 and you need more time. The common mistake is trying to do the whole Highlands in two rushed days."],
  ["Can Nessie help with live weather?", "Yes. Ask about today, tomorrow, rain, wind or exposed places and Nessie can use live weather to shape practical suggestions."],
  ["Can Nessie help me find restaurants?", "Yes. Nessie can suggest restaurants, pubs and whisky spots from its Highland knowledge base, then help narrow options by location, mood and travel plans."],
  ["Can Nessie arrange transport?", "Nessie can point you to the transport enquiry form for airport transfers, private drivers, cruise excursions, golf transfers and Highland day trips."]
];

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };

  return (
    <main className="faq-v2-page">
      <SEO
        title="Scottish Highlands Travel FAQ | Nessie AI"
        description="Answers to common questions about Inverness, Loch Ness, Skye, NC500, transport, restaurants, weather and Highland trip planning."
        schema={schema}
      />

      <section className="faq-v2-hero">
        <span className="kicker">Highland Travel FAQ</span>
        <h1>Real answers for planning the Scottish Highlands.</h1>
        <p>No brochure fluff. Just practical answers about Inverness, Loch Ness, Skye, transport, restaurants, weather and realistic routes.</p>
      </section>

      <section className="faq-v2-list">
        {faqs.map(([q, a]) => (
          <article key={q}>
            <h2>{q}</h2>
            <p>{a}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
