import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import Links from "../../../../UI/links/Links";

import ROUTES from "../../../../routes/const";

import { changelogSelects } from "../../../../data/select";
import { smallSelectUser } from "../../../../data/smallSelects";
import FilterSelected from "../../postPage/main/FilterSelected/FilterSelected";
import {
  RenderSelects,
  RenderSmallSelect,
} from "../../postPage/main/selects/Selects";
import ChangelogItem from "./changelogItem/ChangelogItem";
import Pagination from "../../postPage/main/pagination/Pagination";
import "./index.scss";

const MainBoard = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG}>Changelog</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Changelog records</div>
        <Links
          to={ROUTES.DASHBOARD_CHANGELOG_ADD}
          text={"Add record"}
          theme={"link_primary"}
          width={134}
        />
      </div>
      <div className="changelog-page">
        <form className="changelog-page__form">
          <div className="changelog-page__top">
            <div className="changelog-page__wrapper-top">
              <div className="changelog-page__selects">
                <RenderSelects selectsData={changelogSelects} />
              </div>
              <div className="changelog-page__center">
                <FilterSelected selected="Admin" />
              </div>
              <div className="changelog-page__bottom">
                <div className="changelog-page__table">
                  <div className="changelog-page__item">
                    <span>Title</span>
                  </div>
                  <div className="changelog-page__item">
                    <span>Publish time</span>
                  </div>
                  <div className="changelog-page__item">
                    <span>Labels</span>
                  </div>
                  <div className="changelog-page__item">
                    <RenderSmallSelect smallSelectsData={smallSelectUser} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="changelog-page__items">
            <ChangelogItem admin feedback time={"32 min ago"} />
            <ChangelogItem admin time={"yesterday"} />
            <ChangelogItem admin time={"2 weeks ago"} />
            <ChangelogItem admin time={"last week"} />
            <ChangelogItem admin time={"32 min ago"} />
            <ChangelogItem admin changelog time={"yesterday"} />
            <ChangelogItem admin time={"2 weeks ago"} />
            <ChangelogItem admin time={"last week"} />
            <ChangelogItem admin time={"2 weeks ago"} />
            <ChangelogItem admin time={"last week"} />
          </div>
          <div className="posts-page__pagination">
            <Pagination smallSelect />
          </div>
        </form>
      </div>
    </>
  );
};

export default MainBoard;
