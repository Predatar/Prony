import React from "react";

import styles from "./index.module.scss";

const ClientButton = ({
  icon,
  text,
  width,
  onClick,
  theme,
  background,
  type,
}) => {
  return (
    <button
      className={styles.clientbutton + " " + styles[theme]}
      style={{ "--width": `${width}px`, background: background }}
      onClick={onClick}
      type={type}
    >
      {icon && icon} {text}
    </button>
  );
};

export default ClientButton;
