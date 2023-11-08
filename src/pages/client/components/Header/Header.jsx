import React from "react";
import Logo from "../../../../components/logo/Logo";
import img from "../../../../img/personal-img.png";
import Container from "../Container/Container";
import "./header.scss";
import { MdMoreVert } from "react-icons/md";
const Header = () => {
  return (
    <header className="header-client">
      <Container>
        <div className="header-client__body">
          <div className="header-client__left">
            <Logo />
          </div>
          <div className="header-client__right">
            <div className="header-client__user">
              <div className="header-client__img">
                <img src={img} alt="Personal img" loading="lazy" />
              </div>
              <div className="header-client__name">Lucy Lavender</div>
              <MdMoreVert />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
