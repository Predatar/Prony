import React from "react";
import "./popupWork.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../../../../routes/const";
const PopupWorkspaces = ({ active }) => {
  return (
    active && (
      <div className="popup">
        <div className="popup__body">
          <ul className="popup__list">
            <li className="popup__list-item">
              <Link to={ROUTES.CLIENT_WORKSPACES} className="popup__list-link">
                Workspaces
              </Link>
            </li>
            <li className="popup__list-item">
              <Link
                to={ROUTES.CLIENT_WORKSPACES_PROFILE}
                className="popup__list-link"
              >
                Profile
              </Link>
            </li>
            <li className="popup__list-item">
              <Link to={ROUTES.DASHBOARD_HOME} className="popup__list-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};

export default PopupWorkspaces;
