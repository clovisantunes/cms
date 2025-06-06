import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import styles from './styles.module.scss';
import Button from '../UI/Button';

interface FilterItemsProps {
  title?: string;
  subtitle?: string;
  text?: string;
}

interface FilterItem {
  title: string;
  priceInfo: string;
  healthCardPrice: string;
  tag: string;
}

const items: FilterItem[] = [
  {
    title: 'Cardiologia',
    priceInfo: 'R$ 190,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 170,00 no cartão Minha Saúde',
    tag: 'ESPECIALIDADES',
  },
  {
    title: 'Pediatria',
    priceInfo: 'R$ 160,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 140,00 no cartão Minha Saúde',
    tag: 'PEDIÁTRICA',
  },
  {
    title: 'Psicologia (adulto e infantil)',
    priceInfo: 'R$ 150,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 130,00 no cartão Minha Saúde',
    tag: 'SAÚDE MENTAL',
  },
  {
    title: 'Psiquiatria',
    priceInfo: 'R$ 220,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 200,00 no cartão Minha Saúde',
    tag: 'SAÚDE MENTAL',
  },
  {
    title: 'Ginecologia',
    priceInfo: 'R$ 180,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 160,00 no cartão Minha Saúde',
    tag: 'ESPECIALIDADES',
  },
  {
    title: 'Nutricionista',
    priceInfo: 'R$ 130,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 110,00 no cartão Minha Saúde',
    tag: 'NUTRIÇÃO',
  },
  {
    title: 'Endocrinologia',
    priceInfo: 'R$ 200,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 180,00 no cartão Minha Saúde',
    tag: 'ESPECIALIDADES',
  },
  {
    title: 'Fonoaudiologia',
    priceInfo: 'R$ 150,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 130,00 no cartão Minha Saúde',
    tag: 'REABILITAÇÃO',
  },
  {
    title: 'Dermatologia',
    priceInfo: 'R$ 190,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 170,00 no cartão Minha Saúde',
    tag: 'ESPECIALIDADES',
  },
  {
    title: 'Ortopedia',
    priceInfo: 'R$ 180,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 160,00 no cartão Minha Saúde',
    tag: 'ESPECIALIDADES',
  },
  {
    title: 'Clínico Geral',
    priceInfo: 'R$ 120,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 100,00 no cartão Minha Saúde',
    tag: 'CLÍNICO',
  },
  {
    title: 'Neurologia',
    priceInfo: 'R$ 210,00 para pagamento Cartões ou PIX',
    healthCardPrice: 'R$ 190,00 no cartão Minha Saúde',
    tag: 'ESPECIALIDADES',
  },
];


export default function FilterItems({ title, subtitle, text }: FilterItemsProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpandedItem(prev => (prev === name ? null : name));
  };

  return (
    <div className={styles.filterItemsContainer}>
      <div className={styles.filterTitles}>
        <h2>{subtitle}</h2>
        <h1>{title}</h1>
        <h3>{text}</h3>
      </div>

      <div className={styles.grid}>
        {items.map((item, idx) => {
          const isOpen = expandedItem === item.title;
          return (
            <div key={idx} className={styles.card}>
             <div className={styles.cardHeader} onClick={() => toggleExpand(item.title)}>
  <span className={styles.cardIcon}>{isOpen ? <FaMinus /> : <FaPlus />}</span>
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
    </div>
  );
}
