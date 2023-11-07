import React, { useRef } from "react";

import { NavLink } from "react-router-dom";

import {
  FiSliders,
  FiLayout,
  FiEdit,
  FiFlag,
  FiUsers,
  FiCheckSquare,
  FiTarget,
  FiSettings,
  FiChevronDown,
} from "react-icons/fi";

import Logo from "../../../components/logo/Logo";

import ROUTES from "../../../routes/const";

import "./index.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Logo url={ROUTES.DASHBOARD_HOME} size={"small"} />
      </div>
      <div className="sidebar__list">
        <NavLink
          exact
          to={ROUTES.DASHBOARD_HOME}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiSliders />
          Dashboard
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_BOARDS}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiLayout />
          Boards
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_POSTS}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiEdit />
          Posts
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_STATUS}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiFlag />
          Statuses
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_USERS}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiUsers />
          Users
        </NavLink>
        <NavLink
          to={ROUTES.DASHBOARD_CHANGELOG}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiCheckSquare />
          Changelog
        </NavLink>
        <NavLink
          className="sidebar__items"
          to={ROUTES.DASHBOARD_SETTINGS}
          activeClassName="sidebar__items_active-drop"
        >
          <FiSettings />
          Settings
          <div className="sidebar__arrow">
            <FiChevronDown />
          </div>
        </NavLink>
        <div className="sidebar__dropdown">
          <NavLink
            exact
            to={ROUTES.DASHBOARD_SETTINGS}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            General
          </NavLink>
          <NavLink
            to={ROUTES.DASHBOARD_SETTINGS_APPEARANCE}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            Appearance
          </NavLink>
          <NavLink
            to={ROUTES.DASHBOARD_SETTINGS_EMAIL}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            Email settings
          </NavLink>
          <NavLink
            to={ROUTES.DASHBOARD_SETTINGS_SSO}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            SSO
          </NavLink>
          <NavLink
            to={ROUTES.DASHBOARD_SETTINGS_DOMAIN}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            Custom domain
          </NavLink>
          <NavLink
            to={ROUTES.DASHBOARD_TAGS}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            Tags
          </NavLink>
          <NavLink
            to={ROUTES.DASHBOARD_ACTIVITY}
            className="sidebar__dropdown-item"
            activeClassName="sidebar__dropdown-item_active"
          >
            Activity
          </NavLink>
        </div>
        <NavLink
          to={ROUTES.DASHBOARD_INTEGRATION}
          className={(isActive) =>
            "sidebar__items" +
            (!isActive ? " unselected" : " sidebar__items_active")
          }
        >
          <FiTarget />
          Integrations
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
