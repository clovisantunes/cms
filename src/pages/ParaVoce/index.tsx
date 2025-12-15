import BannerPages from "../../components/BannerPages";
import banner from "../../assets/para voce.png"; 
import FilterItems from "../../components/FilterItems";
import styles from './styles.module.scss';
import { MinhaSaude } from "../../components/MinhaSaude";
import Generic from "../../components/Generic";
import { useState, useEffect } from 'react';
import { 
    FaStethoscope, 
    FaBrain, 
    FaBaby, 
    FaFemale, 
    FaUserMd,
    FaHeart,
    FaProcedures,
    FaUserInjured,
    FaWeight,
    FaAllergies,
    FaShieldAlt,
    FaNotesMedical,
    FaTooth,
    FaEye,
    FaBone,
    FaLungs,
    FaTint
} from 'react-icons/fa';
import ExamResults from "../../components/Exames";

export default function ParaVoce() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const specialties = [
    {
      id: 1,
      title: "Cardiologia",
      description: "Cuidados especializados para a saúde do coração e sistema cardiovascular",
      tag: "CLÍNICA",
      icon: <FaHeart />
    },
    {
      id: 2,
      title: "Pediatria",
      description: "Cuidados especializados para crianças e adolescentes",
      tag: "PEDIÁTRICA",
      icon: <FaBaby />
    },
    {
      id: 3,
      title: "Psicologia",
      description: "Atendimento psicológico para adultos e crianças",
      tag: "SAÚDE MENTAL",
      icon: <FaBrain />
    },
    {
      id: 4,
      title: "Psiquiatria",
      description: "Diagnóstico e tratamento de transtornos mentais",
      tag: "SAÚDE MENTAL",
      icon: <FaBrain />
    },
    {
      id: 5,
      title: "Ginecologia",
      description: "Saúde da mulher, gestação e cuidados ginecológicos",
      tag: "CLÍNICA",
      icon: <FaFemale />
    },
    {
      id: 6,
      title: "Nutrição",
      description: "Orientações nutricionais personalizadas",
      tag: "SAÚDE",
      icon: <FaNotesMedical />
    },
    {
      id: 7,
      title: "Endocrinologia",
      description: "Tratamento de distúrbios hormonais e metabólicos",
      tag: "CLÍNICA",
      icon: <FaWeight />
    },
    {
      id: 8,
      title: "Fonoaudiologia",
      description: "Cuidados com comunicação oral, escrita e audição",
      tag: "REABILITAÇÃO",
      icon: <FaUserMd />
    },
    {
      id: 9,
      title: "Dermatologia",
      description: "Cuidados com a pele, cabelos e unhas",
      tag: "CLÍNICA",
      icon: <FaUserInjured />
    },
    {
      id: 10,
      title: "Ortopedia",
      description: "Tratamento de fraturas e doenças musculoesqueléticas",
      tag: "CIRÚRGICA",
      icon: <FaBone />
    },
    {
      id: 11,
      title: "Clínico Geral",
      description: "Atendimento integral para diagnóstico e tratamento geral",
      tag: "CLÍNICA",
      icon: <FaStethoscope />
    },
    {
      id: 12,
      title: "Neurologia",
      description: "Diagnóstico e tratamento de doenças do sistema nervoso",
      tag: "CLÍNICA",
      icon: <FaBrain />
    },
    {
      id: 13,
      title: "Gastroenterologia",
      description: "Cuidados do sistema digestivo e doenças intestinais",
      tag: "CLÍNICA",
      icon: <FaAllergies />
    },
    {
      id: 14,
      title: "Oftalmologia",
      description: "Cuidados com a visão e doenças oculares",
      tag: "CLÍNICA",
      icon: <FaEye />
    },
    {
      id: 15,
      title: "Otorrinolaringologia",
      description: "Cuidados de ouvido, nariz e garganta",
      tag: "CLÍNICA",
      icon: <FaUserMd />
    },
    {
      id: 16,
      title: "Pneumologia",
      description: "Diagnóstico e tratamento de doenças respiratórias",
      tag: "CLÍNICA",
      icon: <FaLungs />
    },
    {
      id: 17,
      title: "Urologia",
      description: "Cuidados do trato urinário e sistema reprodutor masculino",
      tag: "CLÍNICA",
      icon: <FaTint />
    },
    {
      id: 18,
      title: "Cirurgia Geral",
      description: "Procedimentos cirúrgicos abdominais e de pequeno a médio porte",
      tag: "CIRÚRGICA",
      icon: <FaProcedures />
    },
    {
      id: 19,
      title: "Cirurgia Plástica",
      description: "Procedimentos estéticos e reconstrutivos com técnicas modernas",
      tag: "CIRÚRGICA",
      icon: <FaUserMd />
    },
    {
      id: 20,
      title: "Odontologia",
      description: "Cuidados com a saúde bucal e tratamentos dentários",
      tag: "ODONTOLÓGICA",
      icon: <FaTooth />
    },
    {
      id: 21,
      title: "Medicina do Trabalho",
      description: "Saúde ocupacional e medicina laboral",
      tag: "OCUPACIONAL",
      icon: <FaShieldAlt />
    },
    {
      id: 22,
      title: "Reumatologia",
      description: "Tratamento de doenças reumáticas e autoimunes",
      tag: "CLÍNICA",
      icon: <FaBone />
    }
  ];

  return (
    <div className={styles.container}>
      <BannerPages
        style="style2"
        backgroundImage={banner}
        title="Para Você"
        subtitle="Cuidados personalizados para sua saúde em todas as fases da vida"
      />
      
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>Sua jornada de saúde começa aqui</h1>
            <p>
              No Centro Médico Sapiranga, oferecemos mais de 20 especialidades médicas 
              com tecnologia avançada e atendimento humanizado. Cada consulta é uma 
              oportunidade para cuidar de você com excelência e empatia.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Especialidades</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>100%</span>
                <span className={styles.statLabel}>Humanizado</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>✓</span>
                <span className={styles.statLabel}>Resultados Online</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <FaStethoscope className={styles.cardIcon} />
              <h3>Agendamento Fácil</h3>
              <p>Online ou por telefone</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.specialtiesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Especialidades</span>
          <h2>Cuidado completo para você e sua família</h2>
          <p>Mais de 20 especialidades médicas com profissionais qualificados e atendimento humanizado</p>
        </div>
        <FilterItems
          title=""
          disableNavigation={false}
          subtitle=""
          buttonText="Ver todas as especialidades"
          showButton={true}
          items={specialties}
        />
      </section>
      
      <ExamResults />

      <MinhaSaude reverse={!isMobile} />
      
      <Generic 
        backgroundType="3"
        variant="cartao"
      />
    </div>
  );
}