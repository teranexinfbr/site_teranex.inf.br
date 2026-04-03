import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ChevronDown, MapPin, Phone, Mail, Menu, X } from 'lucide-react';
import Logo from '../assets/logo.svg';

const MENU_ITEMS = [
  { label: 'Home', path: '/', type: 'link' },
  { label: 'Sobre', path: '/sobre', type: 'link' },
  {
    label: 'Servicos',
    path: '/servicos',
    type: 'dropdown',
    submenu: [
      { label: 'Consultoria', path: '/servicos/consultoria' },
      { label: 'Infraestrutura', path: '/servicos/infra' },
      { label: 'Desenvolvimento', path: '/servicos/dev' },
      { label: 'Suporte Tecnico', path: '/servicos/support' },
      { label: 'Todos os servicos', path: '/servicos' },
    ],
  },
  { label: 'Equipe', path: '/equipe', type: 'link' },
  { label: 'Projetos', path: '/nossos-projetos', type: 'link' },
  { label: 'Certificacoes', path: '/certificacoes', type: 'link' },
  { label: 'FAQ', path: '/faq', type: 'link' },
  { label: 'Contato', path: '/contato', type: 'link' },
];

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const DesktopMenuItem = ({ item }) => {
    if (item.type === 'link') {
      return (
        <Link to={item.path} className="font-medium text-slate-600 hover:text-blue-600 transition-colors">
          {item.label}
        </Link>
      );
    }

    if (item.type === 'dropdown') {
      return (
        <div className="relative group">
          <button className="flex items-center gap-1 font-medium text-slate-600 hover:text-blue-600 transition-colors">
            {item.label} <ChevronDown size={16} />
          </button>
          <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-100">
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                to={subItem.path}
                className="block w-full text-left px-4 py-3 hover:bg-slate-50 text-slate-700 hover:text-blue-600"
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const MobileMenuItem = ({ item, onClose }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);

    if (item.type === 'link') {
      return (
        <Link
          to={item.path}
          onClick={onClose}
          className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
        >
          {item.label}
        </Link>
      );
    }

    if (item.type === 'dropdown') {
      return (
        <>
          <button
            onClick={() => setSubmenuOpen(!submenuOpen)}
            className="flex items-center justify-between w-full text-left text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
          >
            {item.label} <ChevronDown size={20} />
          </button>
          {submenuOpen && (
            <div className="pl-4 space-y-3 flex flex-col bg-slate-50 rounded-lg p-4">
              {item.submenu.map((subItem, index) => (
                <Link key={index} to={subItem.path} onClick={onClose} className="text-slate-600">
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2">
              <img src={Logo} alt="TeraNex Logo" className="w-10 h-10" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">TeraNex</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {MENU_ITEMS.map((item, index) => (
                <DesktopMenuItem key={index} item={item} />
              ))}
            </div>

            <div className="flex md:hidden items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-700 p-2">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 h-screen overflow-y-auto pb-32 p-6 flex flex-col space-y-4">
            {MENU_ITEMS.map((item, index) => (
              <MobileMenuItem key={index} item={item} onClose={() => setMobileMenuOpen(false)} />
            ))}
          </div>
        )}
      </nav>

      <main className="flex-1 pb-12">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-3 pt-9 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <img src={Logo} alt="Logo TeraNex" className="h-8" />
                <span className="text-xl font-bold">TeraNex</span>
              </div>
              <p className="max-w-sm text-slate-400">
                Solucoes em tecnologia para empresas que buscam eficiencia, seguranca e inovacao.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin size={16} /> Maceio, AL
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> (82) 98881-4747
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} /> contato@teranex.inf.br
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Acesse tambem</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/sobre" className="hover:text-blue-400 transition-colors">
                    Sobre a TeraNex
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/teranexinfbr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://hub.teranex.inf.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Hub TeraNex
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pb-3 border-t border-slate-800 pt-8 text-sm text-center">
            &copy; 2026 TeraNex Informatica. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
