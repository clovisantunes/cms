import BannerPages from "../../components/BannerPages";
import styles from './styles.module.scss';
import banner from '../../assets/Group 10.png'; 
import { motion } from 'framer-motion';
import { 
    FaPaperPlane, 
    FaUser, 
    FaEnvelope, 
    FaPhone, 
    FaFileAlt,
    FaMapMarkerAlt,
    FaClock,
    FaLinkedin,
    FaWhatsapp,
    FaBriefcase,
    FaCrosshairs,
    FaRocket,
    FaUsers
} from 'react-icons/fa';

export default function Contato() {
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
                style="style2"
            />
            <motion.section 
                className={styles.contactSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <div className={styles.contactContainer}>
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
                         <div className={styles.socialConnect}>
                                    <h4>Siga nossas vagas</h4>
                                    <div className={styles.socialLinks}>
                                        <a href="https://www.linkedin.com/company/centro-m%C3%A9dico-sapiranga/" target="__blank" className={styles.socialLink}>
                                            <FaLinkedin />
                                            <span>LinkedIn</span>
                                        </a>
                                        <a href="https://api.whatsapp.com/send?phone=5551989666385&text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta." className={styles.socialLink}>
                                            <FaWhatsapp />
                                            <span>WhatsApp</span>
                                        </a>
                                    </div>
                                </div>
                    </motion.div>
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
                                    <div className={styles.benefitIcon}>
                                        <FaBriefcase />
                                    </div>
                                    <h4>Plano de Carreira</h4>
                                    <p>Oportunidades reais de crescimento e desenvolvimento profissional</p>
                                </motion.div>
                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>
                                        <FaCrosshairs />
                                    </div>
                                    <h4>Missão com Propósito</h4>
                                    <p>Trabalhe em uma empresa que realmente faz diferença na vida das pessoas</p>
                                </motion.div>
                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>
                                        <FaRocket />
                                    </div>
                                    <h4>Ambiente Inovador</h4>
                                    <p>Tecnologia de ponta e metodologias modernas de trabalho</p>
                                </motion.div>
                                <motion.div 
                                    className={styles.benefitCard}
                                    variants={cardVariants}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.benefitIcon}>
                                        <FaUsers />
                                    </div>
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
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}