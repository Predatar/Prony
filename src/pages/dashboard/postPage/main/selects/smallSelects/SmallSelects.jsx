import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import "./smallSelect.scss";

const SmallSelects = (props) => {
  const { id, name, width, secondaryText, select, selectFirst } = props;
  const [open, setOpen] = useState(null);

  const handleFilterClick = () => {
    if (open === name) {
      setOpen(null);
    } else {
      setOpen(name);
    }
  };

  return (
    <div id={id} className="small-select">
      <div className="small-select__body">
        <div className="small-select__text">{name}</div>
        <div
          onClick={handleFilterClick}
          className="small-select__select mini-select"
        >
          <div style={{ width: width }} className="mini-select__body">
            <div className="mini-select__left">{selectFirst}</div>
            <div className="mini-select__left">
              <MdArrowDropDown style={{ width: 16, height: 16 }} />
            </div>
          </div>
          {open === name && (
            <div className="mini-select__window">
              <ul style={{ width: width }} className="mini-select__list">
                {select.map(({ fields, id }) => (
                  <li key={id} className="mini-select__item">
                    {fields}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {secondaryText && (
          <div className="small-select__text">{secondaryText}</div>
        )}
      </div>
    </div>
  );
};

export { SmallSelects };
