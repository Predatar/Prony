import React, { lazy } from "react";

import ROUTES from "./const.js";

import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Spinner from "../pages/spinner/Spinner";

const DashBoard = lazy(() => import("../pages/dashboard/DashBoard"));

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>
      </Route>
      <Route path={ROUTES.DASHBOARD_HOME}>
        <DashBoard />
      </Route>
      <Route path="*">Empty</Route>
    </Switch>
  );
};

export default AppRouter;
