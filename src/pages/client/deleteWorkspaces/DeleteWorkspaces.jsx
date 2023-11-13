import React from "react";
import TitleClient from "../components/Title/TitleClient";
import ClientButton from "../../../UI/clientButton/ClientButton";
import ClientCancel from "../../../UI/clientCancel/ClientCancel";
import ROUTES from "../../../routes/const";
import InputClient from "../components/Input/InputClient";
import "./deleteWorkspaces.scss";
const DeleteWorkspaces = () => {
  return (
    <div className="delete-workspaces">
      <div className="delete-workspaces__body">
        <div className="delete-workspaces__top">
          <TitleClient text={"DELETE Workspace"} />
        </div>
        <div className="delete-workspaces__bottom">
          <form className="delete-workspaces__form delete-workspaces-form">
            <div className="delete-workspaces-form__body">
              <div className="delete-workspaces-form__top">
                <span>
                  Are you sure? This action cannot be undone. Enter the name of
                  this workspace below to confirm.
                </span>
              </div>
              <div className="delete-workspaces-form__bottom">
                <div className="delete-workspaces-form__input-wrapper">
                  <div className="delete-workspaces-form__input-top">
                    Workspace name
                  </div>
                  <InputClient
                    width={"100%"}
                    placeholder={"Name of workspace"}
                  />
                </div>
              </div>
            </div>
            <div className="delete-workspaces-form__buttons">
              <ClientCancel
                name={"name2"}
                text={"Cancel"}
                to={ROUTES.CLIENT_WORKSPACES}
              />
              <ClientButton
                width={182}
                text={"Delete"}
                theme={"clientbutton_warning"}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteWorkspaces;
