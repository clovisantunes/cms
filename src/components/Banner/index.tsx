import { useEffect, useState, useCallback } from "react";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../assets/bannerInitial.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.jpg";
import Button from "../UI/Button";
import { motion, AnimatePresence } from "framer-motion";

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  align: "left" | "right" | "center";
  whatsappMessage: string;
}

const banners: Banner[] = [
  {
    id: 1,
    image: banner1,
    title: "Centro Médico Sapiranga",
    subtitle: "Cuidando da sua saúde com responsabilidade e carinho.",
    buttonText: "Agende sua consulta",
    align: "right",
    whatsappMessage: "Olá! Gostaria de agendar uma consulta."
  },
  {
    id: 2,
    image: banner2,
    title: "Medicina do Trabalho",
    subtitle: "Mais segurança, produtividade e bem-estar para sua equipe.",
    buttonText: "Confira nossos serviços",
    align: "left",
    whatsappMessage: "Olá! Gostaria de mais informações sobre Medicina do Trabalho."
  }
];

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const totalBanners = banners.length;
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalBanners - 1;

  const openWhatsApp = useCallback((message: string) => {
    const phoneNumber = "555135000714"; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const goToSlide = useCallback((newIndex: number, newDirection: "left" | "right") => {
    if (isAnimating || newIndex < 0 || newIndex >= totalBanners) return;
    
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex(newIndex);
    
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating, totalBanners]);

  const prevSlide = useCallback(() => {
    if (!isFirstSlide) {
      goToSlide(currentIndex - 1, "left");
    }
  }, [currentIndex, isFirstSlide, goToSlide]);

  const nextSlide = useCallback(() => {
    if (!isLastSlide) {
      goToSlide(currentIndex + 1, "right");
    }
  }, [currentIndex, isLastSlide, goToSlide]);

  const goToSpecificSlide = useCallback((index: number) => {
    if (index === currentIndex || isAnimating || index < 0 || index >= totalBanners) return;
    
    const newDirection = index > currentIndex ? "right" : "left";
    goToSlide(index, newDirection);
  }, [currentIndex, isAnimating, totalBanners, goToSlide]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      if (!isAnimating) {
        if (!isLastSlide) {
          nextSlide();
        } else {
          goToSlide(0, "right");
        }
      }
    }, 8000); 

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [nextSlide, isAnimating, isLastSlide, goToSlide]);

  const currentBanner = banners[currentIndex];

  const slideVariants = {
    enter: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? "100%" : "-100%",
      scale: 1.02,
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.5, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? "-50%" : "50%",
      scale: 0.98,
      transition: { 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.15,
        ease: "easeOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  return (
    <div className={styles.banner}>
      {!isFirstSlide && (
        <button 
          className={styles.navLeft} 
          onClick={prevSlide}
          disabled={isAnimating}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={isMobile ? 12 : 16} />
        </button>
      )}

      {!isLastSlide && (
        <button 
          className={styles.navRight} 
          onClick={nextSlide}
          disabled={isAnimating}
          aria-label="Próximo slide"
        >
          <ChevronRight size={isMobile ? 12 : 16} />
        </button>
      )}

      <div className={styles.carouselContainer}>
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={currentBanner.id}
            className={styles.bannerBackground}
            style={{ backgroundImage: `url(${currentBanner.image})` }}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <div
              className={`${styles.textContainer} ${
                styles[currentBanner.align]
              }`}
            >
              <motion.div 
                className={styles.textCard}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.h1 variants={textVariants}>{currentBanner.title}</motion.h1>
                <motion.p variants={textVariants}>{currentBanner.subtitle}</motion.p>
                <motion.div className={styles.buttonCard} variants={textVariants}>
                  <Button 
                    variant="primary" 
                    onClick={() => openWhatsApp(currentBanner.whatsappMessage)}
                  >
                    {currentBanner.buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {totalBanners > 1 && (
        <div className={styles.indicators}>
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              className={`${styles.indicator} ${
                index === currentIndex ? styles.active : ""
              } ${isAnimating ? styles.animating : ""}`}
              onClick={() => goToSpecificSlide(index)}
              disabled={isAnimating}
              aria-label={`Ir para slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
};