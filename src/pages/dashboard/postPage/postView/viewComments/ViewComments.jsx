import React from "react";
import { MdOutlineThumbUpAlt } from "react-icons/md";

import { useState } from "react";
import "./viewComments.scss";

const ViewComments = ({
  buttons,
  idComment,
  name,
  comment,
  children,
  answer,
  img,
  background,
}) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleSetColor = (idComment) => {
    if (activeButton === idComment) {
      setActiveButton(null);
    } else {
      setActiveButton(idComment);
    }
  };

  return (
    <div className={`view-comment ${answer ? "answer" : ""}`}>
      <div style={{ background: background }} className="view-comment__body">
        <div className="view-comment__main">
          <div className="view-comment__left">
            <img src={img} alt="" />
          </div>
          <div className="view-comment__right view-comment-right">
            <div className="view-comment-right__top">
              <div className="view-comment-right__likes">
                <MdOutlineThumbUpAlt />
                <span>3 likes</span>
              </div>
              <div className="view-comment-right__date">01-02-2020</div>
            </div>
            <div className="view-comment-right__center">
              <div className="view-comment-right__name">{name}</div>
              <div className="view-comment-right__comment">{comment}</div>
            </div>
            <div className="view-comment-right__bottom">
              {buttons.map(({ id, icon, text, action }) => (
                <button
                  key={id}
                  onClick={() => {
                    handleSetColor(id);
                    action && action(idComment);
                  }}
                  className={`view-comment__button ${
                    activeButton === id ? "active" : ""
                  }`}
                >
                  {icon} {text}
                </button>
              ))}
            </div>
          </div>
        </div>
        {answer ? "" : <div className="view-comment__answers">{children}</div>}
      </div>
    </div>
  );
};

export default ViewComments;
