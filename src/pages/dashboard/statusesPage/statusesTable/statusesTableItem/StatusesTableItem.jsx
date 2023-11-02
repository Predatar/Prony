import React from "react";
import "../statusesTable.scss";

import { MdDragIndicator, MdCached, MdCreate, MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import ROUTES from "../../../../../routes/const";
const StatusesTableItem = ({
  id,
  name,
  votable,
  showOnRoadmap,
  privacy,
  color,
  background,
  nameEllipseColor,
}) => {
  return (
    <div id={id} style={{ background: background }} className="statuses-item">
      <div className="statuses-item__drag">
        <MdDragIndicator />
      </div>
      <div className="statuses-item__body">
        <div className="statuses-item__item statuses-item__item--name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
          >
            <circle cx="3.5" cy="3.5" r="3.5" fill={nameEllipseColor} />
          </svg>
          {name}
        </div>
        <div className="statuses-item__item">
          {votable === true ? "yes" : "no"}
        </div>
        <div className="statuses-item__item">
          {showOnRoadmap === true ? "yes" : "no"}
        </div>
        <div className="statuses-item__item">{privacy}</div>
        <div className="statuses-item__item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            viewBox="0 0 29 29"
            fill="none"
          >
            <circle cx="14.5" cy="14.5" r="14.5" fill={color} />
          </svg>
        </div>
      </div>
      <div className="statuses-item__activities">
        <Link
          to={ROUTES.DASHBOARD_TAGS_EDIT}
          className="dashboard-tags__create"
        >
          <MdCreate />
        </Link>
        <div className="dashboard-tags__cancel">
          <Link
            to={ROUTES.DASHBOARD_TAGS_EDIT}
            className="dashboard-tags__create"
          >
            <MdCancel />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatusesTableItem;
