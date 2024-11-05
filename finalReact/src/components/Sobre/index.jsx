// import React from 'react';
import styles from "../Sobre/sobre.module.css";
import { MdPets } from "react-icons/md";

export default function Sobre() {
  return (
    <div className={styles.sobreContainer}>
      <h3>Sobre</h3>

      <section className={styles.texto}>
        <p>
          O CineMine é um cinema local, que oferece uma experiência única e acolhedora para os amantes da sétima arte. Voltado para todos os públicos, o CineMine combina conforto, tecnologia de ponta e uma programação inperdivel,
             que vai desde os últimos lançamentos de Hollywood até produções independentes e nacionais.
       </p>
        <p>
          Com poltronas confortáveis e salas equipadas com sistema de som e projeção digital de alta definição, o CineMine proporciona uma comforto e diversão total em cada filme. Além disso, o cinema oferece opções de lanches e bebidas cuidadosamente selecionadas, com combos especiais para os cinéfilos mais exigentes.
        </p>
      </section>
      
      <section className={styles.texto}>
        <p>
          Para garantir uma experiência inclusiva, o CineMine conta com uma sala adaptada para autistas, proporcionando um ambiente mais tranquilo e confortável para todos os públicos.
        </p>
        
        <p>e para manter o espaço acolhedor para todos, somos um cinema pet friendly <MdPets className={styles.petIcon} />.
        </p>
      </section>

      <section className={styles.texto}>
        <p>
        O CineMine também realiza eventos especiais, como pré-estreias, noites temáticas e sessões exclusivas com debates pós-filme, onde os espectadores podem trocar ideias e se conectar com outros fãs.
        </p>
      </section>
    </div>
  );
}
