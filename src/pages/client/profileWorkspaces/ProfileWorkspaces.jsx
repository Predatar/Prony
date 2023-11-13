import React from "react";
import MainForm from "../components/MainForm/MainForm";
import TitleClient from "../components/Title/TitleClient";
import "./profile.scss"
const ProfileWorkspaces = () => {
  return (
    <div className="change-password">
      <div className="change-password__body">
        <div className="change-password__top">
          <TitleClient text={"Profile"} />
        </div>
        <div className="change-password__bottom">
          <MainForm
            placeholder1={"Enter your first name"}
            placeholder2={"Enter your last name"}
            placeholder3={"Enter your email"}
            title1={"First name"}
            title2={"Last name"}
            title3={"Email"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileWorkspaces;
