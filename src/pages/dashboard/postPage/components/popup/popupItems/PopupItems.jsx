import React from "react";

const PopupMerge = () => {
  return (
    <div className="popup-item">
      <div className="popup-item__title">
        Merges this post into another post
      </div>
      <div className="popup-item__input">
        <input type="text" name="name" placeholder="Enter post name" />
      </div>
    </div>
  );
};

export { PopupMerge };

const PopupStatus = () => {
  return (
    <div className="popup-item">
      <div className="popup-item__title">Changes post status</div>
    </div>
  );
};

export { PopupStatus };
