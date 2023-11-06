import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';

import ROUTES from '../../../../routes/const';

import '../changelogLabelsAdd/index.scss';

const ChangelogLabelsEdit = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog Add - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_CHANGELOG}>Changelog</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_LABELS}>Changelog labels</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_LABELS_ADD}>Edit changelog label</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Edit changelog label</div>
      </div>

      <form className="dashboard-log__form">
        <div className="dashboard-log__input-wrapper">
          <label htmlFor="">Name</label>
          <input type="text" className="dashboard-log__input" placeholder="Enter status name" />
        </div>
        <div className="dashboard-log__input-wrapper">
          <div className="dashboard-log__label">Color</div>
          <div className="dashboard-log__color-wrapper">
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(84, 110, 122, 1)' }}></span>
            </label>
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(3, 184, 253, 1)' }}></span>
            </label>
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(84, 110, 122, 1)' }}></span>
            </label>
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(39, 37, 87, 1)' }}></span>
            </label>
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(84, 110, 122, 1)' }}></span>
            </label>
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(44, 98, 158, 1)' }}></span>
            </label>
            <label className="dashboard-log__radio-color">
              <input type="radio" name="color" id="" />
              <span style={{ '--color': 'rgba(67, 91, 102, 1)' }}></span>
            </label>
          </div>
        </div>
        <div className="dashboard-log__btn-group">
          <Links to={ROUTES.DASHBOARD_CHANGELOG_LABELS} text={'Cancel'} width={147} theme={'link_secondary'} />
          <Btn text={'Submit'} width={150} theme={'btn_primary'} />
        </div>
      </form>
    </>
  );
};

export default ChangelogLabelsEdit;
