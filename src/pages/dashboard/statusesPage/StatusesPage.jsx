import React, { lazy, Suspense } from "react";

import { Route, Switch } from "react-router-dom";

import ROUTES from "../../../routes/const";
import Spinner from "../../spinner//Spinner";

const MainPage = lazy(() => import("./main/MainStatus"));

import "../boardPage/index.scss";

const StatusPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_STATUS}>
            <MainPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default StatusPage;
