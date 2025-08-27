import BannerPages from "../../components/BannerPages";
import banner from "../../assets/para voce.png";
import Texts from "../../components/UI/Texts";
import FilterItems from "../../components/FilterItems";
import styles from './styles.module.scss';
import Button from "../../components/UI/Button";
import { MinhaSaude } from "../../components/MinhaSaude";
import Generic from "../../components/Generic";
import { useState, useEffect } from 'react';

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

  return (
    <div className={styles.container}>
      <BannerPages
        backgroundImage={banner}
        title="Para Você"
        subtitle="Sua saúde com mais facilidade, agilidade e atenção."
      />
      
      <section className={styles.textSection}>
        <Texts
          title="Tudo o que você precisa para cuidar da sua saúde"
          subtitle="Especialidades dedicadas, tecnologia avançada e atendimento humanizado para cada fase da sua vida."
        />
      </section>
      
      <section className={styles.specialtiesSection}>
        <FilterItems
          title="Especialidades e Procedimentos"
          subtitle="Mais de 20 especialidades e procedimentos médicos"
          buttonText="Ver mais"
          showButton={false}
          items={[
            {
              id: 1,
              title: "Cardiologia",
              priceInfo: "R$ 190,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 170,00 no cartão Minha Saúde",
              tag: "ESPECIALIDADES",
            },
            {
              id: 2,
              title: "Pediatria",
              priceInfo: "R$ 160,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 140,00 no cartão Minha Saúde",
              tag: "PEDIÁTRICA",
            },
            {
              id: 3,
              title: "Psicologia (adulto e infantil)",
              priceInfo: "R$ 150,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 130,00 no cartão Minha Saúde",
              tag: "SAÚDE MENTAL",
            },
            {
              id: 4,
              title: "Psiquiatria",
              priceInfo: "R$ 220,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 200,00 no cartão Minha Saúde",
              tag: "SAÚDE MENTAL",
            },
            {
              id: 5,
              title: "Ginecologia",
              priceInfo: "R$ 180,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 160,00 no cartão Minha Saúde",
              tag: "ESPECIALIDADES",
            },
            {
              id: 6,
              title: "Nutricionista",
              priceInfo: "R$ 130,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 110,00 no cartão Minha Saúde",
              tag: "NUTRIÇÃO",
            },
            {
              id: 7,
              title: "Endocrinologia",
              priceInfo: "R$ 200,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 180,00 no cartão Minha Saúde",
              tag: "ESPECIALIDADES",
            },
            {
              id: 8,
              title: "Fonoaudiologia",
              priceInfo: "R$ 150,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 130,00 no cartão Minha Saúde",
              tag: "REABILITAÇÃO",
            },
            {
              id: 9,
              title: "Dermatologia",
              priceInfo: "R$ 190,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 170,00 no cartão Minha Saúde",
              tag: "ESPECIALIDADES",
            },
            {
              id: 10,
              title: "Ortopedia",
              priceInfo: "R$ 180,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 160,00 no cartão Minha Saúde",
              tag: "ESPECIALIDADES",
            },
            {
              id: 11,
              title: "Clínico Geral",
              priceInfo: "R$ 120,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 100,00 no cartão Minha Saúde",
              tag: "CLÍNICO",
            },
            {
              id: 12,
              title: "Neurologia",
              priceInfo: "R$ 210,00 para pagamento Cartões ou PIX",
              healthCardPrice: "R$ 190,00 no cartão Minha Saúde",
              tag: "ESPECIALIDADES",
            },
          ]}
        />
      </section>
      
      <section className={styles.examResults}>
        <div className={styles.examResultsContent}>
          <h1>Resultados de Exames</h1>
          <p>Consulta online rápida e segura</p>
          <div className={styles.examResultsButton}>
            <Button variant="secondary">Visualizar resultados</Button>
          </div>
          <span>Dúvidas? <a href="tel:5135000714">(51) 3500-0714</a></span>
        </div>
      </section>
      
      <MinhaSaude reverse={!isMobile} />
      
      <Generic 
        backgroundType="3"
        variant="cartao"
      />
    </div>
  );
}