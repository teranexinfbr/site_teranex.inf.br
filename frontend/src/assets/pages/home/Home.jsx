import React from 'react';
import './home.css';
import { TargetIcon, ZapIcon, UsersIcon, ClipboardIcon, MapIcon, PlayIcon, RepeatIcon } from '../global/icons';
import eu from "../../src/fotos/arthur.png";

const TeamMember = ({ imageUrl, name, qualifications }) => (
  <div className="team-member-card">
    <img src={imageUrl} alt={`Foto de ${name}`} className="team-member-img" onError={(e) => { e.target.onerror = null; e.target.src=''; }} />
    <div className="team-member-info">
      <h4>{name}</h4>
      <ul>
        {qualifications.map((q, index) => <li key={index}>{q}</li>)}
      </ul>
    </div>
  </div>
);

const HomePage = () => {
  const teamData = [
    {
      name: "Arthur Jhonathas",
      imageUrl: eu,
      qualifications: ["Técnico em Manutenção de Hardware", "Estudante de Engenharia da Computação"]
    },
  ];

  const featuresData = [
      {
          icon: <TargetIcon />,
          title: "Foco no Cliente",
          description: "Nossas soluções são personalizadas para atender às necessidades específicas do seu negócio, garantindo os melhores resultados."
      },
      {
          icon: <ZapIcon />,
          title: "Resposta Rápida",
          description: "Entendemos a urgência dos problemas de TI. Nossa equipe está pronta para agir rapidamente e minimizar o tempo de inatividade."
      },
      {
          icon: <UsersIcon />,
          title: "Parceria de Confiança",
          description: "Atuamos como uma extensão da sua equipe, construindo uma relação de longo prazo baseada na transparência e confiança."
      }
  ];

  const processData = [
    {
        icon: <ClipboardIcon />,
        title: "1. Diagnóstico",
        description: "Analisamos sua infraestrutura e entendemos suas necessidades para identificar pontos de melhoria e oportunidades."
    },
    {
        icon: <MapIcon />,
        title: "2. Planejamento",
        description: "Desenvolvemos um plano de ação detalhado e personalizado, definindo as melhores estratégias e tecnologias."
    },
    {
        icon: <PlayIcon />,
        title: "3. Execução",
        description: "Implementamos as soluções com agilidade e precisão, garantindo uma transição suave e sem interrupções."
    },
    {
        icon: <RepeatIcon />,
        title: "4. Suporte Contínuo",
        description: "Oferecemos monitoramento e suporte contínuos para garantir que sua TI funcione sempre no máximo desempenho."
    }
  ];

  return (
    <div>
      <h1 className="page-title">Soluções Inteligentes em TI para o seu Negócio</h1>
      <p className="page-subtitle">
        Garantimos que sua infraestrutura de tecnologia funcione de maneira impecável, permitindo que você foque no crescimento da sua empresa.
      </p>
      
      <section className="page-section">
        <h2 className="section-title">Por que escolher a Teranex?</h2>
        <div className="features-grid motivos">
            {featuresData.map((feature, index) => (
                <div className="feature-block" key={index}>
                    {feature.icon}
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Nosso Processo Simplificado</h2>
        <div className="features-grid processos">
            {processData.map((step, index) => (
                <div className="feature-block" key={index}>
                    {step.icon}
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </div>
            ))}
        </div>
      </section>

      <section className="page-section">
        <h2 className="section-title">Nossa Equipe</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageUrl={member.imageUrl}
              qualifications={member.qualifications}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
