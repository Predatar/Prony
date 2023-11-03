import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import Pagination from '../postPage/main/pagination/Pagination';

import ROUTES from '../../../routes/const';

import img1 from './img/img1.png';
import img2 from './img/img2.png';

import './index.scss';

const ActivityPage = () => {
  const renderItems = () => {
    const mas = [];
    for (let i = 0; i < 4; i++) {
      mas.push(
        <>
          <div className="dashboard-activity__list-item">
            <div className="dashboard-activity__avatar">
              <img src={img1} alt="avatar" />
            </div>
            <div className="dashboard-activity__info">
              <div className="dashboard-activity__name">Sophia-Rose Nava</div>
              <div className="dashboard-activity__status">upvoted</div>
            </div>
            <div className="dashboard-activity__time">6 min ago</div>
            <div className="dashboard-activity__comment">
              <div className="dashboard-activity__title">Welcome to Nolt #1</div>
              <div className="dashboard-activity__text"></div>
            </div>
          </div>
          <div className="dashboard-activity__list-item">
            <div className="dashboard-activity__avatar">
              <img src={img2} alt="avatar" />
            </div>
            <div className="dashboard-activity__info">
              <div className="dashboard-activity__name">Yuvaan Whittington</div>
              <div className="dashboard-activity__status">commented</div>
            </div>
            <div className="dashboard-activity__time dashboard-activity__time_second">38 min ago</div>
            <div className="dashboard-activity__comment">
              <div className="dashboard-activity__title">Tips and Tricks #2</div>
              <div className="dashboard-activity__text dashboard-activity__text_second">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </div>
            </div>
          </div>
        </>
      );
    }

    return mas;
  };

  return (
    <div className="dashboard-activity">
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Activity - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_BOARDS}>Activities</Link>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__title">Activities</div>
      </div>

      <div className="dashboard-activity__body">
        <div className="dashboard-activity__list">{renderItems()}</div>
        <Pagination />
      </div>
    </div>
  );
};

export default ActivityPage;
