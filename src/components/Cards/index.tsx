import styles from './styles.module.scss';
import { FaTooth, FaHeartbeat, FaMicroscope, FaProcedures, FaUserMd } from 'react-icons/fa';

const items = [
  { title: 'Odontologia', icon: <FaTooth /> },
  { title: 'Especialidades', icon: <FaHeartbeat /> },
  { title: 'Exames', icon: <FaMicroscope /> },
  { title: 'Procedimentos', icon: <FaProcedures /> },
  { title: 'Medicina do Trabalho', icon: <FaUserMd /> },
];

export const Cards = () => {
  return (
    <section className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icon}>{item.icon}</div>
          <h3>{item.title}</h3>
        </div>
      ))}
    </section>
  );
};
