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
    FaExclamationTriangle,
    FaTrash,
    FaUpload,
    FaTimes
} from 'react-icons/fa';
import { useState, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// URL CORRETA da API na Vercel
const API_URL = 'https://send-email-lilac.vercel.app/api/send-email';

// Função para converter arquivo para Base64
const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            // Remove o prefixo "data:*/*;base64," 
            const base64String = reader.result?.toString().split(',')[1] || '';
            resolve(base64String);
        };
        reader.onerror = error => reject(error);
    });
};

// Função para determinar o tipo MIME
const getMimeType = (filename: string): string => {
    const extension = filename.toLowerCase().split('.').pop();
    
    switch (extension) {
        case 'pdf':
            return 'application/pdf';
        case 'doc':
            return 'application/msword';
        case 'docx':
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        case 'txt':
            return 'text/plain';
        case 'rtf':
            return 'application/rtf';
        case 'odt':
            return 'application/vnd.oasis.opendocument.text';
        default:
            return 'application/octet-stream';
    }
};

export default function Contato() {
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
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
        
        if (!file) {
            setSelectedFile(null);
            return;
        }
        
        // Verifica extensões permitidas
        const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt', '.rtf', '.odt'];
        const fileExtension = '.' + file.name.toLowerCase().split('.').pop();
        
        if (!allowedExtensions.includes(fileExtension)) {
            toast.error(`Tipo de arquivo não permitido. Apenas: ${allowedExtensions.join(', ')}`);
            e.target.value = '';
            setSelectedFile(null);
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            toast.error('O arquivo deve ter no máximo 5MB.');
            e.target.value = '';
            setSelectedFile(null);
            return;
        }
        
        setSelectedFile(file);
        toast.success(`Arquivo "${file.name}" selecionado!`);
    };

    const handleFileClick = () => {
        if (!loading) {
            fileInputRef.current?.click();
        }
    };

    const handleRemoveFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        setSelectedFile(null);
        toast.info('Arquivo removido');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Validação dos campos obrigatórios
        if (!formData.nome || !formData.email || !formData.telefone) {
            toast.error('Nome, email e telefone são obrigatórios.');
            setLoading(false);
            return;
        }

        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Por favor, insira um email válido.');
            setLoading(false);
            return;
        }

        try {
            let arquivo_base64 = null;
            let arquivo_tipo = null;
            
            // Converte o arquivo para Base64 se existir
            if (selectedFile) {
                try {
                    toast.info('Convertendo arquivo...');
                    arquivo_base64 = await fileToBase64(selectedFile);
                    arquivo_tipo = getMimeType(selectedFile.name);
                } catch (error) {
                    console.error('Erro ao converter arquivo:', error);
                    toast.error('Erro ao processar o arquivo. Tente novamente.');
                    setLoading(false);
                    return;
                }
            }

            const requestData = {
                nome: formData.nome.trim(),
                email: formData.email.trim(),
                telefone: formData.telefone.trim(),
                mensagem: formData.mensagem.trim() || '',
                arquivo_nome: selectedFile ? selectedFile.name : '',
                arquivo_base64: arquivo_base64,
                arquivo_tipo: arquivo_tipo
            };

            console.log('Enviando para API:', requestData);

            // Envia para a API da Vercel
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(requestData),
            });

            let result;
            try {
                result = await response.json();
            } catch (jsonError) {
                console.error('Erro ao parsear JSON:', jsonError);
                toast.error('Erro no servidor. Tente novamente.');
                setLoading(false);
                return;
            }

            if (response.ok && result.success) {
                toast.success('✅ Candidatura enviada com sucesso! Entraremos em contato em breve.');
                
                // Limpa o formulário
                if (formRef.current) {
                    formRef.current.reset();
                }
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
                setSelectedFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                toast.error(result.message || 'Erro ao enviar candidatura. Tente novamente.');
            }
        } catch (error: any) {
            console.error('Erro completo:', error);
            toast.error(error.message || 'Erro de conexão. Verifique sua internet e tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            
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
                                        maxLength={15}
                                    />
                                </div>
                                <div className={styles.inputGroupFull}>
                                    <label htmlFor="curriculo" className={styles.label}>
                                        <FaFileAlt className={styles.labelIcon} />
                                        Currículo (opcional)
                                    </label>
                                    
                                    <div 
                                        className={styles.fileInputWrapper}
                                        onClick={handleFileClick}
                                        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                                    >
                                        <input 
                                            ref={fileInputRef}
                                            type="file" 
                                            id="curriculo" 
                                            name="curriculo" 
                                            className={styles.fileInput}
                                            accept=".pdf,.doc,.docx,.txt,.rtf,.odt"
                                            disabled={loading}
                                            onChange={handleFileChange}
                                        />
                                        
                                        {selectedFile ? (
                                            <div className={styles.fileSelected}>
                                                <div className={styles.fileInfo}>
                                                    <FaFileAlt className={styles.fileIcon} />
                                                    <div className={styles.fileDetails}>
                                                        <span className={styles.fileName}>
                                                            {selectedFile.name}
                                                        </span>
                                                        <span className={styles.fileSize}>
                                                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                                        </span>
                                                    </div>
                                                </div>
                                                <button 
                                                    type="button"
                                                    className={styles.removeButton}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleRemoveFile();
                                                    }}
                                                    disabled={loading}
                                                >
                                                    <FaTimes />
                                                </button>
                                            </div>
                                        ) : (
                                            <div className={styles.fileUploadArea}>
                                                <div className={styles.uploadIcon}>
                                                    <FaUpload />
                                                </div>
                                                <div className={styles.uploadText}>
                                                    <span className={styles.uploadTitle}>
                                                        {loading ? 'Processando...' : 'Clique para anexar arquivo'}
                                                    </span>
                                                    <span className={styles.uploadSubtitle}>
                                                        PDF, DOC, DOCX, TXT, RTF ou ODT (até 5MB)
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
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