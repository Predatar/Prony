import React from "react";
import { Link } from "react-router-dom";
import { IoMdCreate } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { BsFillPlayFill } from "react-icons/bs";
import ROUTES from "../../../../../routes/const";
import "./workspacesItem.scss";
const WorkspacesItem = () => {
  return (
    <div className="workspaces-item">
      <div className="workspaces-item__body">
        <div className="workspaces-item__left">
          <div className="workspaces-item__name">Name of workspace</div>
        </div>
        <div className="workspaces-item__center">
          <div className="workspaces-item__domain">Subdomain_or_domain.com</div>
        </div>
        <div className="workspaces-item__right">
          <div className="workspaces-item__buttons">
            <Link
              to={ROUTES.CLIENT_WORKSPACES_EDIT}
              className="workspaces-item__button"
            >
              <IoMdCreate />
            </Link>
            <Link
              to={ROUTES.CLIENT_WORKSPACES_DELETE}
              className="workspaces-item__button"
            >
              <MdCancel />
            </Link>
            <button className="workspaces-item__button">
              <BsFillPlayFill style={{ fill: "#6FCF97" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacesItem;
