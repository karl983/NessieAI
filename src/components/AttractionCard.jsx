export default function AttractionCard({ emoji = "📍", title, description, tag }) {
  return (
    <article className="attraction-card">
      <div className="attraction-top">
        <span>{emoji}</span>
        {tag && <small>{tag}</small>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
