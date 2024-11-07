import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import * as styles from './Compras.module.css';
import { useNavigate } from 'react-router-dom';

export default function Compras() {
	let Navigate = useNavigate();
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
				<Header />
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
							<input id='1' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='2' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='3' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='4' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='5' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='6' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='7' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input id='8' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='9' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='10' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='11' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='12' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='13' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='14' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='15' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input id='16' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='17' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='18' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='19' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='20' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='21' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='22' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='23' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input id='24' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='25' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='26' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='27' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='28' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='29' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='30' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='31' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input id='32' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='33' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='34' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='35' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='36' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='37' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='38' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='39' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='40' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
						<div className={styles.fileira}>
							<input id='41' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='42' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='43' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='44' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='45' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='46' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='47' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='48' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
							<input id='49' type='checkbox' className={styles.assento} onChange={(e) => contar(e.target.checked)} />
						</div>
					</div>
					<p className={styles.texto}>
						Foram selecionados <span className={styles.valor}>{contagem}</span> assentos para um total de R$ <span className={styles.valor}>{valor}</span>
					</p>
					<button onClick={() => {Navigate("/pagamento")}} className={styles.botao}>Finalizar</button>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}