import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";
import * as styles from "./More.module.css";
import axios from "axios";
export default function More() {
  const { id } = useParams();
  const [readMore, setReadMore] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/filmes/${id}`)
      .then((response) => {
        setReadMore(response.data);
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
      <div className={styles.cards}>
        <div className={styles.card}>
          <header>
            <h2>{readMore.titulo}</h2>
          </header>
          <div className={styles.line}>
            <p> {readMore.conteudo}</p>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
