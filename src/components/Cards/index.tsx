import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { FaTooth, FaHeartbeat, FaMicroscope, FaProcedures, FaUserMd } from 'react-icons/fa';

const items = [
  { title: 'Odontologia', icon: <FaTooth />, link: '/odontologia/' },
  { title: 'Especialidades', icon: <FaHeartbeat />, link: '/ParaVoce#ESPECIALIDADES' },
  { title: 'Exames', icon: <FaMicroscope />, link: '/exames-complementares' },
  { title: 'Procedimentos', icon: <FaProcedures />, link: '/ParaVoce#procedimentos' },
  { title: 'Medicina do Trabalho', icon: <FaUserMd />, link: '/Para-sua-Empresa' },
];

export const Cards = () => {
  return (
    <section className={styles.container}>
      {items.map((item, index) => (
        <Link key={index} to={item.link} className={styles.card}>
          <div className={styles.icon}>{item.icon}</div>
          <h3>{item.title}</h3>
        </Link>
      ))}
    </section>
  );
};
