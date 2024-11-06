import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import * as styles from "./Config.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Footer from "../../components/Footer";

const validationSchema = yup.object().shape({
  titulo: yup
    .string()
    .required("O título deve ser preenchido!")
    .max(40, "Tamanho máximo de caracteres: 40."),
  sinopse: yup
    .string()
    .required("A sinopse deve ser preenchida!")
    .max(80, "Tamanho máximo de caracteres: 80."),
});

export default function Config() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [filmes, setFilmes] = useState([]);
  const [filmeDetalhado, setFilmeDetalhado] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

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
        .then((response) => {
          setFilmeDetalhado(response.data);
          reset(response.data);
        })
        .catch(() => console.log("Erro ao carregar detalhes do filme"));
    }
  }, [id, reset]);

  const editarFilme = (data) => {
    axios
      .put(`http://localhost:8080/filmes/${id}`, data)
      .then(() => {
        console.log("Filme atualizado com sucesso");
        navigate("/config");  
      })
      .catch((error) => console.log("Erro ao atualizar o filme", error));
  };

  function apagar(id) {
    axios
      .delete(`http://localhost:8080/filmes/${id}`)
      .then(() => setFilmes(filmes.filter((filme) => filme.id !== id)))
      .catch(() => console.log("Erro ao apagar o filme"));
  }

  return (
    <div>
      <Header />
      <main className={styles.background}>
        {filmeDetalhado ? (
          <div className={styles.modal}>
            <h2>Editar Filme</h2>
            <form onSubmit={handleSubmit(editarFilme)}>
              <div className={styles.fields}>
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  {...register("titulo")}
                />
                <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              </div>
              <div className={styles.fields}>
                <label htmlFor="sinopse">Sinopse</label>
                <input
                  type="text"
                  name="sinopse"
                  id="sinopse"
                  {...register("sinopse")}
                />
                <p className={styles.errorMessage}>{errors.sinopse?.message}</p>
              </div>
              <button type="submit" className={styles.btnEditar}>
                Editar
              </button>
              <button
                onClick={() => setFilmeDetalhado(null)}
                className={styles.btnVoltar}
              >
                Voltar
              </button>
            </form>
          </div>
        ) : (
          <div className={styles.cards}>
            <button
              onClick={() => navigate("/adicionarfilme")}
              className={styles.btnPostar}
            >
              Postar
            </button>
            {filmes.map((filme) => (
              <div className={styles.card} key={filme.id}>
                <header className={styles.header}>
                  <h2>{filme.titulo}</h2>
                </header>
                <div className={styles.line} />
                <p>{filme.sinopse}</p>
                <div className={styles.btns}>
                  <button onClick={() => navigate(`/config/${filme.id}`)}>
                    Editar
                  </button>
                  <button onClick={() => apagar(filme.id)}>Apagar</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer/>
    </div>
  );
}
