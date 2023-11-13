import React, { useState } from "react";

import Btn from "../../../../../UI/button/Btn";
import Select from "../../../../../components/select/Select";
import Filter from "../../../postPage/main/filter/filterPopup/FilterPopup";
import "./changelogForm.scss";
import InputFile from "../../../postPage/components/inputFile/InputFile";
import LogTag from "../logTag/LogTag";
import ROUTES from "../../../../../routes/const"
import Links from "../../../../../UI/links/Links";
const ChangelogForm = () => {
  const changeSelect = [
    {
      name: "Board",
      id: "boardForm",
      width: 647,
      widthPopup: 647,
      filter: {
        title: "",
      },
      content: [<LogTag feedback />, <LogTag admin />, <LogTag changelog />],
    },
  ];

  const [openFilter, setOpenFilter] = useState(null);
  const [labelSelect, setLabelSelect] = useState("");

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
  };

  const handleItemButtonClick = (value, id) => {
    setLabelSelect(value);
    setOpenFilter(null); // Закрываем попап
  };

  return (
    <form className="post-form">
      <div className="post-form__body">
        <div className="post-form__inputs">
          <div className="post-form__wrapper">
            <div className="post-form__input-name">Title</div>
            <input type="text" placeholder="Enter post title" />
          </div>
          <div className="post-form__wrapper">
            <div className="post-form__input-name">Detailes</div>
            <textarea placeholder="Enter post title" />
          </div>
          <InputFile />
          <div className="post-form__wrapper">
            <input type="date" />
          </div>
          <div className="post-form__wrapper">
            <div className="post-form__input-name">Labels</div>
            {changeSelect.map(({ name, id, width, widthPopup, content }) => (
              <Select
                id={id}
                onClick={() => handleFilterClick(name)}
                width={width}
                widthPopup={widthPopup}
                title={labelSelect || content[0]}
              >
                {openFilter && (
                  <Filter>
                    <ul className="post-form__select-list">
                      {content.map((item) => (
                        <li className="post-form__select-item" key={item}>
                          <button
                            onClick={() => handleItemButtonClick(item, id)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </Filter>
                )}
              </Select>
            ))}
          </div>
        </div>
        <div className="post-form__buttons">
          <Links to={ROUTES.DASHBOARD_CHANGELOG} text="Cancel" theme={"link_secondary"} width={150} />
          <Btn text="Submit" theme={"btn_primary"} width={147} />
        </div>
      </div>
    </form>
  );
};

export default ChangelogForm;
