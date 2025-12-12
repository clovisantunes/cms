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
import Exames from "./pages/Exames"
import ExamResults from "./components/Exames"
import Error404 from "./pages/Error404" 
import FilterSpecialties from "./components/FilterSpecialties"
import EspecialidadePage from "./pages/EspecialidadesPage"
import CartaoAPF from "./components/APF"
import FAQSection from "./components/FAQ"

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

            <FilterSpecialties />

            <MinhaSaude />
            <CartaoAPF 
            />
            
            <About />
            <Cards />
            <ExamResults />
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
        <Route path="/exames" element={<Exames />} />
        <Route path="/especialidade/:id" element={<EspecialidadePage />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <FAQSection />
      <WhatsApp />
      <Footer id="contato" />
    </Router>
  )
}

export default App