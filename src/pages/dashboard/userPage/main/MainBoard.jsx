import React from "react";
import { Helmet } from "react-helmet";
import { userSelects } from "../../../../data/select";
import FilterSelected from "../../postPage/main/FilterSelected/FilterSelected";
import {
  RenderSelects,
  RenderSmallSelect,
} from "../../postPage/main/selects/Selects";

import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/const";

import Checkbox from "../../../../UI/checkbox/Checkbox";
import { smallSelects } from "../../../../data/smallSelects";
import Pagination from "../../postPage/main/pagination/Pagination";
import "./index.scss";
import RenderUserItems from "./renderUserItems/RenderUserItems";
const MainBoard = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Users - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_USERS}>Users</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Users</div>
      </div>
      <div className="user-page">
        <form className="user-page__form">
          <div className="user-page__top">
            <div className="user-page__wrapper-top">
              <div className="user-page__selects">
                <RenderSelects selectsData={userSelects} />
              </div>
              <label className="user-page__check">
                <Checkbox />
                Banned
              </label>
            </div>
            <div className="user-page__center">
              <FilterSelected selected="First name: 11" />
            </div>
            <div className="user-page__bottom">
              <RenderSmallSelect smallSelectsData={smallSelects} />
            </div>
          </div>
        </form>
        <div className="user-page__users">
          <RenderUserItems />
        </div>
        <Pagination />
      </div>
    </>
  );
};

export default MainBoard;
