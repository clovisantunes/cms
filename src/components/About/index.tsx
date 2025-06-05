import styles from './styles.module.scss';
import aboutImage from '../../assets/banner-internal 1.png'; // ajuste conforme seu caminho

export const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Centro Médico</h2>
        <p>
          Fundado em 1º de março de 1978, O Centro Médico Sapiranga é uma instituição
          comprometida em oferecer excelência na prestação de serviços de saúde.
          Com instalações estrategicamente projetadas para este propósito, oferecemos
          uma ampla gama de serviços próprios médicos. Através da eficiente organização
          de nossas operações, do comprometimento empático e da competência técnica
          de nossa equipe, mantemos uma sólida relação de confiança com a comunidade
          local, sendo a base de nossa viabilidade e longevidade.
        </p>
        <button className={styles.outlineButton}>Conheça mais sobre nós</button>
      </div>
      <div className={styles.imageContainer}>
        <img src={aboutImage} alt="Centro Médico Sapiranga" />
      </div>
    </section>
  );
};
