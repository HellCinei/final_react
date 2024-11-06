import React, { useEffect, useState } from 'react';
import * as styles from './Compras.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Compras() {
	const [contagem, setContagem] = useState(0);
	const [valor, setValor] = useState(0);
	const [filme, setFilme] = useState(10.5);

	function contar(marcado) {
		if (marcado == true) {
			setContagem(contagem + 1);
		} else {
			setContagem(contagem - 1);
		}
	}

	useEffect(() => {
		setValor(contagem * filme);
	}, [{ contagem }])

	return (
		<div>
			<header>
				<Header/>
			</header>
			<main className={styles.menu}>
				<div className={styles.seletor}>

					<ul className={styles.exemplos}>
						<li className={styles.exemplo}>
							<div className={`${styles.assento} ${styles.selecionado}`} />
							<p>Selecionado</p>
						</li>
						<li className={styles.exemplo}>
							<div className={`${styles.assento} ${styles.vago}`} />
							<p>Vago</p>
						</li>
						<li className={styles.exemplo}>
							<div className={`${styles.assento} ${styles.ocupado}`} />
							<p>Ocupado</p>
						</li>
					</ul>

					<div className={styles.cinema}>
						<div className={styles.tela} />

						<div className={styles.fileira}>
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
					</div>
					<p className={styles.texto}>
						Foram selecionados <span className={styles.valor}>{contagem}</span> assentos para um total de R$ <span className={styles.valor}>{valor}</span>
					</p>
					<button>Finalizar</button>
				</div>
			</main>
			<footer>
				<Footer/>
			</footer>
		</div>
	)
}