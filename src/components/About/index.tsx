import styles from './styles.module.scss';
import aboutImage from '../../assets/banner-internal 1.png'; 
import { FaArrowRight, FaCalendarAlt, FaUserMd, FaHeart } from 'react-icons/fa';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

export const About = () => {
  const stats = [
    { icon: <FaCalendarAlt />, number: '45+', label: 'Anos de experiência' },
    { icon: <FaUserMd />, number: '50+', label: 'Especialistas' },
    { icon: <FaHeart />, number: '10k+', label: 'Pacientes atendidos' }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <div className={styles.header}>
            <div className={styles.titleSection}>
              <div className={styles.subtitleLine}>
                <div className={styles.line} />
                <h2>Centro Médico Sapiranga</h2>
              </div>
              <h1 className={styles.title}>Excelência em Saúde desde 1978</h1>
            </div>
          </div>
          
          <p className={styles.description}>
            Fundado em 1º de março de 1978, o Centro Médico Sapiranga é uma instituição
            comprometida em oferecer excelência na prestação de serviços de saúde.
            Com instalações estrategicamente projetadas para este propósito, oferecemos
            uma ampla gama de serviços próprios médicos.
          </p>
          
          <p className={styles.highlight}>
            Através da eficiente organização de nossas operações, do comprometimento 
            empático e da competência técnica de nossa equipe, mantemos uma sólida 
            relação de confiança com a comunidade local.
          </p>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statIcon}>{stat.icon}</div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <Link to="/sobre-nos">
            <Button variant="outline" icon={<FaArrowRight />}>
              Conheça mais sobre nós
            </Button>
          </Link>
        </div>
        
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src={aboutImage} alt="Centro Médico Sapiranga" className={styles.mainImage} />
            <div className={styles.imageOverlay} />
            <div className={styles.floatingExperience}>
              <span className={styles.experienceNumber}>45</span>
              <span className={styles.experienceText}>Anos de Excelência</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};