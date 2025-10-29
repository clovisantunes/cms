import styles from "./styles.module.scss";
import { FaWhatsapp, FaClock, FaMapMarkerAlt, FaCalendarCheck, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.backgroundOverlay}></div>
      
      <div className={styles.content}>
        <motion.div 
          className={styles.left}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={styles.header}>
            <div className={styles.titleWrapper}>
              <FaCalendarCheck className={styles.titleIcon} />
              <h2>Agendamento de Consultas e Exames</h2>
            </div>
            <p className={styles.subtitle}>
              Cuide da sua saúde com praticidade e agilidade
            </p>
          </div>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FaClock />
              </div>
              <div className={styles.cardContent}>
                <h4>Horário de Funcionamento</h4>
                <div className={styles.timeSlots}>
                  <div className={styles.timeItem}>
                    <span className={styles.days}>Segunda a Sexta</span>
                    <span className={styles.time}>7h às 21h</span>
                  </div>
                  <div className={styles.timeItem}>
                    <span className={styles.days}>Sábados e Feriados</span>
                    <span className={styles.time}>8h às 19h</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.cardIcon}>
                <FaMapMarkerAlt />
              </div>
              <div className={styles.cardContent}>
                <h4>Nossa Localização</h4>
                <p className={styles.address}>
                  Av João Corrêa, 683 - Centro<br />
                  Sapiranga - RS
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={styles.whatsappCard}>
            <div className={styles.whatsappHeader}>
              <div className={styles.whatsappIconWrapper}>
                <FaWhatsapp className={styles.whatsappIcon} />
              </div>
              <h3>Agende por WhatsApp</h3>
            </div>
            
            <p className={styles.whatsappDescription}>
              Conversa direta com nossa equipe para agendamento rápido e personalizado
            </p>

            <div className={styles.phoneNumber}>
              <FaPhone className={styles.phoneIcon} />
              <span>(51) 3500-0714</span>
            </div>

            <motion.a
              href="https://wa.me/555135000714"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className={styles.buttonIcon} />
              Iniciar Conversa
            </motion.a>

            <div className={styles.whatsappNote}>
              <span> Resposta imediata</span>
              <span> Atendimento humanizado</span>
              <span> Confirmação rápida</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};