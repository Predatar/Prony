import React from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

// import { MdDragIndicator, MdCached, MdCreate, MdCancel } from "react-icons/md";

import Links from "../../../../UI/links/Links";
import ROUTES from "../../../../routes/const";
import "./mainStatus.scss";
import RenderStatusesTable from "../renderStatusesTable/RenderStatusesTable";
import List from "../renderStatusesTable/RenderStatusesTable";

const MainStatus = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Statuses - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_STATUS}>Statuses</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Statuses</div>
        <Links
          to={ROUTES.DASHBOARD_TAGS_ADD}
          text={"Add tag"}
          theme={"link_primary"}
          width={114}
        />
      </div>
      <div className="dashboard-status">
        <List />
      </div>
    </>
  );
};

export default MainStatus;
