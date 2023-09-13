import React, { lazy, Suspense } from 'react';

import ROUTES from './const.js';

import { Switch, Route } from 'react-router-dom';
import Spinner from '../pages/spinner/Spinner';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.HOME}></Route>
      <Route path="*">
        <Spinner />
      </Route>
    </Switch>
  );
};

export default AppRouter;
