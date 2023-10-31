import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

import { Route, Switch } from "react-router-dom";

import Spinner from "../spinner/Spinner";

import ROUTES from "../../routes/const";

import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const PostPage = lazy(() => import("./postPage/PostPage"));
const MainPage = lazy(() => import("./mainPage/MainPage"));
const BoardPage = lazy(() => import("./boardPage/BoardPage"));
const TagsPage = lazy(() => import("./tagsPage/TagsPage"));

import ThemeProvider from "../../providers/ThemeProvider";

import "./index.scss";

const DashBoard = () => {
  return (
    <ThemeProvider>
      <div className="dashboard">
        <Helmet>
          <title>Dashboard - PRONY</title>
        </Helmet>
        <Sidebar />
        <div className="dashboard__wrapper">
          <Header />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path={ROUTES.DASHBOARD_HOME}>
                <MainPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_BOARDS}>
                <BoardPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_POSTS}>
                <PostPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_STATUS}>
                <TagsPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashBoard;
