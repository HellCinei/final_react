import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as styles from './Pagamento.module.css';
import { useNavigate } from 'react-router-dom';

export default function Pagamento() {
	let Navigate = useNavigate();

	const voltar = () => {
		alert('Pagamento efetuado com sucesso!')
		Navigate("/")
	}

	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<main className={styles.menu}>
					<div className={styles.conjuntoInput}>
					<label className={styles.descricao}>Nome:</label>
					<input className={styles.input} type="text" />
					</div>
					<div className={styles.conjuntoInput}>
					<label className={styles.descricao}>C.P.F.:</label>
					<input className={styles.input} type="text" />
					</div>
					<div className={styles.conjuntoInput}>
					<label className={styles.descricao}>Número do cartão de crédito:</label>
					<input className={styles.input} type="text" />
					</div>
					<button onClick={voltar} className={styles.botao}>Pagar</button>
				</main>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}
