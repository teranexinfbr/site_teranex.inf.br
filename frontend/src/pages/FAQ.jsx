import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const faqItems = [
  {
    question: 'Quais servicos a TeraNex oferece?',
    answer: 'Atuamos com consultoria em TI, infraestrutura, suporte tecnico e desenvolvimento de sistemas, sites e integracoes.',
  },
  {
    question: 'O atendimento pode ser remoto?',
    answer: 'Sim. Dependendo do tipo de demanda, o atendimento pode ser feito de forma remota, com rapidez e acompanhamento continuo.',
  },
  {
    question: 'Voces atendem empresas pequenas?',
    answer: 'Sim. Trabalhamos tanto com negocios em crescimento quanto com operacoes que precisam de mais estrutura e governanca.',
  },
  {
    question: 'Como funciona um orcamento?',
    answer: 'Primeiro entendemos a necessidade, o contexto tecnico e o objetivo do projeto. Depois disso, apresentamos a proposta mais adequada.',
  },
  {
    question: 'Voces fazem manutencao e suporte continuo?',
    answer: 'Sim. Podemos atuar com suporte recorrente, acompanhamento tecnico, manutencao preventiva e melhorias evolutivas.',
  },
  {
    question: 'Tambem desenvolvem sistemas sob medida?',
    answer: 'Sim. Criamos solucoes web e integracoes conforme a necessidade do negocio, evitando excesso de ferramentas desnecessarias.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base md:text-lg font-semibold text-slate-900">{item.question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-slate-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.answer}</div>}
    </div>
  );
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  usePageTitle({
    title: 'FAQ',
    description: 'Tire suas duvidas sobre servicos, suporte, desenvolvimento e atendimento da TeraNex.',
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-slate-900 pt-28 pb-18 px-6 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Perguntas frequentes</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            Reunimos as duvidas mais comuns para facilitar o primeiro contato e tornar a avaliacao da sua demanda mais simples.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
