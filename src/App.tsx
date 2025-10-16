import { About } from "./components/About"
import { BannerCarousel } from "./components/Banner"
import { Cards } from "./components/Cards"
import { CTA } from "./components/CTA"
import { Footer } from "./components/Footer"
import { InfoCards } from "./components/InfoCards"
import { MinhaSaude } from "./components/MinhaSaude"
import Navbar from "./components/Navbar"
import { StatsSection } from "./components/StateSection"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ScrollToTop } from './Utils/ScrollToTop/ScrollToTop';
import Institucional from "./pages/Institucional"
import ParaVoce from "./pages/ParaVoce"
import ParaSuaEmpresa from "./pages/ParaSuaEmpresa"
import Contato from "./pages/Contato"
import WhatsApp from "./components/UI/WhatssApp"
import Especialidades from "./pages/Especialidades"
import Procedimentos from "./pages/Procedimentos"
import Odontologia from "./pages/Odontologia"
import Generic from "./components/Generic"
import Exames from "./pages/Exames"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <BannerCarousel />
            <InfoCards />
            <MinhaSaude />
              <Generic 
                    backgroundType="3"
                    variant="cartao"
                  />
            <About />
            <Cards />
            <CTA />
            <StatsSection />
          </>
        } 
        />
        <Route path="/Institucional" element={<Institucional />} />
        <Route path="/ParaVoce" element={<ParaVoce />} />
        <Route path="/Para-sua-Empresa" element={<ParaSuaEmpresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/procedimentos" element={<Procedimentos />} />
        <Route path="/odontologia" element={<Odontologia />} />
        <Route path="exames-complementares" element={<Exames />} />
      </Routes>
      <WhatsApp />
      <Footer />
    </Router>
  )
}

export default App
