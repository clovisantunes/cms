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
  const [isTabletView, setIsTabletView] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
    
    handleResize();
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
          
          {!isTabletView && (
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
          
          <div className={styles.ctabutton} onClick={handleWhats}>
            <Button variant="primary">Agendar Consulta</Button>
          </div>
          
          {isTabletView && (
            <button className={styles.mobileMenuToggle} onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <HiX /> : <HiMenu />}
            </button>
          )}
        </nav>

        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
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
      </header>

      <header className={`${styles.compactNavbar} ${scrolled ? styles.visible : ''}`}>
        <nav className={styles.navbarmain}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" onClick={() => handleNavigation('/')} />
          </div>
          
          {!isTabletView && (
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
          
          <div className={styles.ctabutton} onClick={handleWhats}>
            <Button variant="primary">Agendar Consulta</Button>
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