import { useState, useMemo, useEffect } from "react";
import { FaPlus, FaFilter, FaStethoscope } from "react-icons/fa";
import styles from "./styles.module.scss";
import Button from "../UI/Button";
import { AnimatePresence, motion } from "framer-motion";

interface FilterItem {
  id: number;
  title: string;
  priceInfo: string;
  healthCardPrice: string;
  tag: string;
  icon?: React.ReactNode;
  color?: string;
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
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(9);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleExpand = (name: string) => {
    setExpandedItem((prev) => (prev === name ? null : name));
  };

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6);
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const tagExists = items.some((item) => item.tag === hash);
    if (tagExists) {
      setSelectedTag(hash);
      setVisibleItems(9);
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

  const [columns, setColumns] = useState(3);
  
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 768) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };
    
    updateColumns();
    window.addEventListener('resize', updateColumns);
    
    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, []);

  return (
    <div className={styles.filterItemsContainer}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          {subtitle && (
            <motion.span 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {subtitle}
            </motion.span>
          )}
          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {title}
            </motion.h1>
          )}
          {text && (
            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {text}
            </motion.p>
          )}
        </div>
      </div>

      {/* Filter Controls */}
      <motion.div 
        className={styles.filterSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className={styles.filterControls}>
          <div className={styles.filterLabel}>
            <FaFilter />
            <span className={styles.filter}>Filtrar especialidades</span>
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
                  setVisibleItems(9);
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
            <FaFilter />
            <span>Filtrar</span>
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className={styles.mobileFilterDropdown}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
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
                    setVisibleItems(9);
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

      {/* Results Counter */}
      <motion.div 
        className={styles.resultsInfo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <span>
          {filteredItems.length} especialidade{filteredItems.length !== 1 ? 's' : ''} 
          {selectedTag && selectedTag !== "TODAS AS ESPECIALIDADES" && ` em ${selectedTag}`}
        </span>
      </motion.div>

      {/* Grid */}
      <motion.div 
        className={styles.grid}
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.slice(0, visibleItems).map((item, index) => {
            const isOpen = expandedItem === item.title;
            return (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ 
                  duration: 0.4,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                layout
              >
                <motion.div
                  className={styles.cardHeader}
                  onClick={() => toggleExpand(item.title)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={styles.cardIconContainer}>
                    {item.icon || <FaStethoscope />}
                  </div>
                  
                  <div className={styles.cardInfo}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <span className={styles.cardTag}>{item.tag}</span>
                  </div>

                  <motion.div 
                    className={styles.expandIcon}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaPlus />
                  </motion.div>
                </motion.div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className={styles.cardContent}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.priceSection}>
                        <div className={styles.priceItem}>
                          <span className={styles.priceLabel}>Valor normal</span>
                          <span className={styles.priceValue}>{item.priceInfo}</span>
                        </div>
                        <div className={styles.priceItem}>
                          <span className={styles.priceLabel}>Cartão Minha Saúde</span>
                          <span className={styles.priceValueHighlight}>
                            {item.healthCardPrice}
                          </span>
                        </div>
                      </div>
                      
                      <div className={styles.cardActions}>
                        <Button variant="primary">
                          Agendar Consulta
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {visibleItems < filteredItems.length && (
        <motion.div 
          className={styles.loadMoreSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="secondary" onClick={loadMore}>
            {buttonText} ({filteredItems.length - visibleItems} restantes)
          </Button>
        </motion.div>
      )}
    </div>
  );
}