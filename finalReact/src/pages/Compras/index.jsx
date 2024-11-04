import React, { useState } from 'react';
import * as styles from './Compras.module.css';

export default function Compras() {
	const [escolha, setEscolha] = useState(false)

	return (
		<div className={styles.menu}>
			<div className={styles.seletor}>

				<ul className={styles.exemplos}>
					<li className={styles.exemplo}>
						<div className={styles.selecionado} />
						<p>Selecionado</p>
					</li>
					<li className={styles.exemplo}>
						<div className={styles.vago} />
						<p>Vago</p>
					</li>
					<li className={styles.exemplo}>
						<div className={styles.ocupado} />
						<p>Ocupado</p>
					</li>
				</ul>

				<div className={styles.tela} />

				<div className={styles.fileira}>
					<input
					type='checkbox'
					className={styles.assento}
					checked={escolha}
					onChange={() => setEscolha(!escolha)}
					/>
					<p>{escolha? 'true':'false'}</p>
				</div>
			</div>
		</div>
	)
}
