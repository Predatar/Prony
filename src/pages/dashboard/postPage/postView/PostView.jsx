import React from "react";
import ROUTES from "../../../../routes/const";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SendComment from "./sendComment/SendComment";
import "./postView.scss";
import RenderViewComments from "./viewComments/renderViewComments/RenderViewComments";

const PostView = () => {
  return (
    <>
      <div className="dashboard__path">
        <Helmet>
          <title>Posts - Edit</title>
        </Helmet>
        <Link to={ROUTES.DASHBOARD_HOME}>Dashboard</Link>/
        <Link to={ROUTES.DASHBOARD_POSTS}>Posts</Link>/
        <Link to={ROUTES.DASHBOARD_VIEW}>Post view</Link>
      </div>
      <div className="dashboard__main posts">
        <div className="dashboard__title">Post view</div>
      </div>
      <div className="post-view">
        <SendComment />
        <RenderViewComments />
      </div>
    </>
  );
};

export default PostView;
