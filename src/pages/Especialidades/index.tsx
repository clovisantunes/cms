import BannerPages from "../../components/BannerPages";
import banner from '../../assets/Group 10.png';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import { 
    FaHeart, 
    FaStethoscope, 
    FaUserMd, 
    FaBaby, 
    FaBrain, 
    FaTooth,
    FaEye,
    FaBone,
    FaLungs,
    FaUserInjured,
    FaProcedures,
    FaClinicMedical,
    FaHospital,
    FaShieldAlt,
    FaNotesMedical,
    FaAllergies,
    FaTint,
    FaFemale,
    FaWeight,
    FaXRay
} from 'react-icons/fa';

export default function Especialidades() {
    const especialidades = [
        {
            id: 1,
            nome: "Cardiologia",
            icone: <FaHeart />,
            descricao: "Cuidados especializados para a saúde do coração e sistema cardiovascular",
            tag: "CLÍNICA"
        },
        {
            id: 2,
            nome: "Cirurgia Geral",
            icone: <FaProcedures />,
            descricao: "Procedimentos cirúrgicos abdominais e de pequeno a médio porte",
            tag: "CIRÚRGICA"
        },
        {
            id: 3,
            nome: "Cirurgia Plástica",
            icone: <FaUserMd />,
            descricao: "Procedimentos estéticos e reconstrutivos com técnicas modernas",
            tag: "CIRÚRGICA"
        },
        {
            id: 4,
            nome: "Cirurgia Vascular",
            icone: <FaClinicMedical />,
            descricao: "Tratamento de doenças arteriais, venosas e linfáticas",
            tag: "CIRÚRGICA"
        },
        {
            id: 5,
            nome: "Clínica Geral",
            icone: <FaStethoscope />,
            descricao: "Atendimento integral para diagnóstico e tratamento geral",
            tag: "CLÍNICA"
        },
        {
            id: 6,
            nome: "Clínica Geral Integrativa",
            icone: <FaHospital />,
            descricao: "Abordagem holística integrando medicina convencional e complementar",
            tag: "CLÍNICA"
        },
        {
            id: 7,
            nome: "Dermatologia",
            icone: <FaUserInjured />,
            descricao: "Cuidados com a pele, cabelos e unhas",
            tag: "CLÍNICA"
        },
        {
            id: 8,
            nome: "Endocrinologia",
            icone: <FaWeight />,
            descricao: "Tratamento de distúrbios hormonais e metabólicos",
            tag: "CLÍNICA"
        },
        {
            id: 9,
            nome: "Gastroenterologia",
            icone: <FaAllergies />,
            descricao: "Cuidados do sistema digestivo e doenças intestinais",
            tag: "CLÍNICA"
        },
        {
            id: 10,
            nome: "Ginecologia e Obstetrícia",
            icone: <FaFemale />,
            descricao: "Saúde da mulher, gestação e parto",
            tag: "CLÍNICA"
        },
        {
            id: 11,
            nome: "Medicina do Trabalho",
            icone: <FaShieldAlt />,
            descricao: "Saúde ocupacional e medicina laboral",
            tag: "OCUPACIONAL"
        },
        {
            id: 12,
            nome: "Neurologia",
            icone: <FaBrain />,
            descricao: "Diagnóstico e tratamento de doenças do sistema nervoso",
            tag: "CLÍNICA"
        },
        {
            id: 13,
            nome: "Nutrição",
            icone: <FaNotesMedical />,
            descricao: "Orientações nutricionais personalizadas",
            tag: "SAÚDE"
        },
        {
            id: 14,
            nome: "Odontologia",
            icone: <FaTooth />,
            descricao: "Cuidados com a saúde bucal e tratamentos dentários",
            tag: "ODONTOLÓGICA"
        },
        {
            id: 15,
            nome: "Oftalmologia",
            icone: <FaEye />,
            descricao: "Cuidados com a visão e doenças oculares",
            tag: "CLÍNICA"
        },
        {
            id: 16,
            nome: "Ortopedia e Traumatologia",
            icone: <FaBone />,
            descricao: "Tratamento de fraturas e doenças musculoesqueléticas",
            tag: "CIRÚRGICA"
        },
        {
            id: 17,
            nome: "Otorrinolaringologia",
            icone: <FaUserMd />,
            descricao: "Cuidados de ouvido, nariz e garganta",
            tag: "CLÍNICA"
        },
        {
            id: 18,
            nome: "Pediatria",
            icone: <FaBaby />,
            descricao: "Cuidados especializados para crianças e adolescentes",
            tag: "PEDIÁTRICA"
        },
        {
            id: 19,
            nome: "Pneumologia",
            icone: <FaLungs />,
            descricao: "Diagnóstico e tratamento de doenças respiratórias",
            tag: "CLÍNICA"
        },
        {
            id: 20,
            nome: "Cirurgião Proctologista",
            icone: <FaProcedures />,
            descricao: "Cirurgias ambulatoriais sob anestesia local",
            tag: "CIRÚRGICA"
        },
        {
            id: 21,
            nome: "Psicologia",
            icone: <FaBrain />,
            descricao: "Atendimento psicológico para adultos e crianças",
            tag: "SAÚDE MENTAL"
        },
        {
            id: 22,
            nome: "Psiquiatria",
            icone: <FaUserMd />,
            descricao: "Diagnóstico e tratamento de transtornos mentais",
            tag: "SAÚDE MENTAL"
        },
        {
            id: 23,
            nome: "Reumatologia",
            icone: <FaBone />,
            descricao: "Tratamento de doenças reumáticas e autoimunes",
            tag: "CLÍNICA"
        },
        {
            id: 24,
            nome: "Urologia",
            icone: <FaTint />,
            descricao: "Cuidados do trato urinário e sistema reprodutor masculino",
            tag: "CLÍNICA"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <>
            <BannerPages
                backgroundImage={banner}
                title="Nossas Especialidades"
                subtitle="Cuidado integral em mais de 20 áreas médicas com profissionais qualificados"
            />
            
            <motion.section 
                className={styles.especialidadesSection}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerVariants}
            >
                <div className={styles.container}>
                    {/* Header */}
                    <motion.div className={styles.header} variants={itemVariants}>
                        <div className={styles.headerContent}>
                            <h1>Excelência em Cuidados Médicos</h1>
                            <p>
                                Conheça nossas especialidades médicas e encontre o cuidado ideal para sua saúde. 
                                Profissionais qualificados e tecnologia avançada para seu bem-estar.
                            </p>
                        </div>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>24</span>
                                <span className={styles.statLabel}>Especialidades</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>50+</span>
                                <span className={styles.statLabel}>Profissionais</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles.statNumber}>✓</span>
                                <span className={styles.statLabel}>Qualificados</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grid de Especialidades */}
                    <motion.div 
                        className={styles.especialidadesGrid}
                        variants={containerVariants}
                    >
                        {especialidades.map((especialidade, index) => (
                            <motion.div
                                key={especialidade.id}
                                className={styles.especialidadeCard}
                                variants={cardVariants}
                                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                custom={index}
                            >
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardIcon}>
                                        {especialidade.icone}
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h3>{especialidade.nome}</h3>
                                        <span className={styles.cardTag}>
                                            {especialidade.tag}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className={styles.cardContent}>
                                    <p>{especialidade.descricao}</p>
                                </div>

                                <div className={styles.cardActions}>
                                    <motion.button 
                                        className={styles.agendarButton}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Agendar Consulta
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        className={styles.ctaSection}
                        variants={itemVariants}
                    >
                        <div className={styles.ctaContent}>
                            <h2>Precisa de ajuda para escolher a especialidade?</h2>
                            <p>Nossa equipe de atendimento pode orientar você sobre o cuidado mais adequado</p>
                            <div className={styles.ctaButtons}>
                                <motion.button 
                                    className={styles.ctaPrimary}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Falar com Atendimento
                                </motion.button>
                                <motion.button 
                                    className={styles.ctaSecondary}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    (51) 3500-0714
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}