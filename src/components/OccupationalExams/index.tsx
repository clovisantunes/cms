import styles from './styles.module.scss';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

export default function ExamesOcupacionais() {

const handleClick = () => {
  const mensagem = `Quero mais informações sobre os serviços para minha empresa.`;
  const telefone = "5551989666385";
  const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(whatsappUrl, '_blank');
};
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

 
    
    const treinamentos = [
        "NR 05 – CIPA",
        "NR 06 – EPI",
        "NR 10 – Segurança em instalações elétricas",
        "NR 11 – Transportes e manuseio de materiais",
        "NR 12 – Segurança no trabalho em máquinas",
        "NR 17 – Ergonomia",
        "NR 20 – Manuseio de produtos químicos",
        "NR 35 – Trabalho em altura",
        "CURSO RT 14 – Brigada de incêndio | Combate a incêndio"
    ];

        return (
            <motion.section
                className={styles.servicosSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <div className={styles.servicosContainer}>
                    <motion.div className={styles.servicosHeader} variants={itemVariants}>
                        <h2>Cursos em Saúde Ocupacional</h2>
                        <p>Capacitação e Segurança para o seu Time</p>
                    </motion.div>

                    <div className={styles.servicosGrid}>
                        <motion.div 
                            className={styles.servicosList}
                            variants={itemVariants}
                        >
                        
                            
                            {treinamentos.map((treinamento, index) => (
                                <div key={index} className={styles.trainingCard}>
                                    <div className={styles.trainingHeader}>
                                        <div className={styles.trainingIcon}>NR</div>
                                        <h4>{treinamento}</h4>
                                    </div>
                                    <p>Treinamento especializado conforme norma regulamentadora</p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div 
                            className={styles.servicosCta}
                            variants={itemVariants}
                        >
                            <div className={styles.ctaCard}>
                                <h3>Eficiência e Conformidade</h3>
                                <p>Soluções completas em saúde ocupacional para sua empresa cumprir todas as exigências legais.</p>
                                <div className={styles.features}>
                                    <span><FaCheckCircle /> Certificação reconhecida</span>
                                    <span><FaCheckCircle /> Instrutores qualificados</span>
                                    <span><FaCheckCircle /> Material didático completo</span>
                                </div>
                                <Button variant="secondary"  onClick={handleClick}>
                                    Solicitar Orçamento
                                    <FaArrowRight />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        );
    }
