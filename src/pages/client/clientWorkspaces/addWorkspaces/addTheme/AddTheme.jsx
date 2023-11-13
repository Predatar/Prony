import React, { useState } from "react";
import "./addTheme.scss";
import { BsFillGearFill } from "react-icons/bs";
const AddTheme = () => {
  const [selectedItem, setSelectedItem] = useState("selected");

  const handleClick = (item) => {
    if (selectedItem === item) {
      setSelectedItem(null); // Если элемент уже выбран, сбросить выбор
    } else {
      setSelectedItem(item); // Выбрать элемент
    }
  };
  return (
    <div className="addtheme-form">
      <div className="addtheme-form__body">
        <div className="addtheme-form__top">Theme</div>
        <div className="addtheme-form__bottom">
          <div className="addtheme-form__item ">
            <div className="addtheme-form__item-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="169"
                height="42"
                viewBox="0 0 169 42"
                fill="none"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H167C168.105 0 169 0.895431 169 2V42H0V2Z"
                  fill="url(#paint0_linear_803_11137)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_803_11137"
                    x1="4"
                    y1="27"
                    x2="187"
                    y2="25.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C4CFE2" />
                    <stop offset="1" stop-color="#E5ECF9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="addtheme-form__item-bottom">
              <div className="addtheme-form__custom">
                <BsFillGearFill />
                <button>Custom</button>
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClick("item1")}
            className={`addtheme-form__item  ${
              selectedItem === "item1" ? "selected" : ""
            }`}
          >
            <div className="addtheme-form__item-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="169"
                height="42"
                viewBox="0 0 169 42"
                fill="none"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H167C168.105 0 169 0.895431 169 2V42H0V2Z"
                  fill="#1565C0"
                />
              </svg>
            </div>
            <div className="addtheme-form__item-bottom">
              <div className="addtheme-form__bottom-colors">
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
          <div
            onClick={() => handleClick("item2")}
            className={`addtheme-form__item  ${
              selectedItem === "item2" ? "selected" : ""
            }`}
          >
            <div className="addtheme-form__item-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="169"
                height="42"
                viewBox="0 0 169 42"
                fill="none"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H167C168.105 0 169 0.895431 169 2V42H0V2Z"
                  fill="#46EBA8"
                />
              </svg>
            </div>
            <div className="addtheme-form__item-bottom">
              <div className="addtheme-form__bottom-colors">
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
          <div
            onClick={() => handleClick("item3")}
            className={`addtheme-form__item  ${
              selectedItem === "item3" ? "selected" : ""
            }`}
          >
            <div className="addtheme-form__item-top">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="169"
                height="42"
                viewBox="0 0 169 42"
                fill="none"
              >
                <path
                  d="M0 2C0 0.89543 0.895431 0 2 0H167C168.105 0 169 0.895431 169 2V42H0V2Z"
                  fill="url(#paint0_linear_803_11137)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_803_11137"
                    x1="4"
                    y1="27"
                    x2="187"
                    y2="25.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#C4CFE2" />
                    <stop offset="1" stop-color="#E5ECF9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="addtheme-form__item-bottom">
              <div className="addtheme-form__bottom-colors">
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
      </div>
    </div>
  );
};

export default AddTheme;
