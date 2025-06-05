import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FaClock, FaIdCard, FaCar, FaMobileAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export const StatsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const [count, setCount] = useState({
    years: 0,
    monthly: 0,
    companies: 0,
  });

  useEffect(() => {
    if (inView) {
      const duration = 1500;
      const frameRate = 30;
      const totalFrames = duration / frameRate;

      const counters = {
        years: { to: 46 },
        monthly: { to: 15 },
        companies: { to: 950 },
      };

      let frame = 0;

      const interval = setInterval(() => {
        frame++;
        setCount({
          years: Math.min(Math.floor((counters.years.to * frame) / totalFrames), counters.years.to),
          monthly: Math.min(Math.floor((counters.monthly.to * frame) / totalFrames), counters.monthly.to),
          companies: Math.min(Math.floor((counters.companies.to * frame) / totalFrames), counters.companies.to),
        });

        if (frame >= totalFrames) clearInterval(interval);
      }, frameRate);
    }
  }, [inView]);

  return (
    <section ref={ref} className={styles.statsSection}>
      <div className={styles.top}>
        <div className={styles.cards}>
          <h3>{count.years}</h3>
          <span>Anos de Experiência</span>
        </div>
        <div className={styles.cards}>
          <h3>
            {count.monthly.toLocaleString("pt-BR", { maximumFractionDigits: 0 })} {} Mil
          </h3>
          <span>Atendimentos por mês</span>
        </div>
        <div className={styles.cards}>
          <h3>{count.companies}</h3>
          <span>Empresas Atendidas</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>
          <FaClock size={32} />
          <p>Pontualidade nos atendimentos</p>
        </div>
        <div>
          <FaIdCard size={32} />
          <p>Gestão de convênios</p>
        </div>
        <div>
          <FaCar size={32} />
          <p>Estacionamento privativo</p>
        </div>
        <div>
          <FaMobileAlt size={32} />
          <p>Agendamento eletrônico</p>
        </div>
      </div>
    </section>
  );
};
