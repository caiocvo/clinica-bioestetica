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

        // Formata a mensagem para WhatsApp
    const mensagemFormatada = `Olá! Meu nome é ${nome}. Telefone: ${telefone}. Serviço de interesse: ${servico}${mensagem ? '. Mensagem: ' + mensagem : ''}`;
    
    // Abre o WhatsApp com a mensagem pré-preenchida
    const numero = "5564999333737";
    const mensagemEncoded = encodeURIComponent(mensagemFormatada);
    
    // Tenta diferentes formatos de URL
    const url1 = `https://wa.me/${numero}?text=${mensagemEncoded}`;
    const url2 = `https://api.whatsapp.com/send?phone=${numero}&text=${mensagemEncoded}`;
    
    // Debug: mostra as URLs no console
    console.log("URL 1 (wa.me):", url1);
    console.log("URL 2 (api.whatsapp.com):", url2);
    console.log("Mensagem formatada:", mensagemFormatada);
    
    // Tenta primeiro com api.whatsapp.com
    window.open(url2, "_blank");
    
    // Mostra confirmação
    alert("✅ WhatsApp aberto com sua mensagem!\n\n📱 A mensagem já está preenchida, é só clicar em enviar.");
  }

  function handlePhoneInput(e) {
    e.target.value = formatPhone(e.target.value);
  }

  return (
    <section id="contato" className="contato">
      <div className="contato-container">
        {/* Mensagem chamativa para mobile/tablet */}
        <div className="contato-whatsapp-msg">
          <span className="contato-whatsapp-only-mobile">
            Entre em contato via WhatsApp aqui!
          </span>
          <span className="contato-whatsapp-info">
            Preencha o formulário e clique em "Enviar Mensagem" para abrir o WhatsApp com sua mensagem já preenchida!
          </span>
        </div>
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
              <span className="contato-icon contato-icon-bg">
                {/* Ícone localização */}
                <svg width="22" height="22" fill="#bfa07a" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </span>
              <div>
                <strong>Endereço</strong>
                <br />
                Rua Lourival R. da Cruz, n52, bairro Mãe de Deus
              </div>
            </li>
            <li>
              <span className="contato-icon contato-icon-bg">
                {/* Ícone telefone */}
                <svg width="22" height="22" fill="#bfa07a" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"/></svg>
              </span>
              <div>
                <strong>Telefone para contato</strong>
                <br />
                <a href="tel:+5564999333737">(64) 99933-3737</a>
              </div>
            </li>
            <li>
              <span className="contato-icon contato-icon-bg">
                {/* Ícone e-mail corrigido */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <rect x="3" y="5" width="18" height="14" rx="3" stroke="#bfa07a" strokeWidth="2" fill="none"/>
                  <path d="M4 7l8 6 8-6" stroke="#bfa07a" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div>
                <strong>E-mail</strong>
                <br />
                contato@josianesousa.com.br
              </div>
            </li>
            <li>
              <span className="contato-icon contato-icon-bg">
                {/* Ícone relógio */}
                <svg width="22" height="22" fill="#bfa07a" viewBox="0 0 24 24"><path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm1 11h5v2h-7V6h2v6z"/></svg>
              </span>
              <div>
                <strong>Horário de Atendimento</strong>
                <div>Segunda à Sexta: 9h às 19h</div>
                <div>Sábado: 9h às 14h</div>
              </div>
            </li>
          </ul>
          <div className="contato-social">
            <strong>Redes Sociais</strong>
            <div className="contato-social-icons">
              <a href="https://www.instagram.com/corpoepeleesteticaelaser?igsh=ZDJzd2pzczl0aHpn&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contato-icon-bg">
                {/* Instagram */}
                <svg width="22" height="22" fill="none" stroke="#bfa07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
              </a>
              <a href="https://wa.me/556499333737" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="contato-icon-bg">
                {/* WhatsApp */}
                <svg width="22" height="22" fill="#bfa07a" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.63-.5-5.18-1.44l-.37-.22-3.67.96.98-3.58-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
