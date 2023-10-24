import React from 'react';

import styles from './index.module.scss';

const Btn = ({ text, width, onClick, theme }) => {
  return (
    <button  className={styles.btn + ' ' + styles[theme]} style={{ '--width': `${width}px` }} onClick={onClick}  > 
      {text}
    </button>
  );
};

export default Btn;
