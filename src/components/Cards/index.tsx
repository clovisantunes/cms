import React from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { 
  FaTooth, 
  FaHeartbeat, 
  FaMicroscope, 
  FaProcedures, 
  FaUserMd, 
  FaArrowRight 
} from 'react-icons/fa';

interface CardItem {
  title: string;
  icon: React.ReactElement;
  link: string;
  description: string;
}

const items: CardItem[] = [
  { 
    title: 'Odontologia', 
    icon: <FaTooth />, 
    link: '/odontologia',
    description: 'Cuidado completo para o seu sorriso.' 
  },
  { 
    title: 'Especialidades Médicas', 
    icon: <FaHeartbeat />, 
    link: '/especialidades',
    description: 'Mais de 20 especialidades à sua disposição.' 
  },
  { 
    title: 'Exames', 
    icon: <FaMicroscope />, 
    link: '/paravoce#exames',
    description: 'Diagnóstico preciso, rápido e confiável.' 
  },
  { 
    title: 'Procedimentos', 
    icon: <FaProcedures />, 
    link: '/procedimentos',
    description: 'Cirurgias e tratamentos especializados.' 
  },
  { 
    title: 'Medicina do Trabalho', 
    icon: <FaUserMd />, 
    link: '/para-sua-empresa',
    description: 'Saúde e segurança ocupacional completas.' 
  },
];

export const Cards = () => {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <header className={styles.header}>
        <h2 id="services-title" className={styles.sectionTitle}>Nossos Serviços</h2>
        <p className={styles.sectionSubtitle}>Cuidado completo para você e sua empresa</p>
      </header>
      
      <div className={styles.container} role="list">
        {items.map((item, index) => (
          <Link 
            key={index} 
            to={item.link} 
            className={styles.card}
            role="listitem"
            aria-label={`${item.title}: ${item.description}`}
          >
            <div className={styles.cardContent}>
              
              <div className={styles.iconWrapper}>
                <div className={styles.icon} aria-hidden="true">{item.icon}</div>
              </div>
              
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              
              <div className={styles.cardFooter}>
                <span className={styles.linkText}>Saiba mais</span>
                <FaArrowRight className={styles.arrowIcon} aria-hidden="true" />
              </div>
            </div>
            
            <div className={styles.hoverEffect} aria-hidden="true"></div>
          </Link>
        ))}
      </div>
    </section>
  );
};
