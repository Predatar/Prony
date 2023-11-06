import React from 'react';
import { SiReaddotcv } from 'react-icons/si';
import { BiSolidLabel } from 'react-icons/bi';
import ROUTES from '../../../../../routes/const';
import LogTag from '../../components/logTag/LogTag';
import { IoMdCreate } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { DashboardPopup, DashboardPopupItemLink } from '../../../../../components/dashboardPopup/DashboardPopup';
import './changelogItem.scss';
const ChangelogItem = ({ time, feedback, changelog, admin }) => {
  return (
    <div className="changelog-item">
      <div className="changelog-item__body">
        <div className="changelog-item__item">
          <span>Send status updates back through Intercom</span>
        </div>
        <div className="changelog-item__item">
          <span>{time}</span>
        </div>
        <div className="changelog-item__item">
          <LogTag feedback={feedback} changelog={changelog} admin={admin} />
        </div>
        <div className="changelog-item__item">
          <div className="changelog-item__right-right">
            <DashboardPopup name={'post'}>
              <DashboardPopupItemLink icon={<BiSolidLabel />} text={'Labels'} to={ROUTES.DASHBOARD_CHANGELOG_LABELS} />
              <DashboardPopupItemLink icon={<SiReaddotcv />} text={'Add new label'} to={ROUTES.DASHBOARD_POSTS_VIEW} />
              <DashboardPopupItemLink icon={<IoMdCreate />} text={'Edit  label'} to={ROUTES.DASHBOARD_CHANGELOG_EDIT} />
              <DashboardPopupItemLink
                icon={<FiSettings />}
                text={'Settings'}
                to={ROUTES.DASHBOARD_CHANGELOG_SETTINGS}
              />
            </DashboardPopup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogItem;
