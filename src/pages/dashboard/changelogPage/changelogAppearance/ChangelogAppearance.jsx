import React from "react";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/const";
import AppearanceForm from "./appearanceForm/AppearanceForm";

const ChangelogAppearance = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_SETTINGS}>Settings</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_EDIT}>Appearance</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Appearance</div>
      </div>
      <div className="appearance">
        <h1>dekiike0</h1>
        <AppearanceForm />
      </div>
    </>
  );
};

export default ChangelogAppearance;
