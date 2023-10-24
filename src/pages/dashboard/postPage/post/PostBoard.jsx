import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/const";
import "./index.scss";
import Btn from "../../../../UI/button/Btn";

import { MdGetApp, MdUpload } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import Select from "../../../../components/select/Select";
import Filter from "./Filter/FilterPopup/FilterPopup";
import FilterChildrens from "./Filter/FilterPopup/FilterChildrens/FilterChildrens";

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
          {selects()}
        </form>
      </div>
    </>
  );
};

export default PostBoard;

const selects = () => {
  const components = [];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  components.push(
    <div className="posts-form__wrapper-select">
      <Select widthPopup={333} count width={178} title="Tags">
        <Filter title="Tags">
          <FilterChildrens name="Tags" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select id="1" widthPopup={333} width={221} title="Boards">
        <Filter title="Boards">
          <FilterChildrens name="Boards" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select id="2" widthPopup={333} width={221} title="Statuses">
        <Filter title="Statuses">
          <FilterChildrens name="Statuses" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select id="3" widthPopup={403} width={324} title="Owners">
        <Filter title="Owners">
          <FilterChildrens name="Owners" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select id="4" widthPopup={403} count width={324} title="Author">
        <Filter title="Author">
          <FilterChildrens name="Author" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select  id="5" widthPopup={333} width={164} title="Created in">
        <Filter title="Created">
          <FilterChildrens name="Created" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select id="6" widthPopup={333} width={280} title="User segments">
        <Filter title="User segments">
          <FilterChildrens name="Segments" />
        </Filter>
      </Select>
    </div>
  );
  components.push(
    <div className="posts-form__wrapper-select">
      <Select id="7" widthPopup={333} width={200} title="Approved">
        <Filter title="Approved">
          <FilterChildrens name="Approved" />
        </Filter>
      </Select>
    </div>
  );

  return (
    <>
      {components.map((component, index) => (
        <div
          onClick={(event) => {if (event.target.classList.contains("select__body")) {handleClick(index);}}}
          className={`posts-form__wrapper ${index === activeIndex ? "active" : ""}`}
          key={index}
        >
          {component}
        </div>
      ))}
    </>
  );
};
