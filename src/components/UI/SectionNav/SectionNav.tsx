import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const sections = [
    { id: 'historia', label: 'Nossa História' },
    { id: 'missao', label: 'Nossa Missão' },
    { id: 'principios', label: 'Nossos princípios' },
    { id: 'estrutura', label: 'Nossa Estrutura' },
];

export default function SectionNav() {
    const [activeId, setActiveId] = useState<string>('historia');

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 580;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const top = el.offsetTop;
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
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        <div
            className={`${styles.sectionNav} ${scrolled ? styles.sticky : ''}`}
            style={{
                position: scrolled ? 'fixed' : 'relative',
                top: scrolled ? '20px' : 'auto',
                left: scrolled ? '14%' : 'auto',
                zIndex: scrolled ? 1000 : 'auto',
            }}
            >
    {sections.map((section) => {
        const isActive = activeId === section.id;
        return (
            <button
                key={section.id}
                className={`${styles.button} ${isActive ? styles.active : ''}`}
                onClick={() => scrollTo(section.id)}
                style={{
                    backgroundColor: isActive ? '#006b45' : '#fff',
                    color: isActive ? '#fff' : '#000',
                }}
            >
                {section.label}
            </button>
        );
    })}
        </div>
        { scrolled && (
            <div  style={{height: "7em", widows: "100%", marginTop: "40px"}}/>
        )}
            </>
    );
}
