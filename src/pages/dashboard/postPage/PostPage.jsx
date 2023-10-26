import React, { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import Spinner from "../../spinner//Spinner";

const PostBoard = lazy(() => import("./main/PostBoard"));

import ROUTES from "../../../routes/const";

import "../boardPage/index.scss";

const PostPage = () => {
  return (
    <div className="dashboard-board">
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path={ROUTES.DASHBOARD_POSTS}>
            <PostBoard />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};

export default PostPage;
