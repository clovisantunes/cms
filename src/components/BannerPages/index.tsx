import styles from './styles.module.scss';
import { useLocation } from 'react-router-dom';

interface BannerPagesProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
}

export default function BannerPages({ backgroundImage, title, subtitle }: BannerPagesProps) {
  const location = useLocation();

  const pathName = location.pathname === '/' 
    ? 'Início' 
    : `Início \\ ${location.pathname.replace('/', '').charAt(0).toUpperCase() + location.pathname.slice(2)}`;

  return (
    <div 
      className={styles.banner} 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.bannerContent}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <div className={styles.path}>
        {pathName}
      </div>
    </div>
  );
}
