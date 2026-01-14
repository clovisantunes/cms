import { useParams, useNavigate } from "react-router-dom";
import { especialidades } from "./data/especialidades";
import { getIconComponent } from "./data/IconMapper";
import BannerPageSpecialities from "../../components/BannerPageSpecialities";
import WhatDoesCard from "./Components/WhatDoesCard";
import WhenToSeekCard from "./Components/WhenToSeekCard";
import Sidebar from "./Components/Sidebar";
import FinalCTA from "./Components/FinalCTA";

import styles from './styles.module.scss';

const RenderIcon = ({ iconName }: { iconName: string }) => {
  const IconComponent = getIconComponent(iconName);
  return <IconComponent />;
};

export default function EspecialidadePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const especialidade = especialidades.find(esp => esp.id === id);

  if (!especialidade) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <div className={styles.notFoundIcon}>
          </div>
          <h1>Especialidade não encontrada</h1>
          <p>A especialidade solicitada não está disponível em nossa clínica no momento.</p>
          <button 
            className={styles.backButton}
            onClick={() => navigate('/especialidades')}
          >
            Voltar para Especialidades
          </button>
        </div>
      </div>
    );
  }

  const handleAgendarConsulta = () => {
    const mensagem = `Olá! Gostaria de agendar uma consulta de ${especialidade.title} no Centro Médico Sapiranga.`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLigar = () => {
    window.open('tel:+555131036254');
  };

  const handleWhatsApp = () => {
    const mensagem = `Olá! Gostaria de mais informações sobre ${especialidade.title}.`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <BannerPageSpecialities
        title={especialidade.title}
        subtitle={especialidade.description}
        description={especialidade.longDescription}
        image={especialidade.image || "default-image.jpg"}
        buttonText={`Agendar ${especialidade.title}`}
        specialtyId={especialidade.id}
        breadcrumb={[
          { name: 'Início', path: '/' },
          { name: 'Especialidades', path: '/especialidades' },
          { name: especialidade.title, path: `/especialidade/${especialidade.id}` }
        ]}
      />
      
      <section className={styles.mainContentSection}>
        <div className={styles.container}>
          <div className={styles.contentGrid}>
            <div className={styles.mainColumn}>
              <WhatDoesCard 
                title={especialidade.title}
                functionDescription={especialidade.functionDescription}
                benefits={especialidade.benefits}
                services={especialidade.services}
              />
              
              
              {especialidade.whenToSeek && especialidade.whenToSeek.length > 0 && (
                <WhenToSeekCard 
                  title={especialidade.title}
                  whenToSeek={especialidade.whenToSeek}
                />
              )}
            </div>
            
            <Sidebar 
              services={especialidade.services}
              handleAgendarConsulta={handleAgendarConsulta}
              handleLigar={handleLigar}
              handleWhatsApp={handleWhatsApp}
              RenderIcon={RenderIcon}
            />
          </div>
        </div>
      </section>
      
   
      
      <FinalCTA 
        handleAgendarConsulta={handleAgendarConsulta}
        handleLigar={handleLigar}
        handleWhatsApp={handleWhatsApp}
      />
    </>
  );
}