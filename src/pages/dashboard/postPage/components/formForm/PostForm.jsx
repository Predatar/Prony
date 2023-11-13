import React, { useState } from "react";

import Btn from "../../../../../UI/button/Btn";
import Select from "../../../../../components/select/Select";
import Filter from "../../main/filter/filterPopup/FilterPopup";
import "./postForm.scss";

import { selectsInPostForm } from "../../../../../data/postFormSelects";
import InputFile from "../inputFile/InputFile";
import Links from "../../../../../UI/links/Links";
import ROUTES from "../../../../../routes/const";
const Form = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const [boardFormSelectedValue, setBoardFormSelectedValue] = useState("");
  const [ownerFormSelectedValue, setOwnerFormSelectedValue] = useState("");
  const [statusFormSelectedValue, setStatusFormSelectedValue] = useState("");

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
  };

  const handleItemButtonClick = (value, id) => {
    if (id === "boardForm") {
      setBoardFormSelectedValue(value);
    } else if (id === "ownerForm") {
      setOwnerFormSelectedValue(value);
    } else if (id === "statusrForm") {
      setStatusFormSelectedValue(value);
    }
    setOpenFilter(null); // Закрываем попап
  };

  return (
    <form className="post-form">
      <div className="post-form__body">
        <div className="post-form__inputs">
          <div className="post-form__wrapper">
            <div className="post-form__input-name">
              Board name <span>*</span>
            </div>
            {selectsInPostForm.map(
              ({ name, id, width, widthPopup, content }) =>
                id === "boardForm" && (
                  <Select
                    id={id}
                    onClick={() => handleFilterClick(name)}
                    width={width}
                    widthPopup={widthPopup}
                    title={boardFormSelectedValue || content[0]}
                  >
                    {openFilter === name && (
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
                )
            )}
          </div>
          <div className="post-form__wrapper">
            <div className="post-form__input-name">
              Title <span>*</span>
            </div>
            <input type="text" placeholder="Enter post title" />
          </div>
          <div className="post-form__wrapper">
            <div className="post-form__input-name">Detailes</div>
            <textarea placeholder="Enter post title" />
          </div>
          <InputFile />
          <div className="post-form__wrapper">
            <div className="post-form__input-name">Owner</div>
            {selectsInPostForm.map(
              ({ name, id, width, widthPopup, content }) =>
                id === "ownerForm" && (
                  <Select
                    id={id}
                    onClick={() => handleFilterClick(name)}
                    width={width}
                    widthPopup={widthPopup}
                    title={ownerFormSelectedValue || content[0]}
                  >
                    {openFilter === name && (
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
                )
            )}
          </div>
          <div className="post-form__wrapper">
            <div className="post-form__input-name">
              Status <span>*</span>
            </div>
            {selectsInPostForm.map(
              ({ name, id, width, widthPopup, content }) =>
                id === "statusrForm" && (
                  <Select
                    id={id}
                    onClick={() => handleFilterClick(name)}
                    width={width}
                    widthPopup={widthPopup}
                    title={statusFormSelectedValue || content[0]}
                  >
                    {openFilter === name && (
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
                )
            )}
          </div>
        </div>
        <div className="post-form__buttons">
          <Links
            to={ROUTES.DASHBOARD_POSTS}
            text="Cancel"
            theme={"link_secondary"}
            width={150}
          />
          <Btn text="Submit" theme={"btn_primary"} width={147} />
        </div>
      </div>
    </form>
  );
};

export default Form;
