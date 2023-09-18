import React, { useEffect, useRef } from 'react';

import './index.scss';

import img from '../../../img/personal-img.png';

const Header = () => {
  const input = useRef();

  useEffect(() => {
    input.current.checked = true
  }, []);

  return (
    <div className="dashboard-header">
      <div className="personal">
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
      </div>
      <div className="theme">
        <label htmlFor="day" className="radio__label">
          <input type="radio" name="theme" id="day" value={'day'} className="radio__input" ref={input} />
          <span className="radio__custom"></span>
          <div className="radio__text">Day theme</div>
        </label>
        <label htmlFor="night" className="radio__label">
          <input type="radio" name="theme" id="night" value={'night'} className="radio__input" />
          <span className="radio__custom"></span>
          <div className="radio__text">Night theme</div>
        </label>
      </div>
    </div>
  );
};

export default Header;
