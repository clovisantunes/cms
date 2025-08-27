import BannerPages from "../../components/BannerPages";
import Texts from "../../components/UI/Texts";
import styles from './styles.module.scss';
import banner from '../../assets/Group 10.png';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaIdCard, FaFileAlt } from 'react-icons/fa';

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
            transition: { duration: 0.5 }
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Lógica de envio do formulário aqui
        console.log("Formulário enviado!");
    };

    return (
        <>
            <BannerPages 
                backgroundImage={banner}
                title="Trabalhe Conosco"
            />
            
            <Texts
                title="Venha fazer parte de uma empresa que transforma vidas através da saúde e segurança!"
                subtitle="Hoje, nossa equipe é formada por profissionais dedicados a promover ambientes de trabalho mais seguros e saudáveis. Você quer fazer parte desse time?"
            />

            <motion.div 
                className={styles.formularioContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <motion.div className={styles.formularioEsquerda} variants={itemVariants}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.inputGroup}>
                            {/* Nome Field */}
                            <div className={styles.inputWrapper}>
                                <label htmlFor="nome" className={styles.label}>
                                    <FaUser className={styles.labelIcon} />
                                    Nome Completo
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
                            <div className={styles.inputWrapper}>
                                <label htmlFor="email" className={styles.label}>
                                    <FaEnvelope className={styles.labelIcon} />
                                    E-mail
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

                            {/* Telefone e CPF */}
                            <div className={styles.inputCard}>
                                <div className={styles.inputCardLeft}>
                                    <label htmlFor="telefone" className={styles.label}>
                                        <FaPhone className={styles.labelIcon} />
                                        Telefone
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
                                <div className={styles.inputCardLeft}>
                                    <label htmlFor="cpf" className={styles.label}>
                                        <FaIdCard className={styles.labelIcon} />
                                        CPF
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
                            </div>

                            {/* Currículo Field */}
                            <div className={styles.inputWrapper}>
                                <label htmlFor="curriculo" className={styles.label}>
                                    <FaFileAlt className={styles.labelIcon} />
                                    Currículo (PDF ou DOC)
                                </label>
                                <div className={styles.fileInputContainer}>
                                    <input 
                                        type="file" 
                                        id="curriculo" 
                                        name="curriculo" 
                                        className={styles.fileInput}
                                        accept=".pdf,.doc,.docx"
                                    />
                                    <span className={styles.fileInputLabel}>Selecionar arquivo</span>
                                </div>
                            </div>

                            {/* Mensagem Field */}
                            <div className={styles.inputWrapper}>
                                <label htmlFor="mensagem" className={styles.label}>
                                    Mensagem
                                </label>
                                <textarea 
                                    id="mensagem" 
                                    name="mensagem" 
                                    className={styles.textarea}
                                    rows={4}
                                    placeholder="Conte-nos um pouco sobre você e suas expectativas..."
                                ></textarea>
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
                        </div>
                    </form>
                </motion.div>

                <motion.div className={styles.formularioDireita} variants={itemVariants}>
                    <div className={styles.contentWrapper}>
                        <h2>Encontre a oportunidade perfeita para você!</h2>
                        <p>
                            Envie seu currículo e junte-se a uma empresa que <strong>valoriza talentos</strong> e <strong>investe no seu crescimento</strong>.
                        </p>
                        
                        <div className={styles.benefitsList}>
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>🎯</div>
                                <div className={styles.benefitText}>
                                    <h4>Oportunidades Reais</h4>
                                    <p>Vagas alinhadas com seu perfil profissional</p>
                                </div>
                            </div>
                            
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>🚀</div>
                                <div className={styles.benefitText}>
                                    <h4>Plano de Carreira</h4>
                                    <p>Crescimento profissional estruturado</p>
                                </div>
                            </div>
                            
                            <div className={styles.benefitItem}>
                                <div className={styles.benefitIcon}>💡</div>
                                <div className={styles.benefitText}>
                                    <h4>Ambiente Inovador</h4>
                                    <p>Tecnologia e metodologias modernas</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.contactInfo}>
                            <h3>Dúvidas?</h3>
                            <p>Entre em contato: <strong>rh@empresa.com</strong></p>
                            <p>Telefone: <strong>(11) 3456-7890</strong></p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}