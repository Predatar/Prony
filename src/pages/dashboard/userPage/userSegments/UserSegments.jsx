import React from 'react';

import { Helmet } from 'react-helmet';

import Links from '../../../../UI/links/Links';

import { Link } from 'react-router-dom';

import { MdDragIndicator, MdCancel, MdEdit } from 'react-icons/md';

import ROUTES from '../../../../routes/const';

import './index.scss';

const UserSegments = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard User Segments - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/<Link to={ROUTES.DASHBOARD_USERS}>Users</Link>/
        <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS}>User Segments</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">User Segments</div>
        <Links text={'Add new segment'} to={ROUTES.DASHBOARD_USERS_SEGMENTS_ADD} theme={'link_primary'} width={180} />
      </div>

      <div className="dashboard-segment__table">
        <div className="dashboard-segment__head">
          <div className="dashboard-segment__tag">Name</div>
          <div className="dashboard-segment__tag">String representation</div>
          <div className="dashboard-segment__tag"></div>
        </div>
        <div className="dashboard-segment__body">
          <div className="dashboard-segment__item">
            <div className="dashboard-segment__drag">
              <MdDragIndicator />
            </div>
            <div className="dashboard-segment__name">Segment Name 1</div>
            <div className="dashboard-segment__str">company is “value”</div>
            <div className="dashboard-segment__activity">
              <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS_EDIT} className="dashboard-segment__edit">
                <MdEdit />
              </Link>
              <div className="dashboard-segment__cancel">
                <MdCancel />
              </div>
            </div>
          </div>
          <div className="dashboard-segment__item">
            <div className="dashboard-segment__drag">
              <MdDragIndicator />
            </div>
            <div className="dashboard-segment__name">Segment Name 1</div>
            <div className="dashboard-segment__str">created after “value”</div>
            <div className="dashboard-segment__activity">
              <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS_EDIT} className="dashboard-segment__edit">
                <MdEdit />
              </Link>
              <div className="dashboard-segment__cancel">
                <MdCancel />
              </div>
            </div>
          </div>
          <div className="dashboard-segment__item">
            <div className="dashboard-segment__drag">
              <MdDragIndicator />
            </div>
            <div className="dashboard-segment__name">Segment Name 1</div>
            <div className="dashboard-segment__str">company is “value”</div>
            <div className="dashboard-segment__activity">
              <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS_EDIT} className="dashboard-segment__edit">
                <MdEdit />
              </Link>
              <div className="dashboard-segment__cancel">
                <MdCancel />
              </div>
            </div>
          </div>
          <div className="dashboard-segment__item">
            <div className="dashboard-segment__drag">
              <MdDragIndicator />
            </div>
            <div className="dashboard-segment__name">Segment Name 1</div>
            <div className="dashboard-segment__str">company is “value”</div>
            <div className="dashboard-segment__activity">
              <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS_EDIT} className="dashboard-segment__edit">
                <MdEdit />
              </Link>
              <div className="dashboard-segment__cancel">
                <MdCancel />
              </div>
            </div>
          </div>
          <div className="dashboard-segment__item">
            <div className="dashboard-segment__drag">
              <MdDragIndicator />
            </div>
            <div className="dashboard-segment__name">Segment Name 1</div>
            <div className="dashboard-segment__str">company is “value”</div>
            <div className="dashboard-segment__activity">
              <Link to={ROUTES.DASHBOARD_USERS_SEGMENTS_EDIT} className="dashboard-segment__edit">
                <MdEdit />
              </Link>
              <div className="dashboard-segment__cancel">
                <MdCancel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSegments;
