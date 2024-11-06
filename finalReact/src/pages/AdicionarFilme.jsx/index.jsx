import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import * as styles from "./AdicionarFilme.module.css";

// Definindo a validação para o formulário
const validationPost = yup.object().shape({
  titulo: yup.string().required("Título é obrigatório"),
  sinopse: yup.string().required("Sinopse é obrigatória"),
});

const AdicionarFilme = () => {
  const navigate = useNavigate();

  // Função para adicionar filme
  const addPost = (data) => {
    // Verificando os dados que serão enviados
    console.log(data); // Verifique se os dados estão corretos no console
    axios
      .post("http://localhost:8080/filmes", data)
      .then(() => {
        console.log("Filme adicionado com sucesso");
        navigate("/config"); // Após adicionar, redireciona para o catálogo
      })
      .catch(() => console.log("Erro ao adicionar o filme"));
  };

  // Configuração do hook de formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });

  return (
    <div>
      <header>
      <Header />
      </header>
      <main className={styles.menu}>
        <div className={styles.cardPost}>
          <h1>Adicionar Filme</h1>
          <div className={styles.linePost} />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="titulo" className={styles.titulo}>Título</label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Título"
                  {...register("titulo")}
                />
                <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              </div>
              <div className={styles.fields}>
                <label htmlFor="sinopse" className={styles.titulo}>Sinopse</label>
                <input
                  type="text"
                  name="sinopse"
                  id="sinopse"
                  placeholder="Sinopse"
                  {...register("sinopse")}
                />
                <p className={styles.errorMessage}>{errors.sinopse?.message}</p>
              </div>
              <div className={styles.btnPost}>
                <button type="submit">Adicionar Filme</button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default AdicionarFilme;
