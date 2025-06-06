import BannerPages from "../../components/BannerPages";
import SectionNav from "../../components/UI/SectionNav/SectionNav";
import banner from '../../assets/Group 6.png';
import styles from './styles.module.scss';
import aboutImage from '../../assets/banner-internal 1.png';
import { FaBullseye, FaGem, FaHandsHelping } from "react-icons/fa";
import AlternatingTimeline from "../../components/TimeLine/TimeLine";
import OurStructure from "../../components/OurStructure";
import Texts from "../../components/UI/Texts";

export default function Institucional() {
    const principles = [
        {
            left: "Acolher, ajudar e criar vínculos com nossos pacientes.",
            right: "O paciente é a razão de ser do trabalho.",
        },
        {
            left: "Priorizamos a ética em todas as nossas ações.",
            right: "Valorizamos nossos colaboradores e médicos, essenciais para a qualidade dos nossos serviços.",
        },
        {
            left: "Buscamos resultados que possibilitem investir na melhoria contínua dos serviços.",
            right: "Valorizamos informações confiáveis e organizadas como ferramenta de gestão.",
        },
        {
            left: "Estabelecemos um vínculo de confiança com os nossos pacientes.",
            right: "",
        }
    ];
    const estrutura = [
        {
            left: "18 consultórios amplos e equipados para diversas especialidades;",
            right: "Sala para pequenas cirurgias, com tecnologia e segurança para procedimentos ambulatoriais;",
        },
        {
            left: "Setor de enfermagem preparado para atendimentos humanizados e ágeis;",
            right: "Ambulatório completo para cuidados clínicos e observação;",
        },
        {
            left: "Laboratório de análises clínicas com resultados rápidos e precisos;",
            right: "Salas equipadas com tecnologia de ponta para exames como RX, ecografias, ECG, EEG, espirometria, endoscopia, colonoscopia e muitos outros.",
        }
    ];


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

            <div id="principios">
                <div className={styles.principlesContainer}>
                    <div className={styles.principlesHeader}>
                        <h2>Princípios</h2>
                    </div>
                    <div className={styles.principlesList}>
                        <AlternatingTimeline items={principles} line="timelineLine" />
                    </div>

                </div>
            </div>

            <div id="estrutura">
                <OurStructure />
                <Texts
                    title="Tecnologia e Estrutura que Cuidam de Você"
                    subtitle="No Centro Médico Sapiranga, nossa estrutura foi pensada para oferecer não apenas eficiência, mas também conforto e segurança em todos os momentos do seu atendimento. Com equipamentos modernos e ambientes projetados para o bem-estar, garantimos que cada detalhe contribua para sua tranquilidade e recuperação."
                />
               
                <AlternatingTimeline items={estrutura} line="timelineLineAlt" />
                <Texts 
                title="Um espaço completo, criado para cuidar de você"
                    subtitle="No Centro Médico Sapiranga, unimos tecnologia, conforto e atendimento humanizado para oferecer uma experiência de saúde que vai além das expectativas. Aqui, você encontra não apenas estrutura, mas um ambiente pensado para acolher, escutar e cuidar com dedicação.
Estamos prontos para estar ao seu lado em todos os momentos, porque para nós, cuidar da sua saúde é mais do que um compromisso — é a nossa missão.
                </h3>"
                />
                
            </div>
        </>
    );
}
