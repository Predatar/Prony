import React, { useRef, useState } from "react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Btn from "../../../../../UI/button/Btn";
import Select from "../../../../../components/select/Select";
import Filter from "../../main/filter/filterPopup/FilterPopup";
import "./postForm.scss";

import { selectsInPostForm } from "../../../../../data/postFormSelects";

const Form = () => {
  //file
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleCustomInputClick = () => {
    fileInputRef.current.click();
  };

  //Select
  const [openFilter, setOpenFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
  };

  console.log(selectedFile);

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
          <div className="post-form__wrapper">
            <div className="post-form__input-name">Image </div>
            <input
              onChange={handleFileChange}
              ref={fileInputRef}
              type="file"
              className="post-form__input-file"
            />
            <div className="post-form__file">
              <div
                onClick={handleCustomInputClick}
                className="post-form__input-custom"
              >
                <AiOutlinePaperClip
                  style={{ width: 16, height: 16, color: "#272557" }}
                />
                <span>Add file&nbsp;</span> or drop files here
              </div>
              <div className="post-form__show-file">
                {selectedFile ? (
                  <>
                    <img src={URL.createObjectURL(selectedFile)} alt="" />
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="post-form__cancel"
                    >
                      <MdCancel
                        style={{ width: 20, height: 20, color: "#E0E0E0" }}
                      />
                    </button>
                  </>
                ) : null}
              </div>
            </div>
          </div>
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
