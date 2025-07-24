import { useState } from 'react';
import styles from './styles.module.scss';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsApp() {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  const handleClick = () => {
    if (!widgetLoaded) {
      const script = document.createElement('script');
      script.type = 'module';
      script.innerHTML = `
        import Chatbox from 'https://cdn.jsdelivr.net/npm/@chatvolt/embeds@latest/dist/chatbox/index.js';

        const widget = await Chatbox.initBubble({
          agentId: 'cmd7asses0bfap8n4qsnvsnub',
          contact: {
            firstName: 'Clovis',
            lastName: 'Antunes',
            email: 'clovis@email.com',
            phoneNumber: '+555181399275',
          },
          interface: {
            initialMessages: [
              'Olá! 👋 Em que posso te ajudar?',
              'Fique à vontade para mandar sua dúvida :)',
            ],
          },
          context: "O usuário é de Sapiranga - RS e deseja informações sobre serviços de desenvolvimento web e assistência técnica.",
        });

        window.chatvoltWidget = widget;
      `;
      document.body.appendChild(script);
      setWidgetLoaded(true);
    } else {
      // Usa a referência global para controlar o widget
      // @ts-ignore
      window.chatvoltWidget?.toggle?.();
    }
  };

  return (
    <button
      className={styles.whatsButton}
      onClick={handleClick}
      aria-label="Abrir chat"
    >
      <FaWhatsapp size={28} />
    </button>
  );
}
