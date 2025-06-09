import styles from "./styles.module.scss";
import card1 from "../../assets/O-que-os-pacientes-esperam-encontrar-no-atendimento-médico 1.png";
import card2 from "../../assets/agendamento-online 2.png";
import card3 from "../../assets/card-apf 5.png";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    image: card1,
    title: "Saúde Ocupacional",
    text: "Priorizamos a segurança e o conforto nos produtos de PGR, LTCAT, LIP, PCMSO e eventos relacionados à SST do eSocial para proteger a saúde dos nossos colaboradores.",
    buttonText: "Veja Mais!",
    link: "/Para-sua-Empresa",
  },
  {
    id: 2,
    image: card2,
    title: "Agendamento Online",
    text: "Facilitamos o processo para você: com o nosso agendamento online, você tem mais autonomia para escolher quando e como ser atendido. Rápido, intuitivo e sem complicações.",
    buttonText: "Agende Agora!",
    link: "https://wa.me/seuNumeroDeWhatsapp", 
    external: true, 
  },
  {
    id: 3,
    image: card3,
    title: "Cartao APF",
    text: "Atendimento particular acessível e eficiente  Conte com descontos em diversos serviços de saúde e tenha o cuidado que você precisa, sem burocracia.",
    buttonText: "Saiba mais",
    link: "/ParaVoce#APF",
  },
];


export const InfoCards = () => {
  return (
    <div className={styles.cardsContainer}>
      {cards.map((card) => (
        <div key={card.id} className={styles.card}>
          <img src={card.image} alt={card.title} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>

            {card.external ? (
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">{card.buttonText}</Button>
              </a>
            ) : (
              <Link to={card.link}>
                <Button variant="primary">{card.buttonText}</Button>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};