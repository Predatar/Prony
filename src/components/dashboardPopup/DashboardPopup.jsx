import React from "react";

import { Link } from "react-router-dom";

import { MdClear, MdMoreVert } from "react-icons/md";

import "./index.scss";

const DashboardPopupItem = ({ icon, text, onClick }) => {
  return (
    <div onClick={onClick} className="dashboard__popup-item">
      {icon}
      {text}
    </div>
  );
};
const DashboardPopupItemLink = ({ icon, text, to }) => {
  return (
    <Link to={to} className="dashboard__popup-item">
      {icon}
      {text}
    </Link>
  );
};

const DashboardPopup = ({ children, name }) => {
  return (
    <div className={`dashboard__popup`}>
      <label className="dashboard__label">
        <input type="radio" name={name} />
        <MdMoreVert />
        <div className="dashboard__popup-wrapper">
          <label className="dashboard__close">
            <input type="radio" name={name} />
            <MdClear
              style={{ pointerEvents: "none", color: "var(--textColor)" }}
            />
          </label>
          <div className="dashboard__popup-list">{children}</div>
        </div>
      </label>
    </div>
  );
};

export { DashboardPopup, DashboardPopupItem, DashboardPopupItemLink };
