import styles from "./styles.module.scss";

export const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h2>Agendamento de <br />Consultas e Exames</h2>
          <p>
            Aberto de Segunda a Sexta, das 7h às 21h<br />
            Sábados e feriados, das 8h às 19h.<br />
            <strong>Endereço:</strong><br />
            Av João Corrêa, 683 - Sapiranga - RS
          </p>
        </div>
        <div className={styles.right}>
          <span>Agendar por WhatsApp:</span>
          <a href="https://wa.me/555135000714" target="_blank" rel="noopener noreferrer">
            (51) 3500-0714
          </a>
        </div>
      </div>
    </section>
  );
};
