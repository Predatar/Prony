import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import { MdContentCopy } from 'react-icons/md';

import Btn from '../../../../UI/button/Btn';

import ROUTES from '../../../../routes/const';

import './index.scss';

const SsoPage = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard SSO - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_SETTINGS}>Settings</Link>/
        <Link to={ROUTES.DASHBOARD_SETTINGS_SSO}>SSO</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">SSO</div>
      </div>
      <form className="dashboard-settings__form dashboard-settings__form_sso">
        <div className="dashboard-settings__form-header">
          <div className="dashboard-settings__tag">Setup SSO</div>
          <div className="dashboard-settings__tag">Setup SSO redirect</div>
        </div>
        <div className="dashboard-settings__form-body">
          <div className="dashboard-settings__wrapper">
            <div className="dashboard-settings__container">
              <div className="dashboard-settings__steps">
                <div className="dashboard-settings__step">1</div>
                <div className="dashboard-settings__info">
                  <div className="dashboard-settings__info-title">Your secret single sign on key</div>
                  <div className="dashboard-settings__copy">
                    <div className="dashboard-settings__copy-text">asjdqh-grde28-75wjhebf-3646erhyhj</div>
                    <div className="dashboard-settings__copy-icon">
                      <MdContentCopy />
                    </div>
                    <Btn text={'Generate'} theme={'btn_primary'} width={183} />
                  </div>
                </div>
              </div>
              <div className="dashboard-settings__steps">
                <div className="dashboard-settings__step">2</div>
                <div className="dashboard-settings__info">
                  <div className="dashboard-settings__info-title">
                    Setup
                    <span>
                      <a href="*">single sign on</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-settings__container">
            <div className="dashboard-settings__t">Setup SSO redirect</div>
              <div className="dashboard-settings__steps">
                <div className="dashboard-settings__step">1</div>
                <div className="dashboard-settings__info">
                  <div className="dashboard-settings__info-title">Remote login URL (optional)</div>
                  <div className="dashboard-settings__info-text">
                    By default, Prony uses its own authentication. If a user is not logged in, we'll ask them to create
                    a Prony account. If you want to disable this, and only use accounts from your app, set your SSO
                    remote login URL here.
                  </div>
                </div>
              </div>
              <div className="dashboard-settings__steps">
                <div className="dashboard-settings__step">2</div>
                <div className="dashboard-settings__info">
                  <div className="dashboard-settings__info-title">Remote logout URL (optional)</div>
                  <div className="dashboard-settings__info-text">
                    Redirect SSO users to a specific URL after they log out.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-settings__btn-group">
          <Btn text={'Submit'} theme={'btn_primary'} width={150} />
        </div>
      </form>
    </>
  );
};

export default SsoPage;
