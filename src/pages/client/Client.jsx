import React from "react";
import ROUTES from "../../routes/const";
import { Route, Switch } from "react-router-dom";
import ClientWorkspaces from "./clientWorkspaces/ClientWorkspaces";
import ClientMain from "./clientMain/clientMain";

const Client = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.CLIENT_HOME}>
        <ClientMain />
      </Route>
      <Route path={ROUTES.CLIENT_WORKSPACES}>
        <ClientWorkspaces />
      </Route>
    </Switch>
  );
};

export default Client;
