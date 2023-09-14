import React, { lazy } from 'react';

import ROUTES from './const.js';

import { Switch, Route } from 'react-router-dom';
import Spinner from '../pages/spinner/Spinner';

const DashBoard = lazy(() => import('../pages/dashboard/DashBoard'));

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}></Route>
      <Route exact path={ROUTES.DASHBOARD}>
        <DashBoard />
      </Route>
      <Route path="*">
        <Spinner />
      </Route>
    </Switch>
  );
};

export default AppRouter;
