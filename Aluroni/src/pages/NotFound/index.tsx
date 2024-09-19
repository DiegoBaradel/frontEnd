import classNames from 'classnames';
import styles from './NotFound.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { ReactComponent as NotFaoundImage } from 'assets/not_found.svg';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navegate = useNavigate();

  return (
    <div className={classNames({
      [styles.container]: true,
      [stylesTema.container]: true
    })}>
      <div className={styles.voltar}>
        <button onClick={()=> navegate(-1)}>
          {'< Voltar'}
        </button>
      </div>
      <NotFaoundImage />
    </div>
  );
}