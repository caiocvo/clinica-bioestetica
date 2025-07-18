import "./Contato.css";
import { useRef } from "react";

function formatPhone(value) {
  value = value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);
  if (value.length > 6) {
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  } else if (value.length > 2) {
    return `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    return value;
  }
}

function isValidName(nome) {
  return /^[A-Za-zÀ-ÿ'\- ]{3,}$/.test(nome.trim());
}

function isValidPhone(telefone) {
  // Aceita (99) 99999-9999 ou (99) 9999-9999
  const cleaned = telefone.replace(/\D/g, "");
  if (cleaned.length !== 11) return false;
  // Não pode ser todos os dígitos iguais
  if (/^(\d)\1+$/.test(cleaned)) return false;
  return true;
}

export default function Contato() {
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const nome = form.nome.value;
    const telefone = form.telefone.value;
    const servico = form.servico.value;
    const mensagem = form.mensagem.value;

    if (!isValidName(nome)) {
      alert("Por favor, digite um nome válido (apenas letras e espaços).");
      form.nome.focus();
      return;
    }
    if (!isValidPhone(telefone)) {
      alert("Por favor, digite um telefone válido no formato (99) 99999-9999.");
      form.telefone.focus();
      return;
    }
    if (!servico) {
      alert("Por favor, selecione um serviço de interesse.");
      form.servico.focus();
      return;
    }

    const texto =
      `Olá, meu nome é ${nome}.\n` +
      `Telefone: ${telefone}\n` +
      `Serviço de interesse: ${servico}\n` +
      (mensagem ? `Mensagem: ${mensagem}` : "");
    const url = `https://wa.me/5538992709013?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  }

  function handlePhoneInput(e) {
    e.target.value = formatPhone(e.target.value);
  }

  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        <form className="contato-form" ref={formRef} onSubmit={handleSubmit}>
          <label>
            Nome Completo
            <input name="nome" type="text" required autoComplete="name" />
          </label>
          <label>
            Telefone
            <input
              name="telefone"
              type="tel"
              required
              maxLength={15}
              onInput={handlePhoneInput}
              placeholder="(99) 99999-9999"
              autoComplete="tel"
            />
          </label>
          <label>
            Serviço de Interesse
            <select name="servico" required>
              <option value="">Selecione um serviço</option>
              <option>Preenchimento Facial</option>
              <option>Microagulhamento</option>
              <option>Bioestimuladores</option>
              <option>Limpeza de Pele Profunda</option>
              <option>Radiofrequência</option>
              <option>Harmonização Facial</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows={4} placeholder="Opcional" />
          </label>
          <button type="submit">Enviar Mensagem</button>
        </form>
        <div className="contato-info">
          <h3>Informações de Contato</h3>
          <ul>
            <li>
              <strong>Endereço</strong>
              <br />
              Rua Lourival R. da Cruz, n52, bairro Mãe de Deus
            </li>
            <li>
              <strong>Telefone para contato</strong>
              <br />
              <a href="tel:+5564999333737">(64) 99933-3737</a>
            </li>
            <li>
              <strong>Instagram</strong>
              <br />
              <a
                href="https://instagram.com/corpoepeleesteticaelaser"
                target="_blank"
                rel="noopener noreferrer"
              >
                @corpoepeleesteticaelaser
              </a>
            </li>
            <li>
              <strong>Horário</strong>
              <br />
              Segunda à sexta, 07:00 às 18:00
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
