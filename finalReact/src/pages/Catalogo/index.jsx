import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import * as styles from "./Catalogo.module.css";
import axios from "axios";

export default function Catalogo() {
  const { id } = useParams();
  const [filmes, setFilmes] = useState([]);
  const [filmeDetalhado, setFilmeDetalhado] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/filmes")
      .then((response) => setFilmes(response.data))
      .catch(() => console.log("Problemas na requisição"));
  }, []);

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:8080/filmes/${id}`)
        .then((response) => setFilmeDetalhado(response.data))
        .catch(() => console.log("Erro ao carregar detalhes do filme"));
    }
  }, [id]);

  return (
    <div>
      <Header />
      <main>
        {filmeDetalhado ? (
          <div className={styles.modal}>
            <h2 className={styles.titulo}>{filmeDetalhado.titulo}</h2>
            <p className={styles.sinopse}>{filmeDetalhado.sinopse}</p>
            <Link to={`/catalogo`}>
            <button onClick={() => setFilmeDetalhado(null)} className={styles.btnVoltar}>
              Voltar
            </button>
            </Link>
          </div>
        ) : (
          <div className={styles.cards}>
            {filmes.map((filme) => (
              <div className={styles.card} key={filme.id}>
                <header className={styles.header}>
                  <h2 className={styles.titulo}>{filme.titulo}</h2>
                </header>
                <div className={styles.line} />
                <p  className={styles.sinopse}>{filme.sinopse}</p>
                <div className={styles.btns}>
                  <div className={styles.btnLerFilmes}>
                    <Link to={`/catalogo/${filme.id}`}>
                      <button className={styles.btnL}>Leia mais</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
