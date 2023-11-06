import React, { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import Spinner from "../../spinner//Spinner";

const MainBoard = lazy(() => import("./main/MainBoard"));
const ChangelogEdit = lazy(() => import("./changelogEdit/ChangelogEdit"));
const ChangelogAdd = lazy(() => import("./changelogAdd/ChangelogAdd"));
const ChangelogLabels = lazy(() => import("./changelogLabels/ChangelogLabels"));
const ChangelogSettings = lazy(() =>
  import("./changelogSettings/ChangelogSettings")
);
const ChangelogGeneral = lazy(() =>
  import("./changelogGeneral/ChangelogGeneral")
);
import ROUTES from "../../../routes/const";
import "./index.scss";
const ChangelogPage = () => {
  return (
    <div className="dashboard-log">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG}>
            <MainBoard />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG_EDIT}>
            <ChangelogEdit />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG_ADD}>
            <ChangelogAdd />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG_LABELS}>
            <ChangelogLabels />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG_SETTINGS}>
            <ChangelogSettings />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_CHANGELOG_SETTINGS_GENERAL}>
            <ChangelogGeneral />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default ChangelogPage;
