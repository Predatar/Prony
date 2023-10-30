import React, { useState } from "react";

import Btn from "../../../../../UI/button/Btn";
import Select from "../../../../../components/select/Select";
import Filter from "../../main/filter/filterPopup/FilterPopup";
import "./postForm.scss";

import { selectsInPostForm } from "../../../../../data/postFormSelects";
import InputFile from "../inputFile/inputFile";

const Form = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
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
                    title="1 board"
                  >
                    {openFilter === name && <Filter>{content}</Filter>}
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
                    title="no selection"
                  >
                    {openFilter === name && <Filter>{content}</Filter>}
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
                    title="first status"
                  >
                    {openFilter === name && <Filter>{content}</Filter>}
                  </Select>
                )
            )}
          </div>
        </div>
        <div className="post-form__buttons">
          <Btn text="Cancel" theme={"btn_secondary"} width={150} />
          <Btn text="Submit" theme={"btn_primary"} width={147} />
        </div>
      </div>
    </form>
  );
};

export default Form;
