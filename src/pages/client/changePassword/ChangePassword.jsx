import React from "react";
import MainForm from "../components/MainForm/MainForm";
import "./changePassword.scss";
import TitleClient from "../components/Title/TitleClient";
const ChangePassword = () => {
  return (
    <div className="change-password">
      <div className="change-password__body">
        <div className="change-password__top">
          <TitleClient text={"Change password"} />
        </div>
        <div className="change-password__bottom">
          <MainForm
            placeholder1={"Enter current password"}
            placeholder2={"Enter new password"}
            placeholder3={"Repeat New Password"}
            title1={"Current password"}
            title2={"New Password"}
            title3={"Repeat New Password"}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
