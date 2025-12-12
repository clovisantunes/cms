import { 
  FaCalendarAlt, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaClock, 
  FaStethoscope,
} from 'react-icons/fa';
import Button from '../../../../components/UI/Button';
import type { ServiceItem } from '../../data/especialidades';
import styles from './styles.module.scss';
import type { JSX } from 'react';

interface SidebarProps {
  services?: ServiceItem[];
  handleAgendarConsulta: () => void;
  handleLigar: () => void;
  handleWhatsApp: () => void;
  RenderIcon: ({ iconName }: { iconName: string }) => JSX.Element;
}

export default function Sidebar({ 
  services, 
  handleAgendarConsulta, 
  handleLigar, 
  handleWhatsApp,
  RenderIcon 
}: SidebarProps) {
  return (
    <div className={styles.sidebarColumn}>
      <div className={styles.schedulingCard}>
        <div className={styles.cardHeader}>
          <FaCalendarAlt className={styles.headerIcon} />
          <h3>Agendar Consulta</h3>
        </div>
        
        <div className={styles.contactOptions}>
          <button 
            className={styles.contactOption}
            onClick={handleWhatsApp}
          >
            <div className={styles.optionIcon}>
              <FaWhatsapp />
            </div>
            <div className={styles.optionContent}>
              <span className={styles.optionTitle}>WhatsApp</span>
              <span className={styles.optionDesc}>Agendamento rápido</span>
            </div>
          </button>
          
          <button 
            className={styles.contactOption}
            onClick={handleLigar}
          >
            <div className={styles.optionIcon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.optionContent}>
              <span className={styles.optionTitle}>Telefone</span>
              <span className={styles.optionDesc}>(51) 3103-6254</span>
            </div>
          </button>
        </div>
        
        <div className={styles.scheduleInfo}>
          <div className={styles.infoItem}>
            <FaClock className={styles.infoIcon} />
            <div className={styles.infoContent}>
              <span>Horário de Atendimento</span>
              <span>Seg-Sex: 7h-21h | Sáb: 8h-20h</span>
            </div>
          </div>
        </div>
        
        <Button 
          variant="primary" 
          onClick={handleAgendarConsulta}
          className={styles.scheduleButton}
        >
          <FaCalendarAlt /> Agendar Agora
        </Button>
      </div>
      
      {services && services.length > 0 && (
        <div className={styles.servicesCard}>
          <div className={styles.cardHeader}>
            <FaStethoscope className={styles.headerIcon} />
            <h3>Serviços</h3>
          </div>
          <div className={styles.servicesList}>
            {services.map((service, index) => (
              <div key={service.id || index} className={styles.serviceItem}>
                <div className={styles.serviceIcon}>
                  <RenderIcon iconName={service.iconName as string} />
                </div>
                <div className={styles.serviceContent}>
                  <span className={styles.serviceTitle}>{service.title}</span>
                  <span className={styles.serviceDesc}>{service.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}