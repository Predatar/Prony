import React, { useState } from "react";
import { IoMdCreate } from "react-icons/io";
import {
  MdAddBox,
  MdCached,
  MdCancel,
  MdMergeType,
  MdOutlineThumbUpAlt,
} from "react-icons/md";
import Btn from "../../../../../UI/button/Btn";
import Radio from "../../../../../UI/radio/Radio";
import {
  DashboardPopup,
  DashboardPopupItem,
  DashboardPopupItemLink,
} from "../../../../../components/dashboardPopup/DashboardPopup";
import { smallSelectView } from "../../../../../data/smallSelects";
import person from "../../../../../img/Post/view/person.png";
import room from "../../../../../img/Post/view/room.png";
import ROUTES from "../../../../../routes/const";
import "../../../tagsPage/index.scss";
import "../../components/formForm/postForm.scss";
import InputFile from "../../components/inputFile/InputFile";
import { RenderSmallSelect } from "../../main/selects/Selects";

import Popup from "../../components/popup/Popup";
import {
  PopupMerge,
  PopupStatus,
} from "../../components/popup/popupItems/PopupItems";
import "./sendComment.scss";

const SendComment = () => {
  const [showPopupMerge, setShowPopupMerge] = useState(false);

  const handlePopupMerge = () => {
    setShowPopupMerge(true);
  };

  const [showPopupStatus, setShowPopupStatus] = useState(false);

  const handlePopupStatus = () => {
    setShowPopupStatus(true);
  };

  return (
    <div className="send-comment">
      <div className="send-comment__body">
        <div className="send-comment__top">
          <div className="send-comment__left">
            <div className="send-comment__likes">
              <MdOutlineThumbUpAlt
                style={{ width: 24, height: 24, color: "#1565C0" }}
              />
              <span>24</span>
            </div>
            <img src={person} alt="" />
            <span>Ross Gillespie</span>
          </div>
          <div className="send-comment__center send-center">
            <div className="send-center__top">
              <div className="send-center__status-top">
                <div className="send-center__title">
                  Send status updates back through Intercom
                </div>
                <div className="send-center__time">3 min ago</div>
              </div>
              <div className="send-center__status-bottom">Complete</div>
            </div>
            <div className="send-center__center">
              <div className="send-center__desc">
                Instead of send updates via email, send them through the
                original conversation on Intercom Instead of send updates via
                email, send them through the original conversation on Intercom
                Instead of send updates via email, send them through the
                original conversation on Intercom
              </div>
              <img src={room} alt="" />
            </div>
            <div className="send-center__bottom">
              <div style={{ background: "#EB5757" }} className="comments__tag">
                Tagname1
              </div>
              <div style={{ background: "#27AE60" }} className="comments__tag">
                Tagname2
              </div>
            </div>
          </div>
          <div className="send-comment__right">
            <DashboardPopup name={"post"}>
              <DashboardPopupItemLink
                icon={<MdCancel />}
                text={"Delete post"}
                to={ROUTES.DASHBOARD_POSTS}
              />
              <DashboardPopupItemLink
                icon={<IoMdCreate />}
                to={ROUTES.DASHBOARD_POSTS_EDIT}
                text={"Edit post"}
              />
              <DashboardPopupItem
                icon={<MdMergeType />}
                text={"Merge post"}
                onClick={() => handlePopupMerge()}
              />

              <DashboardPopupItem
                icon={<MdCached />}
                text={"Change status"}
                onClick={() => handlePopupStatus()}
              />
              <DashboardPopupItemLink
                icon={<MdAddBox />}
                to={ROUTES.DASHBOARD_POSTS_VOTERS}
                text={"Add voter"}
              />
            </DashboardPopup>
          </div>
        </div>
        <div className="send-comment__center">
          <div className="send-comment__detailes send-detailes ">
            <form className="send-detailes__form">
              <div className="send-detailes__wrapper">
                <textarea
                  name="detailes"
                  placeholder="Enter detailes"
                ></textarea>
              </div>
              <div className="send-detailes__wrapper">
                <InputFile width={970} />
                <div className="send-detailes__buttons">
                  <div className="dashboard-tags__radio-wrapper">
                    <div className="dashboard-tags__radio">
                      <Radio name={"privacy"} />
                      Public
                    </div>
                    <div className="dashboard-tags__radio">
                      <Radio name={"privacy"} />
                      Private
                    </div>
                  </div>
                  <Btn width={167} text={"Comment"} theme={"btn_primary"} />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="send-comment__bottom">
          <RenderSmallSelect smallSelectsData={smallSelectView} />
        </div>
      </div>
      <Popup
        open={showPopupMerge}
        state={showPopupMerge}
        onClick={() => setShowPopupMerge(false)}
      >
        <PopupMerge />
      </Popup>
      <Popup
        open={showPopupStatus}
        state={showPopupStatus}
        onClick={() => setShowPopupStatus(false)}
      >
        <PopupStatus />
      </Popup>
    </div>
  );
};

export default SendComment;
