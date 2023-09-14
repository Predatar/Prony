import React from 'react';

import { Switch, Route } from 'react-router-dom';

import ROUTES from '../../routes/const';

import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';

import './index.scss';

const DashBoard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__wrapper">
        <Header />
        <Switch>
          <Route exact to={ROUTES.DASHBOARD_HOME}>
            asdasdawd
          </Route>
          <Route exact to={ROUTES.DASHBOARD_BOARDS}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt ipsa ea sit magni odit quisquam expedita hic
            repudiandae odio temporibus, corrupti deserunt amet mollitia nobis assumenda! Voluptatibus quas eum dolores?
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
