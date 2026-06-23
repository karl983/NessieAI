import NessieChat from "./NessieChat";

export default function NessiePageChat({ page }) {
  return (
    <section className="page-chat-section">
      <div>
        <span className="kicker">Ask Nessie</span>
        <h2>Need help with this page?</h2>
        <p>Ask about routes, timings, transport, family options, weather backups or what to do next.</p>
      </div>

      <NessieChat page={page} />
    </section>
  );
}
