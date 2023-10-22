import React from 'react';

import styles from './index.module.scss';

const Switch = () => {
  return (
    <label style={{ cursor: 'pointer' }}>
      <input type="checkbox" className={styles.input}/>
      <span className={styles.circle}></span>
      <span className={styles.back}></span>
    </label>
  );
};

export default Switch;
