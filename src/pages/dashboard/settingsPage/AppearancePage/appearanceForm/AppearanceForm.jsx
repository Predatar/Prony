import React from "react";
import "./appearanceForm.scss";
import InputFile from "./inputFile/InputFile";
import ThemeForm from "./themeForm/ThemeForm";
import Btn from "../../../../../UI/button/Btn";
const AppearanceForm = () => {
  return (
    <div className="appearance">
      <form className="appearance__form">
        <div className="appearance__body">
          <div className="appearance__top">
            <div className="appearance__top-left appearance__file-block">
              <div className="appearance__item">
                <div className="appearance__item-title">Logo</div>
                <InputFile />
              </div>
            </div>
            <div className="appearance__top-right appearance__file-block">
              <div className="appearance__item">
                <div className="appearance__item-title">Favicon</div>
                <InputFile />
              </div>
            </div>
          </div>
          <div className="appearance__bottom">
            <div className="appearance__item">
              <div className="appearance__item-title">Theme</div>
              <ThemeForm />
            </div>
          </div>
        </div>
        <Btn text={"Submit"} width={150} theme={"btn_primary"} />
      </form>
    </div>
  );
};

export default AppearanceForm;
