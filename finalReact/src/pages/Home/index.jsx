import React from 'react'
import * as styles from './Home.module.css';
import Carousel from '../../components/Carousel';
import HeaderHome from '../../components/HeaderHome';
import Footer from '../../components/Footer';
import Combos from '../../components/Combos';


export default function Home() {

  const images = [

    '../../src/robo.jpg',
    '../../src/sorria.jpg',
    '../../src/venom.jpg',
  ];


  return (
    <div>
      <header>
        <HeaderHome/>
      </header>
      <main className={styles.home}>
        <h1>Bem vindos ao CineTOP</h1>
        <p>Assista aos melhores filmes e aproveite nossos combos de pipoca</p>
        <main>
          <Carousel images={images} />
          <Combos />
        </main>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
