import { FaCalendarAlt, FaPhoneAlt, FaRegComments, FaWhatsapp, FaStar, FaUserMd, FaHospital, FaShieldAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Button from '../../../../components/UI/Button';
import styles from './styles.module.scss';

interface FinalCTAProps {
  handleAgendarConsulta: () => void;
  handleLigar: () => void;
  handleWhatsApp: () => void;
}

export default function FinalCTA({ handleAgendarConsulta, handleLigar, handleWhatsApp }: FinalCTAProps) {
  return (
    <section className={styles.finalCtaSection}>
      <div className={styles.backgroundPattern}>
        <div className={styles.patternLayer1}></div>
        <div className={styles.patternLayer2}></div>
        <div className={styles.glowEffect}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaHeader}>
            <div className={styles.titleContainer}>
              <span className={styles.ctaTitle}>
                Cuide da sua saúde com excelência
              </span>
              <div className={styles.titleUnderline}></div>
            </div>
            <p className={styles.ctaSubtitle}>
              Mais de <span className={styles.highlightNumber}>47 anos</span> de tradição e cuidado médico de qualidade em Sapiranga
            </p>
          </div>
          
          <div className={styles.ctaGrid}>
            <div className={styles.ctaCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaCalendarAlt />
                </div>
                <div className={styles.cardNumber}>01</div>
              </div>
              <span className={styles.cardTitle}>Agendamento Rápido</span>
              <p className={styles.cardDescription}>Marque sua consulta em poucos minutos pelo WhatsApp</p>
              <Button 
                variant="primary" 
                onClick={handleAgendarConsulta}
                className={styles.ctaButton}
              >
                <FaWhatsapp className={styles.buttonIcon} />
                Agendar Consulta
              </Button>
            </div>
            
            <div className={styles.ctaCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaPhoneAlt />
                </div>
                <div className={styles.cardNumber}>02</div>
              </div>
              <span className={styles.cardTitle}>Atendimento Direto</span>
              <p className={styles.cardDescription}>Fale diretamente com nossa equipe de atendimento</p>
              <Button 
                variant="secondary" 
                onClick={handleLigar}
                className={styles.ctaButton}
              >
                <FaPhoneAlt className={styles.buttonIcon} />
                Ligar Agora
              </Button>
            </div>
            
            <div className={styles.ctaCard}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>
                  <FaRegComments />
                </div>
                <div className={styles.cardNumber}>03</div>
              </div>
              <span className={styles.cardTitle}>Tire suas Dúvidas</span>
              <p className={styles.cardDescription}>Esclareça todas as suas questões sobre tratamentos</p>
              <Button 
                variant="primary" 
                onClick={handleWhatsApp}
                className={styles.ctaButton}
              >
                <FaWhatsapp className={styles.buttonIcon} />
                Conversar Agora
              </Button>
            </div>
          </div>
          
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FaShieldAlt />
              </div>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Segurança e Confiança</span>
                <p>Clínica certificada com os mais altos padrões de qualidade</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Localização Privilegiada</span>
                <p>Centro de Sapiranga com fácil acesso e estacionamento</p>
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <FaClock />
              </div>
              <div className={styles.featureContent}>
                <span className={styles.featureTitle}>Horário Ampliado</span>
                <p>Atendimento de segunda a sábado, das 7h às 20h</p>
              </div>
            </div>
          </div>
          
          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <FaStar className={styles.trustIcon} />
              <span className={styles.trustText}>Certificado de Excelência</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <FaUserMd className={styles.trustIcon} />
              <span className={styles.trustText}>Especialistas Renomados</span>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <FaHospital className={styles.trustIcon} />
              <span className={styles.trustText}>Infraestrutura Moderna</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}