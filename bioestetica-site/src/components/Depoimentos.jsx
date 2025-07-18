import React, { useState } from "react";
import "./Depoimentos.css";

const depoimentos = [
  {
    nome: "Maria Silva",
    iniciais: "MS",
    tempo: "Cliente há 2 anos",
    texto:
      '"Os tratamentos com a Josiane transformaram minha pele. Ela é extremamente profissional e atenciosa, sempre explicando cada procedimento detalhadamente. Os resultados superaram minhas expectativas!"',
  },
  {
    nome: "Carolina Santos",
    iniciais: "CS",
    tempo: "Cliente há 1 ano",
    texto:
      '"Fiz o tratamento de harmonização facial com a Josiane e fiquei encantada com o resultado. Ela tem um olhar clínico incrível e conseguiu realçar minha beleza de forma natural. Recomendo muito!"',
  },
  {
    nome: "Luiza Oliveira",
    iniciais: "LO",
    tempo: "Cliente há 3 anos",
    texto:
      '"Depois de sofrer com acne por anos, finalmente encontrei uma profissional que resolveu meu problema. Os tratamentos com a Josiane não só melhoraram minha pele, mas também minha autoestima. Sou eternamente grata!"',
  },
];

function Estrelas() {
  return (
    <div className="estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#F7C948"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function Depoimentos() {
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;

  // Para mobile: mostra só 1, para desktop: mostra todos
  let visiveis;
  if (isMobile) {
    visiveis = [depoimentos[index]];
  } else {
    visiveis = depoimentos;
  }

  const anterior = () =>
    setIndex((i) => (i === 0 ? depoimentos.length - 1 : i - 1));
  const proximo = () =>
    setIndex((i) => (i === depoimentos.length - 1 ? 0 : i + 1));

  return (
    <section id="depoimentos" className="depoimentos">
      <div className="depoimentos-container">
        <button
          className="depoimentos-seta"
          onClick={anterior}
          aria-label="Anterior"
        >
          &#60;
        </button>
        {visiveis.map((d, idx) => (
          <div className="depoimento-card" key={d.nome}>
            <Estrelas />
            <p className="depoimento-texto">{d.texto}</p>
            <div className="depoimento-autor">
              <span className="depoimento-avatar">{d.iniciais}</span>
              <div>
                <span className="depoimento-nome">{d.nome}</span>
                <span className="depoimento-tempo">{d.tempo}</span>
              </div>
            </div>
          </div>
        ))}
        <button
          className="depoimentos-seta"
          onClick={proximo}
          aria-label="Próximo"
        >
          &#62;
        </button>
      </div>
    </section>
  );
}
