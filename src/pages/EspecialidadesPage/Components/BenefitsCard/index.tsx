import { FaHeartbeat } from 'react-icons/fa';
import type { BenefitItem } from '../../data/especialidades';
import styles from './styles.module.scss';
import type { JSX } from 'react';

interface BenefitsCardProps {
  benefits: BenefitItem[];
  RenderIcon: ({ iconName }: { iconName: string }) => JSX.Element;
}

export default function BenefitsCard({ benefits, RenderIcon }: BenefitsCardProps) {
  return (
    <div className={styles.benefitsCard}>
      <div className={styles.cardHeader}>
        <div className={styles.headerIcon}>
          <FaHeartbeat />
        </div>
        <h2>Benefícios do Tratamento</h2>
        <p className={styles.cardSubtitle}>O que você pode esperar</p>
      </div>
      <div className={styles.benefitsGrid}>
        {benefits.map((benefit, index) => (
          <div key={benefit.id || index} className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <RenderIcon iconName={benefit.iconName as string} />
            </div>
            <div className={styles.benefitContent}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}