import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const SocialItem = ({ img }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="social-item">
      <div className="social-item__body">
        <div
          className={`${
            active ? "social-item__left active" : "social-item__left"
          }`}
        >
          <img src={img} alt="" />
          <span>Add Google account</span>
        </div>
        <div className="social-item__right">
          <button
            onClick={() => setActive((prev) => !prev)}
            className="social-item__btn"
          >
            {active ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialItem;
