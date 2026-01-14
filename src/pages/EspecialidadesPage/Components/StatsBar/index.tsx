import { FaUserMd, FaGraduationCap, FaRegCalendarCheck, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export default function StatsBar() {
  return (
    <div className={styles.statsBar}>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <FaUserMd />
          </div>
          <div className={styles.statContent}>
            <div className={styles.statNumber}>47+</div>
            <div className={styles.statLabel}>Anos de Experiência</div>
          </div>
        </div>
        
        <div className={styles.statDivider}></div>
        
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <FaGraduationCap />
          </div>
          <div className={styles.statContent}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>Especialistas Certificados</div>
          </div>
        </div>
        
        <div className={styles.statDivider}></div>
        
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <FaRegCalendarCheck />
          </div>
        
        </div>
        
        <div className={styles.statDivider}></div>
        
        <div className={styles.statItem}>
          <div className={styles.statIcon}>
            <FaMapMarkerAlt />
          </div>
          <div className={styles.statContent}>
            <div className={styles.statNumber}>1</div>
            <div className={styles.statLabel}>Localização Central</div>
          </div>
        </div>
      </div>
    </div>
  );
}