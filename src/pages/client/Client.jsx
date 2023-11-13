import React, { lazy, Suspense, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { Route, Switch, useLocation } from "react-router-dom";

import Spinner from "../spinner/Spinner";

import ROUTES from "../../routes/const";

import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Container from "./components/Container/Container";
import PageError from "./error/PageError";
import "./index.scss";

const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("../../components/Footer/Footer"));
const SidebarClient = lazy(() =>
  import("./components/SidebarClient/SidebarClient")
);
const WorkSpaces = lazy(() => import("./workspaces/WorkSpaces"));
const EditWorkspaces = lazy(() => import("./editWorkspaces/EditWorkspaces"));
const AddWorkspaces = lazy(() => import("./addWorkspaces/AddWorkspaces"));
const DeleteWorkspaces = lazy(() =>
  import("./deleteWorkspaces/DeleteWorkspaces")
);
const ChangePassword = lazy(() => import("./changePassword/ChangePassword"));
const AvatarWorkspaces = lazy(() =>
  import("./avatarWorkspaces/AvatarWorkspaces")
);
const SocialWorkspaces = lazy(() =>
  import("./socialWorkspaces/SocialWorkspaces")
);

const PaymentWorkspaces = lazy(() =>
  import("./paymentWorkspaces/PaymentWorkspaces")
);
const AddPayment = lazy(() => import("./addPayment/AddPayment"));
const BillingHistoryWorkspaces = lazy(() =>
  import("./billinghistoryWorkspaces/BillingHistoryWorkspaces")
);
const BillingPlanWorkspaces = lazy(() =>
  import("./billingPlanWorkspaces/BillingPlanWorkspaces")
);
const ProfileWorkspaces = lazy(() =>
  import("./profileWorkspaces/ProfileWorkspaces")
);
const EmailWorkspaces = lazy(() => import("./emailWorkspaces/EmailWorkspaces"));

const Client = () => {
  const location = useLocation();
  const isPageError = !Object.values(ROUTES).some(
    (route) => location.pathname === route
  );

  return (
    <div className="client">
      <Helmet>
        <title>Client area - PRONY</title>
      </Helmet>
      <Header />
      <main className="main-client">
        {!isPageError && <Breadcrumbs />}
        <Container>
          <div className="main-client__wrapper">
            {!isPageError && <SidebarClient />}
            <div className="main-client__content">
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route exact path={ROUTES.CLIENT_WORKSPACES}>
                    <WorkSpaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_EDIT}>
                    <EditWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_ADD}>
                    <AddWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_DELETE}>
                    <DeleteWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_CHANGE_PASSWORD}>
                    <ChangePassword />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_SOCIAL}>
                    <SocialWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_PROFILE}>
                    <ProfileWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_AVATAR}>
                    <AvatarWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_PAYMENT}>
                    <PaymentWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_ADD_PAYMENT}>
                    <AddPayment />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_HISTORY_BILLING}>
                    <BillingHistoryWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_BILLING}>
                    <BillingPlanWorkspaces />
                  </Route>

                  <Route exact path={ROUTES.CLIENT_WORKSPACES_EMAIL}>
                    <EmailWorkspaces />
                  </Route>
                  <Route exact path={ROUTES.ERROR_PAGE}>
                    <PageError />
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
