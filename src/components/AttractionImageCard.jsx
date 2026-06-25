import { Link } from "react-router-dom";

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/à/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function AttractionImageCard({ image, title, description, tag }) {
  return (
    <Link className="attraction-image-card" to={`/place/${slugify(title)}`}>
      <img src={image} alt={title} />
      <div>
        {tag && <small>{tag}</small>}
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
}
