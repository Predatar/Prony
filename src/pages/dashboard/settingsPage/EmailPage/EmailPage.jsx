import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import Checkbox from '../../../../UI/checkbox/Checkbox';
import Btn from '../../../../UI/button/Btn';
import { RenderSelects } from '../../postPage/main/selects/Selects';

import ROUTES from '../../../../routes/const';

import './index.scss';

const EmailPage = () => {
  const data = [
    {
      name: 'Select attribute',
      id: 'sel',
      width: 233,
      widthPopup: 333,

      filter: {
        title: 'Select attribute'
      },
      content: (
        <>
          <label>
            <Checkbox />
            Daily
          </label>

          <label>
            <Checkbox />
            Weekly
          </label>

          <label>
            <Checkbox />
            Monthly
          </label>
        </>
      )
    }
  ];

  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Custom domain - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_SETTINGS}>Settings</Link>/
        <Link to={ROUTES.DASHBOARD_SETTINGS_EMAIL}>Custom domain</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Custom domain</div>
      </div>

      <form className="dashboard-settings__form dashboard-settings__form_email">
        <div className="dashboard-settings__form-header">
          <div className="dashboard-settings__tag">User email settings</div>
          <div className="dashboard-settings__tag">Admin email settings</div>
        </div>
        <div className="dashboard-settings__form-body">
          <div className="dashboard-settings__form-wrapper dashboard-settings__form-wrapper_user">
            <div className="dashboard-settings__checkbox">
              <Checkbox name={'user'} />
              <div className="dashboard-settings__info">
                <div className="dashboard-settings__info-title">Status Change Email</div>
                <div className="dashboard-settings__info-text">
                  We'll email voters when your team changes the status of a Post. When you update the status of a Post,
                  you'll see this option to "Notify all voters"
                </div>
              </div>
            </div>
            <div className="dashboard-settings__checkbox">
              <Checkbox name={'user'} />
              <div className="dashboard-settings__info">
                <div className="dashboard-settings__info-title">Admin Responses in Post Comments</div>
                <div className="dashboard-settings__info-text">
                  We'll email voters when your team responds to a Post
                </div>
              </div>
            </div>
            <div className="dashboard-settings__checkbox">
              <Checkbox name={'user'} />
              <div className="dashboard-settings__info">
                <div className="dashboard-settings__info-title">Mention Email</div>
                <div className="dashboard-settings__info-text">
                  Emails we send when anyone gets @mentioned in a Post
                </div>
              </div>
            </div>
            <div className="dashboard-settings__checkbox">
              <Checkbox name={'user'} />
              <div className="dashboard-settings__info">
                <div className="dashboard-settings__info-title">Weekly User Report</div>
                <div className="dashboard-settings__info-text">Prony regular user updates regarding new Posts.</div>
              </div>
            </div>
          </div>
          <div className="dashboard-settings__form-wrapper dashboard-settings__form-wrapper_admin">
            <div className="dashboard-settings__checkbox">
              <Checkbox name={'user'} />
              <div className="dashboard-settings__info">
                <div className="dashboard-settings__info-title">Admin Report email</div>
                <div className="dashboard-settings__info-select">
                  <RenderSelects selectsData={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-settings__btn-email">
          <Btn text={'Submit'} theme={'btn_primary'} width={150} />
        </div>
      </form>
    </>
  );
};

export default EmailPage;
