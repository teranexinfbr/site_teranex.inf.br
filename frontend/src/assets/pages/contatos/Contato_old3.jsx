import React, { useState } from 'react';
import './css/contato.css';
import { MailIcon, PhoneIcon, InstagramIcon } from '../global/icons';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // URL do backend PHP - versão de teste
      const response = await fetch('http://teranex.inf.br/enviar_mensagem.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus({ type: 'success', message: result.mensagem });
        event.target.reset();
      } else {
        setFormStatus({ type: 'error', message: result.mensagem || 'Ocorreu um erro no servidor.' });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormStatus({ type: 'error', message: 'Não foi possível conectar ao servidor.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1 className="page-title">Entre em Contato (Teste Final)</h1>
      <p className="page-subtitle">
        ✅ Formulário funcional em modo de teste.
        <br />
        📧 Emails são salvos em arquivo de log (não enviados realmente).
      </p>

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
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
            {formStatus.message && (
              <div className={`form-status ${formStatus.type}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
