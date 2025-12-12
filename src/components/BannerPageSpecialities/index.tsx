import styles from './styles.module.scss';
import Button from '../UI/Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaChevronRight, FaStethoscope, FaCheckCircle } from 'react-icons/fa';
import logo from '../../assets/logo-CMS-site.png';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BannerPageSpecialitiesProps {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  buttonText?: string;
  specialtyId?: string;
  breadcrumb?: BreadcrumbItem[];
}

export default function BannerPageSpecialities({
  title,
  subtitle,
  description,
  image,
  buttonText = "Agendar Consulta",
  breadcrumb = [
    { name: 'Início', path: '/' },
    { name: 'Especialidades', path: '/especialidades' },
  ]
}: BannerPageSpecialitiesProps) {
  const navigate = useNavigate();

  const handleAgendarConsulta = () => {
    const mensagem = `Olá! Gostaria de agendar uma consulta de ${title} no Centro Médico Sapiranga.`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section className={styles.bannerContainer}>
      <div className={styles.backgroundElements}>
        <div className={styles.decorationCircle}></div>
        <div className={styles.decorationWave}></div>
      </div>
      <div className={styles.contentWrapper}>
        <nav className={styles.breadcrumbContainer} aria-label="Navegação estrutural">
          {breadcrumb.map((item, index) => (
            <div key={index} className={styles.breadcrumbItem}>
              <button 
                onClick={() => handleNavigation(item.path)}
                className={styles.breadcrumbLink}
                aria-current={index === breadcrumb.length - 1 ? 'page' : undefined}
              >
                {item.name}
              </button>
              {index < breadcrumb.length - 1 && (
                <FaChevronRight className={styles.breadcrumbSeparator} />
              )}
            </div>
          ))}
        </nav>

        <div className={styles.bannerContent}>
          <motion.div 
            className={styles.textSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.headerSection}>
              <div className={styles.specialtyTag}>
                <FaStethoscope className={styles.tagIcon} />
                <span className={styles.tagText}>Especialidade Médica</span>
              </div>
              
              <h1 className={styles.mainTitle}>
                <span className={styles.titleHighlight}>{title}</span>
              </h1>
              
              <div className={styles.subtitleWrapper}>
                <div className={styles.subtitleLine}></div>
                <h2 className={styles.subtitle}>{subtitle}</h2>
              </div>
            </div>
            {description && (
              <motion.div 
                className={styles.descriptionContainer}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className={styles.descriptionIcon}>
                  <FaCheckCircle />
                </div>
                <p className={styles.description}>{description}</p>
              </motion.div>
            )}
            <motion.div 
              className={styles.ctaSection}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Button 
                variant="primary" 
                onClick={handleAgendarConsulta}
                className={styles.primaryButton}
              >
                <span className={styles.buttonTextMain}>{buttonText}</span>
              </Button>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.imageSection}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src={image} 
                  alt={`Consulta de ${title} no Centro Médico Sapiranga`}
                  className={styles.bannerImage}
                  loading="eager"
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.clinicLogoContainer}>
                  <img 
                    src={logo} 
                    alt="Centro Médico Sapiranga" 
                    className={styles.clinicLogo}
                  />
                  
                </div>
              </div>
              <div className={styles.floatingCard}>
                <div className={styles.cardIcon}>
                  <FaStethoscope />
                </div>
                <div className={styles.cardContent}>
                  <p className={styles.cardText}>
                    Consultas disponíveis com especialistas renomados
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}