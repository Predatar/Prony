import React, { lazy, Suspense } from "react";

import { Route, Switch } from "react-router-dom";

import ROUTES from "../../../routes/const";
import Spinner from "../../spinner//Spinner";

const MainPage = lazy(() => import("./main/MainStatus"));
const StatusesAdd = lazy(() => import("./statusesAdd/StatusesAdd"));
const StatusesEdit = lazy(() => import("./statusesEdit/StatusesEdit"));
import "../boardPage/index.scss";

const StatusPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_STATUS}>
            <MainPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_STATUS_ADD}>
            <StatusesAdd />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_STATUS_EDIT}>
            <StatusesEdit />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default StatusPage;
