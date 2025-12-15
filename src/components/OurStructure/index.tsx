import { useState, useEffect, useCallback } from 'react';
import { 
  FaChevronLeft, 
  FaChevronRight,
  FaShieldAlt,
  FaUserMd,
  FaHeartbeat,
  FaMicroscope,
  FaStethoscope
} from 'react-icons/fa';
import styles from './styles.module.scss';
import img1 from '../../assets/estrutura/gal-1.jpg';
import img2 from '../../assets/estrutura/gal-2.jpg';
import img3 from '../../assets/estrutura/gal-3.jpg';
import img4 from '../../assets/estrutura/gal-4.jpg';
import img5 from '../../assets/estrutura/gal-5.jpg';
import img6 from '../../assets/estrutura/gal-6.jpg';
import img7 from '../../assets/estrutura/gal-7.jpg';
import img8 from '../../assets/estrutura/gal-8.jpg';
import img9 from '../../assets/estrutura/gal-9.jpg';
import img10 from '../../assets/estrutura/gal-10.jpg';

interface GalleryImage {
  src: string;
  title: string;
  description: string;
  area: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function OurStructure() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage>({
    src: img1,
    title: "Recepção",
    description: "Ambiente sofisticado com atendimento personalizado e área de espera confortável",
    area: "Recepção"
  });
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  
  const galleryImages: GalleryImage[] = [
    { 
      src: img1, 
      title: "Recepção", 
      description: "Ambiente sofisticado com atendimento personalizado e área de espera confortável",
      area: "Recepção"
    },
    { 
      src: img2, 
      title: "Entrada do Centro Médico Sapiranga", 
      description: "Acesso principal com fachada moderna e sinalização clara para fácil localização",
      area: "Entrada"
    },
    { 
      src: img3, 
      title: "Centro Médico Sapiranga área externa", 
      description: "Amplo espaço externo com paisagismo cuidadoso e acessibilidade total",
      area: "Externo"
    },
    { 
      src: img4, 
      title: "Recepção segundo andar", 
      description: "Área de recepção no piso superior, mantendo o mesmo padrão de qualidade e conforto",
      area: "Recepção"
    },
    { 
      src: img5, 
      title: "Consultório Oftalmologia", 
      description: "Espaço especializado equipado com tecnologia de ponta para exames oftalmológicos",
      area: "Oftalmologia"
    },
    { 
      src: img6, 
      title: "Consultório Odontologia", 
      description: "Ambiente odontológico completo com equipamentos modernos para diversos tratamentos",
      area: "Odontologia"
    },
    { 
      src: img7, 
      title: "Consultório", 
      description: "Espaço padrão para consultas médicas, projetado para privacidade e conforto do paciente",
      area: "Consultório"
    },
    { 
      src: img8, 
      title: "Consultório Ecografia", 
      description: "Sala especializada para exames de imagem com equipamentos de última geração",
      area: "Diagnóstico"
    },
    { 
      src: img9, 
      title: "Acesso segundo andar", 
      description: "Escada e corredores amplos que garantem acessibilidade e fácil circulação",
      area: "Circulação"
    },
    { 
      src: img10, 
      title: "Estacionamento", 
      description: "Ampla área de estacionamento com vagas demarcadas e fácil acesso à entrada principal",
      area: "Estacionamento"
    }
  ];

  const features: Feature[] = [
    {
      icon: <FaShieldAlt />,
      title: "Tecnologia Avançada",
      description: "Equipamentos de última geração em todas as especialidades médicas"
    },
    {
      icon: <FaUserMd />,
      title: "Especialistas Qualificados",
      description: "Corpo clínico formado em centros de referência nacional e internacional"
    },
    {
      icon: <FaHeartbeat />,
      title: "Atendimento Integrado",
      description: "Sistema de prontuário eletrônico que conecta todas as especialidades"
    },
    {
      icon: <FaMicroscope />,
      title: "Laboratório Próprio",
      description: "Resultados de exames laboratoriais com rapidez e precisão garantidas"
    },
    {
      icon: <FaStethoscope />,
      title: "+20 Especialidades",
      description: "Cuidado completo em um único local, facilitando o tratamento multidisciplinar"
    }
  ];

  const nextImage = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = (prev + 1) % galleryImages.length;
      setSelectedImage(galleryImages[newIndex]);
      setIsImageLoading(true);
      return newIndex;
    });
  }, [galleryImages]);

  const prevImage = useCallback(() => {
    setCurrentIndex(prev => {
      const newIndex = (prev - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[newIndex]);
      setIsImageLoading(true);
      return newIndex;
    });
  }, [galleryImages]);

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    setIsImageLoading(true);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  useEffect(() => {
    const img = new Image();
    img.src = selectedImage.src;
    img.onload = handleImageLoad;
  }, [selectedImage]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(nextImage, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextImage]);

  return (
    <div id="estrutura" className={styles.structureContainer}>
      <div className={styles.decorativeGrid} />
      
      <div className={styles.contentWrapper}>
        <div className={styles.premiumHeader}>
          <span className={styles.subtitle}>Excelência em Saúde</span>
          <h1 className={styles.mainTitle}>
            Estrutura médica <span>completa</span> 
          </h1>
          <p className={styles.leadText}>
            Ambiente projetado com tecnologia de ponta, conforto e segurança 
            para oferecer o melhor cuidado em saúde.
          </p>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.gallerySection}>
            <div className={styles.galleryFrame}>
              <div className={styles.mainImageWrapper}>
                {isImageLoading && <div className={styles.imageSkeleton} />}
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title}
                  className={`${styles.mainImage} ${isImageLoading ? styles.loading : ''}`}
                  onLoad={handleImageLoad}
                />
                <div className={styles.imageOverlay} />
                
                <div className={styles.imageInfo}>
                  <div className={styles.imageNumber}>
                    {selectedImage.area.toUpperCase()}
                  </div>
                  <span className={styles.imageTitle}>{selectedImage.title}</span>
                  <p className={styles.imageDescription}>{selectedImage.description}</p>
                </div>

                <div className={styles.navigationControls}>
                  <button 
                    className={styles.navButton}
                    onClick={() => {
                      prevImage();
                      setIsAutoPlaying(false);
                    }}
                    aria-label="Imagem anterior"
                  >
                    <FaChevronLeft />
                  </button>
                  <button 
                    className={styles.navButton}
                    onClick={() => {
                      nextImage();
                      setIsAutoPlaying(false);
                    }}
                    aria-label="Próxima imagem"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.thumbnailsWrapper}>
              <div className={styles.thumbnailsGrid}>
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className={`${styles.thumbnailItem} ${
                      currentIndex === index ? styles.active : ''
                    }`}
                    onClick={() => goToImage(index)}
                    title={`${image.area} - ${image.title}`}
                  >
                    <img 
                      src={image.src} 
                      alt={`${image.area} - ${index + 1}`}
                      className={styles.thumbnailImage}
                    />
                    <div className={styles.thumbnailNumber}>
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.featuresSection}>
            <div className={styles.featuresIntro}>
              <h2 className={styles.introTitle}>Diferenciais da nossa estrutura</h2>
              <p className={styles.introText}>
                Cada aspecto foi cuidadosamente planejado para oferecer 
                excelência no atendimento e conforto aos pacientes.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureItem}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <div className={styles.featureContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}