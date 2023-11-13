import React from "react";
import "./avatarWorkspaces.scss";
import InputFile from "../../dashboard/postPage/components/inputFile/InputFile";
import TitleClient from "../components/Title/TitleClient";
import ClientButton from "../../../UI/clientButton/ClientButton";
import ClientCancel from "../../../UI/clientCancel/ClientCancel";
import bigMan from "../../../img/client/big-man.png";
import ROUTES from "../../../routes/const";
import "../../dashboard/postPage/components/formForm/postForm.scss";
const AvatarWorkspaces = () => {
  return (
    <div className="avatar">
      <div className="avatar__body">
        <div className="avatar__top">
          <TitleClient text={"Avatar"} />
        </div>
        <div className="avatar__bottom">
          <AvatarForm />
        </div>
      </div>
    </div>
  );
};

export default AvatarWorkspaces;

const AvatarForm = () => {
  return (
    <form className="avatar-form">
      <div className="avatar-form__body">
        <div className="avatar-form__left">
          <div className="avatar-form__current">Current avatar</div>
          <img src={bigMan} alt="" />
        </div>
        <div className="avatar-form__right">
          <InputFile height={131} flexDirection={"column"} width={239}/>
        </div>
      </div>
      <div className="avatar-form__buttons">
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
