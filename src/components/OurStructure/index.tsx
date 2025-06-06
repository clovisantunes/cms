import { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styles from './styles.module.scss';
import img1 from '../../assets/estrutura/gal-1.jpg'
import img2 from '../../assets/estrutura/gal-2.jpg'
import img3 from '../../assets/estrutura/gal-3.jpg'
import img4 from '../../assets/estrutura/gal-4.jpg'
import img5 from '../../assets/estrutura/gal-5.jpg'
import img6 from '../../assets/estrutura/gal-6.jpg'
import img7 from '../../assets/estrutura/gal-7.jpg'
import img8 from '../../assets/estrutura/gal-8.jpg'
import img9 from '../../assets/estrutura/gal-9.jpg'
import img10 from '../../assets/estrutura/gal-10.jpg'


export default function OurStructure() {
  const [mainImage, setMainImage] = useState(img1);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
    
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="estrutura" className={styles.structureContainer}>
      <div className={styles.structureContent}>
        {/* Lado esquerdo - Galeria de imagens */}
        <div className={styles.gallerySection}>
          <div className={styles.mainImageContainer}>
            <img 
              src={mainImage} 
              alt="Estrutura do Centro Médico Sapiranga" 
              className={styles.mainImage}
            />
          </div>
          
         <div className={styles.carouselWrapper}>
  <button 
    className={styles.carouselButton} 
    onClick={() => scrollCarousel('left')}
    aria-label="Anterior"
  >
    <FaChevronLeft />
  </button>

  <div className={styles.imageCarousel} ref={carouselRef}>
    {galleryImages.map((image, index) => (
      <div 
        key={index} 
        className={`${styles.thumbnail} ${mainImage === image ? styles.activeThumbnail : ''}`}
        onClick={() => setMainImage(image)}
      >
        <img 
          src={image} 
          alt={`Estrutura ${index + 1}`}
          className={styles.thumbnailImage}
        />
      </div>
    ))}
  </div>

  <button 
    className={styles.carouselButton} 
    onClick={() => scrollCarousel('right')}
    aria-label="Próximo"
  >
    <FaChevronRight />
  </button>
</div>
        </div>

        {/* Lado direito - Texto */}
        <div className={styles.textSection}>
          <h2 className={styles.title}>Nossa Estrutura</h2>
          <h3 className={styles.subtitle}>
            Mais do que espaço físico, um compromisso com a sua saúde
          </h3>
          
          <div className={styles.textContent}>
            <p>
              No Centro Médico Sapiranga, cada espaço foi projetado com um único objetivo: 
              cuidar de você com excelência, desde o momento em que você chega até o 
              final do seu atendimento.
            </p>
            
            <p>
              Acreditamos que o ambiente onde você é acolhido faz toda a diferença na 
              forma como sua saúde é tratada. Por isso, investimos em uma estrutura 
              moderna, segura e confortável - um lugar onde você se sente bem, 
              confiante e respeitado.
            </p>
            
            <p>
              Nosso compromisso vai além de oferecer equipamentos de última geração ou 
              profissionais altamente capacitados. Nós colocamos o ser humano no centro 
              de tudo. Cada detalhe do nosso espaço foi pensado para proporcionar 
              tranquilidade, privacidade e bem-estar, seja em uma simples consulta, 
              um exame ou um procedimento mais delicado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}