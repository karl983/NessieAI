export default function DestinationPage({
  kicker,
  title,
  intro,
  image
}) {
  return (
    <section
      className="clean-destination-hero compact-destination-hero"
      style={{ "--hero-image": `url(${image})` }}
    >
      <div className="clean-destination-content">
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
