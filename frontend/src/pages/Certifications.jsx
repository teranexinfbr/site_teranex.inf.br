import React, { useState } from 'react';
import { certificationsByCategory } from '../data/db';
import { X } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const Certifications = () => {
  usePageTitle({
    title: 'Nossas Certificacoes',
    description:
      'Nossa equipe possui certificacoes reconhecidas internacionalmente, garantindo boas praticas em redes, cloud e gestao de servicos de TI.',
  });

  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="pt-15 min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white pt-24 pb-0 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Nossas Certificacoes</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto pb-20">
            Nossa equipe possui certificacoes reconhecidas internacionalmente, garantindo boas praticas em redes, cloud e gestao de servicos de TI.
          </p>
        </div>
      </div>

      <div className="pt-10 px-6">
        {certificationsByCategory.map((cat, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-slate-700 text-center">{cat.category}</h2>
            <div className="flex flex-wrap justify-center gap-12">
              {cat.items.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow flex items-center justify-center w-40 h-32 cursor-pointer"
                  onClick={() => setSelectedCert(brand)}
                >
                  <img
                    src={brand.url}
                    alt={brand.name}
                    className="max-h-16 w-auto object-contain hover:scale-105 transition-transform"
                    title={brand.name}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6">
            Nossas certificacoes asseguram que voce receba o melhor em tecnologia e suporte.
          </p>
        </div>
      </div>

      {selectedCert && (
        <div className="fixed inset-0 flex items-center justify-center z-50" onClick={() => setSelectedCert(null)}>
          <div className="relative bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-slate-500 hover:text-slate-700"
              onClick={() => setSelectedCert(null)}
            >
              <X size={24} />
            </button>
            <img src={selectedCert.url} alt={selectedCert.name} className="w-full h-auto object-contain" />
            <h3 className="text-center mt-4 text-lg font-semibold text-slate-900">{selectedCert.name}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
