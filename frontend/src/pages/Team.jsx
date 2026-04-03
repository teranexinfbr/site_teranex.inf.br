import React, { useState } from 'react';
import { Linkedin, Instagram, Mail, X, Users, ShieldCheck, BriefcaseBusiness } from 'lucide-react';
import { teamMembers } from '../data/db';
import { usePageTitle } from '../hooks/usePageTitle';

function Team() {
  usePageTitle({
    title: 'Nosso Time',
    description: 'Conheca a equipe apaixonada por tecnologia e inovacao que impulsiona a TeraNex.',
  });

  const [selectedMember, setSelectedMember] = useState(null);

  const highlights = [
    {
      icon: <Users size={20} className="text-blue-600" />,
      title: 'Time proximo',
      text: 'Atendimento humano, tecnico e comprometido com a realidade do cliente.',
    },
    {
      icon: <ShieldCheck size={20} className="text-emerald-600" />,
      title: 'Entrega com responsabilidade',
      text: 'Buscamos estabilidade, seguranca e consistencia em cada projeto.',
    },
    {
      icon: <BriefcaseBusiness size={20} className="text-violet-600" />,
      title: 'Visao pratica',
      text: 'Transformamos necessidades tecnicas em solucoes aplicaveis ao negocio.',
    },
  ];

  return (
    <div className="pt-15 bg-slate-50 min-h-screen">
      <div className="bg-slate-900 text-white pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
            Profissionais por tras da entrega
          </span>
          <h1 className="text-5xl font-bold mt-6 mb-6">Nosso Time</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Conheca as mentes que fazem a TeraNex acontecer. Uma equipe apaixonada por tecnologia, inovacao e entrega com responsabilidade.
          </p>
        </div>
      </div>

      <div className="px-6 -mt-8 mb-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                {item.icon}
              </div>
              <h2 className="mt-4 font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Especialistas que constroem a TeraNex</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Cada perfil combina conhecimento tecnico, visao pratica e compromisso com a qualidade da entrega.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid gap-8 place-items-center w-full max-w-7xl grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white max-w-sm w-full rounded-[28px] shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group cursor-pointer border border-slate-200"
                  onClick={() => setSelectedMember(member)}
                >
                  <div className="h-80 bg-slate-200 overflow-hidden relative">
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/10 to-transparent z-10"></div>
                    <div className="absolute top-4 left-4 z-20 rounded-full border border-white/20 bg-slate-950/55 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                      Time TeraNex
                    </div>
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-5 text-white text-left">
                      <p className="text-xs uppercase tracking-[0.24em] text-blue-200/90">Especialista</p>
                      <h3 className="mt-2 text-2xl font-bold leading-tight">{member.name}</h3>
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-blue-600 font-semibold text-sm">{member.role}</p>
                        <div className="mt-3 h-px w-14 bg-slate-200"></div>
                      </div>
                      <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                        Perfil
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm mt-4 leading-relaxed line-clamp-4 min-h-[88px]">{member.bio}</p>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="flex gap-3">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                        title="LinkedIn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                        title="Instagram"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href={member.social.email}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                        title="E-mail"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Mail size={18} />
                      </a>
                      </div>

                      <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        Ver perfil
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedMember && (
        <div
          className="fixed inset-0 bg-black/55 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full mx-4 border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
              onClick={() => setSelectedMember(null)}
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-slate-100"
              />
              <h3 className="text-2xl font-bold text-slate-900">{selectedMember.name}</h3>
              <p className="text-blue-600 font-medium mb-4">{selectedMember.role}</p>
              <p className="text-slate-600 mb-6 leading-relaxed">{selectedMember.bioDetalhada}</p>
              <div className="flex justify-center gap-4">
                <a
                  href={selectedMember.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={selectedMember.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={selectedMember.social.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Team;
