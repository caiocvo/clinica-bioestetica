import "./Servicos.css";

const servicos = [
  {
    titulo: "Preenchimento Facial",
    descricao:
      "Procedimento que restaura o volume facial perdido com o tempo, suavizando rugas e linhas de expressão.",
    icone: (
      // Seringa
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="#8b6a53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M54.7 9.3a2 2 0 0 0-2.8 0l-6.2 6.2-2.1-2.1a2 2 0 1 0-2.8 2.8l2.1 2.1-3.2 3.2-2.1-2.1a2 2 0 1 0-2.8 2.8l2.1 2.1-23.2 23.2a2 2 0 0 0 0 2.8l2.8 2.8-6.2 6.2a2 2 0 1 0 2.8 2.8l6.2-6.2 2.8 2.8a2 2 0 0 0 2.8 0l23.2-23.2 2.1 2.1a2 2 0 1 0 2.8-2.8l-2.1-2.1 3.2-3.2 2.1 2.1a2 2 0 1 0 2.8-2.8l-2.1-2.1 6.2-6.2a2 2 0 0 0 0-2.8z" />
      </svg>
    ),
  },
  {
    titulo: "Microagulhamento",
    descricao:
      "Estimula a produção de colágeno, melhorando a textura da pele, cicatrizes de acne e estrias.",
    icone: (
      // Roller
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="#8b6a53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="14" y="36" width="36" height="8" rx="2" />
        <rect
          x="36"
          y="14"
          width="8"
          height="36"
          rx="2"
          transform="rotate(45 40 32)"
        />
      </svg>
    ),
  },
  {
    titulo: "Bioestimuladores",
    descricao:
      "Tratamentos que estimulam a produção natural de colágeno, melhorando a firmeza e elasticidade da pele.",
    icone: (
      // Gota
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="#8b6a53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 8C32 8 12 32 12 44a20 20 0 0 0 40 0C52 32 32 8 32 8z" />
        <path
          d="M44 44a12 12 0 0 1-24 0"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    titulo: "Limpeza de Pele Profunda",
    descricao:
      "Procedimento que remove impurezas, cravos e células mortas, deixando a pele limpa e renovada.",
    icone: (
      // Varinha mágica
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="#8b6a53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="44"
          width="8"
          height="24"
          rx="4"
          transform="rotate(-45 14 56)"
        />
        <circle cx="20" cy="20" r="3" />
        <circle cx="44" cy="20" r="3" />
        <circle cx="32" cy="32" r="3" />
        <rect x="36" y="36" width="8" height="8" rx="4" />
      </svg>
    ),
  },
  {
    titulo: "Radiofrequência",
    descricao:
      "Tecnologia que promove o tensionamento da pele, reduzindo a flacidez facial e corporal.",
    icone: (
      // Raio
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="#8b6a53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon points="32 8 16 40 32 40 24 56 48 24 32 24 40 8 32 8" />
      </svg>
    ),
  },
  {
    titulo: "Harmonização Facial",
    descricao:
      "Conjunto de procedimentos que visam equilibrar e harmonizar os traços faciais, realçando a beleza natural.",
    icone: (
      // Smile
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        fill="#8b6a53"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="32" cy="32" r="24" />
        <circle cx="24" cy="28" r="3" fill="#fff" />
        <circle cx="40" cy="28" r="3" fill="#fff" />
        <path
          d="M24 40c2.5 3 11.5 3 14 0"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="servicos-grid">
        {servicos.map((s, i) => (
          <div className="servico-card" key={i}>
            <div className="servico-icone">{s.icone}</div>
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
