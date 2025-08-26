import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/logo-CMS-site 1.png';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsTabletView(window.innerWidth <= 1100);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    document.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  interface HandleNavigationProps {
    path: string;
  }

  const handleNavigation = (path: HandleNavigationProps['path']): void => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.navbarcontainer}>
        {/* Topbar com informações de contato */}
        <div className={styles.topbar}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhoneAlt />
              <span>(51) 3103-6254</span>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>Av. João Corrêa, 683 - Centro, Sapiranga</span>
            </div>
          </div>
          
          <div className={styles.topbarRight}>
            <div className={styles.workinghours}>
              Segunda a Sexta: 7h às 21h | Sábados e feriados: 8h às 19h
            </div>
          </div>

          <div className={styles.topbarRight}>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        {/* Navbar principal */}
        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" onClick={() => handleNavigation('/')} />
          </div>
          
          {!isTabletView && (
            <div className={styles.navitems}>
              <div className={styles.navRow}>
                <button onClick={() => handleNavigation('/')}>Início</button>
                <button onClick={() => handleNavigation('/institucional')}>Institucional</button>
                <button onClick={() => handleNavigation('/especialidades')}>Especialidades</button>
                <button onClick={() => handleNavigation('/corpo-clinico')}>Corpo Clínico</button>
              </div>
              <div className={styles.separator} />
              <div className={styles.navRow}>
                <button onClick={() => handleNavigation('/ParaVoce')}>Para Você</button>
                <button onClick={() => handleNavigation('/Para-sua-Empresa')}>Para sua Empresa</button>
                <button onClick={() => handleNavigation('/convenios')}>Convênios</button>
                <button onClick={() => handleNavigation('/contato')}>Contato</button>
              </div>
            </div>
          )}
          
          <div className={styles.ctabutton}>
            <Button variant="primary">Agende uma consulta</Button>
          </div>
          
          {isTabletView && (
            <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </nav>
        
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          <button onClick={() => handleNavigation('/')}>Início</button>
          <button onClick={() => handleNavigation('/institucional')}>Institucional</button>
          <button onClick={() => handleNavigation('/especialidades')}>Especialidades</button>
          <button onClick={() => handleNavigation('/corpo-clinico')}>Corpo Clínico</button>
          <button onClick={() => handleNavigation('/ParaVoce')}>Para Você</button>
          <button onClick={() => handleNavigation('/Para-sua-Empresa')}>Para sua Empresa</button>
          <button onClick={() => handleNavigation('/convenios')}>Convênios</button>
          <button onClick={() => handleNavigation('/contato')}>Contato</button>
          <div className={styles.mobileCta}>
            <Button variant="primary" >Agendar Consulta</Button>
          </div>
        </div>
      </header>

      <header className={`${styles.compactNavbar} ${scrolled ? styles.visible : ''}`}>
        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" onClick={() => handleNavigation('/')} />
          </div>
          
          {!isTabletView ? (
            <div className={styles.compactNav}>
              <button onClick={() => handleNavigation('/')}>Início</button>
              <button onClick={() => handleNavigation('/especialidades')}>Especialidades</button>
              <button onClick={() => handleNavigation('/corpo-clinico')}>Corpo Clínico</button>
              <button onClick={() => handleNavigation('/convenios')}>Convênios</button>
              <button onClick={() => handleNavigation('/contato')}>Contato</button>
            </div>
          ) : (
            <div className={styles.compactNav}>
              <button onClick={() => handleNavigation('/especialidades')}>Especialidades</button>
              <button onClick={() => handleNavigation('/convenios')}>Convênios</button>
              <button onClick={() => handleNavigation('/contato')}>Contato</button>
            </div>
          )}
          
          <div className={styles.ctabutton}>
            <Button variant="primary" >Agendar Consulta</Button>
          </div>
          
          {isTabletView && (
            <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </nav>
      </header>
    </>
  );
}