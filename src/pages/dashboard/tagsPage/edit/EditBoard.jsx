import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import Radio from '../../../../UI/radio/Radio';
import Links from '../../../../UI/links/Links';
import Btn from '../../../../UI/button/Btn';

import ROUTES from '../../../../routes/const';

const EditBoard = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Tags - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_STATUS}>Tags</Link>/
        <Link to={ROUTES.DASHBOARD_STATUS}>Edit tags</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Edit tag</div>
      </div>
      <form className="dashboard-tags__form">
        <div className="dashboard-tags__wrapper">
          <div className="dashboard-tags__input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" name="" id="name" className="dashboard-tags__form-input" placeholder="Enter tagname" />
          </div>
          <div className="dashboard-tags__input-wrapper">
            <label htmlFor="">Color</label>
            <div className="dashboard-tags__color-wrapper">
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#B71C1C' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#DE3B31' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#FF6B62' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#43A047' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#62C966' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#ADF1B0' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#0F498C' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#1565C0' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#4A98F1' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#A4CEFF' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#FF9800' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#FFD600' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#FFED8D' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#474747' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#818181' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#CCC' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#6D28AE' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#A258E7' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#CD98FF' }}></span>
              </label>
              <label className="dashboard-tags__radio-color">
                <input type="radio" name="color" id="" />
                <span style={{ '--color': '#E6CBFF' }}></span>
              </label>
            </div>
          </div>
          <div className="dashboard-tags__input-wrapper" style={{ marginTop: '13px' }}>
            <label htmlFor="name">Privacy</label>
            <div className="dashboard-tags__radio-wrapper">
              <div className="dashboard-tags__radio">
                <Radio name={'privacy'} />
                Public
              </div>
              <div className="dashboard-tags__radio">
                <Radio name={'privacy'} />
                Private
              </div>
            </div>
            <div className="dashboard-tags__helps">Private tags are only visible to moderators.</div>
          </div>
          <div className="dashboard-tags__btn">
            <Links to={ROUTES.DASHBOARD_STATUS} text={'Cancel'} width={147} theme={'link_secondary'} />
            <Btn text={'Submit'} width={150} theme={'btn_primary'} />
          </div>
        </div>
      </form>
    </>
  );
};

export default EditBoard;
