import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Btn from "../../../../UI/button/Btn";
import ROUTES from "../../../../routes/const";
import "./index.scss";

import { BiSearchAlt2 } from "react-icons/bi";
import { MdGetApp, MdUpload } from "react-icons/md";
import FilterSelected from "./FilterSelected/FilterSelected";
import RenderComments from "./comments/renderComments/RenderComments";
import Pagination from "./pagination/Pagination";
import { RenderSelects, RenderSmallSelect } from "./selects/Selects";

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
      <div className="posts-page">
        <div className="dashboard__main posts">
          <div className="dashboard__title">Posts</div>
          <div className="posts__buttons-body">
            <div className="posts__left-button">
              <div className="posts__buttons">
                <button className="posts__import">
                  <MdGetApp
                    style={{ color: "#E0E0E0", width: 24, height: 24 }}
                  />
                  Import
                </button>
                <button className="posts__import">
                  <MdUpload
                    style={{ color: "#E0E0E0", width: 24, height: 24 }}
                  />
                  Export
                </button>
              </div>
            </div>
            <div className="posts__right-button">
              <Btn text={"Create post"} width={136} theme={"btn_primary"} />
            </div>
          </div>
        </div>
        <form className="posts__form posts-form">
          <div style={{ width: 488 }} className="posts-form__wrapper-select">
            <input
              placeholder="Search all posts"
              className="posts-form__search"
              type="search"
            />
            <button className="posts-form__search-btn">
              <BiSearchAlt2 style={{ color: "#fff", width: 24, height: 24 }} />
            </button>
          </div>
          <RenderSelects />
        </form>
        <div className="post-selecteds-info">
          <div className="post-selecteds-info__selecteds">
            <FilterSelected selected="Tagname1" nameSelect="Tag" />
            <FilterSelected selected="Name1" nameSelect="Author" />
          </div>
          <div className="post-selecteds-info__small-selects">
            <RenderSmallSelect />
          </div>
        </div>
        <div className="posts-page__comments">
          <div className="posts-page__comments-wrapper">
            <RenderComments />
          </div>
          <div className="posts-page__pagination">
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBoard;
