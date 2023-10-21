import React from 'react';

import styles from './index.module.scss';

const Radio = ({ name }) => {
  return (
    <label className={styles.label}>
      <input type="radio" name={name} className={styles.input}/>
      <span className={styles.radio}></span>
    </label>
  );
};

export default Radio;
