import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../assets/bannerInitial.png";
import banner2 from "../../assets/banner2.png";
import Button from "../UI/Button";
import { motion, AnimatePresence } from "framer-motion";

const banners = [
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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
      {/* Botões fixos fora do AnimatePresence */}
      <button className={styles.navLeft} onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>

      <button className={styles.navRight} onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      {/* Conteúdo animado */}
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