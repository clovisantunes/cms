import styles from "./styles.module.scss";
import minhaSaudeImage from "../../assets/Vector (3).webp";
import Button from "../UI/Button";
import {
  FaPhoneAlt,
  FaCheckCircle,
  FaCreditCard,
  FaHeartbeat,
  FaPercent,
} from "react-icons/fa";
import type { JSX } from "react";

interface MinhaSaudeProps {
  className?: string;
  reverse?: boolean;
}
interface Benefit {
  icon: JSX.Element;
  text: string;
}

export const MinhaSaude = ({
  className = "",
  reverse = false,
}: MinhaSaudeProps) => {
  const containerClass = `${styles.container} ${
    reverse ? styles.reverse : ""
  } ${className}`.trim();

  const benefits: Benefit[] = [
    { icon: <FaCheckCircle />, text: "Atendimento prioritário" },
    { icon: <FaCreditCard />, text: "Pagamento facilitado" },
    { icon: <FaHeartbeat />, text: "Acesso a todas especialidades" },
    { icon: <FaPercent />, text: "Descontos exclusivos" },
  ];

  const handleMinhaSaudeClick = () => {
    const message = "Olá, gostaria de saber mais sobre o Cartão Minha Saúde.";
    const url = `https://wa.me/555193481804?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className={containerClass}>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={minhaSaudeImage}
            alt="Cartão de benefícios Minha Saúde do Hospital"
            className={styles.mainImage}
          />
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.header}>
          <div className={styles.textItem}>
            <div className={styles.line} />
            <h2>Conheça as vantagens exclusivas do</h2>
          </div>
          <h1>
            <span>Cartão Minha Saúde</span>
          </h1>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
            <div key={index} className={styles.benefitItem}>
              <div className={styles.benefitIcon} aria-hidden="true">
                {benefit.icon}
              </div>
              <span>{benefit.text}</span>
            </div>
          ))}
        </div>

        <p className={styles.description}>
          Com o cartão Minha Saúde você usufrui de todos os atendimentos que o
          Hospital oferece com uma tabela diferenciada, descontos especiais e
          benefícios exclusivos para você e sua família.
        </p>

        <div className={styles.ctaSection}>
          <div className={styles.buttonCard}>
            <Button variant="primary" onClick={handleMinhaSaudeClick}>
              Solicitar agora mesmo!
            </Button>
          </div>

          <div className={styles.contactInfo}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <a href="tel:+555135000714" className={styles.phoneLink}>
              (51) 3500-0714
            </a>
            <span className={styles.contactText}>Fale com nossa equipe</span>
          </div>
        </div>
      </div>
    </section>
  );
};
