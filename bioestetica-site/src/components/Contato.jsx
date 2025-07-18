import "./Contato.css";

export default function Contato() {
  return (
    <section id="contato" className="contato">
      <h2>Contato</h2>
      <ul>
        <li>
          <strong>Telefone:</strong>{" "}
          <a href="tel:+5564999333737">(64) 99933-3737</a>
        </li>
        <li>
          <strong>Endereço:</strong> Rua Lourival R. da Cruz, n52, bairro Mãe de
          Deus
        </li>
        <li>
          <strong>Instagram:</strong>{" "}
          <a
            href="https://instagram.com/corpoepeleesteticaelaser"
            target="_blank"
            rel="noopener noreferrer"
          >
            @corpoepeleesteticaelaser
          </a>
        </li>
        <li>
          <strong>Horário:</strong> Segunda à sexta, 07:00 às 18:00
        </li>
      </ul>
    </section>
  );
}
