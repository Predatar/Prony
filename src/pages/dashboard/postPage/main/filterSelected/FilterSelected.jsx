import React from "react";
import { MdClear } from "react-icons/md";
import "./filterSelected.scss";
const filterSelected = ({ selected, nameSelect }) => {
  return (
    <div className="filter-selected">
      <div className="filter-selected__body">
        <div className="filter-selected__left">
          <span className="filter-selected__name">{nameSelect}:</span>
          <span className="filter-selected__name"> &nbsp;{selected}</span>
        </div>
        <div className="filter-selected__right">
          <button>
            <MdClear style={{ width: 12, height: 12 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default filterSelected;
