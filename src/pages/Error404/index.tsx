import { Link } from "react-router-dom";
import styles from "./styles.module.scss"; 

const Error404 = () => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <p>A página que você está procurando não existe ou foi movida.</p>
        <Link to="/" className={styles.homeButton}>
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default Error404;