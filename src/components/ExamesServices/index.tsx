import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./styles.module.scss";

const exames = [
  { nome: "ASO – Atestado de Saúde Ocupacional", desc: "Admissional, Periódico, Demissional, Retorno e Mudança de Função" },
  { nome: "Audiometria", desc: "Avaliação auditiva conforme NR-07" },
  { nome: "Acuidade Visual", desc: "Exame de visão para aptidão ocupacional" },
  { nome: "Espirometria", desc: "Avaliação pulmonar funcional" },
  { nome: "Eletrocardiograma – ECG", desc: "Avaliação cardíaca preventiva" },
  { nome: "Exames Laboratoriais", desc: "Check-up ocupacional completo" }
];

export default function ServicosExames() {
  return (
    <motion.section
      className={styles.servicosSection}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className={styles.servicosContainer}>
        <h2>Exames Ocupacionais</h2>
        <p>Exames exigidos pelo PCMSO e Normas Regulamentadoras</p>

        <div className={styles.servicosList}>
          {exames.map((item, index) => (
            <div key={index} className={styles.serviceCard}>
              <FaCheckCircle className={styles.serviceIcon} />
              <div>
                <h4>{item.nome}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
