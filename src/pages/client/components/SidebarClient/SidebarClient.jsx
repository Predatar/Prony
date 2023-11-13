import React from "react";
import "./sidebarClient.scss";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/const";
const SidebarClient = () => {
  return (
    <div className="sidebar-client">
      <div className="sidebar-client__body">
        <div className="sidebar-client__title">Workspaces</div>
        <div className="sidebar-client__columns">
          <div className="sidebar-client__column">
            <div className="sidebar-client__column-title">Profile</div>
            <ul className="sidebar-client__list">
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_PROFILE}>Profile</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_AVATAR}>Avatar</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_EMAIL}>
                  Email Preferences
                </Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_CHANGE_PASSWORD}>
                  Change password
                </Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-client__column">
            <div className="sidebar-client__column-title">Billing</div>
            <ul className="sidebar-client__list">
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_BILLING}>Billing Plan</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_PAYMENT}>
                  Payment Methods
                </Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={ROUTES.CLIENT_WORKSPACES_HISTORY_BILLING}>
                  Billing History
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarClient;
