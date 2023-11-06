import React from "react";

const ChangelogTable = ({ children }) => {
  return (
    <div className="statuses-table">
      <div className="statuses-table__body">
        <div className="statuses-table__top">
          <div  style={{flex:"0 1 328px"}} className="statuses-table__item">Name</div>
          <div  style={{flex:"0 1 188px"}} className="statuses-table__item">Color</div>
        </div>
        <div className="statuses-table__bottom">{children}</div>
      </div>
    </div>
  );
};

export default ChangelogTable;
