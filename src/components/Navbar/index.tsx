import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../../assets/logo-CMS-site 1.png';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();


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
 <button onClick={() => navigate('/')}>Início</button>
              <button onClick={() => navigate('/institucional')}>Institucional</button>
              <button onClick={() => navigate('/contato')}>Contato</button>
            </div>
            <div className={styles.separator} />
            <div className={styles.navRow}>
             <button onClick={() => navigate('/para-voce')}>Para Você</button>
              <button onClick={() => navigate('/para-empresa')}>Para sua Empresa</button>
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
            <button onClick={() => navigate('/')}>Início</button>
            <button onClick={() => navigate('/institucional')}>Institucional</button>
            <button onClick={() => navigate('/contato')}>Contato</button>
            <button onClick={() => navigate('/para-voce')}>Para Você</button>
            <button onClick={() => navigate('/para-empresa')}>Para sua Empresa</button>
          </div>
          <div className={styles.ctabutton}>
    <Button >Agende uma consulta agora</Button>
</div>
        </nav>
      </header>
    </>
  );
}