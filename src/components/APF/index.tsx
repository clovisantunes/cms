import styles from './styles.module.scss';
import cartaoImg from '../../assets/apf.webp';
import { FaCheckCircle, FaArrowRight, FaCreditCard, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

export default function CartaoAPF() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { scale: 1, opacity: 1 }
    };

    const handleSolicitarCartao = () => {
        const msg = "Olá, gostaria de solicitar o Cartão APF.";
        window.open(`https://wa.me/555193481804?text=${encodeURIComponent(msg)}`, "_blank");
    };

    return (
            <motion.section
                className={styles.cartaoSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <div className={styles.cartaoContainer}>
                    <motion.div className={styles.cartaoHeader} variants={itemVariants}>
                     
                        <h2>Cartão APF</h2>
                        <p className={styles.subtitle}>Atendimento Particular Facilitado</p>
                    </motion.div>

                    <div className={styles.cartaoContent}>
                        <motion.div 
                            className={styles.cartaoVisual}
                            variants={cardVariants}
                        >
                            <img 
                                src={cartaoImg} 
                                alt="Cartão APF - Atendimento Particular Facilitado" 
                                className={styles.cartaoImage}
                            />
                            <div className={styles.cardFeatures}>
                                <div className={styles.feature}>
                                    <FaCheckCircle />
                                    <span>Descontos exclusivos</span>
                                </div>
                                <div className={styles.feature}>
                                    <FaCheckCircle />
                                    <span>Consultas e exames</span>
                                </div>
                                <div className={styles.feature}>
                                    <FaCheckCircle />
                                    <span>Sem mensalidade</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className={styles.cartaoInfo}
                            variants={itemVariants}
                        >
                            <h3>Vantagens Exclusivas para Você</h3>
                            <div className={styles.benefitsList}>
                                <div className={styles.benefit}>
                                    <div className={styles.benefitIcon}>
                                        <FaShieldAlt />
                                    </div>
                                    <div className={styles.benefitText}>
                                        <strong>Cobertura Ampliada</strong>
                                        <span>Descontos em mais de 20 especialidades</span>
                                    </div>
                                </div>
                                <div className={styles.benefit}>
                                    <div className={styles.benefitIcon}>
                                        <FaHandshake />
                                    </div>
                                    <div className={styles.benefitText}>
                                        <strong>Sem Surpresas</strong>
                                        <span>Preços transparentes e acessíveis</span>
                                    </div>
                                </div>
                                <div className={styles.benefit}>
                                    <div className={styles.benefitIcon}>
                                        <FaCreditCard />
                                    </div>
                                    <div className={styles.benefitText}>
                                        <strong>Facilidade no Pagamento</strong>
                                        <span>Parcele suas consultas e exames</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.ctaSection}>
                                <Button variant="primary" onClick={handleSolicitarCartao}>
                                    Solicitar Cartão APF
                                    <FaArrowRight />
                                </Button>
                                <p className={styles.ctaNote}>
                                    Sem custo de adesão • Emissão imediata
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        );
    }

