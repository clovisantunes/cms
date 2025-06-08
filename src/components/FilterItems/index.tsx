import { useState } from "react";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import styles from "./styles.module.scss";
import Button from "../UI/Button";

interface FilterItem {
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
}

export default function FilterItems({
  title,
  subtitle,
  text,
  items = []
}: FilterItemsProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState(12); // Reduzi para 6 para testar melhor

  const toggleExpand = (name: string) => {
    setExpandedItem((prev) => (prev === name ? null : name));
  };

  const loadMore = () => {
    setVisibleItems((prev) => prev + 6); // Carrega mais 6 itens
  };

  return (
    <div className={styles.filterItemsContainer}>
      <div className={styles.filterTitles}>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <h3>{text}</h3>
      </div>

      <div className={styles.grid}>
        {items.slice(0, visibleItems).map((item, idx) => {
          const isOpen = expandedItem === item.title;
          return (
            <div key={idx} className={styles.card}>
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
              </div>
              {isOpen && (
                <div className={styles.cardContent}>
                  <p>{item.priceInfo}</p>
                  <p>{item.healthCardPrice}</p>
                  <Button variant="primary">Agendar Consulta</Button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {items.length > 6 && visibleItems < items.length && (
        <div className={styles.loadMoreContainer}>
          <Button 
            variant="secondary" 
            onClick={loadMore}
          >
            Ver mais
          </Button>
        </div>
      )}
    </div>
  );
}