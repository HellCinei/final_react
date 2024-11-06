import React from 'react'; 
import * as styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      
      <div>
        <ul className={styles.itens}>
          <li className={styles.item1}>Home</li>
          
          <li className={styles.item2}>Login</li>
          
          
        <li className={styles.item3}>Compre</li>
        
          <li className={styles.item4}>Item 4</li>

          <li className={styles.item5}>Sobre</li>
        </ul>
      </div>
    </header>
  );
}
