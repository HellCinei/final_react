import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderFeed from "../../components/HeaderFeed";
import * as styles from "./Feed.module.css";
import axios from "axios";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/filmes")
      // .get("https://6722c0482108960b9cc577e6.mockapi.io/posts")
      .then((response) => {
        console.log("OK");
        setPosts(response.data);
      })
      .catch(() => console.log("Problemas na requisição"));
  }, []);

  function apagar(id) {
    axios
      .delete(`http://localhost:8080/filmes/${id}`)
      .then(() => {
        console.log("Post apagado!");
        setPosts(posts.filter((post) => post.id !== id));
      });
  }

  return (
    <div>
      <HeaderFeed />
      <main>
        <div className={styles.cards}>
          {posts.map((post, key) => (
            <div className={styles.card} key={key}>
              <header className={styles.header}>
                <h2>{post.titulo}</h2>
              </header>
              <div className={styles.line} />
              <p>{post.descricao}</p>
              <div className={styles.btns}>
                <div className={styles.btnEdit}>
                  <Link to={`/update/${post.id}`}>
                    <button>Editar</button>
                  </Link>
                </div>
                <div className={styles.btnReadMore}>
                  <Link to={`/more/${post.id}`}>
                    <button>Leia mais</button>
                  </Link>
                </div>
                <div className={styles.btnDelete}>
                  <button onClick={() => apagar(post.id)}>Apagar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
