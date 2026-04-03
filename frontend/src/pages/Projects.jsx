import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  AlertCircle,
  CheckCircle,
  Check,
  FolderKanban,
  ShieldCheck,
  Building2,
  GalleryHorizontal,
} from 'lucide-react';
import ProjectsDetail from '../data/ProjectDetail';
import { usePageTitle } from '../hooks/usePageTitle';

const ProjectStats = ({ totalProjects, totalCategories, totalImages }) => (
  <div className="grid sm:grid-cols-3 gap-4 mt-10">
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold">{totalProjects}</p>
      <p className="mt-1 text-sm text-slate-300">Cases publicados</p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold">{totalCategories}</p>
      <p className="mt-1 text-sm text-slate-300">Frentes de atuacao</p>
    </div>
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-3xl font-bold">{totalImages}</p>
      <p className="mt-1 text-sm text-slate-300">Imagens e evidencias</p>
    </div>
  </div>
);

const FilterPills = ({ categories, activeCategory, onChange }) => (
  <div className="flex flex-wrap gap-3">
    {categories.map((category) => {
      const isActive = category === activeCategory;
      return (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
            isActive
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-600'
          }`}
        >
          {category}
        </button>
      );
    })}
  </div>
);

const ProjectDetails = ({ project, allProjects, onBack, onSelectProject }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImg = () => {
    setCurrentImg((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  const otherProjects = allProjects.filter((item) => item.id !== project.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-slate-950 text-white pt-28 pb-14 px-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 text-sm font-medium uppercase tracking-wide"
          >
            <ArrowRight className="rotate-180" size={16} /> Voltar para projetos
          </button>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-3">{project.title}</h1>
              <p className="text-lg md:text-xl text-slate-300">
                Cliente: <span className="text-white font-semibold">{project.client}</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <Building2 size={16} /> {project.client}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <FolderKanban size={16} /> {project.year}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  <GalleryHorizontal size={16} /> {project.gallery.length} imagens
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contato"
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap text-center"
              >
                Fale com um especialista
              </Link>
              <button
                onClick={onBack}
                className="border border-white/15 px-6 py-3 rounded-lg font-semibold text-white hover:bg-white/5 transition-colors"
              >
                Ver outros cases
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 h-[320px] md:h-[560px] group bg-black">
          <div
            className="absolute inset-0 flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentImg * 100}%)` }}
          >
            {project.gallery.map((img, idx) => (
              <div key={idx} className="min-w-full h-full relative">
                <img src={img} alt={`Projeto ${project.title} - imagem ${idx + 1}`} className="w-full h-full object-cover opacity-90" />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
              </div>
            ))}
          </div>

          <button
            onClick={prevImg}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextImg}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight size={32} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {project.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImg(idx)}
                className={`h-2 rounded-full transition-all ${currentImg === idx ? 'bg-white w-8' : 'bg-white/50 w-2'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-12">
          <div className="space-y-10">
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-blue-600" /> Visao geral do projeto
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">{project.fullDescription}</p>
            </section>

            <section className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-3xl border border-red-100">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle size={20} /> O desafio
                </h3>
                <p className="text-red-800 text-sm leading-relaxed">{project.challenge}</p>
              </div>
              <div className="bg-green-50 p-6 rounded-3xl border border-green-100">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle size={20} /> A solucao
                </h3>
                <p className="text-green-800 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </section>

            {otherProjects.length > 0 && (
              <section>
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-2xl font-bold text-slate-900">Outros projetos</h2>
                  <button onClick={onBack} className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                    Ver todos
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {otherProjects.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => onSelectProject(item)}
                      className="text-left bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-lg transition-all"
                    >
                      <div className="h-44 overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">{item.category}</p>
                        <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-600 line-clamp-3">{item.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Ficha tecnica</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Cliente</span>
                  <span className="font-medium text-slate-900 text-right">{project.client}</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Categoria</span>
                  <span className="font-medium text-slate-900 text-right">{project.category}</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Ano</span>
                  <span className="font-medium text-slate-900">{project.year}</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-2">
                  <span>Galeria</span>
                  <span className="font-medium text-slate-900">{project.gallery.length} imagens</span>
                </li>
                <li className="flex justify-between">
                  <span>Status</span>
                  <span className="font-medium text-green-600 flex items-center gap-1">
                    <Check size={14} /> {project.status || 'Concluido'}
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-slate-950 text-white p-8 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
                  <ShieldCheck size={14} /> Case validado
                </div>
                <h3 className="font-bold text-2xl mt-5 mb-2">Gostou do resultado?</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Podemos desenhar uma estrutura parecida para o seu ambiente, com foco em desempenho, seguranca e escalabilidade.
                </p>
                <Link
                  to="/contato"
                  className="w-full inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Solicitar orcamento
                </Link>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Todos');

  usePageTitle({
    title: 'Projetos',
    description: 'Conheca os cases da TeraNex em infraestrutura, monitoramento, seguranca e virtualizacao.',
  });

  const categories = useMemo(
    () => ['Todos', ...new Set(ProjectsDetail.map((project) => project.category))],
    []
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') return ProjectsDetail;
    return ProjectsDetail.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const totalImages = useMemo(
    () => ProjectsDetail.reduce((sum, project) => sum + project.gallery.length, 0),
    []
  );

  return (
    <>
      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          allProjects={ProjectsDetail}
          onBack={() => setSelectedProject(null)}
          onSelectProject={(project) => {
            setSelectedProject(project);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      ) : (
        <div className="min-h-screen bg-slate-50">
          <div className="bg-slate-950 text-white pt-28 pb-18 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-4xl">
                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  Cases e entregas reais
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl font-bold mb-6">Projetos que mostram como a TeraNex trabalha na pratica</h1>
                <p className="text-xl text-slate-300 max-w-3xl">
                  Reunimos alguns projetos para mostrar como transformamos necessidades tecnicas em ambientes mais seguros, organizados e preparados para crescer.
                </p>
              </div>

              <ProjectStats
                totalProjects={ProjectsDetail.length}
                totalCategories={categories.length - 1}
                totalImages={totalImages}
              />
            </div>
          </div>

          <div className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Explore nossos cases</h2>
                  <p className="mt-3 text-slate-600 max-w-2xl">
                    Filtre por categoria e veja projetos com foco em infraestrutura, observabilidade e alta disponibilidade.
                  </p>
                </div>
                <FilterPills categories={categories} activeCategory={activeCategory} onChange={setActiveCategory} />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all group flex flex-col h-full">
                    <div className="h-56 overflow-hidden relative">
                      <div className="absolute top-4 left-4 z-10">
                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 z-10 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {project.year}
                      </div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-4">
                        <h4 className="text-sm font-bold text-slate-400 uppercase mb-1">{project.client}</h4>
                        <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                      <div className="flex items-center justify-between text-sm text-slate-500 mb-5">
                        <span>{project.gallery.length} imagens</span>
                        <span>{project.status || 'Concluido'}</span>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedProject(project);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="mt-auto w-full border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all flex items-center justify-center gap-2"
                      >
                        Ver detalhes <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-600">
                  Nenhum projeto encontrado para esse filtro.
                </div>
              )}
            </div>

            <div className="max-w-7xl mx-auto">
              <div className="text-center mt-20 bg-gradient-to-r from-blue-900 via-slate-900 to-slate-950 rounded-3xl p-10 md:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-4">Tem um projeto em mente?</h2>
                  <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                    Nossa equipe pode avaliar seu ambiente, propor a melhor arquitetura e colocar a solucao para rodar com mais previsibilidade.
                  </p>
                  <Link
                    to="/contato"
                    className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-bold shadow-lg"
                  >
                    Fale conosco agora
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
