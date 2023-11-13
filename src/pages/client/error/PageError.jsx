import React from "react";
import "./error.scss";
import ClientLinks from "../../../UI/clientLinks/ClientLinks";
import ROUTES from "../../../routes/const";
import img404 from "../../../img/errors/404.svg";
const PageError = ({ onClick }) => {
  return (
    <div className="error">
      <div className="error__body">
        <div className="error__top">SOMETHING wrong</div>
        <div className="error__center">
          <img src={img404} alt="" />
          <span>
            This page is missing or you assembled the link incorrectly
          </span>
        </div>
        <div className="error__bottom">
          <ClientLinks
            onClick={()  => onClick}
            theme={"clientlink_primary"}
            to={ROUTES.CLIENT_WORKSPACES}
            text={"To home page"}
          />
        </div>
      </div>
    </div>
  );
};

export default PageError;
