import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";
import { useInView } from 'react-intersection-observer';
import styles from './styles.module.scss';

type TimelineItemType = {
  left?: string;
  right?: string;
 
};

interface AlternatingTimelineProps {
  items: TimelineItemType[];
   line: 'timelineLine' | 'timelineLineAlt';
}

export default function AlternatingTimeline({ items, line }: AlternatingTimelineProps) {
  return (
    <div className={styles.timelineContainer}>
      <div className={`${styles.timelineLine} ${line === 'timelineLineAlt' ? styles.timelineLineAlt : ''}`}></div>
      <div className={styles.timelineItems}>
        {items.flatMap((item, index) => [
          item.left && (
            <TimelineItem 
              key={`left-${index}`} 
              text={item.left} 
              position="left" 
              isFirst={index === 0}
              isLast={false}
            />
          ),
          item.right && (
            <TimelineItem 
              key={`right-${index}`} 
              text={item.right} 
              position="right" 
              isFirst={false}
              isLast={index === items.length - 1 && !items[index+1]?.left}
            />
          )
        ]).filter(Boolean)}
      </div>
    </div>
  );
  }

interface TimelineItemProps {
  text: string;
  position: 'left' | 'right';
  isFirst: boolean;
  isLast: boolean;
}

function TimelineItem({ text, position, isFirst, isLast }: TimelineItemProps) {
const [ref, inView] = useInView({
  threshold: 0.5,
  triggerOnce: false,
});
const [hasBeenCentered, setHasBeenCentered] = React.useState(false);

const localRef = React.useRef<HTMLDivElement | null>(null);

const combinedRef = React.useCallback((node: HTMLDivElement | null) => {
  ref(node); 
  localRef.current = node; 
}, [ref]);


React.useEffect(() => {
  if (inView) {
    const checkCentered = () => {
      const element = localRef.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const isElementCentered =
          elementCenter > windowHeight * 0.4 &&
          elementCenter < windowHeight * 0.6;

        if (isElementCentered && !hasBeenCentered) {
          setHasBeenCentered(true);
        }
      }
    };

    checkCentered();

    window.addEventListener("scroll", checkCentered);
    return () => {
      window.removeEventListener("scroll", checkCentered);
    };
  }
}, [inView, hasBeenCentered]);

return (
  <div
  ref={combinedRef}
  className={`${styles.timelineItem} ${styles[position]} ${
    inView ? styles.visible : ''
  } ${isFirst ? styles.firstItem : ''} ${isLast ? styles.lastItem : ''}`}
>
  <div className={styles.itemContent}>
    {position === 'left' && (
      <div
        className={`${styles.textCard} ${
          hasBeenCentered ? styles.activeCard : ''
        }`}
      >
        <p>{text}</p>
      </div>
    )}

    <div
      className={`${styles.timelineIcon} ${
        hasBeenCentered ? styles.activeIcon : ''
      }`}
    >
      <BsCheckCircleFill />
    </div>

    {position === 'right' && (
      <div
        className={`${styles.textCard} ${
          hasBeenCentered ? styles.activeCard : ''
        }`}
      >
        <p>{text}</p>
      </div>
    )}
  </div>
</div>

);}
