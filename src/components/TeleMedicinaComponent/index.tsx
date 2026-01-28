import { FiCheckCircle, FiUserCheck, FiArrowRight } from 'react-icons/fi';
import styles from './styles.module.scss';

const TelemedicinaBanner = () => {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerWrapper}>

                <div className={styles.contentSide}>
                    <div className={styles.badge}>Atendimento Online</div>
                    <h2>Cuide da sua saúde sem sair de casa</h2>
                    <p>
                        Consultas por vídeo com o mesmo cuidado e atenção do atendimento presencial.
                        Ideal para retornos, orientações e prescrições urgentes.
                    </p>

                    <div className={styles.featuresList}>
                        <div className={styles.item}>
                            <FiCheckCircle /> Agendamento Rápido
                        </div>
                        <div className={styles.item}>
                            <FiCheckCircle /> Sem deslocamento
                        </div>
                        <div className={styles.item}>
                            <FiCheckCircle /> Atendimento Facilitado
                        </div>
                    </div>

                    <button
                        className={styles.ctaButton}
                        onClick={() => window.location.href = '/agendamento'}
                    >
                        Agendar Teleconsulta <FiArrowRight style={{ marginLeft: '8px' }} />
                    </button>
                </div>

                <div className={styles.visualSide}>
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000"
                        alt="Médica atendendo via tablet"
                    />

                    <div className={styles.floatingCard}>
                        <div className={styles.avatar}>
                            <FiUserCheck size={24} />
                        </div>
                        <div className={styles.info}>
                            <h5>Atendimento Digital</h5>
                            <span>Ambiente Seguro e Privado</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TelemedicinaBanner;