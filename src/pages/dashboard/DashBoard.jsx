import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

import Spinner from '../spinner/Spinner';

import ROUTES from '../../routes/const';

import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

const MainPage = lazy(() => import('./mainPage/MainPage'));
const BoardPage = lazy(() => import('./boardPage/BoardPage'));

import './index.scss';

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard - PRONY</title>
      </Helmet>
      <Sidebar />
      <div className="dashboard__wrapper">
        <Header />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path={ROUTES.DASHBOARD_HOME}>
              <MainPage />
            </Route>
            <Route path={ROUTES.DASHBOARD_BOARDS}>
              <BoardPage />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default DashBoard;
