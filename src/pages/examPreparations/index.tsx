import { useParams } from 'react-router-dom';
import BannerPageSpecialities from "../../components/BannerPageSpecialities";
import PreparoExame from './Components/PreparoExame';
import { getExameById } from './data/exames';
import styles from './styles.module.scss';

export default function ExameDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const exame = getExameById(id || '');
  
  if (!exame) {
    return (
      <div className={styles.notFound}>
        <h2>Exame não encontrado</h2>
        <p>O exame solicitado não está disponível em nossa base de dados.</p>
      </div>
    );
  }

  return (
    <>
      <BannerPageSpecialities
        title={exame.title}
        subtitle={exame.subtitle}
        description={exame.longDescription}
        image={exame.bannerImage}
        buttonText={`Agendar ${exame.title}`}
        specialtyId={exame.id}
        breadcrumb={exame.breadcrumb}
      />
      
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
           
            
            <PreparoExame
              preparacao={exame.preparacao}
              duracaoExame={exame.duracaoExame}
              resultados={exame.resultados}
              quandoFazer={exame.quandoFazer}
              contraIndicacoes={exame.contraIndicacoes}
              titulo={`Preparo para ${exame.title}`}
              variante="completo"
            />
          </div>
          
          <div className={styles.sidebar}>
            <PreparoExame
              preparacao={exame.preparacao}
              duracaoExame={exame.duracaoExame}
              resultados={exame.resultados}
              variante="card"
            />
            
            <div className={styles.infoCard}>
              <h3>Informações Úteis</h3>
              <ul className={styles.infoList}>
                <li>Documento com foto (RG ou CNH)</li>
                <li>Exames anteriores relacionados</li>
                <li>Cartão do convênio/plano de saúde</li>
                <li>Autorização do convênio (se necessário)</li>
                <li>Pedido médico do exame</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}