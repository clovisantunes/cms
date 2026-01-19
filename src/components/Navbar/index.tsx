import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/logo-CMS-site.webp';
import Button from '../UI/Button';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1080);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (path: string): void => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const handleWhats = () => {
    window.open('https://api.whatsapp.com/send?phone=555135000714&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.', '_blank');
  };

  const menuItemsTop = [
    { path: '/', label: 'Início' },
    { path: '/institucional', label: 'Centro Médico' },
    { path: '/especialidades', label: 'Especialidades' },
    { path: '/contato', label: 'Contato' }
  ];

  const menuItemsBottom = [
    { path: '/ParaVoce', label: 'Sou Paciente' },
    { path: '/Para-sua-Empresa', label: 'Sou Empresa' },
    { path: '/exames', label: 'Preciso de Exames' }
  ];

  const menuItemsAll = [...menuItemsTop, ...menuItemsBottom];

  return (
    <>
      <header className={styles.navbarcontainer}>
        <div className={styles.topbar}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaPhoneAlt />
              <a href="tel:+555131036254">(51) 3103-6254</a>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt />
              <span>Av. João Corrêa, 683 - Centro, Sapiranga</span>
            </div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.workinghours}>
              Segunda a Sexta: 7h às 21h | Sábados e feriados: 8h às 20h
            </div>
          </div>
          <div className={styles.topbarRight}>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/centromedicosapiranga" target='_blank' aria-label="Facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/centromedicosapiranga" target='_blank' aria-label="Instagram"><FaInstagram /></a>
              <a href="https://api.whatsapp.com/send?phone=555135000714&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta." target='_blank' aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" onClick={() => handleNavigation('/')} />
          </div>
          
          {!isMobileView && (
            <div className={styles.navitems}>
              <div className={styles.navRow}>
                {menuItemsTop.map((item) => (
                  <button 
                    key={item.path} 
                    onClick={() => handleNavigation(item.path)}
                    className={`${styles.navButton} ${location.pathname === item.path ? styles.active : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className={styles.separator} />
              <div className={styles.navRow}>
                {menuItemsBottom.map((item) => (
                  <button 
                    key={item.path} 
                    onClick={() => handleNavigation(item.path)}
                    className={`${styles.navButton} ${location.pathname === item.path ? styles.active : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {!isMobileView && (
            <div className={styles.ctabutton} onClick={handleWhats}>
              <Button variant="primary">Agendar Consulta</Button>
            </div>
          )}
          
          {isMobileView && (
            <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </nav>

        {/* MENU MOBILE REDESENHADO */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <img 
              src={logo} 
              alt="Logo" 
              className={styles.mobileMenuLogo}
              onClick={() => {
                handleNavigation('/');
                setMobileMenuOpen(false);
              }}
            />
            <button 
              className={styles.mobileCloseButton}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <HiX />
            </button>
          </div>
          
          <div className={styles.mobileMenuContent}>
            {menuItemsAll.map((item) => (
              <button 
                key={item.path} 
                onClick={() => handleNavigation(item.path)}
                className={`${styles.mobileNavButton} ${location.pathname === item.path ? styles.active : ''}`}
              >
                {item.label}
              </button>
            ))}
            <div className={styles.mobileCta}>
              <Button variant="primary" onClick={handleWhats}>Agendar Consulta</Button>
            </div>
          </div>
        </div>
      </header>

      <header className={`${styles.compactNavbar} ${scrolled ? styles.visible : ''}`}>
        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" onClick={() => handleNavigation('/')} />
          </div>
          
          {!isMobileView && (
            <div className={styles.compactNav}>
              {menuItemsAll.map((item) => (
                <button 
                  key={item.path} 
                  onClick={() => handleNavigation(item.path)}
                  className={`${styles.navButton} ${location.pathname === item.path ? styles.active : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
          
          {!isMobileView && (
            <div className={styles.ctabutton} onClick={handleWhats}>
              <Button variant="primary">Agendar Consulta</Button>
            </div>
          )}
          
          {isMobileView && (
            <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </nav>
      </header>
    </>
  );
}