import { useState, useMemo, useEffect } from "react";
import { FaFilter, FaStethoscope, FaChevronDown } from "react-icons/fa";
import styles from "./styles.module.scss";
import Button from "../UI/Button";
import { AnimatePresence, motion } from "framer-motion";

interface FilterItem {
  id: number;
  title: string;
  description: string;
  tag: string;
  icon?: React.ReactNode;
}

interface FilterItemsProps {
  title?: string;
  subtitle?: string;
  text?: string;
  items: FilterItem[];
  buttonText: string;
  showButton?: boolean;
}

export default function FilterItems({
  title,
  subtitle,
  text,
  items = [],
  buttonText,
}: FilterItemsProps) {
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

 

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  const handleAgendarConsulta = (itemTitle: string) => {
    const mensagem = `Quero agendar uma consulta de ${itemTitle}`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const tagExists = items.some((item) => item.tag === hash);
    if (tagExists) {
      setSelectedTag(hash);
      setVisibleItems(6);
    }
  }, [items]);

  const uniqueTags = useMemo(() => {
    const tags = items.map((item) => item.tag);
    return ["TODAS AS ESPECIALIDADES", ...Array.from(new Set(tags))];
  }, [items]);

  const filteredItems = useMemo(() => {
    return selectedTag && selectedTag !== "TODAS AS ESPECIALIDADES"
      ? items.filter((item) => item.tag === selectedTag)
      : items;
  }, [items, selectedTag]);

  return (
    <div className={styles.filterItemsContainer}>
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          {subtitle && (
            <motion.span 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {subtitle}
            </motion.span>
          )}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
          )}
          {text && (
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {text}
            </motion.p>
          )}
        </div>
      </div>

      <motion.div 
        className={styles.filterSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      >
        <div className={styles.filterControls}>
          <div className={styles.filterLabel}>
            <FaFilter size={16} />
            <span>Filtrar por especialidade</span>
          </div>
          
          <div className={styles.tagsContainer}>
            {uniqueTags.map((tag, idx) => (
              <button
                key={idx}
                className={`${styles.tagButton} ${
                  selectedTag === tag || (tag === "TODAS AS ESPECIALIDADES" && !selectedTag) 
                    ? styles.active 
                    : ''
                }`}
                onClick={() => {
                  setSelectedTag(tag === "TODAS AS ESPECIALIDADES" ? "" : tag);
                  setVisibleItems(6);
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          <div 
            className={styles.mobileFilterToggle}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <FaFilter size={14} />
            <span>Filtrar</span>
            <FaChevronDown size={12} className={isFilterOpen ? styles.rotate : ''} />
          </div>
        </div>

        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className={styles.mobileFilterDropdown}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {uniqueTags.map((tag, idx) => (
                <button
                  key={idx}
                  className={`${styles.mobileTagButton} ${
                    selectedTag === tag || (tag === "TODAS AS ESPECIALIDADES" && !selectedTag) 
                      ? styles.active 
                      : ''
                  }`}
                  onClick={() => {
                    setSelectedTag(tag === "TODAS AS ESPECIALIDADES" ? "" : tag);
                    setVisibleItems(6);
                    setIsFilterOpen(false);
                  }}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div 
        className={styles.resultsInfo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <span>
          {filteredItems.length} especialidade{filteredItems.length !== 1 ? 's' : ''} 
          {selectedTag && selectedTag !== "TODAS AS ESPECIALIDADES" && ` em ${selectedTag}`}
        </span>
      </motion.div>

      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
      >
        {filteredItems.slice(0, visibleItems).map((item, index) => {
          
          return (
            <motion.div
              key={item.id} 
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
              }}
            >
              <motion.div
                className={styles.cardHeader}
                whileHover={{ backgroundColor: "rgba(0, 123, 255, 0.02)" }}
              >
                <div className={styles.cardIconContainerContainer}>
                <div className={styles.cardIconContainer}>
                  {item.icon || <FaStethoscope />}
                </div>
                <div className={styles.cardTitleTag}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.cardTag}>{item.tag}</span>
                  </div>
                </div>
                <div className={styles.cardInfo}>
                     <div className={styles.descriptionSection}>
                      <p className={styles.specialtyDescription}>
                        {item.description}
                      </p>
                    </div>
                       <div className={styles.cardActions}>
                      <Button 
                        variant="primary" 
                        onClick={(e) => {
                          e.stopPropagation(); 
                          handleAgendarConsulta(item.title);
                        }}
                      >
                        Agendar Consulta
                      </Button>
                    </div>
                </div>

              </motion.div>

            
              
            </motion.div>
          );
        })}
      </motion.div>

      {visibleItems < filteredItems.length && (
        <motion.div 
          className={styles.loadMoreSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Button variant="secondary" onClick={loadMore}>
            {buttonText} ({filteredItems.length - visibleItems} restantes)
          </Button>
        </motion.div>
      )}
    </div>
  );
}