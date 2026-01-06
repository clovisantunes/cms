import { 
  FaInstagram, 
  FaWhatsapp, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaSpinner,
  FaUser,
  FaEnvelope,
  FaPaperPlane
} from 'react-icons/fa';
import styles from './styles.module.scss';
import logo from '../../assets/logo-CMS-site.webp';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = 'https://send-email-lilac.vercel.app/api/send-email';

export const Footer = ({ id = "contato" }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        // Validações básicas
        if (!formData.nome || !formData.sobrenome || !formData.email || !formData.telefone || !formData.mensagem) {
            toast.error('Todos os campos são obrigatórios.');
            setLoading(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Por favor, insira um email válido.');
            setLoading(false);
            return;
        }

        try {
            const requestData = {
                nome: `${formData.nome.trim()} ${formData.sobrenome.trim()}`,
                email: formData.email.trim(),
                telefone: formData.telefone.trim(),
                mensagem: formData.mensagem.trim(),
                subject: 'Contato pelo Site - Centro Médico Sapiranga',
                tipo: 'contato'
            };

            console.log('Enviando contato do footer:', requestData);

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
                toast.success('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
                
                // Limpa o formulário
                setFormData({
                    nome: '',
                    sobrenome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
                
                // Reseta os campos do formulário
                const form = e.currentTarget;
                form.reset();
            } else {
                toast.error(result.message || 'Erro ao enviar mensagem. Tente novamente.');
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
            
            <section className={styles.contactSection} id={id}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div className={styles.contactHeader}>
                            <h3>Agende agora através do número:</h3>
                            <div className={styles.phoneHighlight}>
                                <FaPhoneAlt className={styles.phoneIcon} />
                                <strong>(51) 3500-0714</strong>
                            </div>
                        </div>

                        <div className={styles.visitCard}>
                            <h4>Venha nos visitar</h4>
                            <div className={styles.address}>
                                <FaMapMarkerAlt className={styles.addressIcon} />
                                <p>
                                    <b>Nossa Localização:</b><br />
                                    Av. João Corrêa, 683 - Centro, Sapiranga - RS
                                </p>
                            </div>
                            <div className={styles.map}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.123456789!2d-51.1523456789!3d-29.6312345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951939c8d813dcdd%3A0xabcdef1234567890!2sAv.%20Jo%C3%A3o%20Corr%C3%AAa%2C%20683%20-%20Centro%2C%20Sapiranga%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1696543212345!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mapa localização"
                                ></iframe>
                            </div>
                        </div>

                        <div className={styles.hoursCard}>
                            <h4>Horários de atendimento:</h4>
                            <div className={styles.hoursList}>
                                <div className={styles.hourItem}>
                                    <span className={styles.days}>Segunda a Sexta-feira:</span>
                                    <span className={styles.time}>07h às 21h</span>
                                </div>
                                <div className={styles.hourItem}>
                                    <span className={styles.days}>Sábados e Feriados:</span>
                                    <span className={styles.time}>08h às 19h</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <div className={styles.formHeader}>
                            <h3>Fale Conosco</h3>
                            <p>
                                Sua mensagem será encaminhada diretamente para o setor responsável.
                                Preencha todos os campos com atenção para que possamos entender melhor
                                sua solicitação e responder com agilidade.
                            </p>
                        </div>

                        <form className={styles.contactForm} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nome">
                                        <FaUser className={styles.labelIcon} />
                                        Nome *
                                    </label>
                                    <input 
                                        id="nome" 
                                        name="nome" 
                                        type="text" 
                                        placeholder="Seu nome" 
                                        required 
                                        disabled={loading}
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="sobrenome">Sobrenome *</label>
                                    <input 
                                        id="sobrenome" 
                                        name="sobrenome" 
                                        type="text" 
                                        placeholder="Seu sobrenome" 
                                        required 
                                        disabled={loading}
                                        value={formData.sobrenome}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="telefone">
                                        <FaPhoneAlt className={styles.labelIcon} />
                                        Telefone *
                                    </label>
                                    <input 
                                        id="telefone" 
                                        name="telefone" 
                                        type="tel" 
                                        placeholder="(51) 99999-9999" 
                                        required 
                                        disabled={loading}
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                        maxLength={15}
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">
                                        <FaEnvelope className={styles.labelIcon} />
                                        E-mail *
                                    </label>
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        placeholder="seu@email.com" 
                                        required 
                                        disabled={loading}
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="mensagem">Mensagem *</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    placeholder="Como podemos ajudar você?"
                                    rows={5}
                                    required
                                    disabled={loading}
                                    value={formData.mensagem}
                                    onChange={handleInputChange}
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={styles.submitButton}
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <FaSpinner className={`${styles.buttonIcon} ${styles.spinning}`} />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        <FaPaperPlane className={styles.buttonIcon} />
                                        Enviar Mensagem
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerSection}>
                        <img src={logo} alt="Logo Centro Médico Sapiranga" className={styles.logo} />
                        <p className={styles.footerDescription}>
                            Siga o Centro Médico nas redes sociais e fique
                            por dentro das novidades.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="https://www.facebook.com/centromedicosapiranga" target='_blank' rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                            <a href="https://www.instagram.com/centromedicosapiranga" target='_blank' rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                            <a href="https://api.whatsapp.com/send?phone=555135000714&text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta." target='_blank' rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
                        </div>
                    </div>

                    <div className={styles.footerSection}>
                        <h4>Acesso Rápido</h4>
                        <ul className={styles.linkList}>
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/institucional">Institucional</Link></li>
                            <li><Link to="/especialidades">Especialidades</Link></li>
                            <li><Link to="/paraVoce">Para Você</Link></li>
                            <li><Link to="/Para-sua-Empresa">Para sua Empresa</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </div>
                    <div className={styles.footerSection}>
                        <h4>Atendimento</h4>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <span>(51) 3500-0714</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FaMapMarkerAlt className={styles.contactIcon} />
                                <span>
                                    Av. João Corrêa, 683 - Centro<br />
                                    Sapiranga - RS
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyContainer}>
                    <p>Centro Médico Sapiranga © 2025 - Todos direitos Reservados</p>
                </div>
            </footer>
        </>
    );
};