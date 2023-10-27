import React, { useCallback, useEffect } from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import {
  MdCancel,
  MdClear,
  MdCreate,
  MdDragIndicator,
  MdLockOpen,
  MdModeComment,
  MdMoreVert,
  MdSettings,
  MdViewHeadline,
  MdVisibility,
} from "react-icons/md";

import Links from "../../../../UI/links/Links";

import ROUTES from "../../../../routes/const";

import "./index.scss";

const MainBoard = () => {
  useEffect(() => {
    document.querySelector(".dashboard").style = "grid-template-rows: 1fr;";
  }, []);
  useEffect(() => {
    return () => {
      document.querySelector(".dashboard").style = "";
    };
  });

  const Popup = useCallback((className) => {
    return (
      <div className={`dashboard-board__popup ${className}`}>
        <div
          className="dashboard-board__close"
          onClick={(e) => {
            e.target.parentNode.classList.remove(
              "dashboard-board__popup_active"
            );
          }}
        >
          <MdClear style={{ pointerEvents: "none" }} />
        </div>
        <div className="dashboard-board__popup-list">
          <div className="dashboard-board__popup-item">
            <MdVisibility />
            Public view
          </div>
          <Link
            to={ROUTES.DASHBOARD_BOARDS_EDIT}
            className="dashboard-board__popup-item"
          >
            <MdSettings />
            Edit board settings
          </Link>
          <div className="dashboard-board__popup-item">
            <MdViewHeadline />
            List board tags
          </div>
          <Link
            to={ROUTES.DASHBOARD_BOARDS_EDIT_BOARD}
            className="dashboard-board__popup-item"
          >
            <MdCreate />
            Edit board post
          </Link>
          <Link
            to={ROUTES.DASHBOARD_BOARDS_DELETE}
            className="dashboard-board__popup-item"
          >
            <MdCancel />
            Delete board
          </Link>
          <Link
            to={ROUTES.DASHBOARD_POSTS}
            className="dashboard-board__popup-item"
          >
            <MdModeComment />
            View posts
          </Link>
        </div>
      </div>
    );
  }, []);

  const Board = useCallback(() => {
    return (
      <div className="dashboard-board__item">
        <div className="dashboard-board__drag">
          <MdDragIndicator />
        </div>
        <div className="dashboard-board__name">
          Send status updates back through Intercom
        </div>
        <div className="dashboard-board__posts">12</div>
        <div className="dashboard-board__activities">
          <div
            className="dashboard-board__visibility"
            onClick={(e) => {
              e.target.classList.toggle("dashboard-board__visibility_active");
            }}
          >
            <MdVisibility />
          </div>
          <div
            className="dashboard-board__lock"
            onClick={(e) => {
              e.target.classList.toggle("dashboard-board__lock_active");
            }}
          >
            <MdLockOpen />
          </div>
          <div
            className="dashboard-board__more"
            onClick={(e) => {
              if (e.target.classList.contains("dashboard-board__more")) {
                e.target.nextSibling.classList.toggle(
                  "dashboard-board__popup_active"
                );
              }
            }}
          >
            <MdMoreVert style={{ pointerEvents: "none" }} />
          </div>
          {Popup()}
        </div>
      </div>
    );
  }, []);

  const renderItems = () => {
    const item = [];
    for (let i = 0; i < 10; i++) {
      item.push(Board());
    }
    return <>{item}</>;
  };
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Boards - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_BOARDS}>Boards</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Boards</div>
        <Links
          text={"Create Board"}
          theme={"link_primary"}
          width={147}
          to={ROUTES.DASHBOARD_BOARDS_CREATE}
        />
      </div>
      <div className="dashboard-board__table">
        <div className="dashboard-board__head">
          <div className="dashboard-board__tag">Name</div>
          <div className="dashboard-board__tag">Posts</div>
        </div>
        <div className="dashboard-board__body">{renderItems()}</div>
      </div>
    </>
  );
};

export default MainBoard;
