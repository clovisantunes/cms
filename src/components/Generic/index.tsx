import styles from './styles.module.scss';
import genericBG from '../../assets/generic.webp';
import genericBG2 from '../../assets/generic2.webp';
import genericBG3 from '../../assets/Group 8.webp';
import { FaCheckCircle, FaArrowRight} from 'react-icons/fa';
import Button from '../UI/Button';
import { motion } from 'framer-motion';

interface GenericProps {
    backgroundType?: '1' | '2' | '3';
    variant?: 'default' | 'cartao' | 'servicos1' | 'servicos2';
}

export default function Generic({ backgroundType = '1', variant = 'default' }: GenericProps) {
    const backgroundImage = 
        backgroundType === '2' ? genericBG2 :
        backgroundType === '3' ? genericBG3 :
        genericBG;

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

  


    if (variant === 'servicos2') {
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
                        <h2>Soluções Integradas</h2>
                        <p>Gestão completa em saúde e segurança do trabalho</p>
                    </motion.div>

                    <div className={styles.servicosGrid}>
                        <motion.div 
                            className={styles.servicosCta}
                            variants={itemVariants}
                        >
                            <div className={styles.ctaCard}>
                                <h3>Gestão Completa</h3>
                                <p>Tudo que sua empresa precisa em saúde ocupacional em um único parceiro.</p>
                                <div className={styles.features}>
                                    <span><FaCheckCircle /> Consultoria especializada</span>
                                    <span><FaCheckCircle /> Documentação regularizada</span>
                                    <span><FaCheckCircle /> Suporte contínuo</span>
                                </div>
                                <Button variant="primary"  >
                                    Solicitar Orçamento
                                    <FaArrowRight />
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div 
                            className={styles.servicosList}
                            variants={itemVariants}
                        >
                            <div className={styles.serviceCard}>
                                <FaCheckCircle className={styles.serviceIcon} />
                                <div className={styles.serviceContent}>
                                    <h4>Gestão do e-Social</h4>
                                    <p>Envio e acompanhamento de todas as obrigações</p>
                                </div>
                            </div>
                            
                            <div className={styles.serviceCard}>
                                <FaCheckCircle className={styles.serviceIcon} />
                                <div className={styles.serviceContent}>
                                    <h4>Vacinas para Empresas</h4>
                                    <p>Campanhas vacinais no ambiente corporativo</p>
                                </div>
                            </div>
                            
                            <div className={styles.serviceCard}>
                                <FaCheckCircle className={styles.serviceIcon} />
                                <div className={styles.serviceContent}>
                                    <h4>Perícias Médicas</h4>
                                    <p>Avaliações e juntas médicas especializadas</p>
                                </div>
                            </div>
                            
                            <div className={styles.serviceCard}>
                                <FaCheckCircle className={styles.serviceIcon} />
                                <div className={styles.serviceContent}>
                                    <h4>PPP e PCMSO</h4>
                                    <p>Emissão e gestão de documentação obrigatória</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        );
    }

    return (
        <motion.div
            className={styles.genericContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        />
    );
}