import React from "react";
import * as styles from "./HeaderHome.module.css";
import { Link } from "react-router-dom";
export default function HeaderHome() {
  return (
    <div>
      <header className={styles.headerPrincipal}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <h1> Posts Crud React</h1>
          </div>
          <div className={styles.btnNewPost}>
            <Link to={"/posts"}>
              <button> Novo Post</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
