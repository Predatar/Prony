import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import ROUTES from "../../../../routes/const";
import Form from "../components/formForm/PostForm";
const Create = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Posts - Edit</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS}>Posts</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS_EDIT}>Edit post</Link>
      </div>
      <div className="dashboard__main posts">
        <div className="dashboard__title">Edit post</div>
      </div>
      <div className="post-create">
        <Form />
      </div>
    </>
  );
};

export default Create;
