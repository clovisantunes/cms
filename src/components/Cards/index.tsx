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
  description?: string;
}

const items: CardItem[] = [
  { 
    title: 'Odontologia', 
    icon: <FaTooth />, 
    link: '/odontologia/',
    description: 'Cuidado completo para seu sorriso' 
  },
  { 
    title: 'Especialidades', 
    icon: <FaHeartbeat />, 
    link: '/especialidades',
    description: 'Mais de 20 especialidades médicas' 
  },
  { 
    title: 'Exames', 
    icon: <FaMicroscope />, 
    link: '/ParaVoce#exames',
    description: 'Diagnóstico preciso e rápido' 
  },
  { 
    title: 'Procedimentos', 
    icon: <FaProcedures />, 
    link: '/procedimentos',
    description: 'Cirurgias e tratamentos especializados' 
  },
  { 
    title: 'Medicina do Trabalho', 
    icon: <FaUserMd />, 
    link: '/Para-sua-Empresa',
    description: 'Saúde e segurança ocupacional' 
  },
];

export const Cards = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.sectionTitle}>Nossos Serviços</h2>
        <p className={styles.sectionSubtitle}>Cuidado completo para você e sua empresa</p>
      </div>
      
      <div className={styles.container}>
        {items.map((item, index) => (
          <Link key={index} to={item.link} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{item.icon}</div>
              </div>
              
              <div className={styles.textContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>
              
              <div className={styles.cardFooter}>
                <span className={styles.linkText}>Saiba mais</span>
                <FaArrowRight className={styles.arrowIcon} />
              </div>
            </div>
            
            <div className={styles.hoverEffect}></div>
          </Link>
        ))}
      </div>
    </section>
  );
};