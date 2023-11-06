import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../../spinner//Spinner';

const GeneralPage = lazy(() => import('./GeneralPage/index'));

import ROUTES from '../../../routes/const';

// import './index.scss';

const BoardPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS}>
            <GeneralPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default BoardPage;
