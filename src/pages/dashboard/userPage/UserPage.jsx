import React, { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import Spinner from "../../spinner//Spinner";

const MainBoard = lazy(() => import("./main/MainBoard"));

import ROUTES from "../../../routes/const";

import "./index.scss";

const UserPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_USERS}>
            <MainBoard />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default UserPage;
