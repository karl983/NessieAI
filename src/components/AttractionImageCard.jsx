export default function AttractionImageCard({ image, title, description, tag }) {
  return (
    <article className="attraction-image-card">
      <img src={image} alt={title} />
      <div>
        {tag && <small>{tag}</small>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
