import React from "react";

import styles from "./index.module.scss";

const ClientButton = ({ icon, text, width, onClick, theme, background }) => {
  return (
    <button
      className={styles.clientbutton + " " + styles[theme]}
      style={{ "--width": `${width}px`, background: background }}
      onClick={onClick}
    >
      {icon && icon} {text}
    </button>
  );
};

export default ClientButton;
