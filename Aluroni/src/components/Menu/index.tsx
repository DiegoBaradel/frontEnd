import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {

  const listaMenu = [{ label: 'Inicio', to: '/' }, { label: 'Cardapio', to: '/Cardapio' }, { label: 'Sobre', to: '/Sobre' },];
  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {listaMenu.map((link, index) => (
          <li className={styles.menu__link} key={index}>
            <Link to={link.to}> {link.label} </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}