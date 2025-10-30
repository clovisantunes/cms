import styles from "./styles.module.scss";
import card1 from "../../assets/O-que-os-pacientes-esperam-encontrar-no-atendimento-médico 1.jpg";
import card2 from "../../assets/agendamento-online 2.png";
import card3 from "../../assets/medico.jpg";
import card4 from "../../assets/medical-team.png"; 
import card5 from "../../assets/contato.jpg";
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
    image: card2,
    title: "Agendamento Online",
    text: "Facilitamos o processo para você, com o agendamento online, você tem mais autonomia para escolher quando e como ser atendido. Rápido, intuitivo e sem complicações.",
    buttonText: "Agendar Atendimento",
    link: "https://wa.me/555135000714",
    external: true
  },
  {
    id: 2,
    image: card1,
    title: "Saúde Ocupacional",
    text: "Priorizamos a segurança e o conforto em programas como PGR, LTCAT, LIP, PCMSO e eventos relacionados à SST do eSocial para proteger a saúde dos nossos colaboradores.",
    buttonText: "Conheça Nossos Programas",
    link: "/Para-sua-Empresa",
    featured: true
  },
  {
    id: 3,
    image: card3,
    title: "Especialidades",
    text: "Conheça nossas mais de 20 especialidades médicas com profissionais qualificados e tecnologia de ponta para cuidar da sua saúde de forma integral e humanizada.",
    buttonText: "Explorar Especialidades",
    link: "/especialidades",
    featured: true
  },
  {
    id: 4,
    image: card4,
    title: "Para Você",
    text: "Cuidados personalizados para sua saúde em todas as fases da vida. Consultas, exames e procedimentos com qualidade e atendimento humanizado.",
    buttonText: "Descubra Nossos Serviços",
    link: "/ParaVoce"
  },
  {
    id: 5,
    image: card5,
    title: "Contato",
    text: "Entre em contato conosco para agendar consultas, tirar dúvidas ou conhecer melhor nossos serviços. Estamos aqui para cuidar da sua saúde.",
    buttonText: "Fale Conosco",
    link: "/Contato"
  }
];


export const InfoCards = () => {
  const featuredCards = cards.filter(card => card.featured);
  const regularCards = cards.filter(card => !card.featured);

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        {featuredCards.map((card) => (
          <div key={card.id} className={`${styles.heroCard} ${styles.featured}`}>
            <div className={styles.heroImageContainer}>
              <img src={card.image} alt={card.title} className={styles.heroImage} loading="lazy" />
            </div>
            <div className={styles.heroContent}>
              <h2>{card.title}</h2>
              <p>{card.text}</p>
              <div className={styles.heroButton}>
                {card.external ? (
                  <a href={card.link} target="_blank" rel="noopener noreferrer"  aria-label={card.title}>
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