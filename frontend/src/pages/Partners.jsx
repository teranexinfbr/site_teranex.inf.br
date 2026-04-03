import React from 'react';
import { businessPartners } from '../data/db';
import { usePageTitle } from "../hooks/usePageTitle";

const Partners = () => {
  usePageTitle({
    title: "Nossos Parceiros",
    description:
      "Trabalhamos em parceria com empresas líderes para oferecer soluções completas e inovadoras aos nossos clientes.",
  });
  return (
    <div className="pt-15 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-slate-900 text-white pt-24 pb-0 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Nossos Parceiros</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto pb-20">
            Trabalhamos em parceria com empresas líderes para oferecer soluções completas e inovadoras aos nossos clientes.
          </p>
        </div>
      </div>

      <div className="pt-15 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessPartners.map((partner, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-slate-100 flex items-center justify-center p-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{partner.name}</h3>
                  <p className="text-slate-600 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-16">
            <p className="text-slate-600 mb-6">
              Interessado em se tornar um parceiro? Entre em contato conosco.
            </p>
            <a
              href="/contato"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Fale Conosco
            </a>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Partners;
