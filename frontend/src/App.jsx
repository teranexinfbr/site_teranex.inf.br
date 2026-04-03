import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="equipe" element={<Team />} />
        <Route path="contato" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="servicos/:type" element={<ServiceDetail />} />
        <Route path="nossos-projetos" element={<Projects />} />
        <Route path="certificacoes" element={<Certifications />} />
        <Route path="servicos" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
