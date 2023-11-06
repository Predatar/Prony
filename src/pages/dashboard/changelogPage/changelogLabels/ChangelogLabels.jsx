import React from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import Links from "../../../../UI/links/Links";

import ROUTES from "../../../../routes/const";
import RenderChagelogTable from "./renderChangelogTable/RenderChangelogTable";
import "./index.scss";

const ChangeLogLabels = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG}>Changelog</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_LABELS}>Changelog labels</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Changelog Labels</div>
        <Links
          to={ROUTES.DASHBOARD_CHANGELOG_ADD}
          text={"Add label"}
          theme={"link_primary"}
          width={124}
        />
      </div>
      <div className="dashboard-changelog-table">
        <RenderChagelogTable />
      </div>
    </>
  );
};

export default ChangeLogLabels;
