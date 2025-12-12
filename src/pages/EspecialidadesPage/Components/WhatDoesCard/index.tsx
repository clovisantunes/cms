import { FaBrain, FaCheckCircle } from 'react-icons/fa';
import type { BenefitItem, ServiceItem } from '../../data/especialidades';
import styles from './styles.module.scss';

interface WhatDoesCardProps {
  title: string;
  functionDescription: string;
  benefits?: BenefitItem[];
  services: ServiceItem[];
}

export default function WhatDoesCard({ 
  title, 
  functionDescription, 
  benefits,
  services 
}: WhatDoesCardProps) {
  
  return (
    <div className={styles.whatDoesCard}>
      <div className={styles.cardHeader}>
        <div className={styles.headerIcon}>
          <FaBrain />
        </div>
        <h2>O que faz um {title.toLowerCase()}?</h2>
        <p className={styles.cardSubtitle}>Entenda a atuação do especialista</p>
      </div>
      
      <div className={styles.cardBody}>
        <div className={styles.descriptionSection}>
          <p className={styles.functionDescription}>
            {functionDescription}
          </p>
        </div>
        
        <div className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            {benefits && benefits.length > 0 ? (
              benefits.slice(0, 3).map((benefit, index) => (
                <div key={benefit.id || index} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <FaCheckCircle />
                  </div>
                  <div className={styles.highlightContent}>
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))
            ) : (
              services.slice(0, 3).map((service, index) => (
                <div key={service.id || index} className={styles.highlightItem}>
                  <div className={styles.highlightIcon}>
                    <FaCheckCircle />
                  </div>
                  <div className={styles.highlightContent}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}