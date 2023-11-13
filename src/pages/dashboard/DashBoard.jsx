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
const StatusesPage = lazy(() => import("./statusesPage/StatusesPage"));
const UserPage = lazy(() => import("./userPage/UserPage"));
const ActivityPage = lazy(() => import("./activityPage/ActivityPage"));
const ChangelogPage = lazy(() => import("./changelogPage/ChangelogPage"));
const SettingsPage = lazy(() => import("./settingsPage/SettingsPage"));
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
              <Route path={ROUTES.DASHBOARD_TAGS}>
                <TagsPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_STATUS}>
                <StatusesPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_USERS}>
                <UserPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_ACTIVITY}>
                <ActivityPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_CHANGELOG}>
                <ChangelogPage />
              </Route>
              <Route path={ROUTES.DASHBOARD_SETTINGS}>
                <SettingsPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default DashBoard;
