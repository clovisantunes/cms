import BannerPages from "../../components/BannerPages";
import banner from "../../assets/para voce.png"; 
import FilterItems from "../../components/FilterItems";
import styles from './styles.module.scss';
import Button from "../../components/UI/Button";
import { MinhaSaude } from "../../components/MinhaSaude";
import Generic from "../../components/Generic";
import { useState, useEffect } from 'react';
import { FaStethoscope, FaHeartbeat, FaBrain, FaBaby, FaFemale, FaUserMd } from 'react-icons/fa';

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
      priceInfo: "R$ 190,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 170,00 no cartão Minha Saúde",
      tag: "ESPECIALIDADES",
      icon: <FaHeartbeat />,
      color: "#DC2626"
    },
    {
      id: 2,
      title: "Pediatria",
      priceInfo: "R$ 160,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 140,00 no cartão Minha Saúde",
      tag: "PEDIÁTRICA",
      icon: <FaBaby />,
      color: "#059669"
    },
    {
      id: 3,
      title: "Psicologia",
      priceInfo: "R$ 150,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 130,00 no cartão Minha Saúde",
      tag: "SAÚDE MENTAL",
      icon: <FaBrain />,
      color: "#7C3AED"
    },
    {
      id: 4,
      title: "Psiquiatria",
      priceInfo: "R$ 220,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 200,00 no cartão Minha Saúde",
      tag: "SAÚDE MENTAL",
      icon: <FaBrain />,
      color: "#7C3AED"
    },
    {
      id: 5,
      title: "Ginecologia",
      priceInfo: "R$ 180,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 160,00 no cartão Minha Saúde",
      tag: "ESPECIALIDADES",
      icon: <FaFemale />,
      color: "#DC2626"
    },
    {
      id: 6,
      title: "Nutricionista",
      priceInfo: "R$ 130,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 110,00 no cartão Minha Saúde",
      tag: "NUTRIÇÃO",
      icon: <FaUserMd />,
      color: "#D97706"
    },
    {
      id: 7,
      title: "Endocrinologia",
      priceInfo: "R$ 200,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 180,00 no cartão Minha Saúde",
      tag: "ESPECIALIDADES",
      icon: <FaUserMd />,
      color: "#DC2626"
    },
    {
      id: 8,
      title: "Fonoaudiologia",
      priceInfo: "R$ 150,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 130,00 no cartão Minha Saúde",
      tag: "REABILITAÇÃO",
      icon: <FaUserMd />,
      color: "#0891B2"
    },
    {
      id: 9,
      title: "Dermatologia",
      priceInfo: "R$ 190,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 170,00 no cartão Minha Saúde",
      tag: "ESPECIALIDADES",
      icon: <FaUserMd />,
      color: "#DC2626"
    },
    {
      id: 10,
      title: "Ortopedia",
      priceInfo: "R$ 180,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 160,00 no cartão Minha Saúde",
      tag: "ESPECIALIDADES",
      icon: <FaUserMd />,
      color: "#DC2626"
    },
    {
      id: 11,
      title: "Clínico Geral",
      priceInfo: "R$ 120,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 100,00 no cartão Minha Saúde",
      tag: "CLÍNICO",
      icon: <FaStethoscope />,
      color: "#1F5E3A"
    },
    {
      id: 12,
      title: "Neurologia",
      priceInfo: "R$ 210,00 para pagamento Cartões ou PIX",
      healthCardPrice: "R$ 190,00 no cartão Minha Saúde",
      tag: "ESPECIALIDADES",
      icon: <FaBrain />,
      color: "#DC2626"
    },
  ];

  return (
    <div className={styles.container}>
      <BannerPages
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
          <p>Mais de 20 especialidades médicas com preços acessíveis e qualidade incomparável</p>
        </div>
        <FilterItems
          title=""
          subtitle=""
          buttonText="Ver todas as especialidades"
          showButton={true}
          items={specialties}
        />
      </section>
      
      <section className={styles.examResults} id="exames">
        <div className={styles.examResultsContent}>
          <div className={styles.examResultsText}>
            <span className={styles.resultsBadge}>Resultados Online</span>
            <h2 className={styles.acessText}>Acesso rápido e seguro aos seus exames</h2>
            <p className={styles.acessText}>Consulte seus resultados de qualquer lugar, a qualquer hora</p>
            <div className={styles.resultsFeatures}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔒</div>
                <span>100% seguro</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <span>Disponível 24h</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📱</div>
                <span>Acesso mobile</span>
              </div>
            </div>
            <div className={styles.examResultsButton}>
              <Button variant="primary">
                Visualizar resultados
              </Button>
            </div>
            <span className={styles.supportText}>
              Dúvidas? <a href="tel:5135000714">(51) 3500-0714</a>
            </span>
          </div>
          <div className={styles.examResultsVisual}>
            <div className={styles.medicalCard}>
              <div className={styles.cardHeader}>
                <span>Centro Médico Sapiranga</span>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.acessText}>Resultados Online</h4>
                <p className={styles.acessText}>Acesso imediato e seguro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Seção Minha Saúde */}
      <MinhaSaude reverse={!isMobile} />
      
      <Generic 
        backgroundType="3"
        variant="cartao"
      />
    </div>
  );
}