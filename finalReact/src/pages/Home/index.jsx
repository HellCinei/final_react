import React from 'react'
import * as styles from './Home.module.css';
import Carousel from '../../components/Carousel';

import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import Combos from '../../components/Combos';
import { Link, useNavigate } from 'react-router-dom';

export default function Home() {

  let Navigate = useNavigate()

  const images = [

    
    '../../src/assets/robo.jpg',
    '../../src/assets/sorria.jpg',
    '../../src/assets/venom.jpg',
    '../../src/assets/terrifier.jpg',
  ];


  return (
    <div>
      <header>
        <HeaderHome/>
      </header>
      
      <div>
      <main className={styles.home}>

        <h1 className={styles.titulo}>Bem vindos ao CineMine</h1>
        <p className={styles.subtitulo}>Assista aos melhores filmes e aproveite nossos combos de pipoca</p>
        <main className={styles.corpo}>
          <Carousel images={images} />
          <Combos />
          <button onClick={()=>{Navigate('/catalogo')}} className={styles.btn} >
         
          Acesse nosso catálogo
             
     
    </button>
        </main>
        
      </main>
        </div>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
