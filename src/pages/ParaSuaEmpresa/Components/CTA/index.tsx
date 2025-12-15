import { motion } from "framer-motion";
import { 
  FaWhatsapp,
  FaCalendarCheck,
  FaHandshake,
  FaFileContract,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaUserCheck
} from "react-icons/fa";
import styles from './styles.module.scss';

const HowToHire = () => {
  const handleWhatsAppContact = () => {
    const phoneNumber = "555135000714"; 
    const message = `Olá! Gostaria de informações sobre os serviços de saúde ocupacional para minha empresa. Poderiam me ajudar?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneCall = () => {
    window.open('tel:+555131036254', '_blank');
  };

  const steps = [
    {
      icon: <FaWhatsapp />,
      step: "01",
      title: "Entre em Contato",
      description: "Inicie uma conversa pelo WhatsApp para esclarecer todas as suas dúvidas"
    },
    {
      icon: <FaCalendarCheck />,
      step: "02",
      title: "Agende uma Reunião",
      description: "Marcamos um encontro para entender as necessidades específicas da sua empresa"
    },
    {
      icon: <FaHandshake />,
      step: "03",
      title: "Proposta Personalizada",
      description: "Desenvolvemos um plano de serviços sob medida para sua empresa"
    },
    {
      icon: <FaFileContract />,
      step: "04",
      title: "Contratação",
      description: "Formalizamos a parceria e iniciamos a execução dos serviços"
    }
  ];

  const benefits = [
   
    {
      icon: <FaCheckCircle />,
      text: "Proposta detalhada sem compromisso"
    },
    {
      icon: <FaCheckCircle />,
      text: "Suporte durante todo o processo"
    },
    {
      icon: <FaCheckCircle />,
      text: "Garantia de satisfação"
    }
  ];

  return (
    <section className={styles.howToHireSection}>
      <div className={styles.backgroundShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.sectionBadge}>Processo Simples</span>
          <h2 className={styles.sectionTitle}>Como Contratar</h2>
          <p className={styles.sectionDescription}>
            Conheça o processo simplificado para iniciar nossa parceria em saúde ocupacional
          </p>
        </motion.div>

        <div className={styles.stepsContainer}>
          <div className={styles.stepsTimeline}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepIconWrapper}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className={styles.stepConnector}>
                    <FaArrowRight className={styles.connectorIcon} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaHeader}>
                <FaUserCheck className={styles.ctaHeaderIcon} />
                <h3 className={styles.ctaTitle}>Vamos Conversar?</h3>
                <p className={styles.ctaSubtitle}>
                  Inicie agora mesmo uma conversa com nossos especialistas
                </p>
              </div>

              <div className={styles.benefitsList}>
                {benefits.map((benefit, index) => (
                  <div key={index} className={styles.benefitItem}>
                    {benefit.icon}
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className={styles.buttonsContainer}>
                <button 
                  className={styles.whatsappButton}
                  onClick={handleWhatsAppContact}
                >
                  <FaWhatsapp className={styles.buttonIcon} />
                  <div className={styles.buttonText}>
                    <span className={styles.buttonTitle}>Conversar no WhatsApp</span>
                    <span className={styles.buttonSubtitle}>Resposta rápida em horário comercial</span>
                  </div>
                </button>

                <button 
                  className={styles.phoneButton}
                  onClick={handlePhoneCall}
                >
                  <FaPhoneAlt className={styles.buttonIcon} />
                  <div className={styles.buttonText}>
                    <span className={styles.buttonTitle}>Ligar Agora</span>
                    <span className={styles.buttonSubtitle}>Segunda a sexta, 8h às 18h</span>
                  </div>
                </button>
              </div>

              <div className={styles.contactInfo}>
                <p className={styles.infoText}>
                  <strong>Horário de Atendimento:</strong> Segunda a Sexta, 7h às 17h
                </p>
               
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowToHire;