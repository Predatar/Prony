import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ClientLinks from "../../../../UI/clientLinks/ClientLinks";
import TitleClient from "../components/Title/TitleClient";
import "./workspace.scss";
import WorkspacesItem from "./workspacesItem/WorkspacesItem";
import ROUTES from "../../../../routes/const";
const WorkSpaces = () => {
  return (
    <div className="workspaces">
      <div className="workspaces__body">
        <div className="workspaces__top">
          <TitleClient text={"Workspaces"} />
        </div>
        <div className="workspaces__bottom">
          <div className="workspaces__blocks">
            <WorkspacesItem />
            <WorkspacesItem />
            <WorkspacesItem />
          </div>
          <ClientLinks
            to={ROUTES.CLIENT_WORKSPACES_ADD}
            icon={<AiOutlinePlus />}
            width={264}
            theme={["clientlink_primary"]}
            text={"Add a new workspace"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSpaces;
