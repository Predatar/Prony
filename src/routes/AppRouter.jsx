import React, { lazy } from 'react';

import ROUTES from './const.js';

import { Route, Switch } from 'react-router-dom';

const DashBoard = lazy(() => import('../pages/dashboard/DashBoard'));

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}>
        <DashBoard />
      </Route>
      <Route path={ROUTES.DASHBOARD_HOME}>
        <DashBoard />
        {/* <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link> */}
      </Route>
      <Route path="*">Empty</Route>
    </Switch>
  );
};

export default AppRouter;
