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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
