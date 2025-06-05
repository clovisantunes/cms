import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import banner1 from "../../assets/bannerInitial.png";
import banner2 from "../../assets/banner2.png";
import Button from "../UI/Button"; // ajuste o caminho conforme sua estrutura

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

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));

  const currentBanner = banners[currentIndex];

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 8000); 

    return () => clearInterval(interval); 
  }, []);
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${currentBanner.image})` }}
    >
      <button className={styles.navLeft} onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>

      <div
        className={`${styles.textContainer} ${
          currentBanner.align === "right" ? styles.right : styles.left
        }`}
      >
        <div className={styles.textCard}>
          <h1>{currentBanner.title}</h1>
          <p>{currentBanner.subtitle}</p>
          <div className={styles.buttonCard}>
          <Button variant="primary">{currentBanner.buttonText}</Button>

          </div>
        </div>
      </div>

      <button className={styles.navRight} onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};
