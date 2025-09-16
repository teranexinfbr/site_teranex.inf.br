import React, { useState } from 'react';

// Estilos CSS (em vez de um arquivo .css separado, para ser auto-contido)
const styles = `
  :root {
    --primary-color: #00a9ff; /* Azul vibrante da logo */
    --background-color: #121212; /* Fundo escuro principal */
    --card-bg: #1e1e1e; /* Fundo dos cartões e elementos */
    --text-color: #e0e0e0; /* Texto claro para leitura */
    --heading-color: #ffffff; /* Títulos em branco */
    --border-color: #2e2e2e; /* Bordas sutis */
    --shadow-color: rgba(0, 169, 255, 0.1);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.7;
  }

  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  /* --- Navbar --- */
  .navbar {
    background-color: rgba(18, 18, 18, 0.8);
    backdrop-filter: blur(10px);
    padding: 1rem 2.5rem;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid var(--border-color);
  }

  .nav-brand {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--heading-color);
    cursor: pointer;
    text-decoration: none;
    justify-self: start;
  }
  
  .nav-brand span {
      color: var(--primary-color);
  }

  .nav-links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 2.5rem;
    justify-self: center;
  }

  .nav-link {
    color: var(--text-color);
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;
  }
  
  .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-color);
    transition: width 0.4s ease;
  }

  .nav-link:hover, .nav-link.active {
    color: var(--primary-color);
  }
  
  .nav-link:hover::after, .nav-link.active::after {
    width: 100%;
  }

  /* --- Main Content --- */
  .main-content {
    flex: 1;
    padding: 3rem 2.5rem;
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
  }

  .page-title {
    font-size: 3rem;
    color: var(--heading-color);
    margin-bottom: 2rem;
    text-align: center;
    font-weight: 700;
  }
  
  .page-subtitle {
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem auto;
    font-size: 1.1rem;
    color: var(--text-color);
  }
  
  .page-section {
    margin-bottom: 5rem;
  }

  .section-title {
    font-size: 2.2rem;
    color: var(--heading-color);
    margin-bottom: 2.5rem;
    text-align: center;
  }

  p {
    color: var(--text-color);
    font-size: 1.1rem;
  }

  /* --- Team Section --- */
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, 320px);
    gap: 2rem;
    justify-content: center;
  }

  .team-member-card {
    background-color: var(--card-bg);
    border-radius: 12px;
    border: 1px solid var(--border-color);
    overflow: hidden;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-member-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px var(--shadow-color);
  }

  .team-member-img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: grayscale(30%);
    transition: filter 0.3s ease;
  }
  
  .team-member-card:hover .team-member-img {
      filter: grayscale(0%);
  }

  .team-member-info {
    padding: 1.5rem;
  }

  .team-member-info h4 {
    margin: 0 0 0.5rem 0;
    font-size: 1.25rem;
    color: var(--heading-color);
  }

  .team-member-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: var(--text-color);
  }
  
  .team-member-info li {
      margin-bottom: 0.25rem;
      font-size: 0.95rem;
  }

  /* --- Services & Features Section --- */
  .features-grid,
  .services-grid-icons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }

  .service-block,
  .feature-block {
    background-color: var(--card-bg);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .service-block:hover,
  .feature-block:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 20px var(--shadow-color);
  }

  .service-icon,
  .feature-icon {
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .service-block h3,
  .feature-block h3 {
    color: var(--heading-color);
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  .service-block p,
  .feature-block p {
    font-size: 1rem;
    line-height: 1.6;
    flex-grow: 1;
  }

  /* --- Contact Page --- */
  .contact-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    background-color: var(--card-bg);
    padding: 2.5rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
  }
  
  @media (min-width: 992px) {
    .contact-container {
      grid-template-columns: 1fr 1.5fr;
      padding: 3rem;
    }
  }

  .contact-info-item {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  .contact-info-item a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s ease;
  }
  
  .contact-info-item a:hover {
      color: var(--primary-color);
  }
  
  .contact-info-item svg {
    margin-right: 1rem;
    color: var(--primary-color);
    flex-shrink: 0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .form-group label {
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
  }

  .form-group input, .form-group textarea {
    padding: 0.9rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    background-color: #2c2c2c;
    color: var(--text-color);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  
  .form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--shadow-color);
  }

  .submit-btn {
    padding: 0.9rem 2rem;
    background-color: var(--primary-color);
    color: #121212;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    align-self: flex-start;
    margin-top: 1rem;
  }

  .submit-btn:hover {
    background-color: #33c6ff;
    transform: translateY(-3px);
  }

  /* --- Footer --- */
  .footer {
    background-color: #1a1a1a;
    color: #888;
    text-align: center;
    padding: 2rem;
    margin-top: auto;
    border-top: 1px solid var(--border-color);
  }
`;

// --- Ícones SVG ---
const TargetIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>
    </svg>
);
const ZapIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);
const UsersIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);
const ClipboardIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>
);
const MapIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>
    </svg>
);
const PlayIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </svg>
);
const RepeatIcon = () => (
    <svg className="feature-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
    </svg>
);
const SupportIcon = () => (
  <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="8" y1="23" x2="16" y2="23"></line>
  </svg>
);
const NetworkIcon = () => (
  <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
    <line x1="6" y1="6" x2="6.01" y2="6"></line>
    <line x1="6" y1="18" x2="6.01" y2="18"></line>
  </svg>
);
const SecurityIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
);
const MaintenanceIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
);
const CloudIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
);
const ServerIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
        <line x1="10" y1="6" x2="10.01" y2="6"></line>
        <line x1="10" y1="18" x2="10.01" y2="18"></line>
    </svg>
);
const BackupIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
        <path d="M15.49 15.49L8.51 8.51" />
        <path d="M12 2v4m0 12v4m-8-8H0m24 0h-4" />
    </svg>
);
const ConsultingIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 0 0-3.54 19.54A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
        <path d="M12 6v6l4 2" />
    </svg>
);
const WifiIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>
    </svg>
);
const MonitorIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
);
const AssetIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 8V4H3v4"/><path d="M21 12H3"/><path d="M21 16H3v4h18v-4z"/>
    </svg>
);
const SoftwareIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
    </svg>
);
const VoipIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 14.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M16.5 14.5S21 12 21 7H3s4.5 5 4.5 7.5"/><path d="M12 14.5V19a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4.5"/>
    </svg>
);
const EndpointIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12l8-8"/><path d="M12 12l-8 8"/><path d="M12 12l8 8"/><path d="M12 12l-8-8"/><path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"/>
    </svg>
);
const DocsIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>
    </svg>
);
const VirtualizationIcon = () => (
    <svg className="service-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><path d="M8 12h8"/><path d="M12 8v8"/><path d="M2 12h20"/><path d="M12 2v20"/>
    </svg>
);

// Componente: Navbar
const Navbar = ({ activePage, setActivePage }) => {
  const navigate = (page) => (e) => {
    e.preventDefault();
    setActivePage(page);
  };

  return (
    <nav className="navbar">
      <a href="#" onClick={navigate('home')} className="nav-brand">
        Tera<span>Nex</span>
      </a>
      <ul className="nav-links">
        <li><a href="#" onClick={navigate('home')} className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Início</a></li>
        <li><a href="#" onClick={navigate('services')} className={`nav-link ${activePage === 'services' ? 'active' : ''}`}>Serviços</a></li>
        <li><a href="#" onClick={navigate('contact')} className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>Contato</a></li>
      </ul>
      <div></div>
    </nav>
  );
};

// Componente: Membro da Equipe
const TeamMember = ({ imageUrl, name, qualifications }) => (
  <div className="team-member-card">
    <img src={imageUrl} alt={`Foto de ${name}`} className="team-member-img" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x400/2e2e2e/e0e0e0?text=Foto'; }} />
    <div className="team-member-info">
      <h4>{name}</h4>
      <ul>
        {qualifications.map((q, index) => <li key={index}>{q}</li>)}
      </ul>
    </div>
  </div>
);

// Página: Início
const HomePage = () => {
  const teamData = [
    {
      name: "Arthur Jhonathas",
      imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQEjHxYHHaDnUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1652202812744?e=1757548800&v=beta&t=nBrI2WWhrOEnkdYqjae1-jBinP0GV96cPmBpk2S6tdc",
      qualifications: ["Técnico em Manutenção de Hardware", "Analista de Suporte", "Gerente de Infraestrutura"]
    }
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
        <div className="features-grid">
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
        <div className="features-grid">
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
        <h2 className="section-title">Nossa Equipe de Especialistas</h2>
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

// Página: Serviços
const ServicesPage = () => {
    const servicesData = [
        {
            icon: <SupportIcon />,
            title: "Suporte Técnico Especializado",
            description: "Resolução ágil de problemas em desktops e notebooks, presencial ou remotamente, para manter sua equipe sempre produtiva."
        },
        {
            icon: <NetworkIcon />,
            title: "Infraestrutura de Redes",
            description: "Projetamos e gerenciamos redes cabeadas e Wi-Fi robustas, seguras e de alta performance para o seu escritório."
        },
        {
            icon: <SecurityIcon />,
            title: "Segurança Digital",
            description: "Implementamos firewalls, VPNs e políticas de segurança para proteger seus dados contra ameaças virtuais."
        },
        {
            icon: <MaintenanceIcon />,
            title: "Manutenção Preventiva",
            description: "Realizamos verificações proativas para otimizar o desempenho e prevenir falhas em seus equipamentos."
        },
        {
            icon: <CloudIcon />,
            title: "Soluções em Nuvem",
            description: "Migração e gerenciamento de serviços como Microsoft 365 e Google Workspace para otimizar a colaboração da sua equipe."
        },
        {
            icon: <ServerIcon />,
            title: "Administração de Servidores",
            description: "Gerenciamento completo de servidores Windows e Linux, garantindo máxima disponibilidade e performance."
        },
        {
            icon: <BackupIcon />,
            title: "Backup e Recuperação",
            description: "Implementamos rotinas de backup seguras e planos de recuperação de desastres para garantir a continuidade do seu negócio."
        },
        {
            icon: <ConsultingIcon />,
            title: "Consultoria em TI",
            description: "Analisamos sua infraestrutura atual e recomendamos as melhores soluções tecnológicas para impulsionar seus resultados."
        },
        {
            icon: <WifiIcon />,
            title: "Otimização de Wi-Fi",
            description: "Análise e melhoria da cobertura e performance da sua rede sem fio para garantir uma conexão estável e rápida em todo o ambiente."
        },
        {
            icon: <MonitorIcon />,
            title: "Monitoramento Proativo",
            description: "Acompanhamento contínuo dos seus sistemas para identificar e resolver problemas antes que eles afetem sua operação."
        },
        {
            icon: <AssetIcon />,
            title: "Gestão de Ativos de TI",
            description: "Inventário e gerenciamento do ciclo de vida de hardware e software, otimizando investimentos e conformidade."
        },
        {
            icon: <SoftwareIcon />,
            title: "Suporte a Software Específico",
            description: "Auxílio e suporte para softwares de mercado ou específicos do seu setor, garantindo que sua equipe os utilize eficientemente."
        },
        {
            icon: <VoipIcon />,
            title: "Soluções de Telefonia VoIP",
            description: "Implementação de sistemas de telefonia modernos e econômicos baseados na internet, com recursos avançados."
        },
        {
            icon: <EndpointIcon />,
            title: "Proteção de Endpoints",
            description: "Defesa avançada para computadores e dispositivos móveis contra malware, ransomware e outras ameaças cibernéticas."
        },
        {
            icon: <DocsIcon />,
            title: "Políticas e Documentação de TI",
            description: "Criação de políticas de uso e documentação técnica da sua infraestrutura para padronizar processos e facilitar a gestão."
        },
        {
            icon: <VirtualizationIcon />,
            title: "Soluções de Virtualização",
            description: "Otimização de recursos de hardware através da criação de múltiplos servidores virtuais em um único equipamento físico."
        },
    ];

    return (
        <div>
            <h1 className="page-title">Nossos Serviços</h1>
            <p className="page-subtitle">Oferecemos uma gama completa de serviços para atender às necessidades tecnológicas da sua empresa, da infraestrutura ao suporte diário.</p>
            <div className="services-grid-icons">
                {servicesData.map((service, index) => (
                    <div className="service-block" key={index}>
                        {service.icon}
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Página: Contato
const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Dados do formulário:", data);
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviado!';
    submitBtn.disabled = true;
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2500);
    event.target.reset();
  };
  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  );
  
  const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  );
  
  const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
  );

  return (
    <div>
      <h1 className="page-title">Entre em Contato</h1>
      <p className="page-subtitle">Estamos prontos para ajudar. Utilize um dos canais abaixo ou preencha o formulário e retornaremos em breve.</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="section-title" style={{textAlign: 'left', fontSize: '1.8rem'}}>Nossos Canais</h3>
          <div className="contact-info-item">
            <MailIcon />
            <a href="mailto:contato@arthlabs.inf.br">contato@arthlabs.inf.br</a>
          </div>
          <div className="contact-info-item">
            <InstagramIcon />
            <a href="https://instagram.com/teranexinfo" target="_blank" rel="noopener noreferrer">@teranexinfo</a>
          </div>
          <div className="contact-info-item">
            <PhoneIcon />
            <a href="https://wa.me/message/ECNIX4WNEUNRF1" target="_blank" rel="noopener noreferrer">(82) 9 8881-4747</a>
          </div>
        </div>

        <div className="contact-form-container">
          <h3 className="section-title" style={{textAlign: 'left', fontSize: '1.8rem'}}>Envie uma Mensagem</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input type="text" id="nome" name="nome" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input type="tel" id="telefone" name="telefone" />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Como podemos ajudar?</label>
              <textarea id="descricao" name="descricao" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Componente: Footer
const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} TeraNex Soluções em Tecnologia. Todos os direitos reservados.</p>
  </footer>
);

// Componente Principal: App
export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="app-container">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </>
  );
}
