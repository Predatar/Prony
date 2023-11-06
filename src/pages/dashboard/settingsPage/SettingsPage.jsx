import React, { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../../spinner//Spinner';

const GeneralPage = lazy(() => import('./GeneralPage/index'));
const EmailPage = lazy(() => import('./EmailPage/EmailPage'));
const SsoPage = lazy(() => import('./ssoPage/SsoPage'));
const CustomDomain = lazy(() => import('./customDomain/CustomDomain'));

import ROUTES from '../../../routes/const';

import './index.scss';

const BoardPage = () => {
  return (
    <div className="dashboard-settings">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS}>
            <GeneralPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS_EMAIL}>
            <EmailPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS_SSO}>
            <SsoPage />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_SETTINGS_DOMAIN}>
            <CustomDomain />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default BoardPage;
