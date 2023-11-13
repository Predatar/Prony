import React from "react";
import ClientButton from "../../../UI/clientButton/ClientButton";
import ClientCancel from "../../../UI/clientCancel/ClientCancel";
import flag from "../../../img/changeloog/settings/flag.png";
import ChangelogGeneralItem from "../../dashboard/settingsPage/GeneralPage/GeneralItem/GeneralItem";
import InputClient from "../components/Input/InputClient";
import TitleClient from "../components/Title/TitleClient";
import AddPlan from "./addPlan/AddPlan";
import AddTheme from "./addTheme/AddTheme";
import ROUTES from "../../../routes/const";
import "./addWorkspaces.scss";
const AddWorkspaces = () => {
  return (
    <div className="add-workspaces">
      <div className="add-workspaces__body">
        <div className="add-workspaces__top">
          <TitleClient text={"Add Workspace"} />
        </div>
        <div className="add-workspaces__bottom">
          <AddForm />
        </div>
      </div>
    </div>
  );
};

export default AddWorkspaces;

const AddForm = () => {
  return (
    <form className="add-workspaces__form add-workspaces-form">
      <div className="add-workspaces-form__body">
        <div className="add-workspaces-form__top">
          <div className="add-workspaces-form__inputs">
            <div className="add-workspaces-form__input-wrapper">
              <div className="add-workspaces-form__input-top">Name</div>
              <InputClient placeholder={"Name of workspace"} />
            </div>
            <div className="add-workspaces-form__input-wrapper">
              <div className="add-workspaces-form__input-top">Subdomain</div>
              <InputClient placeholder={"Name of subdomain"} />
            </div>
          </div>
        </div>
        <div className="add-workspaces-form__center">
          <div className="add-workspaces-form__input-top">Language</div>
          <div className="add-workspaces-form__lanuage">
            <div className="add-workspaces-form__lanuage-flex">
              <div className="add-workspaces-form__language-row">
                <ChangelogGeneralItem
                  img={flag}
                  subtitle={"English, US"}
                  title={"English"}
                />
                <ChangelogGeneralItem
                  img={flag}
                  subtitle={"English, US"}
                  title={"English"}
                />
              </div>
            </div>
            <div className="add-workspaces-form__lanuage-flex">
              <div className="add-workspaces-form__language-row">
                <ChangelogGeneralItem
                  img={flag}
                  subtitle={"English, US"}
                  title={"English"}
                />
                <ChangelogGeneralItem
                  img={flag}
                  subtitle={"English, US"}
                  title={"English"}
                />
              </div>
            </div>
            <div className="add-workspaces-form__lanuage-flex">
              <div className="add-workspaces-form__language-row">
                <ChangelogGeneralItem
                  img={flag}
                  subtitle={"English, US"}
                  title={"English"}
                />
                <ChangelogGeneralItem
                  img={flag}
                  subtitle={"English, US"}
                  title={"English"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="add-workspaces-form__bottom">
          <AddTheme />
        </div>
        <div className="add-workspaces-form__plan">
          <AddPlan />
        </div>
      </div>
        <div className="add-workspaces-form__buttons">
          <ClientCancel
            name={"name2"}
            text={"Cancel"}
            to={ROUTES.CLIENT_WORKSPACES}
          />
          <ClientButton
            to={ROUTES.CLIENT_WORKSPACES_ADD}
            width={182}
            text={"Submit"}
            theme={"clientbutton_primary"}
            type="submit"
          />
        </div>
    </form>
  );
};
