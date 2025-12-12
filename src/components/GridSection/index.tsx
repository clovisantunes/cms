import { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';
import BannerPages from '../BannerPages';
import { FaSearch, FaTimes, FaStethoscope, FaHeartbeat, FaBrain, FaTooth, FaEye, FaBaby, FaArrowRight, FaUserMd, FaThLarge, FaList, FaFilter, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';
import logo from '../../assets/logo-CMS-site.png';
import { useNavigate } from 'react-router-dom';
import logoSimples from '../../assets/logoSimples.png';

export interface GridItem {
  id: number;
  nome: string;
  icone: ReactNode;
  descricao: string;
  tag: string;
  specialtyId?: string;
}

interface GridSectionProps {
  bannerImage: string;
  pageTitle: string;
  titleItem: string;
  pageSubtitle: string;
  bannerStyles: "style1" | "style2" | undefined;
  subTitleItem?: string;
  sectionTitle: string;
  sectionDescription: string;
  items: GridItem[];
  ctaTitle: string;
  ctaDescription: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  features?: {
    icon?: React.ReactNode;
    text: string;
  }[];
  showProfessionalsSection?: boolean;
  professionals?: {
    id: number;
    name: string;
    specialty: string;
    image: string;
    description: string;
    crm?: string;
  }[];
}

const tagIcons: Record<string, ReactNode> = {
  'cardiologia': <FaHeartbeat />,
  'neurologia': <FaBrain />,
  'odontologia': <FaTooth />,
  'oftalmologia': <FaEye />,
  'pediatria': <FaBaby />,
};

export default function GridSection({
  bannerImage,
  pageTitle,
  pageSubtitle,
  titleItem,
  items,
  showProfessionalsSection = true,
  professionals,
  ctaTitle,
  bannerStyles,
  ctaDescription,
  primaryButtonText,
  subTitleItem,
  secondaryButtonText,
  features
}: GridSectionProps) {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('todas');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const allTags = useMemo(() => {
    const tags = items.map(item => item.tag.toLowerCase());
    return ['todas', ...Array.from(new Set(tags))];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.descricao.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter = selectedFilter === 'todas' ||
        item.tag.toLowerCase() === selectedFilter;

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

  const cardVariants = {
    hidden: { 
      scale: viewMode === 'grid' ? 0.95 : 0.98, 
      opacity: 0,
      y: viewMode === 'list' ? 10 : 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      y: viewMode === 'grid' ? -8 : -2,
      transition: { duration: 0.2 }
    }
  };

  const handleSpecialtyClick = (item: GridItem, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    
    if (item.specialtyId) {
      navigate(`/especialidade/${item.specialtyId}`);
      return;
    }

    const specialtyId = item.nome
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');

    navigate(`/especialidade/${specialtyId}`);
  };

  const handleAgendarConsulta = (itemTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const mensagem = `Quero agendar uma consulta de ${itemTitle}`;
    const telefone = "555135000714";
    const whatsappUrl = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCtaAgendamento = () => {
    const mensagem = `Olá! Gostaria de informações sobre as especialidades médicas.`;
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
        className={styles.gridSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className={styles.container}>
          {/* Header com controles */}
          <motion.div
            className={styles.controlsHeader}
            variants={itemVariants}
          >
            <div className={styles.headerLeft}>
              <h1 className={styles.specialtiesTitle}>{titleItem}</h1>
              <p className={styles.specialtiesSubtitle}>
                {subTitleItem}
              </p>
            </div>
            
            <div className={styles.headerRight}>
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
          </motion.div>

          {/* Área de busca e filtros */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                className={styles.searchSection}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.searchContainer}>
                  <div className={styles.searchInputWrapper}>
                    <FaSearch className={styles.searchIcon} />
                    <input
                      type="text"
                      placeholder="Buscar especialidades médicas..."
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

                  <div className={styles.resultsInfo}>
                    <span>
                      {filteredItems.length} especialidade{filteredItems.length !== 1 ? 's' : ''} encontrada{filteredItems.length !== 1 ? 's' : ''}
                    </span>
                    {(searchTerm || selectedFilter !== 'todas') && (
                      <button
                        className={styles.clearFiltersButton}
                        onClick={clearFilters}
                      >
                        Limpar filtros
                      </button>
                    )}
                  </div>

                  <div className={styles.filtersContainer}>
                    <AnimatePresence>
                      {allTags.map((tag, index) => (
                        <motion.button
                          key={tag}
                          className={`${styles.filterButton} ${selectedFilter === tag ? styles.active : ''}`}
                          onClick={() => setSelectedFilter(tag)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          <span className={styles.filterIcon}>
                            {tag === 'todas' ? <FaStethoscope /> : (tagIcons[tag] || <FaStethoscope />)}
                          </span>
                          <span className={styles.filterText}>
                            {tag === 'todas' ? 'Todas' : tag.charAt(0).toUpperCase() + tag.slice(1)}
                          </span>
                        </motion.button>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid/Lista de especialidades */}
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
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    className={styles.itemCard}
                    variants={cardVariants}
                    whileHover="hover"
                    custom={index}
                    onClick={(e) => {
                      // Não navega se clicar nos botões
                      if (!(e.target as HTMLElement).closest('button')) {
                        handleSpecialtyClick(item);
                      }
                    }}
                  >
                    <div className={styles.cardContentWrapper}>
                      <div className={styles.cardHeader}>
                        <div className={styles.cardIcon}>
                          {item.icone}
                        </div>
                        <div className={styles.cardInfo}>
                          <div className={styles.titleWithLogo}>
                            <h3>{item.nome}</h3>
                            <img
                              src={logoSimples}
                              alt="Logo"
                              className={styles.titleLogo}
                            />
                          </div>
                          <div className={styles.cardMeta}>
                            <span className={styles.cardTag}>
                              {item.tag}
                            </span>
                            {viewMode === 'list' && (
                              <span className={styles.cardDescriptionMobile}>
                                {item.descricao}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {viewMode === 'grid' && (
                        <div className={styles.cardDescription}>
                          <p>{item.descricao}</p>
                        </div>
                      )}

                      <div className={styles.cardActions}>
                        <div className={styles.actionsContainer}>
                          <motion.button
                            className={styles.infoButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => handleSpecialtyClick(item, e)}
                          >
                            <FaInfoCircle />
                            Saiba Mais
                          </motion.button>

                          <motion.button
                            className={styles.primaryButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => handleAgendarConsulta(item.nome, e)}
                          >
                            <FaCalendarAlt />
                            Agendar
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                className={styles.noResults}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <FaSearch className={styles.noResultsIcon} />
                <h3>Nenhuma especialidade encontrada</h3>
                <p>Tente outros termos de busca ou limpe os filtros</p>
                <button
                  className={styles.clearFiltersButton}
                  onClick={clearFilters}
                >
                  Limpar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {showProfessionalsSection && professionals && professionals.length > 0 && (
          <motion.div
            className={styles.professionalsSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.container}>
              <div className={styles.professionalsHeader}>
                <h2 className={styles.professionalsTitle}>Nossos Profissionais</h2>
                <p className={styles.professionalsSubtitle}>
                  Conheça nossa equipe de especialistas qualificados
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
                      <div className={styles.professionalBadge}>
                        <FaUserMd />
                      </div>
                      <img
                        src={professional.image}
                        alt={professional.name}
                        loading="lazy"
                      />
                    </div>

                    <div className={styles.professionalInfo}>
                      <h3 className={styles.professionalName}>{professional.name}</h3>
                      <span className={styles.professionalSpecialty}>
                        {professional.specialty}
                      </span>
                      {professional.crm && (
                        <span className={styles.professionalCrm}>
                          CRM: {professional.crm}
                        </span>
                      )}
                      <p className={styles.professionalDescription}>
                        {professional.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* CTA Section (mantido igual) */}
        <div className={styles.geometricCTASection}>
          <div className={styles.geometricShapes}>
            <div className={styles.shape1}></div>
            <div className={styles.shape2}></div>
            <div className={styles.shape3}></div>
            <div className={styles.shape4}></div>
          </div>

          <div className={styles.container}>
            <div className={styles.ctaContentWrapper}>
              <div className={styles.medicalImageContainer}>
                <div className={styles.imageFadeOverlay}></div>
              </div>

              <div className={styles.ctaContent}>
                <div className={styles.logoSection}>
                  <div className={styles.logoGlow}></div>
                  <img src={logo} alt='Logo Centro Medico Sapiranga' />
                </div>

                <h2 className={styles.ctaTitle}>{ctaTitle}</h2>
                <p className={styles.ctaDescription}>{ctaDescription}</p>

                <div className={styles.ctaButtons}>
                  <motion.button
                    className={styles.ctaPrimary}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCtaAgendamento}
                  >
                    <span>{primaryButtonText}</span>
                    <FaArrowRight className={styles.buttonArrow} />
                  </motion.button>

                  <motion.button
                    className={styles.ctaSecondary}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSecondaryButton}
                  >
                    {secondaryButtonText}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}