import React from "react";
import { Link } from "react-router-dom";
import ROUTES from "../../../routes/const";
const ClientMain = () => {
  return (
    <div className="clientMain">
      <Link style={{ color: "black" }} to={ROUTES.CLIENT_WORKSPACES}>
        Client Workspaces
      </Link>
    </div>
  );
};

export default ClientMain;
