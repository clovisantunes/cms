import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo-CMS-site 1.png';
import Button from '../UI/Button';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 190;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>

      <header className={styles.navbarcontainer}>
        <div className={styles.topbar}>
          <div className={styles.workinghours}>
            Atendimento de Segunda a Sexta, das 7h às 21h - Sábados e feriados, das 8h às 19h.
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
          </div>
        </div>

        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.navitems}>
            <div className={styles.navRow}>
              <a href="#inicio">Início</a>
              <a href="#institucional">Institucional</a>
              <a href="#contato">Contato</a>
            </div>
            <div className={styles.separator} />
            <div className={styles.navRow}>
              <a href="#para-voce">Para Você</a>
              <a href="#para-empresa">Para sua Empresa</a>
            </div>
          </div>
          <div className={styles.ctabutton}>
            <button>Agende uma consulta agora</button>
          </div>
        </nav>
      </header>

      {/* Navbar Compacta (fixa, aparece ao scrollar) */}
      <header className={`${styles.compactNavbar} ${scrolled ? styles.visible : ''}`}>
        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.compactNav}>
            <a href="#inicio">Início</a>
            <a href="#institucional">Institucional</a>
            <a href="#contato">Contato</a>
            <a href="#para-voce">Para Você</a>
            <a href="#para-empresa">Para sua Empresa</a>
          </div>
          <div className={styles.ctabutton}>
    <Button >Agende uma consulta agora</Button>
</div>
        </nav>
      </header>
    </>
  );
}