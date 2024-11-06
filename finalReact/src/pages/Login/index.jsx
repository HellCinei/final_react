import React from "react";
import * as styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit
  } = useForm();

    let Navigate = useNavigate();
    const logar = () => {
     alert('Login efetuado com sucesso!')
    Navigate("/")
    }
  
  const addLogin = (data) => console.log(data);
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className={styles.cardLogin}>
          <h1>Faça seu Login</h1>
          <div className={styles.lineLogin} />
          <div className={styles.cardBodyLogin}>
            <form onSubmit={handleSubmit(addLogin)}>
              <div className={styles.fields}>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  {...register("email")}
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
                <button onClick={logar}>Logar</button>
     
                <p>Entrar com o Google ou Facebook</p>
                <p>Esqueceu a senha?</p>
               
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
}
