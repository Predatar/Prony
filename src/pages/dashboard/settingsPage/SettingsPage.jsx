import React, { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import Spinner from "../../spinner//Spinner";

const GeneralPage = lazy(() => import("./GeneralPage/GeneralPage"));
const EmailPage = lazy(() => import("./EmailPage/EmailPage"));
const AppearancePage = lazy(() => import("./AppearancePage/AppearancePage"));
import ROUTES from "../../../routes/const";

// import './index.scss';

const BoardPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS_EMAIL}>
            <EmailPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS}>
            <GeneralPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS}>
            <GeneralPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS_APPEARANCE}>
            <AppearancePage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG_SETTINGS_GENERAL}>
            <AppearancePage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default BoardPage;
