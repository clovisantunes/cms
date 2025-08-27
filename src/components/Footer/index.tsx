import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './styles.module.scss';
import logo from '../../assets/logo-CMS-site 3 (1) 6.png';

export const Footer = () => {
    return (
        <>
            <section className={styles.contactSection}>
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
                        
                        <form className={styles.contactForm}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="nome">Nome</label>
                                    <input id="nome" type="text" placeholder="Seu nome" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="sobrenome">Sobrenome</label>
                                    <input id="sobrenome" type="text" placeholder="Seu sobrenome" required />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input id="telefone" type="tel" placeholder="(51) 99999-9999" required />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="email" placeholder="seu@email.com" required />
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="mensagem">Mensagem</label>
                                <textarea 
                                    id="mensagem" 
                                    placeholder="Como podemos ajudar você?" 
                                    rows={5}
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitButton}>
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <footer className={styles.footer}>
                <div className={styles.footerContainer}>
                    {/* Seção 1: Logo + ícones */}
                    <div className={styles.footerSection}>
                        <img src={logo} alt="Logo Centro Médico Sapiranga" className={styles.logo} />
                        <p className={styles.footerDescription}>
                            Siga o Centro Médico nas redes sociais e fique
                            por dentro das novidades.
                        </p>
                        <div className={styles.socialIcons}>
                            <a href="https://instagram.com/seuPerfil" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram />
                            </a>
                            <a href="https://facebook.com/seuPerfil" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebookF />
                            </a>
                            <a href="https://wa.me/5551835090714" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* Seção 2: Acesso Rápido */}
                    <div className={styles.footerSection}>
                        <h4>Acesso Rápido</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#inicio">Início</a></li>
                            <li><a href="#institucional">Institucional</a></li>
                            <li><a href="#contato">Contato</a></li>
                            <li><a href="#paraVoce">Para Você</a></li>
                            <li><a href="#paraSuaEmpresa">Para sua Empresa</a></li>
                        </ul>
                    </div>

                    {/* Seção 3: Atendimento */}
                    <div className={styles.footerSection}>
                        <h4>Atendimento</h4>
                        <div className={styles.contactInfo}>
                            <div className={styles.contactItem}>
                                <FaPhoneAlt className={styles.contactIcon} />
                                <span>(51) 3500-0714</span>
                            </div>
                            <div className={styles.contactItem}>
                                <FaEnvelope className={styles.contactIcon} />
                                <span>atendimento@centroms.com.br</span>
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