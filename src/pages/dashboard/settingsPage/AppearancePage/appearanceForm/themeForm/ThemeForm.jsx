import React, { useState } from "react";
import "./themeForm.scss";
const ThemeForm = () => {
  const [selectedItem, setSelectedItem] = useState("selected");

  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null); // Если элемент уже выбран, сбросить выбор
    } else {
      setSelectedItem(item); // Выбрать элемент
    }
  };

  return (
    <div className="theme-form">
      <div className="theme-form__body">
        <div className="theme-form__left">
          <div
            onClick={() => handleClick("item1")}
            className={`theme-form__item ${selectedItem} ${
              selectedItem === "item1" ? "selected" : ""
            }`}
          >
            <div className="theme-form__item-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 10.42L0 5.42L1.41 4.01L5 7.59L12.59 0L14 1.42L5 10.42Z"
                  fill="#272557"
                />
              </svg>
            </div>
            <div className="theme-form__item-bottom">
              <div className="theme-form__bottom-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                >
                  <ellipse cx="10.5" cy="11" rx="10.5" ry="11" fill="#1565C0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                >
                  <ellipse cx="10.5" cy="11" rx="10.5" ry="11" fill="#505050" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    fill="white"
                    stroke="#E0E0E0"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="theme-form__right">
          <div
            onClick={() => handleClick("item2")}
            className={`theme-form__item dark ${
              selectedItem === "item2" ? "selected" : ""
            }`}
          >
            <div className="theme-form__item-top  dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 10.42L0 5.42L1.41 4.01L5 7.59L12.59 0L14 1.42L5 10.42Z"
                  fill="#272557"
                />
              </svg>
            </div>
            <div className="theme-form__item-bottom">
              <div className="theme-form__bottom-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                >
                  <ellipse cx="10.5" cy="11" rx="10.5" ry="11" fill="#1565C0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                >
                  <ellipse cx="10.5" cy="11" rx="10.5" ry="11" fill="#E0E0E0" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <circle cx="11" cy="11" r="11" fill="#272557" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeForm;
