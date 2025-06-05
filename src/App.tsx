import { About } from "./components/About"
import { BannerCarousel } from "./components/Banner"
import { Cards } from "./components/Cards"
import { CTA } from "./components/CTA"
import {Footer} from "./components/Footer"
import { InfoCards } from "./components/InfoCards"
import { MinhaSaude } from "./components/MinhaSaude"
import Navbar from "./components/Navbar"
import { StatsSection } from "./components/StateSection"

function App() {
  return (
    <>
      <Navbar />
      <BannerCarousel />
      <InfoCards />
      <MinhaSaude />
      <About />
      <Cards />
      <CTA />
      <StatsSection />
      <Footer />
    </>
  )
}

export default App
