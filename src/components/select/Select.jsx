import "./select.scss";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
const Select = ({ title, width, children, count, widthPopup }) => {
  const [popupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen((prev) => !prev);
  };

  return (
    <div style={{ width: width }} className="select">
      <div onClick={() => openPopup()} className="select__body">
        <div className="select__left">
          <div className="select__title">{title}</div>
          {count ? <div className="select__count">1</div> : null}
        </div>
        <MdArrowDropDown style={{ width: 24, height: 24 }} />
      </div>
      {popupOpen && (
        <div
          style={{ width: widthPopup }}
          className="select__window select-window"
        >
          <div className="select-window__body">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Select;
