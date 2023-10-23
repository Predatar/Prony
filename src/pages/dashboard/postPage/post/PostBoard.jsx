import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/const";
import "./index.scss";
import Btn from "../../../../UI/button/Btn";

import { MdGetApp, MdUpload } from "react-icons/md";
import Select from "../../../../components/select/Select";

const PostBoard = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Posts - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS}>Posts</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Posts</div>
        <div className="posts">
          <div className="posts__body">
            <div className="posts__top">
              <div className="posts__buttons">
                <button className="posts__import">
                  <MdGetApp /> Import
                </button>
                <button className="posts__import">
                  <MdUpload />
                  Export
                </button>
                <Btn text={"Create post"} width={136} theme={"btn_primary"} />
              </div>
            </div>
            <div className="posts__center"></div>
            <div className="posts__bottom"></div>
          </div>
        </div>
        <Select title="Created in" />
      </div>
    </>
  );
};

export default PostBoard;
