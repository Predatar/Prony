import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

import logo from '../../img/logo.svg';

const Logo = ({ url = '*', size }) => {
  return (
    <Link to={url} className={`logo logo_${size}`}>
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
