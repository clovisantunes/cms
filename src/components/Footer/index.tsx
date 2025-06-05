import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Lado Esquerdo */}
        <div className={styles.left}>
          <h3>Agende agora através do número:</h3>
          <strong>(51) 3500-0714</strong>

          <h4>Venha nos visitar</h4>
          <p><b>Nossa Localização:</b><br />
            Av. João Corrêa, 683 - Centro, Sapiranga - RS
          </p>
          <div className={styles.map}>
            <img src="/mapa.png" alt="Mapa localização" />
          </div>

          <h4>Horários de atendimento:</h4>
          <p>
            Segunda a Sexta-feira: das 07h às 21h<br />
            Sábados e Feriados: das 08h às 19h
          </p>
        </div>

        {/* Lado Direito */}
        <div className={styles.right}>
          <h3>Fale Conosco</h3>
          <p>
            Sua mensagem será encaminhada diretamente para o setor responsável. <br />
            Preencha todos os campos com atenção para que possamos entender melhor sua solicitação e responder com agilidade.
          </p>
          <form>
            <div className={styles.row}>
              <input type="text" placeholder="Nome" required />
              <input type="text" placeholder="Sobrenome" required />
            </div>
            <div className={styles.row}>
              <input type="tel" placeholder="Telefone" required />
              <input type="email" placeholder="E-mail" required />
            </div>
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};
