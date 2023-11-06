import React from 'react';
import '../../../../statusesPage/statusesTable/statusesTable.scss';

import { MdCancel, MdCreate, MdDragIndicator } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ROUTES from '../../../../../../routes/const';
import '../../../index.scss';
const ChangelogTableItem = ({ id, name, color, background, backgroundTag, colorTag }) => {
  return (
    <div id={id} style={{ background: background }} className="statuses-item">
      <div className="statuses-item__drag">
        <MdDragIndicator />
      </div>
      <div className="statuses-item__body">
        <div style={{ flex: '0 1 328px' }} className="statuses-item__item changelog-table__item">
          <span style={{ background: backgroundTag, color: colorTag }}>{name}</span>
        </div>
        <div style={{ flex: '0 1 188px' }} className="statuses-item__item">
          <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <circle cx="14.5" cy="14.5" r="14.5" fill={color} />
          </svg>
        </div>
      </div>
      <div className="statuses-item__activities">
        <Link to={ROUTES.DASHBOARD_CHANGELOG_LABELS_EDIT} className="dashboard-tags__create">
          <MdCreate />
        </Link>
        <div className="dashboard-tags__cancel">
          <div className="dashboard-tags__create">
            <MdCancel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangelogTableItem;
