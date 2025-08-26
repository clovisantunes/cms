import styles from "./styles.module.scss";
import card1 from "../../assets/O-que-os-pacientes-esperam-encontrar-no-atendimento-médico 1.png";
import card2 from "../../assets/agendamento-online 2.png";
import card3 from "../../assets/card-apf 5.png";
import card4 from "../../assets/medical-team.webp"; // Adicione esta imagem
import card5 from "../../assets/medical-team.webp"; // Adicione esta imagem
import Button from "../UI/Button";
import { Link } from "react-router-dom";

interface Card {
  id: number;
  image: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
  external?: boolean;
  featured?: boolean;
}

const cards: Card[] = [
  {
    id: 1,
    image: card1,
    title: "Saúde Ocupacional",
    text: "Priorizamos a segurança e o conforto nos produtos de PGR, LTCAT, LIP, PCMSO e eventos relacionados à SST do eSocial para proteger a saúde dos nossos colaboradores.",
    buttonText: "Veja Mais!",
    link: "/Para-sua-Empresa",
    featured: true
  },
  {
    id: 2,
    image: card2,
    title: "Agendamento Online",
    text: "Facilitamos o processo para você: com o nosso agendamento online, você tem mais autonomia para escolher quando e como ser atendido. Rápido, intuitivo e sem complicações.",
    buttonText: "Agende Agora!",
    link: "https://wa.me/seuNumeroDeWhatsapp", 
    external: true
  },
  {
    id: 3,
    image: card3,
    title: "Cartão APF",
    text: "Atendimento particular acessível e eficiente. Conte com descontos em diversos serviços de saúde e tenha o cuidado que você precisa, sem burocracia.",
    buttonText: "Saiba mais",
    link: "/ParaVoce#APF",
    featured: true
  },
  {
    id: 4,
    image: card4,
    title: "Corpo Clínico",
    text: "Nossa equipe de especialistas altamente qualificados está pronta para oferecer o melhor atendimento com expertise e humanização.",
    buttonText: "Conheça nossos médicos",
    link: "/corpo-clinico"
  },
  {
    id: 5,
    image: card5,
    title: "Convênios",
    text: "Facilitamos seu atendimento médico com uma ampla rede de convênios para maior comodidade.",
    buttonText: "Saiba mais",
    link: "/pronto-atendimento"
  }
];

export const InfoCards = () => {
  const featuredCards = cards.filter(card => card.featured);
  const regularCards = cards.filter(card => !card.featured);

  return (
    <section className={styles.heroSection}>
      {/* Cards em Destaque (Hero) */}
      <div className={styles.heroContainer}>
        {featuredCards.map((card) => (
          <div key={card.id} className={`${styles.heroCard} ${styles.featured}`}>
            <div className={styles.heroImageContainer}>
              <img src={card.image} alt={card.title} className={styles.heroImage} />
            </div>
            <div className={styles.heroContent}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <div className={styles.heroButton}>
                {card.external ? (
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary">{card.buttonText}</Button>
                  </a>
                ) : (
                  <Link to={card.link}>
                    <Button variant="primary" >{card.buttonText}</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cards Regulares */}
      <div className={styles.cardsContainer}>
        {regularCards.map((card) => (
          <div key={card.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={card.image} alt={card.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardContent}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <div className={styles.cardButton}>
                {card.external ? (
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">{card.buttonText}</Button>
                  </a>
                ) : (
                  <Link to={card.link}>
                    <Button variant="secondary">{card.buttonText}</Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
