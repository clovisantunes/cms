import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

declare global {
  interface Window {
    chatvoltWidget?: {
      toggle?: () => void;
    };
  }
}

export default function WhatsApp() {
  const [widgetReady, setWidgetReady] = useState(false);
  useEffect(() => {
    const loadWidget = async () => {
      if (window.chatvoltWidget) return;

      try {
        const script = document.createElement('script');
        script.type = 'module';
        script.innerHTML = `
          import Chatbox from 'https://cdn.jsdelivr.net/npm/@chatvolt/embeds@latest/dist/chatbox/index.js';

          const widget = await Chatbox.initBubble({
            agentId: 'cmd7asses0bfap8n4qsnvsnub'
          });

          window.chatvoltWidget = widget;
          window.dispatchEvent(new CustomEvent('chatvoltWidgetReady'));
        `;
        document.body.appendChild(script);

        await new Promise((resolve) => {
          window.addEventListener('chatvoltWidgetReady', resolve, { once: true });
          setTimeout(resolve, 3000);
        });

        setWidgetReady(true);
      } catch (error) {
        console.error('Erro ao carregar widget:', error);
      }
    };

    loadWidget();
  }, []);

  const handleClick = () => {
    if (!widgetReady) {
      console.log('Widget ainda não está pronto...');
      return;
    }

    window.chatvoltWidget?.toggle?.();
  };

  return (
    <button
      className={styles.whatsButton}
      onClick={handleClick}
      disabled={!widgetReady}
      aria-label="Abrir chat"
    >
    </button>
  );
}