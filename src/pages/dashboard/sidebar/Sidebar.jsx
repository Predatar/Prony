import React, { useRef } from 'react';

import { NavLink } from 'react-router-dom';

import {
  FiSliders,
  FiLayout,
  FiEdit,
  FiFlag,
  FiUsers,
  FiCheckSquare,
  FiTarget,
  FiSettings,
  FiChevronDown
} from 'react-icons/fi';

import Logo from '../../../components/logo/Logo';

import ROUTES from '../../../routes/const';

import './index.scss';

const Sidebar = () => {
  const settings = useRef();
  const dropdown = useRef();

  const openSettings = e => {
    settings.current.childNodes[2].classList.toggle('sidebar__arrow_active');
    if (settings.current.childNodes[2].classList.contains('sidebar__arrow_active')) {
      dropdown.current.style = '--height: 85px';
    } else {
      dropdown.current.style = '--height: 0px';
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo url={ROUTES.DASHBOARD_HOME} size={'small'} />
      </div>
      <div className="sidebar__list">
        <NavLink
          exact
          to={ROUTES.DASHBOARD_HOME}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiSliders />
          Dashboard
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_BOARDS}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiLayout />
          Boards
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_POSTS}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiEdit />
          Posts
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_STATUS}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiFlag />
          Statuses
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_USERS}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiUsers />
          Users
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_CHANGELOG}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiCheckSquare />
          Changelog
        </NavLink>
        <div className={'sidebar__items sidebar__pointer'} ref={settings} onClick={openSettings}>
          <FiSettings />
          Settings
          <div className="sidebar__arrow">
            <FiChevronDown />
          </div>
        </div>
        <div style={{ '--height': '0px' }} className="sidebar__dropdown" ref={dropdown}>
          <div className="sidebar__dropdown-item">Settings 1</div>
          <div className="sidebar__dropdown-item">Settings 2</div>
          <div className="sidebar__dropdown-item">Settings 3</div>
        </div>
        <NavLink
          to={ROUTES.DASHBOARD_INTEGRATION}
          className={isActive => 'sidebar__items' + (!isActive ? ' unselected' : ' sidebar__items_active')}
        >
          <FiTarget />
          Integrations
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
