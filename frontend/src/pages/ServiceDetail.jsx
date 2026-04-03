import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Cpu, Users, Globe } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';
import { servicesData } from '../data/db';

const ServiceDetail = () => {
  usePageTitle({
    title: 'Nossos Servicos',
    description: 'Explore os detalhes dos servicos oferecidos pela TeraNex.',
  });

  const { type } = useParams();
  const data = servicesData[type];

  if (!data) return <div className="pt-32 text-center">Servico nao encontrado</div>;

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            {data.icon}
          </div>
          <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
          <p className="text-xl text-slate-300 max-w-2xl">{data.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">O que oferecemos</h2>
            <ul className="space-y-4">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                  <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <Link to="/contato" className="mt-8 inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Solicitar Orcamento
            </Link>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Por que escolher a TeraNex?</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                  <Cpu className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Tecnologia de ponta</h4>
                  <p className="text-slate-600 text-sm">Ferramentas e frameworks modernos.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                  <Users className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Equipe especializada</h4>
                  <p className="text-slate-600 text-sm">Profissionais certificados e experientes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                  <Globe className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Suporte acessivel</h4>
                  <p className="text-slate-600 text-sm">Atendimento claro, remoto e presencial quando necessario.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
