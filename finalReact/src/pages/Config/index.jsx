import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as styles from "./Config.module.css";
import axios from "axios";

export default function Config() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filmes, setFilmes] = useState([]);
  const [filmeDetalhado, setFilmeDetalhado] = useState(null);

  // Carregar lista de filmes
  useEffect(() => {
    axios.get("http://localhost:8080/filmes")
      .then((response) => setFilmes(response.data))
      .catch(() => console.log("Problemas na requisição"));
  }, []);

  // Carregar detalhes do filme pelo ID
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/filmes/${id}`)
        .then((response) => setFilmeDetalhado(response.data))
        .catch(() => console.log("Erro ao carregar detalhes do filme"));
    }
  }, [id]);

  // Função para apagar um filme
  function apagar(id) {
    axios.delete(`http://localhost:8080/filmes/${id}`)
      .then(() => setFilmes(filmes.filter((filme) => filme.id !== id)))
      .catch(() => console.log("Erro ao apagar o filme"));
  }

  return (
    <div>
      <Header />
      <main>
        {filmeDetalhado ? (
          <div className={styles.modal}>
            <h2>{filmeDetalhado.titulo}</h2>
            <p>{filmeDetalhado.descricao}</p>
            <button onClick={() => setFilmeDetalhado(null)} className={styles.btnVoltar}>
              Voltar
            </button>
          </div>
        ) : (
          <div className={styles.cards}>
            {filmes.map((filme) => (
              <div className={styles.card} key={filme.id}>
                <header className={styles.header}>
                  <h2>{filme.titulo}</h2>
                </header>
                <div className={styles.line} />
                <p>{filme.sinopse}</p>
                <div className={styles.btns}>
                  <div className={styles.btnReadMore}>
                    <Link to={`/config/${filme.id}`}>
                      <button>Leia mais</button>
                    </Link>
                  </div>
                  <div className={styles.btnDelete}>
                    <button onClick={() => apagar(filme.id)}>Apagar</button>
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
