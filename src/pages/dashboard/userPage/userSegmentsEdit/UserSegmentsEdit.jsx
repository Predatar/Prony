import React from 'react';

import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';

import Checkbox from '../../../../UI/checkbox/Checkbox';
import Btn from '../../../../UI/button/Btn';
import Links from '../../../../UI/links/Links';

import { RenderSelects } from '../../postPage/main/selects/Selects';

import ROUTES from '../../../../routes/const';

const UserSegmebtsEdit = () => {
  const data = [
    {
      name: 'Select attribute',
      id: 'attribute',
      width: 200,
      widthPopup: 333,
      filter: {
        title: 'Select attribute'
      },
      content: (
        <>
          <label>
            <Checkbox />
            No attribute
          </label>

          <label>
            <Checkbox />
            Attribute 1
          </label>

          <label>
            <Checkbox />
            Attribute 2
          </label>
        </>
      )
    },
    {
      name: 'Select',
      id: 'select',
      width: 126,
      widthPopup: 250,
      filter: {
        title: 'Select'
      },
      content: (
        <>
          <label>
            <Checkbox />
            Am
          </label>

          <label>
            <Checkbox />
            Is
          </label>

          <label>
            <Checkbox />
            Are
          </label>
        </>
      )
    }
  ];

  const attr = [
    {
      name: 'Select attribute',
      id: 'attribute',
      width: 200,
      widthPopup: 333,
      filter: {
        title: 'Select attribute'
      },
      content: (
        <>
          <label>
            <Checkbox />
            No attribute
          </label>

          <label>
            <Checkbox />
            Attribute 1
          </label>

          <label>
            <Checkbox />
            Attribute 2
          </label>
        </>
      )
    }
  ];

  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard User Segments Edit - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_USERS}>Users</Link>/
        <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS}>User Segments</Link>/
        <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS}>Edit user segment</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Edit user segment</div>
      </div>
      <form className="dashboard-users__form">
        <div className="dashboard-users__input-wrapper">
          <label htmlFor="">Name</label>
          <input type="text" className="dashboard-users__input" placeholder="Enter user segment name" />
        </div>
        <div className="dashboard-users__select-wrapper">
          <RenderSelects selectsData={data} />
          <input type="text" className="dashboard-users__select" placeholder="value" />
        </div>
        <div className="dashboard-users__select-wrapper">
          <RenderSelects selectsData={attr} />
        </div>
        <div className="dashboard-users__btn-group">
          <Links to={ROUTES.DASHBOARD_USERS_SEGMENTS} text={'Cancel'} theme={'link_secondary'} width={147} />
          <Btn text={'Submit'} theme={'btn_primary'} width={150} />
        </div>
      </form>
    </>
  );
};

export default UserSegmebtsEdit;
