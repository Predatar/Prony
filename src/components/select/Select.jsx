import "./select.scss";
import React  from "react";
import { MdArrowDropDown } from "react-icons/md";

const Select = ({title,width,children,count,widthPopup,position,borderTop,id,onClick}) => {

  return (
    <div id={id} style={{ width: width }} className="select">
      <div onClick={onClick}  className="select__body">
        <div className="select__left">
          <div className="select__title">{title}</div>
          {count === true && <div className="select__count">1</div>}
        </div>
        <MdArrowDropDown style={{ width: 24, height: 24 ,color:"var(--textColor)"}} />
      </div>

      <div style={{width: widthPopup,position: position,borderTop: borderTop,}} className="select__window select-window">
        <div className="select-window__body">{children}</div>
      </div>
    </div>
  );
};

export default Select;


