import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
import Links from "../../../../UI/links/Links";

import ROUTES from "../../../../routes/const";
import ChangelogForm from "../components/changelogForm/ChangelogForm";

const ChangelogEdit = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG}>Changelog</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_EDIT}>Edit record</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Edit record</div>
      </div>
      <div className="changlog-edit">
        <div className="changlog-edit__body">
          <ChangelogForm />
        </div>
      </div>
    </>
  );
};

export default ChangelogEdit;
