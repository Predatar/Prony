import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const ClientLinks = ({ to, icon, text, width, onClick, theme, background }) => {
  return (
    <Link
      to={to}
      className={styles.clientlink + " " + styles[theme]}
      style={{ "--width": `${width}px`, background: background }}
      onClick={onClick}
    >
      {icon && icon} {text}
    </Link>
  );
};

export default ClientLinks;
