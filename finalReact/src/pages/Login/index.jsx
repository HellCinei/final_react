import React from "react";
import * as styles from "./Login.module.css";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit
    // formState: {},
  } = useForm();

  const addLogin = (data) => console.log(data);
  return (
    <div>
      <main>
        <div className={styles.cardLogin}>
          <h1>Faça seu Login</h1>
          <div className={styles.lineLogin} />
          <div className={styles.cardBodyLogin}>
            <form onSubmit={handleSubmit(addLogin)}>
              <div className={styles.fields}>
                <label htmlFor="nome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  {...register("nome")}
                />
              </div>

              <div className={styles.fields}>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  {...register("senha")}
                />
              </div>

              <div className={styles.btnLogar}>
                <button type="submit">Logar</button>
                
                <p>Entrar com o Google ou Facebook</p>
                <p>Esqueceu a senha?</p>
               
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
