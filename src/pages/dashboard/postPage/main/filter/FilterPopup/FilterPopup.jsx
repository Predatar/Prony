import React from "react";
import Btn from "../../../../../../UI/button/Btn";
import SelectTitle from "../../../../../../components/select/selectTitle/SelectTitle";
import "./filter.scss";
import Links from "../../../../../../UI/links/Links";
import ROUTES from "../../../../../../routes/const";
const Filter = ({ title, children, onClick }) => {
  const bodyStyle = {
    display: title ? "flex" : "block",
  };
  return (
    <div className="filter">
      <div style={bodyStyle} className="filter__body">
        <div className="filter__title">
          {title && <SelectTitle title={title} />}
        </div>
        <div className="filter__form filter-form">
          <div className="filter-form__top">{children}</div>
          <div className="filter-form__buttons">
            <Links
              to={ROUTES.DASHBOARD_POSTS}
              text="Apply filters"
              theme={"link_primary"}
              width={150}
            />
            <Btn
              text={"Cancel"}
              onClick={onClick}
              width={109}
              theme={"btn_secondary"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
