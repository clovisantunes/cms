import { motion } from 'framer-motion';
import { FaArrowRight, FaCalendarCheck } from 'react-icons/fa';
import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';
import type React from 'react';

interface BannerPagesProps {
  backgroundImage?: string; 
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  features?: {
    icon?: React.ReactNode;
    text: string;
  }[];
  specialties?: string[];
  style?: 'style1' | 'style2'; 
  geometricBackground?: boolean;
  imagePosition?: 'right' | 'left';
  overlayOpacity?: number;
}

export default function BannerPages({ 
  backgroundImage,
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  features,
  specialties,
  style = 'style1', 
  geometricBackground = true,
  imagePosition = 'right',
}: BannerPagesProps) {
  const location = useLocation();

  const bannerStyle = style; 

  const pathName = location.pathname === '/' 
    ? 'Início' 
    : `Início \\ ${location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2)}`;

 

  const handleButtonClick = () => {
    if (buttonLink) {
      if (buttonLink.startsWith('http')) {
        window.open(buttonLink, '_blank');
      } else {
        window.location.href = buttonLink;
      }
    }
  };

  return (
    <>
      {bannerStyle === 'style1' ? (
        <div className={styles.bannerStyle1}>
          {backgroundImage && (
            <div 
              className={styles.backgroundImage}
              style={{ backgroundImage: `url(${backgroundImage})` }}
            />
          )}
          
          {!backgroundImage && (
            <div className={styles.solidBackground}></div>
          )}
          
          <div className={styles.gradientOverlay}></div>
          
          <div className={styles.container}>
            <div className={styles.contentWrapper}>
              <motion.div 
                className={styles.contentLeft}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={styles.breadcrumb}>
                  <span>{pathName}</span>
                </div>

                <h1 className={styles.title}>{title}</h1>

                {subtitle && (
                  <p className={styles.subtitle}>{subtitle}</p>
                )}

                {description && (
                  <p className={styles.description}>{description}</p>
                )}

                {specialties && specialties.length > 0 && (
                  <div className={styles.specialties}>
                    {specialties.map((specialty, index) => (
                      <span key={index} className={styles.specialtyTag}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                )}

                {features && features.length > 0 && (
                  <div className={styles.features}>
                    {features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <div className={styles.featureIcon}>
                          {feature.icon}
                        </div>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {buttonText && (
                  <motion.button
                    className={styles.ctaButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                    <FaArrowRight className={styles.buttonIcon} />
                  </motion.button>
                )}
              </motion.div>

              {backgroundImage && (
                <motion.div 
                  className={styles.imageRight}
                  initial={{ opacity: 0, x: 30, rotate: 5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className={styles.imageContainer}>
                    <img 
                      src={backgroundImage} 
                      alt={title}
                      className={styles.floatingImage}
                    />
                    <div className={styles.imageGlow}></div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      ) : (
<div className={styles.bannerStyle2}>
  {geometricBackground && (
    <div className={styles.geometricBackground}>
      <div className={styles.geometricShape}></div>
      <div className={styles.geometricPattern}></div>
    </div>
  )}
  
  <div className={styles.container}>
    <div className={`${styles.contentWrapper} ${imagePosition === 'right' ? styles.imageRight : styles.imageLeft}`}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.breadcrumb}>
          {pathName.split(' \\ ').map((item, index, array) => (
            <span key={index}>
              {item}
              {index < array.length - 1 && ' • '}
            </span>
          ))}
        </div>

        <h1 className={styles.title}>{title}</h1>

        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}

        {description && (
          <p className={styles.description}>{description}</p>
        )}
        {features && features.length > 0 && (
          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {feature.icon}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        )}
        {specialties && specialties.length > 0 && (
          <div className={styles.specialties}>
            {specialties.map((specialty, index) => (
              <span 
                key={index} 
                className={styles.specialtyTag}
                style={{
                  background: index % 3 === 0 ? 'rgba(13, 148, 136, 0.1)' : 
                             index % 3 === 1 ? 'rgba(59, 130, 246, 0.1)' : 
                             'rgba(5, 150, 105, 0.1)',
                  color: index % 3 === 0 ? '#0d9488' : 
                         index % 3 === 1 ? '#3b82f6' : 
                         '#059669',
                  border: index % 3 === 0 ? '1px solid rgba(13, 148, 136, 0.2)' : 
                          index % 3 === 1 ? '1px solid rgba(59, 130, 246, 0.2)' : 
                          '1px solid rgba(5, 150, 105, 0.2)'
                }}
              >
                {specialty}
              </span>
            ))}
          </div>
        )}

        {buttonText && (
          <motion.button
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
          >
            <FaCalendarCheck className={styles.buttonIcon} />
            {buttonText}
          </motion.button>
        )}
      </motion.div>

      {backgroundImage && (
        <motion.div 
          className={styles.sideImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.imageWithTransition}>
            <img 
              src={backgroundImage} 
              alt={title}
              className={styles.geometricImage}
            />
            <div className={styles.imageTransition}></div>
          </div>
        </motion.div>
      )}
    </div>
  </div>
</div>
      )
  }</>
  );
}