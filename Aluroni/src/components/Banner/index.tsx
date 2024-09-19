import { Outlet } from 'react-router-dom';
import styles from './Banner.module.scss';
import stylesTema from 'styles/Tema.module.scss';

export default function Banner() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do código e da massa
        </div>
      </header>
      <div className={stylesTema.container}>
        <Outlet />
      </div>
    </>
  );
}
