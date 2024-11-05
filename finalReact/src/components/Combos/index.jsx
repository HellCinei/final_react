import React from 'react'
import *  as styles from './Combos.module.css'


export default function Combos() {

    const combos = [
        { id: 1, name: '1 Balde de Pipoca Star Wars Jedi & 1 Balde de Pipoca Star Wars Primeira Ordem', price: 40.00 , imageUrl: '../../src/combo1.jpg', link: '/catalogo' },
        { id: 2, name: '1 Balde de Pipoca Aves de Rapina, 1 Balde de pipoca no formato de marreta da personagem Alerquina & 1 Copo Mulan garanta já seu copo no formato de uma espada, 500ml. por APENAS : R$: 63,90', imageUrl: '../../src/combo2.jpg', link: '/catalogo' },
        { id: 3, name: '4 Copos John Wick, Produto exclusivo do filme John Wick 4, copo cafebucks com aproximadamente 750ml. por APENAS: R$120,00', imageUrl: '../../src/combo3.jpg', link: '/catalogo' }
      ];


  return (
    <div className={styles.container}>
    <div className={styles.comboSection}>
      {combos.map((combo) => (
        <a key={combo.id} className={styles.combo}>
          <img src={combo.imageUrl} alt={combo.name} />
          <h3>{combo.name}</h3>
          <span className={styles.price}>R${combo.price} </span>
        </a>
      ))}

{/* 
      <a key='1' className={styles.combo}>
        <div>
      <img src='../../src/combo1.jpg' />
      <p>1 Balde de Pipoca Star Wars Jedi & 1 Balde de Pipoca Star Wars Primeira Ordem. Por APENAS:</p>
      <span className={styles.valor}>R$38,90</span>
      </div>

      
      <div>
      <img src='../../src/combo1.jpg' />
      <p>1 Balde de Pipoca Star Wars Jedi & 1 Balde de Pipoca Star Wars Primeira Ordem. Por APENAS:</p>
      <span className={styles.valor}>R$38,90</span>
      </div> */}






{/* 
      </a> */}


    </div>
    </div>
  )
}
