import React, { useState } from 'react';
import { MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

function Contact() {
  usePageTitle({
    title: 'Contato',
    description: 'Entre em contato com a TeraNex para solucoes de TI e suporte especializado.',
  });

  const [formStatus, setFormStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setErrorMessage('');

    const formData = new FormData(e.target);

    try {
      const response = await fetch('/send_contact.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
        setErrorMessage(result.message);
      }
    } catch (error) {
      setFormStatus('error');
      setErrorMessage('Erro de conexao. Tente novamente.');
    }
  };

  return (
    <div className="pt-15 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white pt-24 pb-0 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto pb-20">
            Pronto para transformar a TI da sua empresa? Entre em contato conosco e descubra como podemos ajudar.
          </p>
        </div>
      </div>

      <div className="pt-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-blue-600 font-bold tracking-wider uppercase mb-2">Entre em contato</h2>
              <p className="text-slate-600 mb-8 text-lg">
                Preencha o formulario ou utilize um de nossos canais de atendimento direto.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Localizacao</h3>
                    <p className="text-slate-600">Maceio - AL | Marechal Deodoro - AL</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email</h3>
                    <p className="text-slate-600">contato@teranex.inf.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Telefone / WhatsApp</h3>
                    <p className="text-slate-600">(82) 98881-4747</p>
                    <p className="text-slate-500 text-sm mt-1">Seg-Sex, 08h as 18h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Mensagem enviada!</h3>
                  <p className="text-slate-600 mt-2">Nossa equipe entrara em contato em breve.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-blue-600 font-semibold hover:underline">
                    Enviar outra mensagem
                  </button>
                </div>
              ) : formStatus === 'error' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-10">
                  <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Erro no envio</h3>
                  <p className="text-slate-600 mt-2">{errorMessage}</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-blue-600 font-semibold hover:underline">
                    Tentar novamente
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome completo</label>
                    <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Seu email</label>
                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="seunome@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Assunto</label>
                    <select name="subject" required defaultValue="" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white">
                      <option value="" disabled>Selecione um assunto</option>
                      <option value="dev">Desenvolvimento de software e apps</option>
                      <option value="infra">Servico de infraestrutura</option>
                      <option value="cloud">Servicos de cloud</option>
                      <option value="suporte-local">Suporte tecnico local</option>
                      <option value="suporte-remoto">Suporte tecnico remoto</option>
                      <option value="parcerias">Parcerias</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                    <textarea name="message" required rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
                  </div>
                  <button type="submit" disabled={formStatus === 'sending'} className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                    {formStatus === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
