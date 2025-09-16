import React from 'react';
import './css/servicos.css';
import { SupportIcon, NetworkIcon, SecurityIcon, MaintenanceIcon, CloudIcon, ServerIcon, BackupIcon, ConsultingIcon, WifiIcon, MonitorIcon, AssetIcon, SoftwareIcon, VoipIcon, EndpointIcon, DocsIcon, VirtualizationIcon } from '../global/icons';

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
            icon: <EndpointIcon />,
            title: "Proteção de Endpoints",
            description: "Defesa avançada para computadores contra malwares e ransomwares."
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

export default ServicesPage;
