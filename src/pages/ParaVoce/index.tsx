import BannerPages from "../../components/BannerPages";
import banner from "../../assets/para voce.png";
import Texts from "../../components/UI/Texts";
import FilterItems from "../../components/FilterItems";
import styles from './styles.module.scss';
import Button from "../../components/UI/Button";
import { MinhaSaude } from "../../components/MinhaSaude";
import Generic from "../../components/Generic";

export default function ParaVoce() {
  return (
    <>
      <BannerPages
        backgroundImage={banner}
        title="Para Você"
        subtitle="Sua saúde com mais facilidade, agilidade e atenção."
      />
      <Texts
        title="Tudo o que você precisa para cuidar da sua saúde"
        subtitle="Especialidades dedicadas, tecnologia avançada e atendimento humanizado para cada fase da sua vida."
      />
      <FilterItems
        title="Especialidades e Procedimentos"
        subtitle="Mais de 20 especialidades e procedimentos médicos"
        buttonText="Ver mais"
        showButton={false}
        items={[
          {
            title: "Cardiologia",
            priceInfo: "R$ 190,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 170,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Pediatria",
            priceInfo: "R$ 160,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 140,00 no cartão Minha Saúde",
            tag: "PEDIÁTRICA",
          },
          {
            title: "Psicologia (adulto e infantil)",
            priceInfo: "R$ 150,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 130,00 no cartão Minha Saúde",
            tag: "SAÚDE MENTAL",
          },
          {
            title: "Psiquiatria",
            priceInfo: "R$ 220,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 200,00 no cartão Minha Saúde",
            tag: "SAÚDE MENTAL",
          },
          {
            title: "Ginecologia",
            priceInfo: "R$ 180,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 160,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Nutricionista",
            priceInfo: "R$ 130,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 110,00 no cartão Minha Saúde",
            tag: "NUTRIÇÃO",
          },
          {
            title: "Endocrinologia",
            priceInfo: "R$ 200,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 180,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Fonoaudiologia",
            priceInfo: "R$ 150,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 130,00 no cartão Minha Saúde",
            tag: "REABILITAÇÃO",
          },
          {
            title: "Dermatologia",
            priceInfo: "R$ 190,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 170,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Ortopedia",
            priceInfo: "R$ 180,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 160,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Clínico Geral",
            priceInfo: "R$ 120,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 100,00 no cartão Minha Saúde",
            tag: "CLÍNICO",
          },
          {
            title: "Neurologia",
            priceInfo: "R$ 210,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 190,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Neurologia",
            priceInfo: "R$ 210,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 190,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
          {
            title: "Neurologia",
            priceInfo: "R$ 210,00 para pagamento Cartões ou PIX",
            healthCardPrice: "R$ 190,00 no cartão Minha Saúde",
            tag: "ESPECIALIDADES",
          },
        ]}
        
      />
   <div className={styles.examResults}>
      <h1>Resultados de Exames</h1>
      <p>Consulta online rápida e segura</p>
      <div className={styles.examResultsButton}>
      <Button variant="secondary">Visualizar resultados</Button>
      </div>
      <span>Dúvidas? (51) 3500-0714</span>
    </div>
    <MinhaSaude reverse  />
    <Generic 
      backgroundType="3"
      variant="cartao"
    />
    </>
  );
}
