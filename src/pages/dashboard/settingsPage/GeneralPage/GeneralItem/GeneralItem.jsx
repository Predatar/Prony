import React from "react";
import Radio from "../../../../../UI/radio/Radio";
import "./GeneralItem.scss";
const ChangelogGeneralItem = ({ img, title, subtitle }) => {
  return (
    <div className="select-lang">
      <div className="select-lang__body">
        <label>
          <div className="select-lang__left">
            <div className="select-lang__checkbox">
              <Radio />
            </div>
            <div className="select-lang__info">
              <div className="select-lang__top-title">{title}</div>
              <div className="select-lang__bottom-subtitle">{subtitle}</div>
            </div>
          </div>

          <div className="select-lang__right">
            <img src={img} alt="" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ChangelogGeneralItem;
