import React from "react";
import MainForm from "../components/MainForm/MainForm";
import TitleClient from "../components/Title/TitleClient";
const EmailWorkspaces = () => {
  return (
    <div className="change-password">
      <div className="change-password__body">
        <div className="change-password__top">
          <TitleClient text={"Change Email"} />
        </div>
        <div className="change-password__bottom">
          <MainForm
            placeholder1={"Enter your old email"}
            placeholder2={"Enter your new email"}
            placeholder3={"Confirm your new email"}
            title1={"Old Email"}
            title2={"New Email"}
            title3={"Confirm Email"}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailWorkspaces;
