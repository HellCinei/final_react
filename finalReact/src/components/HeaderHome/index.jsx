import React from 'react';
import * as styles from './HeaderHome.module.css';
import { Link } from 'react-router-dom'

export default function HeaderHome() {
  return (
    <header className={styles.container}>

      <div>
        <ul className={styles.itens}>
          <li className={styles.item}>
            <Link to={"/"}>Home</Link>
          </li>
          {/* <li className={styles.item}>
              <Link to={"/catalogo"}>Catálogo</Link>
            </li> */}
          <li className={styles.item}>
            <Link to={"/compras"}>Compre</Link>
          </li>
          <li className={styles.item}>
            <Link to={"/sobre"}>Sobre</Link>
          </li>
          <li className={styles.item}>
            <Link to={"/login"}>Log-in</Link>
          </li>
        </ul>
      </div>
    </header>

  );
}
