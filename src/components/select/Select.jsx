import "./select.scss";
import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
const Select = ({ title, width, popup }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState(null);

  const openPopup = (popupIndex) => {
    setPopupOpen(true);
    setSelectedPopup(popupIndex);
  };
  const closePopup = (popupIndex) => {
    setPopupOpen(false);
    setSelectedPopup(popupIndex);
  };

  return (
    <div
      style={{ width: width }}
      onClick={() => openPopup(1)}
      className="select"
    >
      <div className="select__body">
        <div className="select__left">
          <div className="select__title">{title}</div>
          <div className="select__count">1</div>
        </div>
        <MdArrowDropDown style={{ width: 24, height: 24 }} />
      </div>
      {popupOpen && (
        <div className="select__window select-window">
          <div className="select-window__body">{}</div>
        </div>
      )}
    </div>
  );
};

export default Select;
