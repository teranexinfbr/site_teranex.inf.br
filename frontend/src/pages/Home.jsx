import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Code,
  Server,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Users,
  Target,
  Heart,
  Headset,
  BriefcaseBusiness,
  ShieldCheck,
  Clock3,
} from 'lucide-react';
import { servicesData, testimonials, homeBrands } from '../data/db';
import { usePageTitle } from '../hooks/usePageTitle';

const Hero = () => (
  <div className="relative bg-slate-900 text-white pt-32 pb-20 px-6 overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-slate-900/90 to-transparent"></div>

    <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6 animate-fade-in-up">
        <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
          Infraestrutura, suporte e desenvolvimento para empresas
        </span>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Tecnologia confiavel para o proximo passo do seu <span className="text-blue-400">negocio</span>.
        </h1>
        <p className="text-lg text-slate-300 max-w-lg">
          Da infraestrutura ao desenvolvimento de software. A TeraNex conecta sua empresa a solucoes praticas, com atendimento proximo e foco em resultado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link to="/contato" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            Fale com um Consultor <ArrowRight size={20} />
          </Link>
          <Link to="/servicos" className="border border-slate-500 hover:border-blue-400 hover:text-blue-400 text-slate-300 px-8 py-3 rounded-lg font-semibold transition-all text-center flex items-center justify-center">
            Conheca Nossas Solucoes
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-6 max-w-xl">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold">4 frentes</p>
            <p className="text-sm text-slate-300">Consultoria, infra, dev e suporte</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold">Atendimento</p>
            <p className="text-sm text-slate-300">Remoto e presencial</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-2xl font-bold">Foco</p>
            <p className="text-sm text-slate-300">Seguranca e continuidade</p>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative h-96">
        <div className="absolute top-0 right-10 bg-slate-800 p-6 rounded-xl shadow-xl border-l-4 border-purple-500 w-64 animate-float-slow">
          <Code className="text-purple-400 mb-3" size={32} />
          <h3 className="font-bold text-lg">Desenvolvimento</h3>
          <p className="text-sm text-slate-400">Apps e sistemas web.</p>
        </div>
        <div className="absolute top-32 left-10 bg-slate-800 p-6 rounded-xl shadow-xl border-l-4 border-green-500 w-64 animate-float-medium z-10">
          <Headset className="text-green-400 mb-3" size={32} />
          <h3 className="font-bold text-lg">Suporte</h3>
          <p className="text-sm text-slate-400">Presencial e remoto.</p>
        </div>
        <div className="absolute bottom-10 right-10 bg-slate-800 p-6 rounded-xl shadow-xl border-l-4 border-cyan-500 w-64 animate-float-fast">
          <Server className="text-cyan-400 mb-3" size={32} />
          <h3 className="font-bold text-lg">Consultoria</h3>
          <p className="text-sm text-slate-400">Orientacao especializada.</p>
        </div>
      </div>
    </div>
  </div>
);

const ServiceHighlights = () => (
  <div className="py-20 bg-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Como podemos ajudar sua empresa</h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Atuamos em frentes complementares para organizar a operacao, reduzir riscos e acelerar a evolucao da sua TI.
          </p>
        </div>
        <Link to="/servicos" className="text-blue-600 font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
          Ver todos os servicos <ArrowRight size={18} />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {Object.entries(servicesData).map(([key, service]) => (
          <Link key={key} to={`/servicos/${key}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:-translate-y-1 hover:shadow-xl transition-all">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
              Saber mais <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const TrustSection = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="text-emerald-600" size={24} />,
      title: 'Menos risco operacional',
      text: 'Estruturamos ambientes com foco em disponibilidade, backup, seguranca e boas praticas.',
    },
    {
      icon: <Clock3 className="text-blue-600" size={24} />,
      title: 'Resposta mais rapida',
      text: 'Atendimento claro e direto para acelerar diagnostico, correcao e acompanhamento.',
    },
    {
      icon: <BriefcaseBusiness className="text-violet-600" size={24} />,
      title: 'Tecnologia alinhada ao negocio',
      text: 'Sem excesso de ferramenta. Recomendamos o que realmente faz sentido para a sua operacao.',
    },
  ];

  return (
    <div className="py-20 bg-slate-100 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Mais do que executar, ajudamos voce a decidir melhor</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Nosso trabalho e unir parte tecnica, visao pratica e atendimento humano. Isso vale para suporte, projetos de infraestrutura e desenvolvimento.
          </p>
          <Link to="/sobre" className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold">
            Conhecer a TeraNex <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
              {pillar.icon}
              <h3 className="mt-4 font-bold text-slate-900">{pillar.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="bg-slate-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">O que dizem nossos clientes</h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative mx-4 md:mx-12">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <Quote size={24} fill="currentColor" />
            </div>

            <div className="mt-6 mb-8">
              <p className="text-lg md:text-xl text-slate-600 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-16 h-16 rounded-full mb-3 border-4 border-blue-50 shadow-sm" />
              <h4 className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].name}</h4>

              <div className="flex gap-1 mt-3">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 -ml-2 md:-ml-8 bg-white hover:bg-slate-100 text-slate-700 p-3 rounded-full shadow-lg transition-all">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 -mr-2 md:-mr-8 bg-white hover:bg-slate-100 text-slate-700 p-3 rounded-full shadow-lg transition-all">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  usePageTitle({
    title: 'Home',
    description: 'TeraNex - Solucoes completas de TI com foco em infraestrutura, suporte, consultoria e desenvolvimento.',
  });

  return (
    <>
      <Hero />
      <ServiceHighlights />
      <TrustSection />

      <div className="py-15 bg-slate px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa Visao</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ser referencia em solucoes de tecnologia da informacao, reconhecida pela excelencia tecnica, confiabilidade e inovacao, ajudando empresas a evoluirem com seguranca, eficiencia e escalabilidade.
          </p>
        </div>
      </div>

      <div className="pb-15 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Valores</h2>
            <p className="text-slate-600">O que nos guia em cada projeto</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Colaboracao</h3>
              <p className="text-slate-600">Trabalhamos juntos para alcancar resultados extraordinarios.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Target className="mx-auto mb-4 text-green-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Excelencia</h3>
              <p className="text-slate-600">Buscamos sempre a excelencia em tudo que fazemos.</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Heart className="mx-auto mb-4 text-red-600" size={48} />
              <h3 className="text-xl font-bold mb-2">Paixao</h3>
              <p className="text-slate-600">Amamos o que fazemos e isso se reflete em nossos resultados.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Confianca de grandes marcas</h3>
            <p className="text-slate-400">Trabalhamos com as maiores empresas de tecnologia do mundo.</p>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {homeBrands.map((brand, idx) => (
              <div key={idx} className="relative flex items-center justify-center w-full h-16">
                <img src={brand.url} alt={brand.name} className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-60 filter" title={brand.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <TestimonialCarousel />

      <div className="bg-white px-6 py-18">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 p-10 md:p-14 text-white">
          <h2 className="text-3xl font-bold">Quer evoluir a TI da sua empresa com mais previsibilidade?</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Podemos conversar sobre infraestrutura, desenvolvimento, suporte tecnico ou um projeto especifico que esta travando sua operacao.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Solicitar contato <ArrowRight size={18} />
            </Link>
            <Link to="/faq" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 font-semibold text-white hover:border-white/40 transition-colors">
              Ver perguntas frequentes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
