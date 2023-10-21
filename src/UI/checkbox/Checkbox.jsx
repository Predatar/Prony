import React from 'react'

import styles from './index.module.scss';

const Checkbox = ({name}) => {
	return (
		<label>
			<input type="checkbox" name={name}  className={styles.input}/>
			<span className={styles.box}></span>
			<span className={styles.check}></span>
		</label>
	)
}

export default Checkbox