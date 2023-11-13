import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../../components/logo/Logo";
import img from "../../../../img/personal-img.png";
import Container from "../Container/Container";
import "./header.scss";
import { MdMoreVert } from "react-icons/md";
import PopupWorkspaces from "../popupWorkspaces/PopupWorkspaces";
import ROUTES from "../../../../routes/const";

const Header = ({onClick}) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="header-client">
      <Container>
        <div className="header-client__body">
          <div onClick={() => onClick} className="header-client__left">
            <Logo url={ROUTES.CLIENT_WORKSPACES}/>
          </div>
          <div className="header-client__right">
            <div
              onClick={() => setShowPopup((prev) => !prev)}
              className="header-client__user"
            >
              <div className="header-client__img">
                <img src={img} alt="Personal img" loading="lazy" />
              </div>
              <div className="header-client__name">Lucy Lavender</div>
              <MdMoreVert />
              <div className="popup-wrapper" ref={popupRef}>
                <PopupWorkspaces active={showPopup} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
