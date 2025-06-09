import Texts from "../../components/UI/Texts";
import styles from './styles.module.scss';

export default function Contato() {
    return (
        <>
            <Texts
                title="Venha fazer parte de uma empresa que transforma vidas através da saúde e segurança!"
                subtitle="Hoje, nossa equipe é formada por profissionais dedicados a promover ambientes de trabalho mais seguros e saudáveis. Você quer fazer parte desse time?"
            />

            <div className={styles.formularioContainer}>
                <div className={styles.formularioEsquerda}>
                    <form>
                        <div className={styles.inputGroup}>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" name="nome" required />

                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" name="email" required />
                            <div className={styles.inputCard}>
                                <div className={styles.inputCardLeft}>
                                    <label htmlFor="telefone">Telefone</label>
                                    <input type="tel" id="telefone" name="telefone" required />
                                </div>
                                <div className={styles.inputCardLeft}>
                                    <label htmlFor="cpf">CPF</label>
                                    <input type="text" id="cpf" name="cpf" required />
                                </div>
                            </div>

                            <label htmlFor="curriculo">Currículo</label>
                            <input type="file" id="curriculo" name="curriculo" />

                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" name="mensagem" rows={4}></textarea>

                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>

                <div className={styles.formularioDireita}>
                    <h2>Encontre a oportunidade perfeita para você!</h2>
                    <p>
                        Envie seu currículo e junte-se a uma empresa que <strong>valoriza talentos</strong> e <strong>investe no seu crescimento</strong>.
                    </p>
                </div>
            </div>
        </>
    );
}
