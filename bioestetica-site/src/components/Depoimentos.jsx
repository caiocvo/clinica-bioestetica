import React, { useState, useEffect } from "react";
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

function DepoimentoCard({ depoimento }) {
  return (
    <div className="depoimento-card canva-style">
      <Estrelas />
      <p className="depoimento-texto">{depoimento.texto}</p>
      <div className="depoimento-autor">
        <span className="depoimento-avatar">{depoimento.iniciais}</span>
        <div>
          <span className="depoimento-nome">{depoimento.nome}</span>
          <span className="depoimento-tempo">{depoimento.tempo}</span>
        </div>
      </div>
    </div>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1101);
  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1101);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return isDesktop;
}

export default function Depoimentos() {
  const isDesktop = useIsDesktop();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDepoimento = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="depoimentos" className="depoimentos canva-carousel">
      <h2 className="depoimentos-titulo">Depoimentos</h2>
      <p className="depoimentos-subtitulo">
        O que nossos clientes dizem sobre os tratamentos e resultados.
      </p>
      {isDesktop ? (
        <div className="canva-carousel-container">
          {depoimentos.map((depoimento, idx) => (
            <DepoimentoCard key={idx} depoimento={depoimento} />
          ))}
        </div>
      ) : (
        <div className="canva-carousel-container">
          <div className="depoimentos-slider-card-wrapper">
            <button className="canva-arrow left" onClick={prevDepoimento}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="canva-carousel-viewport">
              <div
                className="canva-carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {depoimentos.map((depoimento, idx) => (
                  <DepoimentoCard key={idx} depoimento={depoimento} />
                ))}
              </div>
            </div>
            <button className="canva-arrow right" onClick={nextDepoimento}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
