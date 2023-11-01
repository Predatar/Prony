import React, { useEffect } from "react";
import Btn from "../../../../../UI/button/Btn";
import "./popup.scss";
import { MdClear } from "react-icons/md";

const Popup = ({ open, state, children, onClick }) => {
  useEffect(() => {
    const popupOverlay = document.querySelector(".post-popup");
    if (popupOverlay) {
      if (state) {
        popupOverlay.classList.add("show-popup");
      } else {
        popupOverlay.classList.remove("show-popup");
      }
    }
  }, [state]);

  return (
    open && (
      <div className="post-popup">
        <div className="post-popup__body">
          <button onClick={onClick} className="post-popup__close">
            <MdClear />
          </button>
          <form className="post-popup__form">
            <div className="post-popup__items">{children}</div>
            <div className="post-popup__buttons">
              <Btn text="Cancel" theme={"btn_secondary"} width={150} />
              <Btn text="Submit" theme={"btn_primary"} width={147} />
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Popup;
