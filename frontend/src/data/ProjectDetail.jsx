import LoginPagePfsenseTRNX from "../assets/projects/proj.pfsenseTRNX/LOGIN_PFSENSE.png";
import DashboardPagePfsenseTRNX from "../assets/projects/proj.pfsenseTRNX/DASHBOARD_PFSENSE.png";
import RulePageSrv from "../assets/projects/proj.pfsenseTRNX/RulePageSrv.png";
import AliasPageIP from "../assets/projects/proj.pfsenseTRNX/AliasesPageIP.png";
import GrafanaPage from "../assets/projects/proj.sururu/GrafanaPage.png";

const ProjectsDetail = [
  {
    id: 1,
    title: "Implantacao de Firewall pfSense",
    client: "TeraNex Tecnologia",
    category: "Infraestrutura e Seguranca de Redes",
    year: "2026",
    status: "Concluido",
    image: DashboardPagePfsenseTRNX,
    description:
      "Implantacao de firewall pfSense com segmentacao por VLANs, controle de trafego, VPN e regras granulares para elevar o nivel de seguranca e organizacao da rede.",
    fullDescription:
      "Este projeto teve como objetivo estruturar o ambiente interno da TeraNex com uma camada de seguranca mais robusta, substituindo configuracoes basicas de roteamento por uma arquitetura centralizada em pfSense. O trabalho envolveu desenho da topologia, segmentacao de rede por VLANs, definicao de politicas entre setores, criacao de regras de firewall, NAT, VPN para acesso remoto seguro e integracao com servicos internos. O resultado foi um ambiente mais organizado, com melhor visibilidade do trafego e maior controle sobre os acessos.",
    challenge:
      "A rede operava sem segmentacao adequada, com pouca separacao entre usuarios, servidores e servicos criticos. Isso aumentava o risco operacional, dificultava o controle de acesso e limitava a escalabilidade do ambiente.",
    solution:
      "Implementamos o pfSense como firewall central, estruturamos VLANs para diferentes contextos de uso, criamos aliases de IP e portas para facilitar a administracao, aplicamos regras de firewall mais granulares e habilitamos VPN para acesso remoto com mais seguranca. A arquitetura ficou preparada para crescimento e manutencao mais previsivel.",
    gallery: [
      DashboardPagePfsenseTRNX,
      LoginPagePfsenseTRNX,
      RulePageSrv,
      AliasPageIP,
    ],
  },
  {
    id: 2,
    title: "Servidor de Monitoramento e Observabilidade",
    client: "Equipe Projeto Sururu",
    category: "Infraestrutura, Monitoramento e IoT",
    year: "2025",
    status: "Concluido",
    image: GrafanaPage,
    description:
      "Implementacao de um servidor de monitoramento centralizado com Grafana para visualizar em tempo real os dados recebidos por sensores do Projeto Sururu.",
    fullDescription:
      "O Projeto Sururu precisava acompanhar sensores ambientais distribuidos em campo, com dados relevantes para pesquisa e analise. A TeraNex desenhou e implantou uma stack de monitoramento centralizada com Grafana e banco de dados de series temporais, permitindo consolidacao das leituras, historico de metricas e dashboards personalizados. A entrega facilitou o acompanhamento tecnico do projeto e deu mais autonomia para analise e comparacao dos dados ao longo do tempo.",
    challenge:
      "Os dados estavam dispersos e sem uma camada de visualizacao adequada, o que dificultava tanto o acompanhamento em tempo real quanto a analise historica das medicoes e o acionamento de respostas mais rapidas.",
    solution:
      "Implantamos um servidor dedicado com Grafana, InfluxDB v2 e integracao com sensores IoT. A solucao passou a oferecer dashboards interativos, consultas historicas, maior centralizacao da informacao e uma base mais solida para evolucao do monitoramento.",
    gallery: [
      GrafanaPage,
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Implantacao do Virtualizador Proxmox",
    client: "Hospital Santa Vida",
    category: "Infraestrutura, Virtualizacao e Alta Disponibilidade",
    year: "2025",
    status: "Concluido",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2070&auto=format&fit=crop",
    description:
      "Implantacao do Proxmox VE como plataforma de virtualizacao para consolidacao de servidores criticos, com foco em disponibilidade, escalabilidade e melhor uso de recursos.",
    fullDescription:
      "O Hospital Santa Vida precisava modernizar sua infraestrutura e reduzir a dependencia de servidores fisicos isolados. A TeraNex implantou o Proxmox VE como plataforma central de virtualizacao, organizando workloads criticos em um ambiente mais flexivel, com melhor aproveitamento de hardware e maior capacidade de recuperacao. O projeto trouxe uma base mais preparada para continuidade operacional e expansao de servicos hospitalares.",
    challenge:
      "A operacao dependia de servidores fisicos isolados, com custo de manutencao elevado, pouca elasticidade e maior risco de indisponibilidade para sistemas essenciais ao atendimento.",
    solution:
      "Estruturamos o ambiente com Proxmox VE, organizacao de workloads, estrategia de backups automatizados, snapshots e integracao com a rede existente. Com isso, o cliente passou a ter uma plataforma mais resiliente, organizada e preparada para recuperacao mais rapida em caso de falhas.",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563770095-258775979b08?q=80&w=1974&auto=format&fit=crop",
    ],
  },
];

export default ProjectsDetail;
