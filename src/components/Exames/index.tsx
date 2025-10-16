import Button from '../UI/Button';
import styles from './styles.module.scss';

export default function ExamResults() {
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
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📱</div>
                <span>Acesso mobile</span>
              </div>
            </div>
            <div className={styles.examResultsButton}>
              <Button variant="primary">
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