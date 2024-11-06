import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Link, useParams } from "react-router-dom";
import * as styles from "./Catalogo.module.css";
import axios from "axios";

export default function Catalogo() {
  const { id } = useParams();
  const [filmes, setFilmes] = useState([]);
  const [filmeDetalhado, setFilmeDetalhado] = useState(null);

  // Carregar a lista de filmes
  useEffect(() => {
    axios
      .get("http://localhost:8080/filmes")
      .then((response) => setFilmes(response.data))
      .catch(() => console.log("Problemas na requisição"));
  }, []);

  // Carregar detalhes de um filme pelo ID (quando o ID é fornecido)
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
        {/* Renderização condicional: exibe apenas os detalhes do filme selecionado se houver um `id` */}
        {filmeDetalhado ? (
          <div className={styles.modal}>
            <h2>{filmeDetalhado.titulo}</h2>
            <p>{filmeDetalhado.sinopse}</p>
            {/* Botão para voltar à lista completa */}
            <button onClick={() => setFilmeDetalhado(null)} className={styles.btnVoltar}>
              Voltar
            </button>
          </div>
        ) : (
          // Exibe a lista de filmes se nenhum filme detalhado estiver selecionado
          <div className={styles.cards}>
            {filmes.map((filme) => (
              <div className={styles.card} key={filme.id}>
                <header className={styles.header}>
                  <h2>{filme.titulo}</h2>
                </header>
                <div className={styles.line} />
                <p>{filme.sinopse}</p>
                <div className={styles.btns}>
                  <div className={styles.btnLerFilmes}>
                    <Link to={`/catalogo/${filme.id}`}>
                      <button>Leia mais</button>
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
