import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/home/Home";
import Contato from './assets/pages/contatos/Contato';
import Servicos from "./assets/pages/servicos/Servicos";
import Header from "./assets/pages/global/Header";
import Footer from "./assets/pages/global/Footer";
import './assets/pages/global/global.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-site">
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/contato" element={ <Contato />} />
          <Route path="/servicos" element={ <Servicos />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
