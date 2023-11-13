import React from "react";
import SocialItem from "./socialItem/SocialItem";
import "./socialWorkspaces.scss";
import TitleClient from "../components/Title/TitleClient";
import google from "../../../../img/client/social/google.png";
const SocialWorkspaces = () => {
  return (
    <div className="social">
      <div className="social__body">
        <div className="social__top">
          <TitleClient text={"Social accounts"} />
        </div>
        <div className="social__bottom">
          <div className="social__accounts">
            <SocialItem img={google} />
            <SocialItem img={google} />
            <SocialItem img={google} />
            <SocialItem img={google} />
            <SocialItem img={google} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialWorkspaces;
