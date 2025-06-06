import BannerPages from "../../components/BannerPages";
import SectionNav from "../../components/UI/SectionNav/SectionNav";
import banner from '../../assets/Group 6.png';
import styles from './styles.module.scss';
import aboutImage from '../../assets/banner-internal 1.png';
import { FaBullseye, FaGem, FaHandsHelping } from "react-icons/fa";

export default function Institucional() {
    return (
        <>
            <BannerPages
                backgroundImage={banner}
                title="Centro Médico Sapiranga"
                subtitle="Conte com uma estrutura completa para cuidar da sua saúde. Conheça o Centro Médico Sapiranga."
            />
            <SectionNav />
            <div id="historia" className={styles.historyContainer} style={{ height: '' }}>
                <h2>Nossa <p>História</p></h2>
                <section className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src={aboutImage} alt="Centro Médico Sapiranga" />
                    </div>
                    <div className={styles.textContainer}>
                        <h2>Hospital</h2>
                        <p>
                            Fundado em 1º de março de 1978, O Centro Médico Sapiranga é uma instituição
                            comprometida em oferecer excelência na prestação de serviços de saúde.
                            Com instalações estrategicamente projetadas para este propósito, oferecemos
                            uma ampla gama de serviços próprios médicos. Através da eficiente organização
                            de nossas operações, do comprometimento empático e da competência técnica
                            de nossa equipe, mantemos uma sólida relação de confiança com a comunidade
                            local, sendo a base de nossa viabilidade e longevidade.
                        </p>
                    </div>
                </section>
            </div>
            <div id="missao">
                <div className={styles.missionContainer}>
                    <h2>Nossa Missão</h2>
                    <p>Cuidar da saúde com qualidade, proximidade e compromisso com o bem-estar da comunidade.</p>
                    <section className={styles.offerSection}>
                        <div className={`${styles.card} ${styles.greenCard}`}>
                            <h3>Oque oferecemos</h3>
                        </div>

                        <div className={styles.card}>
                            <FaHandsHelping className={styles.icon} />
                            <h4>Propósito</h4>
                            <p>Fazer a diferença na vida das pessoas com um atendimento humano e acessível.</p>
                        </div>

                        <div className={styles.card}>
                            <FaBullseye className={styles.icon} />
                            <h4>Visão</h4>
                            <p>Ser referência em saúde com inovação, confiança e excelência.</p>
                        </div>

                        <div className={styles.card}>
                            <FaGem className={styles.icon} />
                            <h4>Valores</h4>
                            <p>
                                Respeito, ética, qualidade, <br />
                                transparência e melhoria contínua.
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <div id="principios" style={{ height: '100vh', padding: '50px' }}>
                <h2>Nossos Princípios</h2>
                <p>...</p>
            </div>

            <div id="estrutura" style={{ height: '100vh', padding: '50px' }}>
                <h2>Nossa Estrutura</h2>
                <p>...</p>
            </div>
        </>
    );
}
