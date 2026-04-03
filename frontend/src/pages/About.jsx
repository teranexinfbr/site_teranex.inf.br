import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Server, Code2, Headset, MapPin, Clock3 } from 'lucide-react';
import { usePageTitle } from '../hooks/usePageTitle';

const highlights = [
  {
    icon: <Server className="text-blue-600" size={28} />,
    title: 'Infraestrutura confiavel',
    text: 'Projetos, redes, servidores, backup e continuidade para operacoes que nao podem parar.',
  },
  {
    icon: <Code2 className="text-violet-600" size={28} />,
    title: 'Desenvolvimento sob medida',
    text: 'Sites, sistemas e integracoes pensados para a realidade do negocio, sem excesso de complexidade.',
  },
  {
    icon: <Headset className="text-emerald-600" size={28} />,
    title: 'Suporte proximo',
    text: 'Atendimento remoto e presencial com linguagem simples, agilidade e acompanhamento real.',
  },
  {
    icon: <ShieldCheck className="text-cyan-600" size={28} />,
    title: 'Visao de seguranca',
    text: 'Boas praticas de protecao, disponibilidade e organizacao para reduzir risco operacional.',
  },
];

const About = () => {
  usePageTitle({
    title: 'Sobre a TeraNex',
    description: 'Conheca a TeraNex, nossa forma de trabalhar e como ajudamos empresas com infraestrutura, desenvolvimento e suporte.',
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-950 text-white pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Sobre a empresa
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Tecnologia aplicada ao crescimento e a estabilidade da sua empresa.
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              A TeraNex atua com foco em infraestrutura, suporte tecnico, consultoria e desenvolvimento.
              Nosso objetivo e simples: resolver problemas reais com clareza, velocidade e uma entrega que faca sentido para o cliente.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/contato" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition-colors">
                Falar com a equipe <ArrowRight size={18} />
              </Link>
              <Link to="/servicos" className="inline-flex items-center justify-center rounded-lg border border-slate-700 px-6 py-3 font-semibold text-slate-200 hover:border-slate-500 transition-colors">
                Ver servicos
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <MapPin className="text-cyan-300" size={24} />
              <h2 className="mt-4 font-semibold text-lg">Atuacao regional</h2>
              <p className="mt-2 text-sm text-slate-300">Presenca em Maceio e Marechal Deodoro, com suporte remoto para outras demandas.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Clock3 className="text-blue-300" size={24} />
              <h2 className="mt-4 font-semibold text-lg">Resposta objetiva</h2>
              <p className="mt-2 text-sm text-slate-300">Priorizamos diagnostico rapido, comunicacao clara e proximos passos bem definidos.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:col-span-2">
              <h2 className="font-semibold text-lg">Como gostamos de trabalhar</h2>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Entendemos o contexto, propomos a solucao certa, documentamos o que for importante e acompanhamos o resultado.
                Menos improviso, mais confianca.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-900">O que diferencia a TeraNex</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Unimos visao tecnica e atendimento proximo. Isso significa recomendar apenas o que gera resultado real
              e explicar cada etapa de forma que o cliente consiga tomar decisoes com seguranca.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100">
                {item.icon}
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 p-10 md:p-14 text-white">
          <h2 className="text-3xl font-bold">Precisa de uma equipe para organizar, proteger ou evoluir sua TI?</h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Podemos apoiar desde um atendimento pontual ate uma estrutura continua de consultoria, suporte ou desenvolvimento.
          </p>
          <div className="mt-8">
            <Link to="/contato" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Solicitar contato <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
