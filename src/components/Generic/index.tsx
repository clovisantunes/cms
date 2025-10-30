import styles from './styles.module.scss';
import genericBG from '../../assets/generic.png';
import genericBG2 from '../../assets/generic2.png';
import genericBG3 from '../../assets/Group 8.png';
import cartaoImg from '../../assets/apf.png';
import { FaCheckCircle, FaArrowRight, FaCreditCard, FaShieldAlt, FaHandshake } from 'react-icons/fa';
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

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { duration: 0.6, type: "spring", stiffness: 100 }
        }
    };
    const handleSolicitarCartao = () => {
  const msg = "Olá, gostaria de solicitar o Cartão APF.";
  const url = `https://wa.me/555135000714?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
};

const handleClick = () => {
  const mensagem = `Quero mais informações sobre os serviços para minha empresa.`;
  const telefone = "555135000714";
  const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(whatsappUrl, '_blank');
};
    if (variant === 'cartao') {
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

    if (variant === 'servicos1') {
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
                        <h2>Treinamentos NR</h2>
                        <p>Capacitação profissional com certificação reconhecida</p>
                    </motion.div>

                    <div className={styles.servicosGrid}>
                        <motion.div 
                            className={styles.servicosList}
                            variants={itemVariants}
                        >
                            <div className={styles.trainingCard}>
                                <div className={styles.trainingHeader}>
                                    <div className={styles.trainingIcon}>NR</div>
                                    <h4>NR10 - Segurança em Instalações Elétricas</h4>
                                </div>
                                <p>Treinamento completo para trabalhos com eletricidade</p>
                            </div>
                            
                            <div className={styles.trainingCard}>
                                <div className={styles.trainingHeader}>
                                    <div className={styles.trainingIcon}>NR</div>
                                    <h4>NR06 - EPI</h4>
                                </div>
                                <p>Uso correto de Equipamentos de Proteção Individual</p>
                            </div>
                            
                            <div className={styles.trainingCard}>
                                <div className={styles.trainingHeader}>
                                    <div className={styles.trainingIcon}>NR</div>
                                    <h4>NR35 - Trabalho em Altura</h4>
                                </div>
                                <p>Procedimentos seguros para atividades elevadas</p>
                            </div>
                            
                            <div className={styles.trainingCard}>
                                <div className={styles.trainingHeader}>
                                    <div className={styles.trainingIcon}>NR</div>
                                    <h4>NR11 - Operação de Empilhadeira</h4>
                                </div>
                                <p>Capacitação para operadores de equipamentos</p>
                            </div>
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
                                <Button variant="primary" >
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