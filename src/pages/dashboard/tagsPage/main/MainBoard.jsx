import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import ROUTES from '../../../../routes/const';

const MainBoard = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Boards - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_STATUS}>Tags</Link>
      </div>
			<div className="dashboard__main">
				<div className="dashboard__title">Tags</div>
			</div>
    </>
  );
};

export default MainBoard;
