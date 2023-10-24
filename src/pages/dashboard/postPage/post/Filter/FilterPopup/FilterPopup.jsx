import React from "react";
import "./filter.scss";
import SelectTitle from "../../../../../../components/select/selectTitle/SelectTitle";
import Btn from "../../../../../../UI/button/Btn";
const Filter = ({ title, children }) => {
  return (
    <div className="filter">
      <div className="filter__body">
        <div className="filter__title">
          <SelectTitle title={title} />
        </div>
        <div className="filter__form filter-form">
          <div className="filter-form__top">{children}</div>
          <div className="filter-form__buttons">
            <Btn text={"Apply filters"} width={140} theme={"btn_primary"} />
            <Btn text={"Cancel"} width={109} theme={"btn_secondary"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
