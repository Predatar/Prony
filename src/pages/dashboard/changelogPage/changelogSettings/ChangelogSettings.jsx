import React from "react";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import ROUTES from "../../../../routes/const";
import "./index.scss";
import Radio from "../../../../UI/radio/Radio";
import Checkbox from "../../../../UI/checkbox/Checkbox";

const ChangelogSettings = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Dashboard Changelog - PRONY</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG}>Changelog</Link>/
        <Link to={ROUTES.DASHBOARD_CHANGELOG_LABELS}>Changelog settings</Link>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__title">Changelog settings</div>
      </div>
      <div className="changelog-settings">
        <form className="changelog-settings__form">
          <div className="changelog-settings__body">
            <div className="changelog-settings__items">
              <div className="changelog-settings__item">
                <div className="changelog-settings__item-title">Privacy</div>
                <div className="changelog-settings__radio">
                  <label>
                    <Radio />
                    <div className="changelog-settings__info">
                      <div className="changelog-settings__info-title">
                        Public
                      </div>
                      <div className="changelog-settings__info-subtitle">
                        Show this changelog on the public view so all users can
                        find and access it.
                      </div>
                    </div>
                  </label>
                  <label>
                    <Radio />
                    <div className="changelog-settings__info">
                      <div className="changelog-settings__info-title">
                        Private
                      </div>
                      <div className="changelog-settings__info-subtitle">
                        The changelog will not be shown to your users anymore.
                      </div>
                    </div>
                  </label>
                </div>
                <div className="changelog-settings__checkbox">
                  <label>
                    <Checkbox />
                    <div className="changelog-settings__info">
                      <div className="changelog-settings__info-title">
                        Indexed
                      </div>
                      <div className="changelog-settings__info-subtitle">
                        Changelog will be indexed by search engines like Google.
                        Turn it off if you don’t want that.
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangelogSettings;
