import { useEffect, useState, useCallback } from "react";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../assets/bannerInitial.png";
import banner2 from "../../assets/banner2.png";
import Button from "../UI/Button";
import { motion, AnimatePresence } from "framer-motion";

interface Banner {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  align: "left" | "right";
}

const banners: Banner[] = [
  {
    id: 1,
    image: banner1,
    title: "Centro Médico Sapiranga",
    subtitle: "Cuidando da sua saúde com responsabilidade e carinho.",
    buttonText: "Agende sua consulta",
    align: "right",
  },
  {
    id: 2,
    image: banner2,
    title: "Medicina do Trabalho",
    subtitle: "Mais segurança, produtividade e bem-estar para sua equipe.",
    buttonText: "Confira nossos serviços",
    align: "left",
  },
];

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const prevSlide = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    // Verificar se é mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, [nextSlide]);

  const currentBanner = banners[currentIndex];

  const slideVariants = {
    enter: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? "100%" : "-100%",
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    },
    exit: (direction: string) => ({
      opacity: 0,
      x: direction === "right" ? "-100%" : "100%",
      transition: { duration: 0.6, ease: "easeInOut" }
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 }
    }
  };

  return (
    <div className={styles.banner}>
      <button 
        className={styles.navLeft} 
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft size={isMobile ? 24 : 32} />
      </button>

      <button 
        className={styles.navRight} 
        onClick={nextSlide}
        aria-label="Próximo slide"
      >
        <ChevronRight size={isMobile ? 24 : 32} />
      </button>

      <AnimatePresence mode="wait" custom={direction}>
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
              currentBanner.align === "right" ? styles.right : styles.left
            }`}
          >
            <motion.div 
              className={styles.textCard}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1>{currentBanner.title}</motion.h1>
              <motion.p>{currentBanner.subtitle}</motion.p>
              <motion.div className={styles.buttonCard}>
                <Button variant="primary">{currentBanner.buttonText}</Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};