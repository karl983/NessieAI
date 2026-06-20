export default function PageHeader({ kicker, title, text, children }) {
  return (
    <section className="page-hero">
      <span className="kicker">{kicker}</span>
      <h1>{title}</h1>
      <p>{text}</p>
      {children}
    </section>
  );
}
