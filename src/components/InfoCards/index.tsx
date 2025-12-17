import styles from "./styles.module.scss";
import card1 from "../../assets/O-que-os-pacientes-esperam-encontrar-no-atendimento-médico 1.webp";
import card2 from "../../assets/agendamento-online 2.webp";
import card3 from "../../assets/medico.webp";
import card4 from "../../assets/medical-team.webp"; 
import card5 from "../../assets/contato.webp";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { scrollToSection } from "../../Utils/scrollToSection"; 

interface Card {
  id: number;
  image: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
  external?: boolean;
  featured?: boolean;
  scrollTo?: string;
}

const cards: Card[] = [
  {
    id: 1,
    image: card2,
    title: "Preciso de Exames",
    text: "Oferecemos uma ampla variedade de exames laboratoriais e de imagem com tecnologia moderna e resultados precisos para cuidar da sua saúde.",
    buttonText: "Agendar Exames",
    link: "/exames-complementares",
  },
  {
    id: 2,
    image: card4,
    title: "Sou Paciente",
    text: "Atendimento médico humanizado e especializado para você e sua família. Consultas em mais de 20 especialidades, exames e acompanhamento completo em um só lugar.",
    buttonText: "Ver Serviços para Pacientes",
    link: "/ParaVoce",
    featured: true
  },
  {
    id: 3,
    image: card1,
    title: "Sou Empresa",
    text: "Soluções completas em Medicina do Trabalho (SST) para sua empresa. Programas como PCMSO, PGR, LTCAT, exames admissionais e periódicos, cumprindo todas as exigências do eSocial.",
    buttonText: "Soluções para Empresas",
    link: "/Para-sua-Empresa",
    featured: true
  },
  {
    id: 4,
    image: card3,
    title: "Especialidades Médicas",
    text: "Mais de 20 especialidades médicas com profissionais qualificados e renomados. Cardiologia, Ortopedia, Pediatria, Ginecologia e muitas outras para cuidar de toda sua família.",
    buttonText: "Conhecer Especialidades",
    link: "/especialidades",
  },
  {
    id: 5,
    image: card5,
    title: "Odontologia",
    text: "Cuidados odontológicos completos para toda a família. Prevenção, tratamentos, clareamento e ortodontia com profissionais especializados e equipamentos modernos.",
    buttonText: "Serviços Odontológicos",
    link: "/odontologia",
  }
];

export const InfoCards = () => {
  const featuredCards = cards.filter(card => card.featured);
  const regularCards = cards.filter(card => !card.featured);

  interface HandleContactClickEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  interface HandleContactClickCard {
    scrollTo?: string;
    [key: string]: any;
  }

  const handleContactClick = (e: HandleContactClickEvent, card: HandleContactClickCard) => {
    if (card.scrollTo) {
      e.preventDefault();
      scrollToSection(card.scrollTo);
    }
  };

  return (
    <section className={styles.heroSection}>
      <h2>Bem-estar que começa no cuidado</h2>
      <span>Experiências únicas em saúde para cada fase da sua vida</span>
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
                  <a href={card.link} target="_blank" rel="noopener noreferrer" aria-label={card.title}>
                    <Button variant="primary">{card.buttonText}</Button>
                  </a>
                ) : card.scrollTo ? (
                  <a 
                    href={card.link} 
                    onClick={(e) => handleContactClick(e, card)}
                    aria-label={card.title}
                  >
                    <Button variant="primary">{card.buttonText}</Button>
                  </a>
                ) : (
                  <Link to={card.link}>
                    <Button variant="primary">{card.buttonText}</Button>
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
                ) : card.scrollTo ? (
                  <a 
                    href={card.link} 
                    onClick={(e) => handleContactClick(e, card)}
                  >
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