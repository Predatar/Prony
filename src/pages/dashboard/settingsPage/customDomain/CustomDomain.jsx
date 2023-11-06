import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import { MdOutlineError } from 'react-icons/md';

import ROUTES from '../../../../routes/const';

import './index.scss';

const CustomDomain = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Custom domain - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_SETTINGS}>Settings</Link>/
        <Link to={ROUTES.DASHBOARD_SETTINGS_DOMAIN}>Custom domain</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Custom domain</div>
      </div>
      <div className="dashboard-settings__form-domain">
        <div className="dashboard-settings__info-domain">
          We've created prony.canny.io for you. Instead, you can use your own website (feedback.yoursite.com). Just add
          the domain below then follow <a href="#">these instructions.</a>
          <br />
          <br />
          Set your primary domain to update the links we use in our product/emails.
        </div>
        <div className="dashboard-settings__warning">You have not set up any custom domains</div>
        <div className="dashboard-settings__input">
          <label htmlFor="">Domain</label>
          <input type="text" />
        </div>
        <div className="dashboard-settings__error">
          <div className="dashboard-settings__error-icon">
            <MdOutlineError />
          </div>
          Make sure you point to cname.prony.io in your DNS settings
        </div>
      </div>
    </>
  );
};

export default CustomDomain;
