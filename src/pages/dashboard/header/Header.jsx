import React, { useEffect, useRef, useContext } from "react";

import "./index.scss";

import img from "../../../img/personal-img.png";
import { ThemeContext } from "../../../providers/ThemeProvider";
import ROUTES from "../../../routes/const";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Header = () => {
  const input = useRef();
  const [theme, setTheme] = useContext(ThemeContext);

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  useEffect(() => {
    input.current.checked = true;
  }, []);

  return (
    <div className="dashboard-header">
      <Link to={ROUTES.CLIENT_WORKSPACES} className="personal">
        <div className="personal__img">
          <img src={img} alt="Personal img" loading="lazy" />
        </div>
        <div className="personal__info">
          <div className="personal__name">Lucy Lavender</div>
          <div className="personal__status">
            <div className="personal__dot"></div>
            Online
          </div>
        </div>
      </Link>
      <div className="theme">
        <label onClick={setLightTheme} htmlFor="day" className="radio__label">
          <input
            type="radio"
            name="theme"
            id="day"
            value={"day"}
            className="radio__input"
            ref={input}
          />
          <span className="radio__custom"></span>
          <div className="radio__text">Day theme</div>
        </label>
        <label onClick={setDarkTheme} htmlFor="night" className="radio__label">
          <input
            type="radio"
            name="theme"
            id="night"
            value={"night"}
            className="radio__input"
          />
          <span className="radio__custom"></span>
          <div className="radio__text">Night theme</div>
        </label>
      </div>
    </div>
  );
};

export default Header;
