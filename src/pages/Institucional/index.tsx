import BannerPages from "../../components/BannerPages";
import SectionNav from "../../components/UI/SectionNav/SectionNav";
import banner from '../../assets/Group-6.webp';
import styles from './styles.module.scss';
import aboutImage from '../../assets/banner-internal 1.png';
import { FaBullseye, FaGem, FaHandsHelping } from "react-icons/fa";
import { MdHealthAndSafety, MdMedicalServices, MdScience } from "react-icons/md";
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

    const services = [
        {
            icon: <MdHealthAndSafety />,
            title: "Atendimento Personalizado",
            description: "Cada paciente recebe atenção individualizada com planos de tratamento específicos."
        },
        {
            icon: <MdMedicalServices />,
            title: "Equipamentos de Última Geração",
            description: "Tecnologia avançada para diagnósticos precisos e tratamentos eficazes."
        },
        {
            icon: <MdScience />,
            title: "Laboratório Interno",
            description: "Resultados rápidos e confiáveis com controle total de qualidade."
        }
    ];


    return (
        <>
            <BannerPages
                backgroundImage={banner}
                title="Centro Médico Sapiranga"
                subtitle="Excelência em saúde com tecnologia de ponta e atendimento humanizado"
            />
            <SectionNav />
            <div id="historia" className={styles.historyContainer}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>Nossa trajetória</span>
                    <h2 className={styles.sectionTitle}>Uma História de <span className={styles.highlight}>Cuidado e Excelência</span></h2>
                </div>
                
                <section className={styles.historyContent}>
                    <div className={styles.imageContainer}>
                        <img src={aboutImage} alt="Centro Médico Sapiranga" />
                        <div className={styles.experienceBadge}>
                            <span className={styles.years}>47</span>
                            <span className={styles.text}>Anos de Experiência</span>
                        </div>
                    </div>
                    <div className={styles.textContainer}>
                        <p className={styles.introText}>
                            Fundado em 1º de março de 1978, o Centro Médico Sapiranga é uma instituição
                            comprometida em oferecer excelência na prestação de serviços de saúde.
                        </p>
                        <p>
                            Com instalações estrategicamente projetadas para este propósito, oferecemos
                            uma ampla gama de serviços próprios médicos. Através da eficiente organização
                            de nossas operações, do comprometimento empático e da competência técnica
                            de nossa equipe, mantemos uma sólida relação de confiança com a comunidade
                            local, sendo a base de nossa viabilidade e longevidade.
                        </p>
                        <div className={styles.statsContainer}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>800</span>
                                <span className={styles.statLabel}>Empresas atendidas</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>Especialidades</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>+15 mil</span>
                                <span className={styles.statLabel}>Pacientes atendidos por mês</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="missao" className={styles.missionSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>Nossa essência</span>
                    <h2 className={styles.sectionTitle2}>Missão, Visão e <span className={styles.highlight}>Valores</span></h2>
                </div>
                
                <div className={styles.missionContainer}>
                    <div className={styles.missionStatement}>
                        <h3>Nossa Missão</h3>
                        <p>Cuidar da saúde com qualidade, proximidade e compromisso com o bem-estar da comunidade.</p>
                    </div>
                    
                    <div className={styles.cardsGrid}>
                        <div className={`${styles.card} ${styles.featuredCard}`}>
                            <div className={styles.cardIcon}>
                                <FaHandsHelping />
                            </div>
                            <h4>Propósito</h4>
                            <p>Fazer a diferença na vida das pessoas com um atendimento humano e acessível.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <FaBullseye />
                            </div>
                            <h4>Visão</h4>
                            <p>Ser referência em saúde com inovação, confiança e excelência.</p>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardIcon}>
                                <FaGem />
                            </div>
                            <h4>Valores</h4>
                            <p>Respeito, ética, qualidade, transparência e melhoria contínua.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.servicesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>Diferenciais</span>
                    <h2 className={styles.sectionTitle}>Nossos <span className={styles.highlight}>Serviços</span></h2>
                    <div className={styles.titleDivider}></div>
                </div>
                
                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div id="principios" className={styles.principlesSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>Nossa conduta</span>
                    <h2 className={styles.sectionTitle2}>Princípios que <span className={styles.highlight}>Nos Guiam</span></h2>
                    <div className={styles.titleDivider}></div>
                </div>
                
                <div className={styles.principlesContainer}>
                    <AlternatingTimeline items={principles} line="timelineLine" />
                </div>
            </div>

            <div id="estrutura" className={styles.structureSection}>
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>Nossas instalações</span>
                    <h2 className={styles.sectionTitle2}>Estrutura de <span className={styles.highlight}>Excelência</span></h2>
                    <div className={styles.titleDivider}></div>
                </div>
                
                <OurStructure />
                
                <Texts
                    title="Tecnologia e Estrutura que Cuidam de Você"
                    subtitle="No Centro Médico Sapiranga, nossa estrutura foi pensada para oferecer não apenas eficiência, mas também conforto e segurança em todos os momentos do seu atendimento. Com equipamentos modernos e ambientes projetados para o bem-estar, garantimos que cada detalhe contribua para sua tranquilidade e recuperação."
                />
               
                <AlternatingTimeline items={estrutura} line="timelineLineAlt" />
                
                <Texts 
                    title="Um espaço completo, criado para cuidar de você"
                    subtitle="No Centro Médico Sapiranga, unimos tecnologia, conforto e atendimento humanizado para oferecer uma experiência de saúde que vai além das expectativas. Aqui, você encontra não apenas estrutura, mas um ambiente pensado para acolher, escutar e cuidar com dedicação. Estamos prontos para estar ao seu lado em todos os momentos, porque para nós, cuidar da sua saúde é mais do que um compromisso — é a nossa missão."
                />
            </div>
        </>
    );
}