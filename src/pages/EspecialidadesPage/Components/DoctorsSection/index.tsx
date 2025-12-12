import type { Doctor } from '../../data/especialidades';
import styles from './styles.module.scss';

interface DoctorsSectionProps {
  title: string;
  doctors: Doctor[];
  handleAgendarConsulta?: (doctorId?: number) => void;
}

export default function DoctorsSection({ title, doctors }: DoctorsSectionProps) {
  return (
    <section className={styles.doctorsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Nossos Especialistas em {title}</h2>
        </div>
        
        <div className={styles.doctorsGrid}>
          {doctors.map((doctor) => (
            <div key={doctor.id} className={styles.doctorCard}>
              <div className={styles.photoWrapper}>
                {doctor.profileImage ? (
                  <img
                    src={doctor.profileImage}
                    alt={`Dr(a). ${doctor.name}`}
                    className={styles.doctorPhoto}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.initialsDisplay}>
                    {doctor.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className={styles.photoOverlay}></div>
              </div>
              
              <div className={styles.doctorDetails}>
                <h3 className={styles.doctorName}>{doctor.name}</h3>
                
                <div className={styles.doctorMeta}>
                  <div className={styles.specialtyBadge}>
                    {doctor.specialty}
                  </div>
                  <div className={styles.crmBadge}>
                    CRM {doctor.id.toString().padStart(5, '0')}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}