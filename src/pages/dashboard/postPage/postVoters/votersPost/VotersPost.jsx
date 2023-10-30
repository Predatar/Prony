import React from "react";
import "./votersPost.scss";

import { MdCancel } from "react-icons/md";
const VotersPost = ({ name, img, time, grey }) => {
  return (
    <div className={grey ? "voters-post gray" : "voters-post"}>
      <div className="voters-post__body">
        <div className="voters-post__left">
          <div className="voters-post__img">
            <img src={img} alt="" /> <span>{name}</span>
          </div>
          <div className="voters-post__time">{time}</div>
        </div>
        <div className="voters-post__right">
          <button className="voters-post__delete">
            <MdCancel
              style={{ fontSize: 20, color: "rgba(224, 224, 224, 1)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VotersPost;
