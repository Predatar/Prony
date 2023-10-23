import React, { useCallback } from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import { MdDragIndicator, MdCached, MdCreate, MdCancel } from 'react-icons/md';

import Links from '../../../../UI/links/Links';

import ROUTES from '../../../../routes/const';

import './index.scss';

const MainBoard = () => {
  const creteItem = useCallback((color, i) => {
    return (
      <div className="dashboard-tags__item">
        <div className="dashboard-tags__drag">
          <MdDragIndicator />
        </div>
        <div className="dashboard-tags__name" style={{ '--color': `${color}` }}>
          Tagname1
        </div>
        <div className="dashboard-tags__color " style={{ '--color': `${color}` }}></div>
        <div className={`dashboard-tags__privacy ${i % 2 != 0 ? 'dashboard-tags__privacy_private' : ''}`}>
          {i % 2 == 0 ? 'public' : 'private'}
        </div>
        <div className="dashboard-tags__activities">
          <Link to={ROUTES.DASHBOARD_STATUS_REPLACE} className="dashboard-tags__cached">
            <MdCached />
          </Link>
          <Link to={ROUTES.DASHBOARD_STATUS_EDIT} className="dashboard-tags__create">
            <MdCreate />
          </Link>
          <div className="dashboard-tags__cancel">
            <MdCancel />
          </div>
        </div>
      </div>
    );
  }, []);
  const createItems = useCallback(() => {
    const item = [];
    const color = ['#F44336', '#1565C0', '#43A047', '#BB6BD9', '#C4C4C4'];
    for (let i = 0; i < 5; i++) {
      item.push(creteItem(color[i], i));
    }
    return <>{item}</>;
  }, []);

  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Tags - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_STATUS}>Tags</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Tags</div>
        <Links to={ROUTES.DASHBOARD_STATUS_ADD} text={'Add tag'} theme={'link_primary'} width={114} />
      </div>
      <div className="dashboard-tags__table">
        <div className="dashboard-tags__head">
          <div className="dashboard-tags__tag">Name</div>
          <div className="dashboard-tags__tag">Color</div>
          <div className="dashboard-tags__tag">Privacy</div>
        </div>
        <div className="dashboard-tags__body">{createItems()}</div>
      </div>
    </>
  );
};

export default MainBoard;
