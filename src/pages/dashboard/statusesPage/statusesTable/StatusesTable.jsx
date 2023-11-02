import React from "react";
import "./statusesTable.scss";
import { AiFillInfoCircle } from "react-icons/ai";
const StatusesTable = ({ children }) => {
  return (
    <div className="statuses-table">
      <div className="statuses-table__body">
        <div className="statuses-table__top">
          <div className="statuses-table__item">Name</div>
          <div className="statuses-table__item statuses-table__item--votable">
            Votable <AiFillInfoCircle />
          </div>
          <div className="statuses-table__item">Show on roadmap</div>
          <div className="statuses-table__item">Privacy</div>
          <div className="statuses-table__item">Color</div>
        </div>
        <div className="statuses-table__bottom">{children}</div>
      </div>
    </div>
  );
};

export default StatusesTable;
