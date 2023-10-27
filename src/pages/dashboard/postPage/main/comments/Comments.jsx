import React from "react";
import { MdOutlineThumbUpAlt, MdMoreVert } from "react-icons/md";
import { BiComment } from "react-icons/bi";
import "./comments.scss";

const Comments = ({
  name,
  img,
  tag,
  secondaryTag,
  white,
  colorTag,
  secondaryColorTag,
}) => {
  return (
    <div className={`${white ? "comments__item white" : "comments__item"}`}>
      <div className="comments__body">
        <div className="comments__left">
          <img src={img} alt="person" />
          <span>{name}</span>
        </div>
        <div className="comments__center">
          <div className="comments__center-top">
            <h3 className="comments__center-title">
              Send status updates back through Intercom
            </h3>
            <span className="comments__center-time">3 min ago</span>
          </div>
          <div className="comments__center-center">
            <p>
              Instead of send updates via email, send them through the original
              conversation on Intercom Instead of send updates via email, send
              them through the original conversation on Intercom Instead of send
              updates via email, send them through the original conversation on
              Intercom
            </p>
          </div>
          <div className="comments__center-bottom">
            <div className="comments__tags">
              {tag && (
                <div style={{ background: colorTag }} className="comments__tag">
                  Tagname1
                </div>
              )}
              {secondaryTag && (
                <div
                  style={{ background: secondaryColorTag }}
                  className="comments__tag"
                >
                  Tagname2
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="comments__right">
          <div className="comments__right-left">
            <div className="comments__right-item">
              <MdOutlineThumbUpAlt style={{ color: "#E0E0E0" }} />
              <span>24</span>
            </div>
            <div className="comments__right-item">
              <BiComment style={{ color: "#E0E0E0" }} />
              <span>48</span>
            </div>
          </div>
          <div className="comments__right-right">
            <button>
              {" "}
              <MdMoreVert
                style={{
                  pointerEvents: "none",
                  width: 30,
                  height: 30,
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
