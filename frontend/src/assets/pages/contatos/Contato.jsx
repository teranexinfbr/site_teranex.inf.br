import React from 'react';
import './css/contato.css';
import { MailIcon, PhoneIcon, InstagramIcon } from '../global/icons';

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Dados do formulário:", data);
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviado!';
    submitBtn.disabled = true;
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2500);
    event.target.reset();
  };

  return (
    <div>
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-subtitle">Estamos prontos para ajudar. Utilize um dos canais abaixo ou preencha o formulário e retornaremos em breve.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="section-title" style={{textAlign: 'left', fontSize: '1.8rem'}}>Nossos Canais</h3>
          <div className="contact-info-item">
            <MailIcon />
            <a href="mailto:contato@teranex.inf.br">contato@teranex.inf.br</a>
          </div>
          <div className="contact-info-item">
            <InstagramIcon />
            <a href="https://instagram.com/teranexinfbr" target="_blank" rel="noopener noreferrer">@teranexinfbr</a>
          </div>
          <div className="contact-info-item">
            <PhoneIcon />
            <a href="https://wa.me/message/ECNIX4WNEUNRF1" target="_blank" rel="noopener noreferrer">(82) 9 8881-4747</a>
          </div>
        </div>

        <div className="contact-form-container">
          <h3 className="section-title" style={{textAlign: 'left', fontSize: '1.8rem'}}>Envie uma Mensagem</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Como podemos ajudar?</label>
              <textarea id="descricao" name="descricao" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
