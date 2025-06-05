import styles from "./styles.module.scss";
import minhaSaudeImage from "../../assets/Vector.png";
import Button from "../UI/Button";

export const MinhaSaude = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={minhaSaudeImage} alt="Cartão Minha Saúde" />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textItem}>

        <div className={styles.line} /><h2>Conheça as vantagens do Cartão</h2>
        </div>
        <h1> <span>Minha Saúde</span></h1>
        <div className={styles.centerItems}>

        <p>
          Com este cartão você usufrui de todos os atendimentos que o Hospital
          oferece com uma tabela diferenciada e descontos.
        </p>
        <div className={styles.buttonCard}>

        <Button variant="primary">Peça já o seu!</Button>
        </div>
        </div>
      </div>
    </section>
  );
};
