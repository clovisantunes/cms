import { motion } from "framer-motion";
import { 
  FaCalendarCheck,
  FaFileAlt,
  FaCar,
  FaHospital,
  FaChartBar,
  FaHandsHelping,
  FaHeartbeat,
} from "react-icons/fa";
import styles from './styles.module.scss';

const BenefitsForCompanies = () => {
 

  const benefits = [
    {
      icon: <FaCalendarCheck />,
      title: "Agendamento Eletrônico",
      description: "Sistema digital para agilizar e organizar todos os agendamentos da sua equipe"
    },
    {
      icon: <FaFileAlt />,
      title: "Envio eSocial",
      description: "Gestão completa e envio automático das informações para o sistema eSocial"
    },
    {
      icon: <FaCar />,
      title: "Estacionamento Privativo",
      description: "Comodidade e segurança para seus colaboradores durante as consultas"
    },
    {
      icon: <FaHospital />,
      title: "Tudo em um só lugar",
      description: "Consultas, exames e procedimentos realizados em um único local"
    },
    {
      icon: <FaChartBar />,
      title: "Relatórios Estatísticos",
      description: "Relatórios completos para gestão de pessoas e tomada de decisões"
    },
    {
      icon: <FaHandsHelping />,
      title: "Acolhimento Humanizado",
      description: "Atendimento com empatia em ambiente projetado para o bem-estar"
    }
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.fluidBackground}>
        <div className={styles.fluidWave1}></div>
        <div className={styles.fluidWave2}></div>
      </div>
      
      <div className={styles.container}>
      

        

        <div className={styles.benefitsFluidContainer}>
          <motion.div
            className={styles.benefitsHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.organicIconWrapper}>
              <FaHeartbeat className={styles.headerIcon} />
            </div>
            <h2 className={styles.benefitsTitle}>Nossos Diferenciais</h2>
            <p className={styles.benefitsSubtitle}>
              Tudo o que sua empresa precisa em um só lugar
            </p>
          </motion.div>

          <div className={styles.benefitsFlowLayout}>
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className={styles.benefitFlowItem}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.08, 
                  duration: 0.5 
                }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.flowDecorator}></div>
                <div className={styles.benefitFlowContent}>
                  <div className={styles.benefitIconFlow}>
                    {benefit.icon}
                  </div>
                  <div className={styles.benefitTextFlow}>
                    <h3 className={styles.benefitTitleFlow}>{benefit.title}</h3>
                    <p className={styles.benefitDescriptionFlow}>{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BenefitsForCompanies;