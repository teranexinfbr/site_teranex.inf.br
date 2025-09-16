import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        Tera<span>Nex</span>
      </Link>
      <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Início</NavLink></li>
        <li><NavLink to="/servicos" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Serviços</NavLink></li>
        <li><NavLink to="/contato" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contato</NavLink></li>
      </ul>
      <div></div>
    </nav>
  );
};

export default Header;
