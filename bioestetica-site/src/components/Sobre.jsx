import "./Sobre.css";

export default function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-img-area">
        <img
          src="./images/terno.jpg"
          alt="Josiane Sousa"
          className="sobre-capa"
        />
        <img
          src="./images/capa.jpg"
          alt="Josiane Sousa"
          className="sobre-avatar"
        />
      </div>
      <div className="sobre-texto-area">
        <h2 className="sobre-titulo">Sobre Josiane Sousa</h2>
        <p className="sobre-desc">
          Com mais de 10 anos de experiência na área de estética avançada,
          Josiane Sousa é especialista em procedimentos estéticos não invasivos
          e minimamente invasivos. Formada em Biomedicina com especialização em
          Estética, está sempre atualizada com as mais recentes técnicas e
          tecnologias do mercado.
          <br />
          <br />
          Seu trabalho é reconhecido pela atenção aos detalhes, pela abordagem
          personalizada e pelos resultados naturais que proporciona a cada
          cliente. Josiane acredita que a verdadeira beleza está no equilíbrio e
          na harmonia, e trabalha para realçar a beleza única de cada pessoa.
        </p>
        <div className="sobre-cards">
          <div className="sobre-card">
            <span>10+</span>
            <small>Anos de Experiência</small>
          </div>
          <div className="sobre-card">
            <span>500+</span>
            <small>Clientes Satisfeitos</small>
          </div>
          <div className="sobre-card">
            <span>15+</span>
            <small>Tratamentos Especializados</small>
          </div>
        </div>
      </div>
    </section>
  );
}
