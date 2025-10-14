import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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

export default function OurStructure() {
  const [mainImage, setMainImage] = useState(img1);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const galleryImages = [
    img1, img2, img3, img4, img5, 
    img6, img7, img8, img9, img10
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % galleryImages.length;
      setMainImage(galleryImages[newIndex]);
      setIsImageLoading(true);
      return newIndex;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + galleryImages.length) % galleryImages.length;
      setMainImage(galleryImages[newIndex]);
      setIsImageLoading(true);
      return newIndex;
    });
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setMainImage(galleryImages[index]);
    setIsImageLoading(true);
    setIsAutoPlaying(false);
    
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 5000);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextImage();
      }, 2000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  useEffect(() => {
    const img = new Image();
    img.src = mainImage;
    img.onload = () => {
      setIsImageLoading(false);
    };
  }, [mainImage]);

  return (
    <div id="estrutura" className={styles.structureContainer}>
      <div className={styles.structureContent}>
        <div className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <h3 className={styles.galleryTitle}>Nossa Estrutura</h3>
            <div className={styles.imageCounter}>
              <span className={styles.currentImage}>
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className={styles.totalImages}>/10</span>
            </div>
          </div>

          <div className={styles.mainImageContainer}>
            {isImageLoading && <div className={styles.imageSkeleton}></div>}
            <img 
              src={mainImage} 
              alt="Estrutura do Centro Médico" 
              className={`${styles.mainImage} ${isImageLoading ? styles.loading : ''}`}
              onLoad={handleImageLoad}
            />
          </div>
          
          <div className={styles.carouselSection}>
            <button 
              className={styles.carouselButton} 
              onClick={() => {
                prevImage();
                setIsAutoPlaying(false);
              }}
              aria-label="Imagem anterior"
            >
              <FaChevronLeft />
            </button>

            <div className={styles.carouselContainer}>
              <div className={styles.imageCarousel} ref={carouselRef}>
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`${styles.thumbnail} ${
                      currentIndex === index ? styles.activeThumbnail : ''
                    }`}
                    onClick={() => goToImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`Estrutura ${index + 1}`}
                      className={styles.thumbnailImage}
                    />
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={styles.carouselButton} 
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

        <div className={styles.textSection}>
          <div className={styles.textHeader}>
            <div className={styles.sectionBadge}>
              <span>Conheça Nossa Estrutura</span>
            </div>
            <h2 className={styles.title}>
              Ambiente projetado para seu <span className={styles.highlight}>conforto</span> e bem-estar
            </h2>
          </div>
          
          <div className={styles.textContent}>
            <p className={styles.leadText}>
              No Centro Médico Sapiranga, cada detalhe foi pensado para oferecer 
              uma experiência acolhedora e humanizada em um ambiente moderno e seguro.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🏥</div>
                <div className={styles.featureText}>
                  <h4>Infraestrutura Moderna</h4>
                  <p>Equipamentos de última geração e ambientes climatizados para seu conforto</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✨</div>
                <div className={styles.featureText}>
                  <h4>Ambiente Limpo e Seguro</h4>
                  <p>Rigorosos protocolos de higiene e esterilização em todas as áreas</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🛋️</div>
                <div className={styles.featureText}>
                  <h4>Conforto Total</h4>
                  <p>Salas de espera aconchegantes e atendimento personalizado</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎯</div>
                <div className={styles.featureText}>
                  <h4>Localização Privilegiada</h4>
                  <p>Fácil acesso e estacionamento amplo para sua comodidade</p>
                </div>
              </div>
            </div>
            
            <div className={styles.ctaSection}>
              <button className={styles.ctaButton}>
                Agendar Visita
              </button>
              <p className={styles.ctaSubtext}>
                Venha conhecer nossa estrutura pessoalmente
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}