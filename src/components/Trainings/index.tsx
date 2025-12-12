import { motion } from "framer-motion";
import { 
  FaCheckCircle, 
  FaShieldAlt,
  FaExclamationTriangle,
  FaBolt,
  FaIndustry,
  FaUserShield,
  FaClipboardCheck,
  FaFileMedical,
  FaGraduationCap
} from "react-icons/fa";
import styles from "./styles.module.scss";

const treinamentos = [
  { nr: "NR-05", nome: "CIPA", icon: FaShieldAlt },
  { nr: "NR-06", nome: "EPI", icon: FaExclamationTriangle },
  { nr: "NR-10", nome: "Instalações Elétricas", icon: FaBolt },
  { nr: "NR-11", nome: "Transporte e Manuseio de Materiais", icon: FaIndustry },
  { nr: "NR-12", nome: "Máquinas e Equipamentos", icon: FaIndustry },
  { nr: "NR-17", nome: "Ergonomia", icon: FaClipboardCheck },
  { nr: "NR-20", nome: "Produtos Químicos", icon: FaFileMedical },
  { nr: "NR-35", nome: "Trabalho em Altura", icon: FaUserShield },
  { nr: "RT-14", nome: "Brigada de Incêndio", icon: FaGraduationCap }
];

export default function ServicosTreinamentos() {
  return (
    <section className={styles.sectionBackground}>
      <div className={styles.geometricElements}>
        <div className={styles.geom1}></div>
        <div className={styles.geom2}></div>
        <div className={styles.geom3}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Normas Regulamentadoras</span>
          <h2>Treinamentos<br />Especializados</h2>
          <p className={styles.subtitle}>
            Capacitação técnica conforme exigências legais vigentes para instituições médicas
          </p>
        </motion.div>

        <div className={styles.contentWrapper}>
          <div className={styles.mainContent}>
            <div className={styles.cursosGrid}>
              {treinamentos.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={styles.cursoCard}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.08,
                      duration: 0.4,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardHeader}>
                        <div className={styles.iconWrapper}>
                          <Icon className={styles.icon} />
                        </div>
                        <span className={styles.nr}>{item.nr}</span>
                      </div>
                      <h3>{item.nome}</h3>
                      <div className={styles.cardFooter}>
                        <FaCheckCircle className={styles.checkIcon} />
                        <span>Certificado emitido</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className={styles.infoBox}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <FaFileMedical className={styles.infoIcon} />
              <p>
                Todos os treinamentos incluem material didático, certificado digital e 
                suporte técnico para documentação.
              </p>
            </motion.div>
          </div>

          <motion.div
            className={styles.sidebar}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={styles.ctaCard}>
              <div className={styles.ctaHeader}>
                <FaGraduationCap className={styles.ctaIcon} />
                <h4>Programa<br />Personalizado</h4>
              </div>
              
              <p className={styles.ctaText}>
                Desenvolvemos treinamentos específicos conforme as necessidades da sua clínica ou hospital.
              </p>
              
              <ul className={styles.features}>
                <li>
                  <FaCheckCircle />
                  <span>Conteúdo adaptado à realidade médica</span>
                </li>
                <li>
                  <FaCheckCircle />
                  <span>Horários flexíveis</span>
                </li>
                <li>
                  <FaCheckCircle />
                  <span>Suporte para documentação</span>
                </li>
              </ul>
              
              <button className={styles.ctaButton}>
                Solicitar Consulta
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}