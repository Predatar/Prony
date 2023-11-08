import React from "react";

import styles from "./index.module.scss";

const ClientLinks = ({ to, icon, text, width, onClick, theme, background }) => {
  return (
    <Link
      to={to}
      className={styles.clientbutton + " " + styles[theme]}
      style={{ "--width": `${width}px`, background: background }}
      onClick={onClick}
    >
      {icon && icon} {text}
    </Link>
  );
};

export default ClientLinks;
