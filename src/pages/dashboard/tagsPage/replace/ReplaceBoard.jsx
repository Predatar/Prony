import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import { RenderSelects } from '../../postPage/main/selects/Selects';

import Checkbox from '../../../../UI/checkbox/Checkbox';
import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';

import ROUTES from '../../../../routes/const';

import './index.scss';

const ReplaceBoard = () => {
  const data = [
    {
      name: 'Tags',
      id: 'tags',
      width: 499,
      widthPopup: 333,
      filter: {
        title: 'Tags'
      },
      content: (
        <>
          <label>
            <Checkbox />
            No tags
          </label>

          <label>
            <Checkbox />
            Tagname1
          </label>

          <label>
            <Checkbox />
            Tagname2
          </label>
        </>
      )
    }
  ];
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Tags - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_TAGS}>Tags</Link>/
        <Link to={ROUTES.DASHBOARD_TAGS}>Replace tags</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Replace tag</div>
      </div>
      <form className="dashboard-tags__form">
        <div className="dashboard-tags__form-title">Replaces Tagname1 tag with another tag</div>
        <div className="dashboard-tags__form-select">
          <RenderSelects selectsData={data} />
        </div>
        <div className="dashboard-tags__form-btn">
          <Links to={ROUTES.DASHBOARD_TAGS} text={'Cancel'} theme={'link_secondary'} width={147} />
          <Btn text={'Submit'} width={150} theme={'btn_primary'} />
        </div>
      </form>
    </>
  );
};

export default ReplaceBoard;
