import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para rolar suavemente até a seção
  function handleNavClick(e, id) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="header">
      <div className="header-left">
        <img
          src="./images/logo-removebg.png"
          alt="Logo Clínica Corpo e Pele"
          className="logo"
        />
      </div>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`menu-icon${menuOpen ? " open" : ""}`} />
      </button>
      <nav className={`header-nav${menuOpen ? " open" : ""}`}>
        <a href="#inicio" onClick={e => handleNavClick(e, "inicio")}>Início</a>
        <a href="#sobre" onClick={e => handleNavClick(e, "sobre")}>Sobre</a>
        <a href="#servicos" onClick={e => handleNavClick(e, "servicos")}>Serviços</a>
        <a href="#depoimentos" onClick={e => handleNavClick(e, "depoimentos")}>Depoimentos</a>
        <a href="#contato" onClick={e => handleNavClick(e, "contato")}>Contato</a>
      </nav>
    </header>
  );
}
