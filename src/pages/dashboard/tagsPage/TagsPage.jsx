import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../../spinner//Spinner';

const MainBoard = lazy(() => import('./main/MainBoard'));

import ROUTES from '../../../routes/const';

import './index.scss';

const TagsPage = () => {
  return (
    <div className="dashboard-tags">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_STATUS}>
            <MainBoard />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default TagsPage;
