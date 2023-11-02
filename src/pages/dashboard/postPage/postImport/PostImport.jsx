import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/const";

import Btn from "../../../../UI/button/Btn";
import Select from "../../../../components/select/Select";
import { selectsInPostForm } from "../../../../data/postFormSelects";
import "../components/formForm/postForm.scss";
import InputFile from "../components/inputFile/inputFile";
import Filter from "../main/filter/filterPopup/FilterPopup";
const Import = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const handleFilterClick = (filterId) => {
    if (openFilter === filterId) {
      setOpenFilter(null);
    } else {
      setOpenFilter(filterId);
    }
  };
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Posts - Import</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS}>Posts</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS_EDIT}>Edit post</Link>
      </div>
      <div className="dashboard__main posts">
        <div className="dashboard__title">Import post</div>
      </div>
      <div className="post-create">
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
              <InputFile title={"File"} />
            </div>
            <div className="post-form__buttons">
              <Btn text="Cancel" theme={"btn_secondary"} width={150} />
              <Btn text="Submit" theme={"btn_primary"} width={147} />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Import;