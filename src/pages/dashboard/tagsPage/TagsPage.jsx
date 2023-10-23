import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../../spinner//Spinner';

const MainBoard = lazy(() => import('./main/MainBoard'));
const AddBoard = lazy(() => import('./add/AddPage'));
const EditBoard = lazy(() => import('./edit/EditBoard'));
const ReplaceBoard = lazy(() => import('./replace/ReplaceBoard'));

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
          <Route exact path={ROUTES.DASHBOARD_STATUS_ADD}>
            <AddBoard />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_STATUS_EDIT}>
            <EditBoard />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_STATUS_REPLACE}>
            <ReplaceBoard />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default TagsPage;
