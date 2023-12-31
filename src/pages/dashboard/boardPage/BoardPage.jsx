import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../../spinner//Spinner';

const MainBoard = lazy(() => import('./main/MainBoard'));
const CreateBoard = lazy(() => import('./create/CreateBoard'));
const DeleteBoard = lazy(() => import('./delete/DeleteBoard'));
const EditBoard = lazy(() => import('./edit/EditBoard'));

import ROUTES from '../../../routes/const';

import './index.scss';

const BoardPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_BOARDS}>
            <MainBoard />
          </Route>
          <Route path={ROUTES.DASHBOARD_BOARDS_CREATE}>
            <CreateBoard />
          </Route>
          <Route path={ROUTES.DASHBOARD_BOARDS_DELETE}>
            <DeleteBoard />
          </Route>
          <Route path={ROUTES.DASHBOARD_BOARDS_EDIT}>
            <EditBoard />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default BoardPage;
