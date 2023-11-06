import React from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/const";
import "./index.scss";
import flag from "../../../../img/changeloog/settings/flag.png";
import flag2 from "../../../../img/changeloog/settings/flag2.png";
import GeneralItem from "./GeneralItem/GeneralItem";
import Checkbox from "../../../../UI/checkbox/Checkbox";
import Btn from "../../../../UI/button/Btn";

const GeneralPage = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG}>Changelog</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_SETTINGS_GENERAL}>General</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">General settings</div>
      </div>
      <div className="general-settings">
        <form className="general-settings__form">
          <div className="general-settings__body">
            <div className="general-settings__top">
              <div className="general-settings__input-wrapper">
                <div className="general-settings__title">Name</div>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter status name"
                />
              </div>
            </div>
            <div className="general-settings__center">
              <div className="general-settings__input-wrapper">
                <div className="general-settings__title">Language</div>
                <div className="general-settings__radios">
                  <div className="general-settings__radio-left">
                    <GeneralItem
                      title={"English"}
                      subtitle={"English, US"}
                      img={flag}
                    />
                    <GeneralItem
                      title={"English"}
                      subtitle={"English, US"}
                      img={flag}
                    />
                    <GeneralItem
                      title={"English"}
                      subtitle={"English, US"}
                      img={flag}
                    />
                  </div>
                  <div className="general-settings__radio-right">
                    <GeneralItem
                      title={"German"}
                      subtitle={"Deutsch"}
                      img={flag2}
                    />
                    <GeneralItem
                      title={"German"}
                      subtitle={"Deutsch"}
                      img={flag2}
                    />
                    <GeneralItem
                      title={"German"}
                      subtitle={"Deutsch"}
                      img={flag2}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="general-settings__bottom">
              <div className="general-settings__checboxes">
                <label>
                  <Checkbox />
                  <div className="general-settings__info">
                    <div className="general-settings__top">Show on roadmap</div>
                  </div>
                </label>
                <label>
                  <Checkbox />
                  <div className="general-settings__info">
                    <div className="general-settings__top">Indexed</div>
                    <div className="general-settings__bottom-text">
                      Changelog will be indexed by search engines like Google.
                      Turn it off if you don’t want that.
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <Btn text={"Submit"} width={150} theme={"btn_primary"} />
        </form>
      </div>
    </>
  );
};

export default GeneralPage;
