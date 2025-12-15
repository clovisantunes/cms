import { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import BannerPages from '../BannerPages';
import { FaSearch, FaTimes, FaCalendarAlt,  FaThLarge, FaList, FaFilter, FaUserMd, FaStethoscope } from 'react-icons/fa';
import medicImage from '../../assets/sorrindo-alegre-feminino-gp-fazendo-anotacoes-eletronicas_151013-2668.avif';


export interface OdontoItem {
  id: number;
  nome: string;
  icone: ReactNode;
  descricao: string;
  categoria: 'preventiva' | 'restauradora' | 'estetica' | 'ortodontia' | 'cirurgia';
  duracao?: string;
  indicacao?: string;
}

interface Professional {
  id: number;
  name: string;
  specialty: string;
  image: string;
  description: string;
  cro?: string;
  experience?: string;
}

interface OdontologiaGridSectionProps {
  bannerImage: string;
  pageTitle: string;
  pageSubtitle: string;
  bannerStyles: "style1" | "style2" | undefined;
  sectionTitle: string;
  sectionDescription: string;
  items: OdontoItem[];
  ctaTitle: string;
  ctaDescription: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  features?: {
    icon?: React.ReactNode;
    text: string;
  }[];
  professionals?: Professional[];
}

const categoriaLabels: Record<string, string> = {
  'preventiva': 'Preventiva',
  'restauradora': 'Restauradora',
  'estetica': 'Estética',
  'ortodontia': 'Ortodontia',
  'cirurgia': 'Cirúrgica',
};

export default function OdontologiaGridSection({
  bannerImage,
  pageTitle,
  pageSubtitle,
  bannerStyles,
  sectionTitle,
  sectionDescription,
  items,
  ctaTitle,
  ctaDescription,
  primaryButtonText,
  secondaryButtonText,
  features,
  professionals = [
    {
      id: 1,
      name: "Dra. Ana Silva",
      specialty: "Ortodontista",
      image: medicImage,
      description: "Especialista em ortodontia com mais de 10 anos de experiência, focada em tratamentos personalizados.",
      cro: "CRO-SP 12345",
      experience: "10+ anos"
    },
    {
      id: 2,
      name: "Dr. Carlos Mendes",
      specialty: "Implantodontista",
      image: medicImage,
      description: "Especialista em implantes dentários e reabilitação oral, utilizando tecnologia de ponta.",
      cro: "CRO-RS 67890",
      experience: "15+ anos"
    },
    {
      id: 3,
      name: "Dra. Beatriz Costa",
      specialty: "Endodontista",
      image: medicImage,
      description: "Especialista em tratamento de canal e micro-endodontia, com abordagem minimamente invasiva.",
      cro: "CRO-SC 54321",
      experience: "8+ anos"
    }
  ]
}: OdontologiaGridSectionProps) {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('todas');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const allCategories = useMemo(() => {
    const categories = items.map(item => item.categoria);
    return ['todas', ...Array.from(new Set(categories))];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.indicacao && item.indicacao.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesFilter = selectedFilter === 'todas' ||
        item.categoria === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [items, searchTerm, selectedFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const handleAgendarConsulta = (itemTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const mensagem = `Olá! Gostaria de agendar uma consulta odontológica para ${itemTitle}`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCtaAgendamento = () => {
    const mensagem = `Olá! Gostaria de informações sobre tratamentos odontológicos.`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSecondaryButton = () => {
    window.open('tel:+555135000714', '_blank');
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedFilter('todas');
  };

  return (
    <>
      <BannerPages
        backgroundImage={bannerImage}
        title={pageTitle}
        subtitle={pageSubtitle}
        style={bannerStyles}
        imagePosition="right"
        features={features}
        buttonText="Agendar Consulta"
        buttonLink="/agendamento"
        geometricBackground={true}
      />

      <motion.section
        className={styles.odontoSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className={styles.container}>
          <motion.div className={styles.sectionHeader} variants={itemVariants}>
            <div>
              <h1 className={styles.title}>{sectionTitle}</h1>
              <p className={styles.description}>{sectionDescription}</p>
            </div>
          </motion.div>

          <motion.div className={styles.controls} variants={itemVariants}>
            <div className={styles.viewControls}>
              <div className={styles.viewToggle}>
                <button
                  className={`${styles.viewButton} ${viewMode === 'grid' ? styles.active : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Visualização em grade"
                >
                  <FaThLarge />
                </button>
                <button
                  className={`${styles.viewButton} ${viewMode === 'list' ? styles.active : ''}`}
                  onClick={() => setViewMode('list')}
                  title="Visualização em lista"
                >
                  <FaList />
                </button>
              </div>
              
              <button
                className={styles.filterToggle}
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter />
                Filtros
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  className={styles.filtersContent}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                >
                  <div className={styles.searchBox}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                      type="text"
                      placeholder="Buscar tratamentos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className={styles.searchInput}
                    />
                    {searchTerm && (
                      <button
                        className={styles.clearButton}
                        onClick={() => setSearchTerm('')}
                      >
                        <FaTimes />
                      </button>
                    )}
                  </div>

                  <div className={styles.filtersInfo}>
                    <span>
                      {filteredItems.length} tratamento{filteredItems.length !== 1 ? 's' : ''} encontrado{filteredItems.length !== 1 ? 's' : ''}
                    </span>
                    {(searchTerm || selectedFilter !== 'todas') && (
                      <button
                        className={styles.clearFiltersBtn}
                        onClick={clearFilters}
                      >
                        Limpar filtros
                      </button>
                    )}
                  </div>

                  <div className={styles.categories}>
                    {allCategories.map((categoria) => (
                      <button
                        key={categoria}
                        className={`${styles.categoryButton} ${selectedFilter === categoria ? styles.active : ''}`}
                        onClick={() => setSelectedFilter(categoria)}
                      >
                        {categoria === 'todas' ? 'Todos' : categoriaLabels[categoria]}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={viewMode}
                className={`${styles.itemsContainer} ${styles[viewMode]}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0 }}
              >
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className={styles.itemCard}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                  >
                    <div className={styles.cardHeader}>
                      <div className={styles.iconContainer}>
                        {item.icone}
                      </div>
                      <div className={styles.cardInfo}>
                        <h3 className={styles.itemTitle}>{item.nome}</h3>
                        <span className={`${styles.categoryTag} ${styles[item.categoria]}`}>
                          {categoriaLabels[item.categoria]}
                        </span>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <p className={styles.itemDescription}>{item.descricao}</p>
                      
                      {item.duracao && (
                        <div className={styles.itemMeta}>
                          <span className={styles.metaLabel}>Duração:</span>
                          <span className={styles.metaValue}>{item.duracao}</span>
                        </div>
                      )}
                      
                      {item.indicacao && (
                        <div className={styles.itemMeta}>
                          <span className={styles.metaLabel}>Indicação:</span>
                          <span className={styles.metaValue}>{item.indicacao}</span>
                        </div>
                      )}
                    </div>

                    <div className={styles.cardActions}>
                     
                      <button
                        className={styles.agendarButton}
                        onClick={(e) => handleAgendarConsulta(item.nome, e)}
                      >
                        <FaCalendarAlt />
                        Agendar
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                className={styles.noResults}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <FaSearch className={styles.noResultsIcon} />
                <h3>Nenhum tratamento encontrado</h3>
                <p>Tente outros termos de busca ou limpe os filtros</p>
                <button
                  className={styles.clearFiltersBtn}
                  onClick={clearFilters}
                >
                  Limpar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Seção de Profissionais */}
          {professionals.length > 0 && (
            <motion.div
              className={styles.professionalsSection}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.professionalsHeader}>
                <h2 className={styles.professionalsTitle}>Nossa Equipe Odontológica</h2>
                <p className={styles.professionalsSubtitle}>
                  Especialistas qualificados para cuidar do seu sorriso
                </p>
              </div>

              <div className={styles.professionalsGrid}>
                {professionals.map((professional, index) => (
                  <motion.div
                    key={professional.id}
                    className={styles.professionalCard}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.professionalImage}>
                        <img src={professional.image} alt={professional.name} />
                      <div className={styles.professionalBadge}>
                        <FaUserMd />
                      </div>
                      <div className={styles.imagePlaceholder}>
                        <FaStethoscope />
                        <span>{professional.name.split(' ')[0]}</span>
                      </div>
                    </div>

                    <div className={styles.professionalInfo}>
                      <h3 className={styles.professionalName}>{professional.name}</h3>
                      <span className={styles.professionalSpecialty}>
                        {professional.specialty}
                      </span>
                      
                      <div className={styles.professionalDetails}>
                        {professional.cro && (
                          <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>CRO:</span>
                            <span className={styles.detailValue}>{professional.cro}</span>
                          </div>
                        )}
                        
                        {professional.experience && (
                          <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>Experiência:</span>
                            <span className={styles.detailValue}>{professional.experience}</span>
                          </div>
                        )}
                      </div>
                      
                      <p className={styles.professionalDescription}>
                        {professional.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
              <p className={styles.ctaDescription}>{ctaDescription}</p>
              
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaPrimary}
                  onClick={handleCtaAgendamento}
                >
                  {primaryButtonText}
                </button>
                <button
                  className={styles.ctaSecondary}
                  onClick={handleSecondaryButton}
                >
                  {secondaryButtonText}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}