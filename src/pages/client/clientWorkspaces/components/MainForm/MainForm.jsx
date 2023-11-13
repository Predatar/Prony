import React from "react";
import "./mainForm.scss";
import InputClient from "../Input/InputClient";
import ClientButton from "../../../../../UI/clientButton/ClientButton";
import ClientCancel from "../../../../../UI/clientCancel/ClientCancel";
import ROUTES from "../../../../../routes/const";
const MainForm = ({
  placeholder1,
  placeholder2,
  placeholder3,
  title1,
  title2,
  title3,
}) => {
  return (
    <form className="client-form">
      <div className="client-form__body">
        <div className="client-form__top">
          <div className="client-form__input-wrapper">
            <div className="client-form__input-wrapper-title">{title1}</div>
            <div className="client-form__input-wrapper-input">
              <InputClient placeholder={placeholder1} />
            </div>
          </div>
        </div>
        <div className="client-form__center">
          <div className="client-form__input-wrapper">
            <div className="client-form__input-wrapper-title">{title2}</div>
            <div className="client-form__input-wrapper-input">
              <InputClient placeholder={placeholder2} />
            </div>
          </div>
        </div>
        <div className="client-form__bottom">
          <div className="client-form__input-wrapper">
            <div className="client-form__input-wrapper-title">{title3}</div>
            <div className="client-form__input-wrapper-input">
              <InputClient placeholder={placeholder3} />
            </div>
          </div>
        </div>
      </div>
      <div className="client-form__buttons">
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

export default MainForm;
