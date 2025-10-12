import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const sections = [
    { id: 'historia', label: 'Nossa História' },
    { id: 'missao', label: 'Missão & Valores' },
    { id: 'principios', label: 'Princípios' },
    { id: 'estrutura', label: 'Estrutura' },
];

export default function SectionNav() {
    const [activeId, setActiveId] = useState<string>('historia');
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 560;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Controle da seção ativa
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop - 100; // Offset para ativar antes
                    const height = el.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveId(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            // Offset para considerar o header fixo
            const offsetTop = el.offsetTop - (scrolled ? 100 : 140);
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <nav className={`${styles.sectionNav} ${scrolled ? styles.sticky : ''} ${isMobile ? styles.mobile : ''}`}>
                <div className={styles.navContainer}>
                    {sections.map((section) => {
                        const isActive = activeId === section.id;
                        return (
                            <button
                                key={section.id}
                                className={`${styles.navButton} ${isActive ? styles.active : ''}`}
                                onClick={() => scrollTo(section.id)}
                                aria-label={`Ir para ${section.label}`}
                            >
                                <span className={styles.buttonText}>{section.label}</span>
                                <div className={styles.activeIndicator}></div>
                            </button>
                        );
                    })}
                </div>
            </nav>
            
            {scrolled && <div className={styles.spacer} />}
        </>
    );
}