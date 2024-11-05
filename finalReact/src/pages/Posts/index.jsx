import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import * as styles from "./Posts.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const validationPost = yup.object().shape({
  titulo: yup
    .string()
    .required("O título deve ser preenchido!")
    .max(40, "Tamanho máximo de caracteres: 40."),
  descricao: yup
    .string()
    .required("A descrição deve ser preenchida!")
    .max(80, "Tamanho máximo de caracteres: 80."),
  conteudo: yup
    .string()
    .required("O conteúdo deve ser preenchido!")
    .max(120, "Tamanho máximo de caracteres: 120."),
});

export default function Posts() {
  let navigate = useNavigate();

  const addPost = (data) => {
    axios
      .post("http://localhost:8080/filmes", data)
      .then(() => {
        console.log("OK");
        navigate("/");
      })
      .catch(() => console.log("KO"));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationPost) });
  return (
    <div>
      <Header />
      <main>
        <div className={styles.cardPost}>
          <h1>Criar Postagem</h1>
          <div className={styles.linePost} />
          <div className={styles.cardBodyPost}>
            <form onSubmit={handleSubmit(addPost)}>
              <div className={styles.fields}>
                <label htmlFor="titulo"></label>
                <input
                  type="text"
                  name="titulo"
                  id="titulo"
                  placeholder="Titulo"
                  {...register("titulo")}
                />
                <p className={styles.errorMessage}>{errors.titulo?.message}</p>
              </div>
              <div className={styles.fields}>
                <label htmlFor="descricao"></label>
                <input
                  type="text"
                  name="descricao"
                  id="descricao"
                  placeholder="Descrição"
                  {...register("descricao")}
                />
                <p className={styles.errorMessage}>
                  {errors.descricao?.message}
                </p>
              </div>
              <div className={styles.fields}>
                <label htmlFor="conteudo"></label>
                <textarea
                  type="text"
                  name="conteudo"
                  id="conteudo"
                  placeholder="Conteúdo"
                  cols="30"
                  rows="10"
                  {...register("conteudo")}
                />
                <p className={styles.errorMessage}>
                  {errors.conteudo?.message}
                </p>
                <div className={styles.btnPost}>
                  <button type="submit">Postar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
         
    </div>
  );
}
