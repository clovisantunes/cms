import React from 'react';
import { 
  FaClock, 
  FaFileMedical,
  FaPills,
  FaUtensils,
  FaCalendarAlt,
  FaPhoneAlt
} from 'react-icons/fa';
import styles from './styles.module.scss';
import type { PreparoExameProps } from '../../types/exameTypes';

const PreparoExame: React.FC<PreparoExameProps> = ({
  preparacao,
  duracaoExame,
  resultados,
  quandoFazer,
  variante = 'completo',
  onAgendarClick,
  onLigarClick
}) => {
  
  const handleAgendar = () => {
    if (onAgendarClick) {
      onAgendarClick();
    } else {
      const mensagem = "Olá! Gostaria de agendar um exame no Centro Médico Sapiranga.";
      const telefone = "555135000714";
      const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleLigar = () => {
    if (onLigarClick) {
      onLigarClick();
    } else {
      window.open('tel:+555135000714', '_blank');
    }
  };

  if (variante === 'card') {
    return (
      <>
      </>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Preparação para o Exame</h2>
        <p className={styles.sectionDescription}>
          Para garantir a precisão dos resultados, siga atentamente estas orientações:
        </p>
        
        <div className={styles.grid}>
          {preparacao.jejum && (
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <FaUtensils />
              </div>
              <div>
                <h3>Jejum</h3>
                <p>{preparacao.jejum}</p>
              </div>
            </div>
          )}
          
          {preparacao.medicamentos && (
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <FaPills />
              </div>
              <div>
                <h3>Medicamentos</h3>
                <p>{preparacao.medicamentos}</p>
              </div>
            </div>
          )}
          
          {duracaoExame && (
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <FaClock />
              </div>
              <div>
                <h3>Duração</h3>
                <p>{duracaoExame}</p>
              </div>
            </div>
          )}
          
          {resultados && (
            <div className={styles.gridItem}>
              <div className={styles.icon}>
                <FaFileMedical />
              </div>
              <div>
                <h3>Resultados</h3>
                <p>{resultados}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {quandoFazer && (
        <div className={styles.section}>
          <div className={styles.indicationHeader}>
            <h3>Quando realizar este exame?</h3>
            <p className={styles.indicationDescription}>
              Este exame é indicado nas seguintes situações:
            </p>
          </div>
          <div className={styles.indicationContent}>
            <p>{quandoFazer}</p>
          </div>
        </div>
      )}
      
      <div className={styles.actions}>
        <div className={styles.actionsGrid}>
          <button className={styles.primaryButton} onClick={handleAgendar}>
            <FaCalendarAlt />
            <div>
              <span>Agendar Exame</span>
              <small>Via WhatsApp</small>
            </div>
          </button>
          
          <button className={styles.secondaryButton} onClick={handleLigar}>
            <FaPhoneAlt />
            <div>
              <span className={styles.buttonSpan}>Falar com Atendente</span>
              <small>(51) 3500-0714</small>
            </div>
          </button>
        </div>
        
        <div className={styles.note}>
          <strong>Importante:</strong> Em caso de dúvidas sobre a preparação, entre em contato com nossa equipe.
        </div>
      </div>
    </div>
  );
};

export default PreparoExame;