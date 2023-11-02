import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import { MdEdit, MdModeComment, MdThumbUp } from 'react-icons/md';

import posts from './tabs/posts';
import votes from './tabs/votes';

import ROUTES from '../../../../routes/const';

import avatar from './img/avatar.png';

import './index.scss';

const UserDetailPage = () => {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard User Detail - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_USERS}>Users</Link>/
        <Link to={ROUTES.DASHBOARD_USERS_DETAILS}>User Details</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">User Details</div>
      </div>
      <div className="dashboard-users__container">
        <div className="dashboard-users__info">
          <div className="dashboard-users__wrapper">
            <div className="dashboard-users__avatar">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="dashboard-users__role">Admin</div>
          </div>
          <div className="dashboard-users__wrapper dashboard-users__wrapper_info">
            <div className="dashboard-users__name">Kairo Bruce</div>
            <div className="dashboard-users__email">
              <a href="mailto:anna_w@gmail.com">anna_w@gmail.com</a>
            </div>
            <div className="dashboard-users__date">21-01-2019</div>
          </div>
          <div className="dashboard-users__statistics">
            <div className="dashboard-users__posts">
              <div className="dashboard-users__posts-icon">
                <MdEdit />
              </div>
              Posts
              <div className="dashboard-users__posts-count">123</div>
            </div>
            <div className="dashboard-users__votes">
              <div className="dashboard-users__votes-icon">
                <MdThumbUp />
              </div>
              Votes
              <div className="dashboard-users__votes-count">
                1 <span>023</span>
              </div>
            </div>
            <div className="dashboard-users__comments">
              <div className="dashboard-users__comments-icon">
                <MdModeComment />
              </div>
              Comments
              <div className="dashboard-users__comments-count">
                1 <span>023</span>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-users__tabs">
          <div className="dashboard-users__tab-navigation">
            <div
              className={'dashboard-users__tab-item ' + `${tabs == 0 ? 'dashboard-users__tab-item_active' : ''}`}
              onClick={() => {
                setTabs(0);
              }}
            >
              10 last posts
            </div>
            <div
              className={'dashboard-users__tab-item ' + `${tabs == 1 ? 'dashboard-users__tab-item_active' : ''}`}
              onClick={() => {
                setTabs(1);
              }}
            >
              10 last Votes
            </div>
          </div>
          <div className="dashboard-users__tabs-main">{tabs == 0 ? posts() : votes()}</div>
        </div>
      </div>
    </>
  );
};

export default UserDetailPage;
