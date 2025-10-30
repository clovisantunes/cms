import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import BannerPages from '../BannerPages';

export interface GridItem {
  id: number;
  nome: string;
  icone: ReactNode;
  descricao: string;
  tag: string;
}

interface GridSectionProps {
  bannerImage: string;
  pageTitle: string;
  pageSubtitle: string;
  sectionTitle: string;
  sectionDescription: string;
  items: GridItem[];
  stats?: {
    number: string;
    label: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export default function GridSection({
  bannerImage,
  pageTitle,
  pageSubtitle,
  sectionTitle,
  sectionDescription,
  items,
  stats,
  ctaTitle,
  ctaDescription,
  primaryButtonText,
  secondaryButtonText
}: GridSectionProps) {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const handleAgendarConsulta = (itemTitle: string) => {
    const mensagem = `Quero agendar um exame de ${itemTitle}`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleCtaAgendamento = () => {
    const mensagem = `Quero agendar uma consulta`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <BannerPages
        backgroundImage={bannerImage}
        title={pageTitle}
        subtitle={pageSubtitle}
      />
      
      <motion.section 
        className={styles.gridSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className={styles.container}>
          <motion.div className={styles.header} variants={itemVariants}>
            <div className={styles.headerContent}>
              <h1>{sectionTitle}</h1>
              <p>{sectionDescription}</p>
            </div>
            {stats && (
              <div className={styles.stats}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.stat}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.div 
            className={styles.itemsGrid}
            variants={containerVariants}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className={styles.itemCard}
                variants={cardVariants}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                custom={index}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.cardIcon}>
                    {item.icone}
                  </div>
                  <div className={styles.cardInfo}>
                    <h3>{item.nome}</h3>
                    <span className={styles.cardTag}>
                      {item.tag}
                    </span>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <p>{item.descricao}</p>
                </div>

                <div className={styles.cardActions}>
                  <motion.button 
                    className={styles.primaryButton}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAgendarConsulta(item.nome)}
                  >
                    Agendar Consulta
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className={styles.ctaSection}
            variants={itemVariants}
          >
            <div className={styles.ctaContent}>
              <h2>{ctaTitle}</h2>
              <p>{ctaDescription}</p>
              <div className={styles.ctaButtons}>
                <motion.button 
                  className={styles.ctaPrimary}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCtaAgendamento}
                >
                  {primaryButtonText}
                </motion.button>
                <motion.button 
                  className={styles.ctaSecondary}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {secondaryButtonText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}