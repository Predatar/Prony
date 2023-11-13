import React from "react";
import "./addPlan.scss";
import { useState } from "react";
const AddPlan = () => {
  const [selectedBtn, setSelectedBtn] = useState("selected");

  const handleClick = (item) => {
    if (selectedBtn === item) {
      setSelectedBtn(null); // Если элемент уже выбран, сбросить выбор
    } else {
      setSelectedBtn(item); // Выбрать элемент
    }
  };
  return (
    <div className="add-plan">
      <div className="add-plan__body">
        <div className="add-plan__top">
          <div className="add-plan__title">How do you plan to use Prony?</div>
        </div>
        <div className="add-plan__bottom">
          <button
            onClick={() => handleClick("btn1")}
            className={`add-plan__btn ${selectedBtn}  ${
              selectedBtn === "btn1" ? "selected" : ""
            }`}
          >
            Public feedback
          </button>
          <button
            onClick={() => handleClick("btn2")}
            className={`add-plan__btn   ${
              selectedBtn === "btn2" ? "selected" : ""
            }`}
          >
            Private feedback
          </button>
          <button
            onClick={() => handleClick("btn3")}
            className={`add-plan__btn   ${
              selectedBtn === "btn3" ? "selected" : ""
            }`}
          >
            Employee feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlan;
