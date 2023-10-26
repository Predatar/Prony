import React, { useState } from "react";

import styles from "./index.module.scss";

const Checkbox = ({ name, onClick }) => {
  return (
    <label onClick={onClick}>
      <input type="checkbox" name={name} className={styles.input} />
      <span className={styles.box}></span>
      <span className={styles.check}></span>
    </label>
  );
};

export default Checkbox;
