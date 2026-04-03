import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/db';
import { usePageTitle } from '../hooks/usePageTitle';

function Services() {
  usePageTitle({
    title: 'Nossos Servicos',
    description: 'Explore os detalhes dos servicos oferecidos pela TeraNex.',
  });

  return (
    <>
      <div className="bg-slate-900 text-white pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center pt-15">
          <h1 className="text-5xl font-bold mb-6">Nossos Servicos</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheca a gama de servicos que a TeraNex oferece para voce e para o seu negocio, com solucoes completas em tecnologia, pensadas para aumentar a eficiencia, seguranca e performance da sua empresa.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(servicesData).map(([key, service]) => (
              <Link
                key={key}
                to={`/servicos/${key}`}
                className="p-8 rounded-xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all cursor-pointer group bg-slate-50 hover:bg-white flex flex-col items-center text-center"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>

                <p className="text-slate-600 mb-6 text-sm">{service.description}</p>

                <span className="mt-auto text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
