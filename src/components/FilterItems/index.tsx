import { useState, useMemo, useEffect } from "react";
import { FaPlus, FaMinus, FaFilter } from "react-icons/fa";
import styles from "./styles.module.scss";
import Button from "../UI/Button";
import { AnimatePresence, motion } from "framer-motion";

interface FilterItem {
  id: number;
  title: string;
  priceInfo: string;
  healthCardPrice: string;
  tag: string;
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
  showButton,
}: FilterItemsProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(12);
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
      setVisibleItems(12);
    }
  }, [items]);

  useEffect(() => {
    if (selectedTag) {
      window.history.replaceState(null, "", `#${selectedTag}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [selectedTag]);

  const uniqueTags = useMemo(() => {
    const tags = items.map((item) => item.tag);
    return ["", ...Array.from(new Set(tags))];
  }, [items]);

  const filteredItems = useMemo(() => {
    return selectedTag
      ? items.filter((item) => item.tag === selectedTag)
      : items;
  }, [items, selectedTag]);

  // Responsive grid columns
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
    <div className={styles.filterItemsContainer} id={selectedTag || undefined}>
      <div className={styles.filterTitles}>
        {subtitle && <h2>{subtitle}</h2>}
        {title && <h1>{title}</h1>}
        {text && <h3>{text}</h3>}
      </div>

      <div className={styles.filterControls}>
        <div 
          className={styles.mobileFilterToggle}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <FaFilter />
          <span>Filtrar</span>
        </div>
        
        <div className={`${styles.filterSelectContainer} ${isFilterOpen ? styles.open : ''}`}>
          <label htmlFor="tagFilter">Filtrar por categoria:</label>
          <select
            id="tagFilter"
            value={selectedTag}
            onChange={(e) => {
              setSelectedTag(e.target.value);
              setVisibleItems(12);
              setIsFilterOpen(false);
            }}
          >
            {uniqueTags.map((tag, idx) => (
              <option key={idx} value={tag}>
                {tag === "" ? "Todas as categorias" : tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      <motion.div 
        className={styles.grid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: columns === 1 ? '0.5rem' : '1rem'
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.slice(0, visibleItems).map((item) => {
            const isOpen = expandedItem === item.title;
            return (
              <motion.div
                key={item.id}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              >
                <div
                  className={styles.cardHeader}
                  onClick={() => toggleExpand(item.title)}
                >
                  <div className={styles.cardIiconTag}>
                    <span className={styles.cardIcon}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  <span className={styles.cardTitle}>{item.title}</span>
                  <span className={styles.cardTag}>{item.tag}</span>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      className={styles.cardContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className={styles.priceInfo}>
                        <p>{item.priceInfo}</p>
                        <p className={styles.healthCardPrice}>{item.healthCardPrice}</p>
                      </div>
                      <Button variant="primary" >Agendar Consulta</Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {(showButton || (filteredItems.length > 12 && visibleItems < filteredItems.length)) && (
        <motion.div 
          className={styles.loadMoreContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button variant="secondary" onClick={loadMore}>
            {buttonText}
          </Button>
        </motion.div>
      )}
    </div>
  );
}