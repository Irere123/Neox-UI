import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import "./index.css";
import { isAuthenticated } from "./utils/isAuthenticated";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Invites from "./pages/viewteam/Invites";
import CreateTeam from "./pages/viewteam/CreateTeam";
import ViewTeam from "./pages/viewteam/ViewTeam";
import Home from "./pages/Home";
import Issue from "./pages/Issue.jsx";
import DashBoard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound";
import Main from "./pages/Main";
import CDashboard from "./pages/class/CDashboard";
import Class from "./pages/class/Class";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

/* --Disabled in Development---

const RedirectRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Redirect to={{ pathname: "/view-team" }} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

*/

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/main" exact component={Main} />
        <Route path="/class" exact component={CDashboard} />
        <Route path="/class/id" exact component={Class} />
        <Route path="/register" exact component={Register} />
        <PrivateRoute path="/create-team" exact component={CreateTeam} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/issue/:issueId" exact component={Issue} />
        <PrivateRoute path="/invites" exact component={Invites} />
        <PrivateRoute path="/dashboard" exact component={DashBoard} />
        <PrivateRoute
          path="/view-team/:teamId?/:channelId?"
          exact
          component={ViewTeam}
        />
        <Route path="*" exact component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};
