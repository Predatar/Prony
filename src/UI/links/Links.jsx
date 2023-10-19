import React from 'react';

import {Link} from 'react-router-dom';

import styles from './index.module.scss';

const Links = ({ text, width, to, theme}) => {
  return (
    <Link to={to} className={styles.link + ' ' + styles[theme]} style={{ '--width': `${width}px` }}>
      {text}
    </Link>
  );
};

export default Links;
