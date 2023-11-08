import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";

import { Route, Switch } from "react-router-dom";

import Spinner from "../spinner/Spinner";

import ROUTES from "../../routes/const";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const SidebarClient = lazy(() =>
  import("./components/SidebarClient/SidebarClient")
);
const WorkSpaces = lazy(() => import("./workspaces/WorkSpaces"));
const EditWorkspaces = lazy(() => import("./editWorkspaces/EditWorkspaces"));
import "./index.scss";
import Container from "./components/Container/Container";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

const Client = () => {
  return (
    <div className="client">
      <Helmet>
        <title>Client area - PRONY</title>
      </Helmet>
      <Header />
      <main className="main-client">
        <Breadcrumbs />
        <Container>
          <div className="main-client__wrapper">
            <SidebarClient />
            <div className="main-client__content">
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route exact path={ROUTES.CLIENT_WORKSPACES}>
                    <WorkSpaces />
                  </Route>
                </Switch>
                <Switch>
                  <Route exact path={ROUTES.CLIENT_WORKSPACES_EDIT}>
                    <EditWorkspaces />
                  </Route>
                </Switch>
              </Suspense>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Client;
