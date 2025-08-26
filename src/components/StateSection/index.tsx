import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FaClock, FaIdCard, FaCar, FaMobileAlt, FaUsers, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const StatsSection = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: 0.3
  });

  const [count, setCount] = useState({
    years: 0,
    monthly: 0,
    companies: 0,
  });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
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

      return () => clearInterval(interval);
    }
  }, [inView]);

  const stats = [
    { 
      icon: <FaCalendarAlt />, 
      value: count.years, 
      suffix: "+", 
      label: "Anos de Experiência",
      color: "#CF2E2E"
    },
    { 
      icon: <FaUsers />, 
      value: count.monthly, 
      suffix: " Mil+", 
      label: "Atendimentos Mensais",
      color: "#A82525"
    },
    { 
      icon: <FaBriefcase />, 
      value: count.companies, 
      suffix: "+", 
      label: "Empresas Atendidas",
      color: "#CF2E2E"
    }
  ];

  const features = [
    { icon: <FaClock />, text: "Pontualidade nos atendimentos" },
    { icon: <FaIdCard />, text: "Gestão de convênios" },
    { icon: <FaCar />, text: "Estacionamento privativo" },
    { icon: <FaMobileAlt />, text: "Agendamento eletrônico" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className={styles.statsSection}>
      <div className={styles.backgroundPattern}></div>
      
      <motion.div 
        className={styles.top}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            className={styles.statCard}
            variants={itemVariants}
          >
            <div className={styles.iconWrapper} style={{ color: stat.color }}>
              {stat.icon}
            </div>
            <motion.h3 
              className={styles.statNumber}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {stat.value}
              <span className={styles.statSuffix}>{stat.suffix}</span>
            </motion.h3>
            <p className={styles.statLabel}>{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.bottom}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h3 className={styles.featuresTitle}>Nossos Diferenciais</h3>
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureCard}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <p className={styles.featureText}>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};