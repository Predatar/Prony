import React from "react";
import { Link } from "react-router-dom";
import "./clientCancel.scss";
const ClientCancel = ({ to, text }) => {
  return (
    <Link to={to} className="client-cancel-link">
      {text}
    </Link>
  );
};

export default ClientCancel;
