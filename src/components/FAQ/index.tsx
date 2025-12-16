import { useState } from 'react';
import styles from './styles.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaStethoscope, 
  FaFileMedical, 
  FaBuilding,
  FaChevronDown,
  FaChevronUp,
  FaWhatsapp,
  FaCalendarAlt,
  FaHospital,
  FaCheckCircle,
  FaUserMd
} from 'react-icons/fa';

interface FAQItem {
  id: number;
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
}

const FAQSectionCompact = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Quais são os horários de funcionamento?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.horariosCompact}>
            <div className={styles.horarioItem}>
              <FaClock />
              <div>
                <strong>Segunda a Sexta</strong>
                <span>7h às 21h</span>
              </div>
            </div>
            <div className={styles.horarioItem}>
              <FaClock />
              <div>
                <strong>Sábados e Feriados</strong>
                <span>8h às 19h</span>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <FaClock />
    },
    {
      id: 2,
      question: "Onde estamos localizados?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.enderecoCompact}>
            <FaMapMarkerAlt />
            <div>
              <strong>Av. João Corrêa, 683 - Centro</strong>
              <p>Sapiranga - RS, 93800-222</p>
            </div>
          </div>
          <a 
            href="https://maps.google.com/?q=Av.+João+Corrêa,+683+-+Centro,+Sapiranga+-+RS"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            Ver no Google Maps
          </a>
        </div>
      ),
      icon: <FaMapMarkerAlt />
    },
    {
      id: 3,
      question: "Como marcar uma consulta?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.contatoCompact}>
            <div className={styles.telefoneItem}>
              <FaPhone />
              <div>
                <span className={styles.telefone}>(51) 3500-0714</span>
                <small>Telefone</small>
              </div>
            </div>
            <div className={styles.whatsappItem}>
              <FaWhatsapp />
              <a 
                href="https://wa.me/555135000714"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className={styles.disponibilidade}>
            <FaCalendarAlt />
            <span>Grande disponibilidade de horários</span>
          </div>
        </div>
      ),
      icon: <FaPhone />
    },
    {
      id: 4,
      question: "Quais especialidades temos?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <FaStethoscope />
              <div>
                <strong>20+</strong>
                <span>Especialidades</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaUserMd />
              <div>
                <strong>30+</strong>
                <span>Profissionais</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaHospital />
              <div>
                <strong>45+ anos</strong>
                <span>Experiência</span>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <FaStethoscope />
    },
    {
      id: 5,
      question: "Quais exames são realizados?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.examesCompact}>
            <div className={styles.exameItem}>
              <FaFileMedical />
              <div>
                <strong>14 tipos</strong>
                <span>de exames</span>
              </div>
            </div>
            <div className={styles.exameItem}>
              <FaCheckCircle />
              <div>
                <strong>100% digitais</strong>
                <span>resultados</span>
              </div>
            </div>
            <div className={styles.exameItem}>
              <FaClock />
              <div>
                <strong>24h</strong>
                <span>para laudos</span>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <FaFileMedical />
    },
    {
      id: 6,
      question: "Como funciona para empresas?",
      answer: (
        <div className={styles.answerContent}>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <div>
                <strong>Contato</strong>
                <small>Via WhatsApp</small>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <div>
                <strong>Reunião</strong>
                <small>Análise de necessidades</small>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <div>
                <strong>Proposta</strong>
                <small>Plano personalizado</small>
              </div>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <div>
                <strong>Contratação</strong>
                <small>Início dos serviços</small>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <FaBuilding />
    }
  ];



  return (
    <section className={styles.faqSectionCompact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>FAQ</h2>
          <p className={styles.subtitle}>Perguntas frequentes sobre o Centro Médico Sapiranga</p>
        </div>

        <div className={styles.faqList}>
          {faqItems.map((item) => (
            <div key={item.id} className={styles.faqItem}>
              <button
                className={`${styles.questionButton} ${openItems.includes(item.id) ? styles.open : ''}`}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
              >
                <div className={styles.questionContent}>
                  <span className={styles.questionIcon}>
                    {item.icon}
                  </span>
                  <span className={styles.questionText}>
                    {item.question}
                  </span>
                </div>
                <span className={styles.chevron}>
                  {openItems.includes(item.id) ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    className={styles.answer}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.answerInner}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSectionCompact;