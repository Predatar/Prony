import React, { lazy } from "react";

import ROUTES from "./const.js";

import { Route, Switch } from "react-router-dom";

const DashBoard = lazy(() => import("../pages/dashboard/DashBoard"));
const Client = lazy(() => import("../pages/client/Client"));

const AppRouter = () => {
  return (
    <Switch>
      <Route path={ROUTES.DASHBOARD_HOME}>
        <DashBoard />
      </Route>
      <Route path={ROUTES.CLIENT_HOME}>
        <Client />
      </Route>
      <Route path="*">Empty</Route>
    </Switch>
  );
};

export default AppRouter;
