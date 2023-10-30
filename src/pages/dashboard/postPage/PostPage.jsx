import React, { lazy, Suspense } from "react";

import { Route, Switch } from "react-router-dom";

import ROUTES from "../../../routes/const";
import Spinner from "../../spinner//Spinner";

const PostBoard = lazy(() => import("./main/PostBoard"));
const PostCreate = lazy(() => import("./postCreate/PostCreate"));
const PostEdit = lazy(() => import("./postEdit/PostEdit"));
const PostView = lazy(() => import("./postView/PostView"));
const PostVoters = lazy(() => import("./postVoters/PostVoters"));

import "../boardPage/index.scss";

const PostPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_POSTS}>
            <PostBoard />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_POSTS_CREATE}>
            <PostCreate />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_POSTS_EDIT}>
            <PostEdit />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_POSTS_VIEW}>
            <PostView />
          </Route>
          <Route exact path={ROUTES.DASHBOARD_POSTS_VOTERS}>
            <PostVoters />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default PostPage;
