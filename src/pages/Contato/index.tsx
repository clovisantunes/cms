import BannerPages from "../../components/BannerPages";
import Texts from "../../components/UI/Texts";
import styles from './styles.module.scss';
import banner from '../../assets/Group 10.png'; 
import { motion } from 'framer-motion';
import { 
    FaPaperPlane, 
    FaUser, 
    FaEnvelope, 
    FaPhone, 
    FaIdCard, 
    FaFileAlt,
    FaMapMarkerAlt,
    FaClock,
    FaLinkedin,
    FaWhatsapp
} from 'react-icons/fa';

export default function Contato() {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Formulário enviado!");
    };

    return (
        <>
            <BannerPages 
                backgroundImage={banner}
                title="Trabalhe Conosco"
                subtitle="Faça parte de uma equipe que transforma vidas através da saúde"
            />
            
            <section className={styles.introSection}>
                <div className={styles.introContainer}>
                    <Texts
                        title="Venha construir sua carreira conosco"
                        subtitle="Buscamos profissionais apaixonados por saúde e comprometidos com a excelência no atendimento. Aqui, seu talento é valorizado e seu crescimento é nossa prioridade."
                    />
                </div>
            </section>

            <motion.section 
                className={styles.contactSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <div className={styles.contactContainer}>
                    {/* Form Section */}
                    <motion.div 
                        className={styles.formSection}
                        variants={itemVariants}
                    >
                        <div className={styles.formHeader}>
                            <div className={styles.formIcon}>
                                <FaPaperPlane />
                            </div>
                            <h2>Envie sua Candidatura</h2>
                            <p>Preencha o formulário abaixo e entraremos em contato</p>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.formGrid}>
                                {/* Nome Field */}
                                <div className={styles.inputGroup}>
                                    <label htmlFor="nome" className={styles.label}>
                                        <FaUser className={styles.labelIcon} />
                                        Nome Completo *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="nome" 
                                        name="nome" 
                                        className={styles.input}
                                        required 
                                        placeholder="Seu nome completo"
                                    />
                                </div>

                                {/* Email Field */}
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        <FaEnvelope className={styles.labelIcon} />
                                        E-mail *
                                    </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        className={styles.input}
                                        required 
                                        placeholder="seu.email@exemplo.com"
                                    />
                                </div>

                                {/* Telefone Field */}
                                <div className={styles.inputGroup}>
                                    <label htmlFor="telefone" className={styles.label}>
                                        <FaPhone className={styles.labelIcon} />
                                        Telefone *
                                    </label>
                                    <input 
                                        type="tel" 
                                        id="telefone" 
                                        name="telefone" 
                                        className={styles.input}
                                        required 
                                        placeholder="(11) 99999-9999"
                                    />
                                </div>

                                {/* CPF Field */}
                                <div className={styles.inputGroup}>
                                    <label htmlFor="cpf" className={styles.label}>
                                        <FaIdCard className={styles.labelIcon} />
                                        CPF *
                                    </label>
                                    <input 
                                        type="text" 
                                        id="cpf" 
                                        name="cpf" 
                                        className={styles.input}
                                        required 
                                        placeholder="000.000.000-00"
                                    />
                                </div>

                                {/* Currículo Field */}
                                <div className={styles.inputGroupFull}>
                                    <label htmlFor="curriculo" className={styles.label}>
                                        <FaFileAlt className={styles.labelIcon} />
                                        Currículo (PDF ou DOC) *
                                    </label>
                                    <div className={styles.fileInputContainer}>
                                        <input 
                                            type="file" 
                                            id="curriculo" 
                                            name="curriculo" 
                                            className={styles.fileInput}
                                            accept=".pdf,.doc,.docx"
                                            required
                                        />
                                        <div className={styles.fileInputContent}>
                                            <span className={styles.fileInputLabel}>Selecionar arquivo</span>
                                            <span className={styles.fileInputHint}>Tamanho máximo: 5MB</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mensagem Field */}
                                <div className={styles.inputGroupFull}>
                                    <label htmlFor="mensagem" className={styles.label}>
                                        Mensagem
                                    </label>
                                    <textarea 
                                        id="mensagem" 
                                        name="mensagem" 
                                        className={styles.textarea}
                                        rows={5}
                                        placeholder="Conte-nos sobre suas experiências, habilidades e por que gostaria de fazer parte do nosso time..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button 
                                type="submit" 
                                className={styles.submitButton}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaPaperPlane className={styles.buttonIcon} />
                                Enviar Candidatura
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Info Section */}
                    <motion.div 
                        className={styles.infoSection}
                        variants={itemVariants}
                    >
                        <div className={styles.infoContent}>
                            <div className={styles.infoHeader}>
                                <h2>Por que fazer parte do nosso time?</h2>
                                <p>Junte-se a uma empresa que valoriza pessoas e transforma vidas</p>
                            </div>

                            <div className={styles.benefitsGrid}>
                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>💼</div>
                                    <h4>Plano de Carreira</h4>
                                    <p>Oportunidades reais de crescimento e desenvolvimento profissional</p>
                                </motion.div>

                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>🎯</div>
                                    <h4>Missão com Propósito</h4>
                                    <p>Trabalhe em uma empresa que realmente faz diferença na vida das pessoas</p>
                                </motion.div>

                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>🚀</div>
                                    <h4>Ambiente Inovador</h4>
                                    <p>Tecnologia de ponta e metodologias modernas de trabalho</p>
                                </motion.div>

                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>🤝</div>
                                    <h4>Time Coeso</h4>
                                    <p>Colabore com profissionais experientes e apaixonados pelo que fazem</p>
                                </motion.div>
                            </div>

                            <div className={styles.contactDetails}>
                                <motion.div 
                                    className={styles.contactCard}
                                    variants={cardVariants}
                                >
                                    <h3>Informações de Contato</h3>
                                    <div className={styles.contactItem}>
                                        <FaEnvelope className={styles.contactIcon} />
                                        <div>
                                            <strong>E-mail</strong>
                                            <span>rh@centromedicosapiranga.com.br</span>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <FaPhone className={styles.contactIcon} />
                                        <div>
                                            <strong>Telefone</strong>
                                            <span>(51) 3500-0714</span>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <FaMapMarkerAlt className={styles.contactIcon} />
                                        <div>
                                            <strong>Endereço</strong>
                                            <span>Sapiranga, RS</span>
                                        </div>
                                    </div>
                                    <div className={styles.contactItem}>
                                        <FaClock className={styles.contactIcon} />
                                        <div>
                                            <strong>Horário</strong>
                                            <span>Segunda a Sexta: 8h às 18h</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <div className={styles.socialConnect}>
                                    <h4>Siga nossas vagas</h4>
                                    <div className={styles.socialLinks}>
                                        <a href="#" className={styles.socialLink}>
                                            <FaLinkedin />
                                            <span>LinkedIn</span>
                                        </a>
                                        <a href="#" className={styles.socialLink}>
                                            <FaWhatsapp />
                                            <span>WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}