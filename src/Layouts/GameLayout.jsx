import React from 'react';
import { Field } from '../components/Field';
import { Information } from '../components/Information';
import styles from './GameLayout.module.css'

export function GameLayout(props) {
	return (
			<div className={styles.game}>
			<Information {...props}/>
			<Field {...props}/>
			</div>
	);
}
