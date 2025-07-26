import "./Servicos.css";

const servicos = [
  {
    titulo: "Preenchimento Facial",
    descricao:
      "Procedimento que restaura o volume facial perdido com o tempo, suavizando rugas e linhas de expressão.",
    icone: "./images/seringa.png",
  },
  {
    titulo: "Microagulhamento",
    descricao:
      "Estimula a produção de colágeno, melhorando a textura da pele, cicatrizes de acne e estrias.",
    icone: "./images/rolo.png",
  },
  {
    titulo: "Bioestimuladores",
    descricao:
      "Tratamentos que estimulam a produção natural de colágeno, melhorando a firmeza e elasticidade da pele.",
    icone: "./images/gota.png",
  },
  {
    titulo: "Limpeza de Pele Profunda",
    descricao:
      "Procedimento que remove impurezas, cravos e células mortas, deixando a pele limpa e renovada.",
    icone: "./images/varinha.png",
  },
  {
    titulo: "Radiofrequência",
    descricao:
      "Tecnologia que promove o tensionamento da pele, reduzindo a flacidez facial e corporal.",
    icone: "./images/raio.png",
  },
  {
    titulo: "Harmonização Facial",
    descricao:
      "Conjunto de procedimentos que visam equilibrar e harmonizar os traços faciais, realçando a beleza natural.",
    icone: "./images/rosto.png",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <h2 className="servicos-titulo">Nossos Serviços</h2>
      <p className="servicos-subtitulo">
        Conheça os tratamentos estéticos avançados oferecidos para realçar sua
        beleza natural e promover bem-estar.
      </p>
      <div className="servicos-grid">
        {servicos.map((s, i) => (
          <div className="servico-card" key={i}>
            <div className="servico-icone">
              <img
                src={s.icone}
                alt={s.titulo + " ícone"}
                className="servico-icone-img"
              />
            </div>
            <h3 className="servico-titulo">{s.titulo}</h3>
            <p className="servico-desc">{s.descricao}</p>
            <a className="servico-link" href="#">
              Saiba mais <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
