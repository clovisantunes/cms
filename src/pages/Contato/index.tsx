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
    FaUsers,
    FaSpinner,
    FaCheck,
    FaExclamationTriangle
} from 'react-icons/fa';
import { useState, useRef } from 'react';

// URL CORRETA da API na Vercel
const API_URL = 'https://send-email-lilac.vercel.app/api/send-email';

export default function Contato() {
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const [selectedFileName, setSelectedFileName] = useState<string>('');
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: '',
        arquivo_nome: ''
    });
    
    const formRef = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

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

    const formatPhone = (value: string) => {
        const numbers = value.replace(/\D/g, '');
        
        if (numbers.length <= 2) {
            return `(${numbers}`;
        } else if (numbers.length <= 7) {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
        } else {
            return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        
        if (name === 'telefone') {
            const formatted = formatPhone(value);
            setFormData(prev => ({ ...prev, [name]: formatted }));
            e.currentTarget.value = formatted;
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('O arquivo deve ter no máximo 5MB.');
                e.target.value = '';
                setSelectedFileName('');
                setFormData(prev => ({ ...prev, arquivo_nome: '' }));
                return;
            }
            
            setSelectedFileName(file.name);
            setFormData(prev => ({ ...prev, arquivo_nome: file.name }));
        }
    };

    const handleFileClick = () => {
        if (!loading) {
            fileInputRef.current?.click();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus({ type: null, message: '' });

        // Validação dos campos obrigatórios
        if (!formData.nome || !formData.email || !formData.telefone) {
            setSubmitStatus({ 
                type: 'error', 
                message: 'Nome, email e telefone são obrigatórios.' 
            });
            setLoading(false);
            return;
        }

        try {
            console.log('Enviando para API:', API_URL);
            console.log('Dados a serem enviados:', formData);

            // Envia para a API da Vercel
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    email: formData.email,
                    telefone: formData.telefone,
                    mensagem: formData.mensagem || '',
                    arquivo_nome: formData.arquivo_nome || ''
                }),
            });

            console.log('Status da resposta:', response.status);
            console.log('Headers da resposta:', response.headers);

            const contentType = response.headers.get('content-type');
            let result;
            
            if (contentType && contentType.includes('application/json')) {
                result = await response.json();
            } else {
                const text = await response.text();
                console.log('Resposta não-JSON:', text);
                throw new Error('Resposta inválida do servidor');
            }

            console.log('Resposta da API:', result);

            if (result.success) {
                setSubmitStatus({ 
                    type: 'success', 
                    message: result.message || '✅ Candidatura enviada com sucesso! Entraremos em contato em breve.' 
                });
                
                // Limpa o formulário
                if (formRef.current) {
                    formRef.current.reset();
                }
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: '',
                    arquivo_nome: ''
                });
                setSelectedFileName('');
                
                setTimeout(() => {
                    setSubmitStatus({ type: null, message: '' });
                }, 5000);
            } else {
                setSubmitStatus({ 
                    type: 'error', 
                    message: result.message || 'Erro ao enviar candidatura.' 
                });
            }
        } catch (error: any) {
            console.error('Erro completo:', error);
            setSubmitStatus({ 
                type: 'error', 
                message: error.message || 'Erro de conexão. Verifique sua internet e tente novamente.' 
            });
        } finally {
            setLoading(false);
        }
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
                        
                        {/* Mensagem de Status */}
                        {submitStatus.type && (
                            <motion.div 
                                className={`${styles.statusMessage} ${styles[submitStatus.type]}`}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                            >
                                <div className={styles.statusContent}>
                                    {submitStatus.type === 'success' ? (
                                        <FaCheck className={styles.statusIcon} />
                                    ) : (
                                        <FaExclamationTriangle className={styles.statusIcon} />
                                    )}
                                    <span>{submitStatus.message}</span>
                                </div>
                            </motion.div>
                        )}
                        
                        <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
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
                                        disabled={loading}
                                        value={formData.nome}
                                        onChange={handleInputChange}
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
                                        disabled={loading}
                                        value={formData.email}
                                        onChange={handleInputChange}
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
                                        placeholder="(51) 99999-9999"
                                        disabled={loading}
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className={styles.inputGroupFull}>
                                    <label htmlFor="curriculo" className={styles.label}>
                                        <FaFileAlt className={styles.labelIcon} />
                                        Currículo (PDF ou DOC)
                                        <span style={{ fontSize: '0.9em', fontWeight: 'normal', marginLeft: '5px' }}>
                                            (opcional)
                                        </span>
                                    </label>
                                    <div 
                                        className={styles.fileInputContainer}
                                        onClick={handleFileClick}
                                        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                                    >
                                        <input 
                                            ref={fileInputRef}
                                            type="file" 
                                            id="curriculo" 
                                            name="curriculo" 
                                            className={styles.fileInput}
                                            accept=".pdf,.doc,.docx"
                                            disabled={loading}
                                            onChange={handleFileChange}
                                        />
                                        <div className={styles.fileInputContent}>
                                            {selectedFileName ? (
                                                <>
                                                    <span className={styles.fileInputLabel}>
                                                        {selectedFileName}
                                                    </span>
                                                    <span className={styles.fileInputHint}>
                                                        Clique para alterar o arquivo
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className={styles.fileInputLabel}>
                                                        {loading ? 'Aguarde...' : 'Selecionar arquivo (opcional)'}
                                                    </span>
                                                    <span className={styles.fileInputHint}>
                                                        Tamanho máximo: 5MB
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <p className={styles.fileNote}>
                                        <small>
                                            <FaExclamationTriangle style={{ marginRight: '5px' }} />
                                            Apenas o nome do arquivo será registrado. 
                                            O arquivo pode ser enviado posteriormente por e-mail.
                                        </small>
                                    </p>
                                </div>
                                <div className={styles.inputGroupFull}>
                                    <label htmlFor="mensagem" className={styles.label}>
                                        Mensagem (opcional)
                                    </label>
                                    <textarea 
                                        id="mensagem" 
                                        name="mensagem" 
                                        className={styles.textarea}
                                        rows={5}
                                        placeholder="Conte-nos sobre suas experiências, habilidades e por que gostaria de fazer parte do nosso time..."
                                        disabled={loading}
                                        value={formData.mensagem}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                            
                            {/* Termos e Condições */}
                            <div className={styles.termsContainer}>
                                <input 
                                    type="checkbox" 
                                    id="terms" 
                                    name="terms" 
                                    required
                                    disabled={loading}
                                    className={styles.termsCheckbox}
                                />
                                <label htmlFor="terms" className={styles.termsLabel}>
                                    Concordo em compartilhar meus dados para fins de recrutamento e seleção, de acordo com a LGPD.
                                </label>
                            </div>
                            
                            <motion.button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={loading}
                                whileHover={!loading ? { scale: 1.02 } : {}}
                                whileTap={!loading ? { scale: 0.98 } : {}}
                            >
                                {loading ? (
                                    <>
                                        <FaSpinner className={`${styles.buttonIcon} ${styles.spinning}`} />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className={styles.buttonIcon} />
                                        Enviar Candidatura
                                    </>
                                )}
                            </motion.button>
                        </form>
                        
                        <div className={styles.socialConnect}>
                            <h4>Siga nossas vagas</h4>
                            <div className={styles.socialLinks}>
                                <a href="https://www.linkedin.com/company/centro-m%C3%A9dico-sapiranga/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
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