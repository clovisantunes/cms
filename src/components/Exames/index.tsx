import Button from '../UI/Button';
import styles from './styles.module.scss';

export default function ExamResults() {
    const handleResultsClick = () => {
    window.open('https://acesso.onrad.com.br/src/index.html#!/login/7b226f726967696e4964223a22373132222c226f726967696e4e616d65223a2269435278222c22736974756174696f6e4964223a2231222c22736974756174696f6e223a22417469766f222c226c6f676f4f726967696e223a2268747470733a2f2f73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f6f6e7261642e646f63756d656e74732f3536372f6172717569766f732f6c6f676f7469706f222c226c6f676f4368696c64223a2268747470733a2f2f73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f6f6e7261642e646f63756d656e74732f3731322f6172717569766f732f6c6f676f7469706f486561646572222c227573654d61737465724c6f676f223a2231222c226572726f72223a2230227d', '_blank');
  };
  return (
      <section className={styles.examResults} id="exames">
        <div className={styles.examResultsContent}>
          <div className={styles.examResultsText}>
            <span className={styles.resultsBadge}>Resultados Online</span>
            <h2 className={styles.acessText}>Acesso rápido e seguro aos seus exames</h2>
            <p className={styles.acessText}>Consulte seus resultados de qualquer lugar, a qualquer hora</p>
            <div className={styles.resultsFeatures}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🔒</div>
                <span>100% seguro</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <span>Disponível 24h</span>
              </div>
            </div>
            <div className={styles.examResultsButton}>
              <Button variant="primary" onClick={handleResultsClick}>
                Visualizar resultados
              </Button>
            </div>
            <span className={styles.supportText}>
              Dúvidas? <a href="tel:5135000714">(51) 3500-0714</a>
            </span>
          </div>
          <div className={styles.examResultsVisual}>
            <div className={styles.medicalCard}>
              <div className={styles.cardHeader}>
                <span>Centro Médico Sapiranga</span>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.acessText}>Resultados Online</h4>
                <p className={styles.acessText}>Acesso imediato e seguro</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}