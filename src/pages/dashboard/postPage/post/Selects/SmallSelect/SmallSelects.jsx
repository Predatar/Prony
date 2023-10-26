import React from "react";
import { smallSelects } from "../../../../../../data/smallSelects";
import { MdArrowDropDown } from "react-icons/md";
import "./smallSelect.scss";
import { useState } from "react";
const SmallSelects = () => {
  const [open, setOpen] = useState(null);

  const handleFilterClick = (filterId) => {
    if (open === filterId) {
      setOpen(null);
    } else {
      setOpen(filterId);
    }
  };

  return smallSelects.map(({ id, name, select ,width,secondaryText }) => (
    <div id={id} className="small-select">
      <div className="small-select__body">
        <div className="small-select__text">{name}</div>
        <div
          onClick={() => handleFilterClick(name)}
          className="small-select__select mini-select"
        >
          <div style={{width:width}}  className="mini-select__body">
            <div className="mini-select__left">{select[0].fields}</div>
            <div className="mini-select__left">
              <MdArrowDropDown style={{ width: 16, height: 16 }} />
            </div>
          </div>
          {open === name && (
            <div className="mini-select__window">
              <ul style={{width:width}} className="mini-select__list">
                {select.map((option, id) => (
                  <li key={id} className="mini-select__item">
                    {option.fields}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
       {secondaryText &&  <div className="small-select__text">{secondaryText}</div>} 
      </div>
    </div>
  ));
};

export default SmallSelects;
