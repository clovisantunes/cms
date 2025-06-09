import styles from "./styles.module.scss";
import minhaSaudeImage from "../../assets/Vector.png";
import Button from "../UI/Button";

interface MinhaSaudeProps {
  className?: string;
  reverse?: boolean;
}

export const MinhaSaude = ({ className = '', reverse = false }: MinhaSaudeProps) => {
  const containerClass = `${styles.container} ${reverse ? styles.reverse : ''} ${className}`.trim();

  return (
    <section className={containerClass}>
      <div className={styles.imageContainer}>
        <img src={minhaSaudeImage} alt="Cartão Minha Saúde" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textItem}>
          <div className={styles.line} />
          <h2>Conheça as vantagens do Cartão</h2>
        </div>
        <h1><span>Minha Saúde</span></h1>
        <div className={styles.centerItems}>
          <p>
            Com este cartão você usufrui de todos os atendimentos que o Hospital
            oferece com uma tabela diferenciada e descontos.
          </p>
          <div className={styles.buttonCard}>
            <Button variant="primary">Peça já o seu!</Button>
          </div>
          <a>
            Mais informações ligue (51) 3500-0714
          </a>
        </div>
      </div>
    </section>
  );
};
