import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../../spinner//Spinner';

const MainBoard = lazy(() => import('./main/MainBoard'));
const UserDetailPage = lazy(() => import('./userDetailsPage/UserDetailPage'));
const UserSegments = lazy(() => import('./userSegments/UserSegments'));
const UserSegmentsAdd = lazy(() => import('./userSegmentsAdd/UserSegmebtsAdd'));
const UserSegmentsEdit = lazy(() => import('./userSegmentsEdit/UserSegmentsEdit'));

import ROUTES from '../../../routes/const';

import './index.scss';

const UserPage = () => {
  return (
    <div className="dashboard-users">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_USERS}>
            <MainBoard />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_USERS_DETAILS}>
            <UserDetailPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_USERS_SEGMENTS}>
            <UserSegments />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_USERS_SEGMENTS_ADD}>
            <UserSegmentsAdd />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_USERS_SEGMENTS_EDIT}>
            <UserSegmentsEdit />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default UserPage;
