import React from "react";
import { MdOutlineThumbUpAlt } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import "./userItem.scss";
const UserItem = ({ id, name, role, img, email }) => {
  return (
    <div id={id} className="user-item">
      <div className="user-item__body">
        <div className="user-item__main">
          <div className="user-item__left">
            <img src={img} alt="" className="user-item__img" />
            <div className="user-item__info">
              <div className="user-item__info-name">{name}</div>
              <div className="user-item__email">{email}</div>
              <div className="user-item__date">21-01-2019</div>
            </div>
          </div>
          <div className="user-item__center">
            <div className="user-item__likes">
              <div className="user-item__like">
                <MdOutlineThumbUpAlt style={{ color: "#E0E0E0" }} />
                <span>24</span>
              </div>
              <div className="user-item__like">
                <BiComment style={{ color: "#E0E0E0" }} />
                <span>48</span>
              </div>
              <div className="user-item__like">
                <BiComment style={{ color: "#E0E0E0" }} />
                <span>48</span>
              </div>
            </div>
          </div>
          <div className="user-item__left">
            <div className="user-item__role">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
