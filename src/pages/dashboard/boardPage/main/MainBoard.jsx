import React, { useCallback, useEffect } from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import {
  MdCancel,
  MdCreate,
  MdDragIndicator,
  MdLockOpen,
  MdModeComment,
  MdSettings,
  MdViewHeadline,
  MdVisibility
} from 'react-icons/md';

import Links from '../../../../UI/links/Links';
import {
  DashboardPopup,
  DashboardPopupItem,
  DashboardPopupItemLink
} from '../../../../components/dashboardPopup/DashboardPopup';

import ROUTES from '../../../../routes/const';

import './index.scss';

const MainBoard = () => {
  useEffect(() => {
    document.querySelector('.dashboard').style = 'grid-template-rows: 1fr;';
  }, []);
  useEffect(() => {
    return () => {
      document.querySelector('.dashboard').style = '';
    };
  });

  const Board = useCallback(() => {
    return (
      <div className="dashboard-board__item">
        <div className="dashboard-board__drag">
          <MdDragIndicator />
        </div>
        <div className="dashboard-board__name">Send status updates back through Intercom</div>
        <div className="dashboard-board__posts">12</div>
        <div className="dashboard-board__activities">
          <div
            className="dashboard-board__visibility"
            onClick={e => {
              e.target.classList.toggle('dashboard-board__visibility_active');
            }}
          >
            <MdVisibility />
          </div>
          <div
            className="dashboard-board__lock"
            onClick={e => {
              e.target.classList.toggle('dashboard-board__lock_active');
            }}
          >
            <MdLockOpen />
          </div>
          <div>
            <DashboardPopup name={'board'}>
              <DashboardPopupItem icon={<MdVisibility />} text={'Public view'} />
              <DashboardPopupItemLink
                to={ROUTES.DASHBOARD_BOARDS_EDIT}
                icon={<MdSettings />}
                text={'Edit board settings'}
              />
              <DashboardPopupItem icon={<MdViewHeadline />} text={'List board tags'} />
              <DashboardPopupItemLink
                to={ROUTES.DASHBOARD_BOARDS_EDIT_BOARD}
                icon={<MdCreate />}
                text={'Edit board post'}
              />
              <DashboardPopupItemLink to={ROUTES.DASHBOARD_BOARDS_DELETE} icon={<MdCancel />} text={'Delete board'} />
              <DashboardPopupItemLink to={ROUTES.DASHBOARD_POSTS} icon={<MdModeComment />} text={'View posts'} />
            </DashboardPopup>
          </div>
        </div>
      </div>
    );
  }, []);

  const renderItems = () => {
    const item = [];
    for (let i = 0; i < 10; i++) {
      item.push(Board());
    }
    return <>{item}</>;
  };
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Boards - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_BOARDS}>Boards</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Boards</div>
        <Links text={'Create Board'} theme={'link_primary'} width={147} to={ROUTES.DASHBOARD_BOARDS_CREATE} />
      </div>
      <div className="dashboard-board__table">
        <div className="dashboard-board__head">
          <div className="dashboard-board__tag">Name</div>
          <div className="dashboard-board__tag">Posts</div>
          <div className="dashboard-board__tag"></div>
        </div>
        <div className="dashboard-board__body">{renderItems()}</div>
      </div>
    </>
  );
};

export default MainBoard;
