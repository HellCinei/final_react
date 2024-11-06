import React from 'react'; 
import * as styles from './Header.module.css';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className={styles.container}>

      <div>
        <ul className={styles.itens}>
            <li className={styles.item}>
              <Link className={styles.link} to={"/"}>
              Home
              </Link>
            </li>
            {/* <li className={styles.item}>
              <Link className={styles.link} to={"/catalogo"}>
              Catálogo
              </Link>
            </li> */}
            <li className={styles.item}>
            <Link className={styles.link} to={"/compras"}>
              Compre
            </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to={"/sobre"}>
              Sobre
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to={"/login"}>
              Log-in
              </Link>
            </li>
        </ul>
      </div>
    </header>
  );
}
