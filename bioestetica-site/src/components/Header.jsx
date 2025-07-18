import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-left">
        <img
          src="/images/logo.jpg"
          alt="Logo Clínica Corpo e Pele"
          className="logo"
        />
        <div className="header-title-group">
          <span className="header-title">Josiane Sousa</span>
          <span className="header-subtitle">Biomédica Esteta</span>
        </div>
      </div>
      <button
        className="menu-toggle"
        aria-label="Abrir menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="menu-icon" />
      </button>
      <nav className={`header-nav${menuOpen ? " open" : ""}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>
          Início
        </a>
        <a href="#sobre" onClick={() => setMenuOpen(false)}>
          Sobre
        </a>
        <a href="#servicos" onClick={() => setMenuOpen(false)}>
          Serviços
        </a>
        <a href="#depoimentos" onClick={() => setMenuOpen(false)}>
          Depoimentos
        </a>
        <a href="#contato" onClick={() => setMenuOpen(false)}>
          Contato
        </a>
      </nav>
    </header>
  );
}
