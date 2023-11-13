import React from "react";
import "./inputClient.scss";

const InputClient = ({
  placeholder,
  width = 370,
  type,
  name,
  onBlur,
  onChange,
  value,
  errors,
}) => {
  return (
    <input
      type={type}
      name={name}
      className={`${errors ? "input-client _error" : "input-client"}`}
      style={{ width: width }}
      placeholder={placeholder}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
    ></input>
  );
};

export default InputClient;
