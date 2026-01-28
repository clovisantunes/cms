import { useState, useEffect } from 'react';
import { FiCalendar, FiClock, FiShield, FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

const TelemedicinaModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <section className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
      <div 
        className={styles.modalContainer} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.imageSection}>
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
            alt="Atendimento Médico" 
          />
          <div className={styles.imageOverlay}>
            <h3 className={styles.teleH3}>Sua saúde não pode esperar.</h3>
            <p className={styles.teleH3}>Conectamos você aos melhores especialistas, onde quer que você esteja.</p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <FiX />
          </button>

          <header className={styles.header}>
            <span className={styles.badge}>Novo Serviço</span>
            <h2>Telemedicina de Alta Precisão</h2>
          </header>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FiClock /></div>
              <div>
                <h4>Sem Espera</h4>
                <p>Agendamentos para o mesmo dia conforme disponibilidade.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FiShield /></div>
              <div>
                <h4>Segurança</h4>
                <p>Dados criptografados e sigilo médico garantido.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.iconCircle}><FiCalendar /></div>
              <div>
                <h4>Flexibilidade</h4>
                <p>Sem deslocamento necessário, consulte de onde estiver.</p>
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button 
              className={styles.btnPrimary}
              onClick={() => window.location.href = '/agendamento'}
            >
              Agendar Consulta Agora
            </button>
            <button 
              className={styles.btnSecondary}
              onClick={() => setIsOpen(false)}
            >
              Talvez depois
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelemedicinaModal;