import React, { useState } from 'react';

import styles from './index.module.scss';

const Radio = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={styles.radio + ' ' + `${+active ? styles.radioActive : ''}`}
      onClick={() => setActive(!active)}
    ></div>
  );
};

export default Radio;
