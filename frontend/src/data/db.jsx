import React from 'react';
import { Code, Server, Headphones, BriefcaseBusiness } from 'lucide-react';
import Arthur from '../assets/team/eueueu.jpeg';
import mraphaely from '../assets/team/mraphaely.png';
import Testemunha1 from '../assets/testmonials/arthurbebm.png';
import Testemunha2 from '../assets/testmonials/Matheus.png';
import Testemunha3 from '../assets/testmonials/davisantos.png';

export const servicesData = {
  consultoria: {
    title: 'Consultoria em TI',
    description: 'Orientacao especializada para otimizar processos, estrutura e estrategias de tecnologia.',
    icon: <BriefcaseBusiness size={32} className="text-cyan-400" />,
    features: [
      'Analise da infraestrutura atual',
      'Planejamento estrategico de TI',
      'Recomendacoes de melhoria',
      'Implantacao de solucoes',
      'Acompanhamento de projetos',
    ],
  },
  infra: {
    title: 'Infraestrutura de TI',
    description: 'Projetamos e gerenciamos redes robustas para garantir estabilidade, organizacao e seguranca operacional.',
    icon: <Server size={32} className="text-blue-400" />,
    features: [
      'Projetos de rede corporativa',
      'Implantacao de servidores',
      'Monitoramento 24/7',
      'Backup e recuperacao de dados',
      'Seguranca de infraestrutura',
    ],
  },
  dev: {
    title: 'Desenvolvimento',
    description: 'Transformamos ideias em realidade digital com sites, sistemas e aplicativos de alta performance.',
    icon: <Code size={32} className="text-purple-400" />,
    features: [
      'Desenvolvimento web full-stack',
      'Aplicativos moveis nativos e hibridos',
      'APIs e integracoes',
      'Sistemas de gestao personalizados',
      'Manutencao e suporte continuo',
    ],
  },
  support: {
    title: 'Suporte Tecnico',
    description: 'Atendimento agil para resolver problemas do dia a dia e manter sua equipe produtiva.',
    icon: <Headphones size={32} className="text-green-400" />,
    features: [
      'Suporte remoto e presencial',
      'Resolucao rapida de incidentes',
      'Consultoria tecnica',
      'Treinamento de equipe',
      'Monitoramento proativo',
    ],
  },
};

export const testimonials = [
  {
    name: 'Arthur Bernardo',
    avatar: Testemunha1,
    text: 'Otimo servico e excelente postura dos profissionais.',
    rating: 5,
  },
  {
    name: 'Matheus Ferreira',
    avatar: Testemunha2,
    text: 'A empresa atendeu todas as minhas expectativas. Otimo espaco, equipe atenciosa e muito cuidado em cada solicitacao.',
    rating: 5,
  },
  {
    name: 'Davi Santos',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    text: 'Atendimento excelente e profissionais qualificados. Resolveram meu problema com rapidez.',
    rating: 5,
  },
  {
    name: 'Nichollas Mazzola',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    text: 'Realizaram o atendimento remotamente e me ajudaram a solucionar meu problema com rapidez e profissionalismo.',
    rating: 5,
  },
  {
    name: 'Julia Souza',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
    text: 'Profissionais qualificados, bem treinados e muito atenciosos.',
    rating: 5,
  },
];

export const certificationsByCategory = [
  {
    category: 'Certificacoes Cisco',
    items: [
      {
        name: 'CCNA: Introduction to Networks',
        url: 'https://images.credly.com/size/340x340/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png',
      },
    ],
  },
];

export const homeBrands = [
  { name: 'Microsoft Azure', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/330px-Microsoft_Azure_Logo.svg.png?_=20210815110837' },
  { name: 'Amazon Web Services', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png?_=20170912170050' },
  { name: 'Google Cloud', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1280px-Google_Cloud_logo.svg.png?_=20210208232155' },
  { name: 'Cisco', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/330px-Cisco_logo_blue_2016.svg.png?_=20180716213716' },
  { name: 'Dell', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/500px-Dell_Logo.svg.png?_=20160807135325' },
  { name: 'HP', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/250px-HP_logo_2012.svg.png?_=20160215051833' },
];

export const businessPartners = [
  { name: 'TechCorp Solutions', description: 'Parceiro estrategico em solucoes empresariais.', logo: 'https://i.pravatar.cc/150?img=10' },
  { name: 'Innovate Ltda', description: 'Colaboracao em projetos de inovacao tecnologica.', logo: 'https://i.pravatar.cc/150?img=11' },
  { name: 'Global Systems', description: 'Parceria internacional para expansao de mercado.', logo: 'https://i.pravatar.cc/150?img=12' },
  { name: 'DataFlow Inc', description: 'Especialistas em analise de dados e BI.', logo: 'https://i.pravatar.cc/150?img=13' },
  { name: 'SecureNet', description: 'Foco em seguranca cibernetica avancada.', logo: 'https://i.pravatar.cc/150?img=14' },
  { name: 'CloudMasters', description: 'Especialistas em migracao e otimizacao de nuvem.', logo: 'https://i.pravatar.cc/150?img=15' },
];

export const teamMembers = [
  {
    name: 'Arthur Jhonathas',
    role: 'CEO & Head of Infrastructure',
    bio: 'Arquiteto de solucoes em infraestrutura de TI, com foco em alta disponibilidade, redes corporativas e estrategias de cloud.',
    bioDetalhada: 'Responsavel por transformar necessidades tecnicas em estruturas mais estaveis, seguras e preparadas para crescer.',
    img: Arthur,
    social: {
      linkedin: 'https://www.linkedin.com/in/arthurjhonathas',
      instagram: 'https://www.instagram.com/arthjhon_',
      email: 'mailto:arthur.lima@teranex.inf.br',
    },
  },
/*   {
    name: 'Luiz Henrique',
    role: 'CTO & Lead Engineer',
    bio: 'Lidera a engenharia de aplicacoes, redes e seguranca da informacao, buscando solucoes resilientes e bem estruturadas.',
    bioDetalhada: 'Estudante de engenharia da computacao, apaixonado por tecnologia e inovacao, sempre em busca de novos desafios e aprendizado continuo na area de TI.',
    img: 'https://i.pravatar.cc/400?img=12',
    social: {
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/_ricomnd',
      email: 'mailto:henrique.carnauba@teranex.inf.br',
    },
  }, */
/*   {
    name: 'Maryana Raphaely',
    role: 'QA Engineer',
    bio: 'Engenheira de qualidade dedicada a garantir excelencia em software por meio de testes rigorosos e melhoria continua.',
    bioDetalhada: 'Atua com foco em confiabilidade, validacao de fluxos e qualidade de entrega, ajudando a manter a experiencia final mais segura e consistente.',
    img: mraphaely,
    social: {
      linkedin: 'https://www.linkedin.com/',
      instagram: 'https://www.instagram.com/',
      email: 'mailto:ana@teranex.inf.br',
    },
  }, */
];
