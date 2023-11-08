import React from "react";
import "./sidebarClient.scss";
import { Link } from "react-router-dom";
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
                <Link to={"/"}>Profile</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={"/"}>Avatar</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={"/"}>Email Preferences</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={"/"}>Change password</Link>
              </li>
            </ul>
          </div>
          <div className="sidebar-client__column">
            <div className="sidebar-client__column-title">Billing</div>
            <ul className="sidebar-client__list">
              <li className="sidebar-client__list-item">
                <Link to={"/"}>Billing Plan</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={"/"}>Payment Methods</Link>
              </li>
              <li className="sidebar-client__list-item">
                <Link to={"/"}>Billing History</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarClient;
