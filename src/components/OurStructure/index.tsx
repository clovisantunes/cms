import { useState, useRef } from 'react';
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
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const galleryImages = [
    img1, img2, img3, img4, img5, 
    img6, img7, img8, img9, img10
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  return (
    <div id="estrutura" className={styles.structureContainer}>
      <div className={styles.structureContent}>
        {/* Seção da Galeria */}
        <div className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <h3 className={styles.galleryTitle}>Galeria</h3>
            <div className={styles.imageCounter}>
              <span className={styles.currentImage}>01</span>
              <span className={styles.totalImages}>/10</span>
            </div>
          </div>

          <div className={styles.mainImageContainer}>
            {isImageLoading && (
              <div className={styles.imageSkeleton}></div>
            )}
            <img 
              src={mainImage} 
              alt="Estrutura do Centro Médico Sapiranga" 
              className={`${styles.mainImage} ${isImageLoading ? styles.loading : ''}`}
              onLoad={handleImageLoad}
            />
            <div className={styles.imageOverlay}></div>
          </div>
          
          {/* Carousel */}
          <div className={styles.carouselSection}>
            <button 
              className={styles.carouselButton} 
              onClick={() => scrollCarousel('left')}
              aria-label="Imagens anteriores"
            >
              <FaChevronLeft />
            </button>

            <div className={styles.carouselContainer}>
              <div className={styles.imageCarousel} ref={carouselRef}>
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`${styles.thumbnail} ${
                      mainImage === image ? styles.activeThumbnail : ''
                    }`}
                    onClick={() => {
                      setMainImage(image);
                      setIsImageLoading(true);
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`Estrutura ${index + 1}`}
                      className={styles.thumbnailImage}
                    />
                    <div className={styles.thumbnailOverlay}></div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={styles.carouselButton} 
              onClick={() => scrollCarousel('right')}
              aria-label="Próximas imagens"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Seção de Texto */}
        <div className={styles.textSection}>
          <div className={styles.textHeader}>
            <div className={styles.sectionBadge}>
              <span>Estrutura</span>
            </div>
            <h2 className={styles.title}>
              Ambiente projetado para seu <span className={styles.highlight}>conforto</span> e bem-estar
            </h2>
          </div>
          
          <div className={styles.textContent}>
            <p className={styles.leadText}>
              No Centro Médico Sapiranga, cada detalhe foi pensado para oferecer 
              uma experiência acolhedora e humanizada.
            </p>
            
            <div className={styles.featuresGrid}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🏥</div>
                <div className={styles.featureText}>
                  <h4>Infraestrutura Moderna</h4>
                  <p>Equipamentos de última geração e ambientes climatizados</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>✨</div>
                <div className={styles.featureText}>
                  <h4>Ambiente Limpo</h4>
                  <p>Rigorosos protocolos de higiene e esterilização</p>
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
                  <h4>Localização</h4>
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