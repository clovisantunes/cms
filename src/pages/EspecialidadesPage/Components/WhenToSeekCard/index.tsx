import { FaBriefcaseMedical } from 'react-icons/fa';
import type { WhenToSeekItem } from '../../data/especialidades';
import styles from './styles.module.scss';

interface WhenToSeekCardProps {
  title: string;
  whenToSeek: WhenToSeekItem[];
}

export default function WhenToSeekCard({ whenToSeek }: WhenToSeekCardProps) {
  return (
    <div className={styles.whenToSeekCard}>
      <div className={styles.cardHeader}>
        <div className={styles.headerIcon}>
          <FaBriefcaseMedical />
        </div>
        <h2>Quando procurar ajuda?</h2>
        <p className={styles.cardSubtitle}>Sinais e indicações importantes</p>
      </div>
      <div className={styles.whenToSeekList}>
        {whenToSeek.map((topic, index) => (
          <div key={topic.id || index} className={styles.seekItem}>
            <div className={styles.seekNumber}>{index + 1}</div>
            <div className={styles.seekContent}>
              <h4>{topic.title}</h4>
              <p>{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}