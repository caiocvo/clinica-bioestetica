import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-bg" id="inicio">
      <div className="hero-card">
        <h1 className="hero-title">Josiane Sousa</h1>
        <h2 className="hero-subtitle">Biomédica Esteta</h2>
        <p className="hero-desc">
          Tratamentos estéticos avançados para realçar sua beleza natural
        </p>
        <a href="#contato" className="hero-btn">
          Agende sua Consulta
        </a>
      </div>
    </section>
  );
}
