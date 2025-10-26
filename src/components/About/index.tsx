import styles from './styles.module.scss';
import aboutImage from '../../assets/banner-internal 1.png';
import { FaArrowRight, FaCalendarAlt, FaUserMd, FaHeart } from 'react-icons/fa';
import Button from '../UI/Button';
import { Link } from 'react-router-dom';

export const About = () => {
  const stats = [
    { icon: <FaCalendarAlt />, number: '45+', label: 'Anos de experiência' },
    { icon: <FaUserMd />, number: '30+', label: 'Especialistas qualificados' },
    { icon: <FaHeart />, number: '10 mil+', label: 'Pacientes atendidos' },
  ];

  return (
    <section className={styles.container} aria-labelledby="about-title">
      <div className={styles.contentWrapper}>
        
        {/* Texto principal */}
        <div className={styles.textContainer}>
          <header className={styles.header}>
            <div className={styles.titleSection}>
              <div className={styles.subtitleLine}>
                <div className={styles.line} />
                <h2 id="about-title">Centro Médico Sapiranga</h2>
              </div>
              <h1 className={styles.title}>Excelência em Saúde desde 1978</h1>
            </div>
          </header>

          <p className={styles.description}>
            Fundado em 1º de março de 1978, o Centro Médico Sapiranga é uma instituição
            comprometida em oferecer excelência na prestação de serviços de saúde.
            Com instalações estrategicamente projetadas, disponibilizamos uma ampla
            gama de especialidades médicas e exames.
          </p>

          <p className={styles.highlight}>
            Através da organização eficiente, do comprometimento humano e da competência técnica
            da nossa equipe, mantemos uma relação sólida de confiança com a comunidade local.
          </p>

          {/* Estatísticas */}
          <div className={styles.statsGrid} role="list">
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem} role="listitem">
                <div className={styles.statIcon} aria-hidden="true">{stat.icon}</div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stat.number}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link to="/institucional" className={styles.link}>
            <Button icon={<FaArrowRight />}>Conheça mais sobre nós</Button>
          </Link>
        </div>

        {/* Imagem */}
        <figure className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img
              src={aboutImage}
              alt="Equipe médica do Centro Médico Sapiranga"
              className={styles.mainImage}
              loading="lazy"
            />
            <div className={styles.imageOverlay} aria-hidden="true" />
            <figcaption className={styles.floatingExperience}>
              <span className={styles.experienceNumber}>47</span>
              <span className={styles.experienceText}>Anos de Excelência</span>
            </figcaption>
          </div>
        </figure>

      </div>
    </section>
  );
};
